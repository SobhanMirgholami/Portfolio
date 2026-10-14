import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { buildStages } from './sampleShapes.js'

/*
  The morphing 3D logo.

  - Every shape is the same number of points (see sampleShapes.js).
  - The GPU gets two shapes at a time: "from" and "to", plus their colors.
  - uMix goes 0 -> 1 as you scroll, and the vertex shader slides each point
    from its "from" spot to its "to" spot. That's the morph.
  - The canvas is fixed behind the page. The logo flies to whichever
    [data-morph-anchor] element is on screen (hero, contact), and fades
    into a dim background shape in between.
*/

const vertexShader = /* glsl */ `
  attribute vec3 aFrom;
  attribute vec3 aTo;
  attribute vec3 aColFrom;
  attribute vec3 aColTo;
  attribute vec4 aRand;

  uniform float uMix;
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform float uMotion;

  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    float bump = sin(3.14159265 * uMix); // 0 at rest, 1 in the middle of a morph
    vec3 p = mix(aFrom, aTo, uMix);

    // a soft drift while transforming, so it flows instead of sliding in straight lines
    float a = aRand.x * 6.2831853 + uTime * uMotion;
    p.x += cos(a) * aRand.y * 0.12 * bump;
    p.y += sin(a) * aRand.y * 0.09 * bump;
    p.z += (aRand.z - 0.5) * 0.6 * bump;
    // tiny idle shimmer
    p.z += sin(uTime * 1.2 + aRand.w * 30.0) * 0.025 * uMotion;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPixelRatio * (10.0 / -mv.z);

    // metallic sheen: a light band that slides across the surface
    float sheen = 0.72 + 0.28 * sin(p.y * 2.4 + p.x * 0.7 + uTime * 1.3 * uMotion);
    vColor = mix(aColFrom, aColTo, uMix) * sheen;
    vAlpha = 0.9 - 0.25 * bump;
  }
`

const fragmentShader = /* glsl */ `
  uniform float uOpacity;
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;           // round dots
    float soft = 1.0 - smoothstep(0.0, 0.5, d); // (edges must go low -> high, or some GPUs return 0)
    gl_FragColor = vec4(vColor, soft * vAlpha * uOpacity);
  }
`

const clamp01 = (x) => Math.min(1, Math.max(0, x))
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
const smooth = (a, b, x) => {
  const t = clamp01((x - a) / (b - a))
  return t * t * (3 - 2 * t)
}
const SHAPE_W = 8.2 // width of a shape in world units (900px / 100, minus margins)
const SHAPE_H = 2.7

