// Turns each shape (your <Co$mo/> logo and the SVG files in /public/logos)
// into the same number of colored points, so one shape can morph into the next.
//
// How: draw the shape on a hidden 2D canvas, read which pixels are filled,
// pick N of them, and keep each pixel's color.

const W = 900 // hidden canvas size in px
const H = 300
const STEP = 3 // check every 3rd pixel
const UNIT = 100 // 100 px on the hidden canvas = 1 unit in the 3D world

// The order of the morph. `color` is used when an SVG file has no colors of its own.
export const LOGO_FILES = [
  { file: 'javascript.svg', label: 'JavaScript', color: '#F7DF1E' },
  { file: 'react.svg', label: 'React', color: '#61DAFB' },
  { file: 'vite.svg', label: 'Vite', color: '#646CFF' },
  { file: 'tailwindcss.svg', label: 'Tailwind CSS', color: '#06B6D4' },
  { file: 'python-original.svg', label: 'Python', color: '#3776AB' },
]

function makeContext() {
  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  return canvas.getContext('2d', { willReadFrequently: true })
}

function drawWordmark(ctx) {
  const parts = [
    ['<Co', '#dcdce8'],
    ['$', '#f5b942'],
    ['mo/>', '#dcdce8'],
    ['CURSOR', '#f5b942'],
  ]
  let size = 190
  const font = (s) => `600 ${s}px "JetBrains Mono", monospace`
  const measure = (s) => {
    ctx.font = font(s)
    return parts.reduce((w, [t]) => w + (t === 'CURSOR' ? s * 0.5 : ctx.measureText(t).width), 0)
  }
  while (measure(size) > W * 0.9 && size > 40) size -= 4
  let x = (W - measure(size)) / 2
  ctx.font = font(size)
  ctx.textBaseline = 'middle'
  for (const [text, color] of parts) {
    ctx.fillStyle = color
    if (text === 'CURSOR') {
      ctx.fillRect(x + size * 0.1, H / 2 - size * 0.45, size * 0.36, size * 0.9)
      x += size * 0.5
    } else {
      ctx.fillText(text, x, H / 2)
      x += ctx.measureText(text).width
    }
  }
}

async function loadSvg(url, fallbackColor) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`missing ${url}`)
  let svg = await res.text()
  const hasOwnColors = /#[0-9a-f]{3,8}\b|rgb\(|fill="(?!none)[a-z]/i.test(svg)
  // give the SVG a real size so the browser rasterizes it sharply
  if (!/<svg[^>]*\swidth=/i.test(svg)) svg = svg.replace(/<svg/i, '<svg width="600" height="600"')
  // one-color icons have no fill, so they'd come out black: paint them in the brand color
  if (!hasOwnColors && fallbackColor) svg = svg.replace(/<svg/i, `<svg fill="${fallbackColor}"`)
  const blobUrl = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }))
  try {
    const img = new Image()
    img.src = blobUrl
    await img.decode()
    return img
  } finally {
    URL.revokeObjectURL(blobUrl)
  }
}

function drawImage(ctx, img) {
  const h = H * 0.88
  const w = h * ((img.naturalWidth || 1) / (img.naturalHeight || 1))
  ctx.drawImage(img, (W - w) / 2, (H - h) / 2, w, h)
}

// Read the filled pixels and return exactly `count` points.
function collect(ctx, count) {
  const data = ctx.getImageData(0, 0, W, H).data
  const pixels = []
  for (let y = 0; y < H; y += STEP) {
    for (let x = 0; x < W; x += STEP) {
      const i = (y * W + x) * 4
      if (data[i + 3] > 140) pixels.push([x, y, data[i], data[i + 1], data[i + 2]])
    }
  }
  if (!pixels.length) pixels.push([W / 2, H / 2, 220, 220, 230])

  const points = []
  for (let k = 0; k < count; k++) {
    const [x, y, r, g, b] = pixels[(Math.random() * pixels.length) | 0]
    const px = (x - W / 2 + (Math.random() - 0.5) * STEP) / UNIT
    const py = -(y - H / 2 + (Math.random() - 0.5) * STEP) / UNIT // canvas y goes down, 3D y goes up
    const pz = (Math.random() - 0.5) * 0.36 // a little thickness
    points.push({ px, py, pz, r: r / 255, g: g / 255, b: b / 255, angle: Math.atan2(py, px) })
  }
  // Sorting by angle around the center means point #i sits in the "same place"
  // on every shape, so the outline bends smoothly into the next outline.
  points.sort((a, b) => a.angle - b.angle)

  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  points.forEach((p, i) => {
    positions.set([p.px, p.py, p.pz], i * 3)
    colors.set([p.r, p.g, p.b], i * 3)
  })
  return { positions, colors }
}

export async function buildStages(count) {
  if (document.fonts?.load) {
    await Promise.race([document.fonts.load('600 100px "JetBrains Mono"'), new Promise((r) => setTimeout(r, 2500))])
  }
  const ctx = makeContext()

  drawWordmark(ctx)
  const wordmark = { label: '<Co$mo/>', ...collect(ctx, count) }

  const logos = []
  for (const { file, label, color } of LOGO_FILES) {
    try {
      const img = await loadSvg(`/logos/${file}`, color)
      ctx.clearRect(0, 0, W, H)
      drawImage(ctx, img)
      logos.push({ label, ...collect(ctx, count) })
    } catch (err) {
      console.warn(`[morph] skipped ${file}:`, err.message)
    }
  }

  // start and end on your logo
  return [wordmark, ...logos, wordmark]
}