function Morph({ stages, reduced }) {
  const group = useRef()
  const geo = useRef()
  const mat = useRef()
  const anim = useRef({ shown: 0, x: 0, y: 0, s: 0.6, o: 0 })
  const pointer = useRef({ x: 0, y: 0 })
  const anchors = useRef([])
  const { gl } = useThree()

  const count = stages[0].positions.length / 3
  const buffers = useMemo(() => {
    const rand = new Float32Array(count * 4)
    for (let i = 0; i < rand.length; i++) rand[i] = Math.random()
    return {
      from: new Float32Array(count * 3),
      to: new Float32Array(count * 3),
      colFrom: new Float32Array(count * 3),
      colTo: new Float32Array(count * 3),
      rand,
    }
  }, [count])

  const uniforms = useMemo(
    () => ({
      uMix: { value: 0 },
      uTime: { value: 0 },
      uSize: { value: 3 },
      uPixelRatio: { value: 1 },
      uOpacity: { value: 0 },
      uMotion: { value: reduced ? 0 : 1 },
    }),
    [reduced],
  )

  useEffect(() => {
    anchors.current = [...document.querySelectorAll('[data-morph-anchor]')]
    const onMove = (e) => {
      pointer.current.x = e.clientX / window.innerWidth - 0.5
      pointer.current.y = e.clientY / window.innerHeight - 0.5
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  // load shape `seg` as "from" and `seg + 1` as "to"
  const loadSegment = (seg) => {
    const g = geo.current
    if (!g) return
    const A = stages[seg]
    const B = stages[seg + 1]
    g.attributes.aFrom.array.set(A.positions)
    g.attributes.aTo.array.set(B.positions)
    g.attributes.aColFrom.array.set(A.colors)
    g.attributes.aColTo.array.set(B.colors)
    for (const name of ['aFrom', 'aTo', 'aColFrom', 'aColTo']) g.attributes[name].needsUpdate = true
    g.userData.seg = seg // remember on the geometry itself, so a remount (or hot reload) reloads it
  }

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05)
    const { viewport, clock } = state
    const a = anim.current
    const vw = window.innerWidth
    const vh = window.innerHeight
    const t = clock.elapsedTime

    // 1. scroll position -> which two shapes, and how far between them
    const last = stages.length - 1
    const maxScroll = document.documentElement.scrollHeight - vh
    const target = maxScroll > 0 ? clamp01(window.scrollY / maxScroll) * last : 0
    a.shown += (target - a.shown) * Math.min(1, dt * 6)
    const seg = Math.min(last - 1, Math.floor(a.shown))
    if (geo.current && geo.current.userData.seg !== seg) loadSegment(seg)
    // hold each shape for a moment, morph in the middle of the scroll step
    const mix = easeInOut(clamp01((a.shown - seg - 0.15) / 0.7))

    // 2. where to put it: follow the most visible anchor, otherwise dim background
    const wide = vw >= 1024
    const toX = (px) => (px / vw - 0.5) * viewport.width
    const toY = (py) => -(py / vh - 0.5) * viewport.height
    let tx = wide ? viewport.width * 0.26 : 0
    let ty = 0
    let ts = Math.min(1.1, ((wide ? 0.5 : 0.95) * viewport.width) / SHAPE_W)
    let to = 0.75 // how visible it stays behind the glass sections

    let best = null
    let bestW = 0
    for (const el of anchors.current) {
      const r = el.getBoundingClientRect()
      const visible = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0))
      const w = r.height > 0 ? visible / Math.min(r.height, vh) : 0
      if (w > bestW) {
        bestW = w
        best = r
      }
    }
    if (best) {
      const w = smooth(0.2, 0.8, bestW)
      const bs = Math.min(((best.width / vw) * viewport.width * 0.92) / SHAPE_W, ((best.height / vh) * viewport.height * 0.95) / SHAPE_H)
      tx += (toX(best.left + best.width / 2) - tx) * w
      ty += (toY(best.top + best.height / 2) - ty) * w
      ts += (bs - ts) * w
      to += (1 - to) * w
    }

    const k = Math.min(1, dt * 5)
    a.x += (tx - a.x) * k
    a.y += (ty - a.y) * k
    a.s += (ts - a.s) * k
    a.o += (to - a.o) * Math.min(1, dt * 3)

    // 3. push everything to the GPU
    const g = group.current
    g.position.set(a.x, a.y, 0)
    g.scale.setScalar(a.s)
    const wob = reduced ? 0 : Math.sin(t * 0.6) * 0.14
    g.rotation.y = Math.sin(Math.PI * mix) * 0.55 + wob + pointer.current.x * 0.5
    g.rotation.x = (reduced ? 0 : Math.sin(t * 0.45) * 0.05) + pointer.current.y * 0.3

    // write to the material's own uniforms (three copies the object we pass in)
    const u = mat.current.uniforms
    u.uMix.value = mix
    u.uTime.value = t
    u.uOpacity.value = a.o
    u.uPixelRatio.value = gl.getPixelRatio()
    u.uSize.value = wide ? 3.8 : 3
  })

  return (
    <group ref={group}>
      <points frustumCulled={false}>
        <bufferGeometry ref={geo}>
          <bufferAttribute attach="attributes-position" args={[buffers.from, 3]} />
          <bufferAttribute attach="attributes-aFrom" args={[buffers.from, 3]} />
          <bufferAttribute attach="attributes-aTo" args={[buffers.to, 3]} />
          <bufferAttribute attach="attributes-aColFrom" args={[buffers.colFrom, 3]} />
          <bufferAttribute attach="attributes-aColTo" args={[buffers.colTo, 3]} />
          <bufferAttribute attach="attributes-aRand" args={[buffers.rand, 4]} />
        </bufferGeometry>
        <shaderMaterial
          ref={mat}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

export default function MorphCanvas({ shapes, onReady }) {
  const [stages, setStages] = useState(null)
  const reduced = useMemo(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches, [])

  useEffect(() => {
    let alive = true
    const count = window.innerWidth < 768 ? 3200 : 6500 // fewer points on phones
    buildStages(count, shapes).then((s) => {
      if (!alive) return
      setStages(s)
      onReady?.()
    })
    return () => {
      alive = false
    }
  }, [shapes, onReady])

  if (!stages) return null
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={[1, 1.75]} gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }} flat>
        <Morph stages={stages} reduced={reduced} />
      </Canvas>
    </div>
  )
}
