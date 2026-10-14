// Shared by both pages (main site and /video/): fonts, styles and the console credits.

// fonts are bundled with the site (no Google Fonts request)
import '@fontsource-variable/unbounded'
import '@fontsource-variable/manrope'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/600.css'
import '@fontsource-variable/vazirmatn' // Persian; only downloaded when Persian text is on screen

import './index.css'

// credits, printed in the browser console on every page load
console.log(
  '%c<Co$mo/>%c\nBuilt by Sobhan Mirgholami (Co$mo)\nhttps://sobhan-cosmo.vercel.app',
  'color:#f5b942;font:700 22px monospace',
  'color:#ececf1;font:14px monospace',
)

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const isPlainClick = (e) => !e.defaultPrevented && e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey

// --- Smooth scrolling for #section links: eased, and longer for longer distances ---
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)
let scrollAnim = 0
function smoothScrollTo(targetY) {
  cancelAnimationFrame(scrollAnim)
  const startY = window.scrollY
  const distance = targetY - startY
  const duration = Math.min(1100, Math.max(450, Math.abs(distance) * 0.35))
  const start = performance.now()
  const html = document.documentElement
  html.style.scrollBehavior = 'auto' // the CSS smooth scroll would fight the animation
  const step = (now) => {
    const t = Math.min(1, (now - start) / duration)
    window.scrollTo(0, startY + distance * easeInOutCubic(t))
    if (t < 1) scrollAnim = requestAnimationFrame(step)
    else html.style.scrollBehavior = ''
  }
  scrollAnim = requestAnimationFrame(step)
}
// a mouse wheel or touch stops the animation, so it never fights the user
for (const type of ['wheel', 'touchstart']) {
  window.addEventListener(type, () => {
    cancelAnimationFrame(scrollAnim)
    document.documentElement.style.scrollBehavior = ''
  }, { passive: true })
}

// --- Curtain between the two pages (main site <-> /video/) ---
// Leaving: a dark panel with a glowing line in the destination's color slides up over the page.
// Arriving: the same panel starts on screen and slides away.
const ACCENT = { dev: '#f5b942', video: '#ff5d7a' }
const CURTAIN_LABEL = {
  en: { dev: 'dev work', video: 'video work' },
  fa: { dev: 'کارهای برنامه‌نویسی', video: 'کارهای ویدیویی' },
  tr: { dev: 'yazılım işleri', video: 'video işleri' },
}
function curtain(side, phase) {
  const el = document.createElement('div')
  el.className = `curtain curtain-${phase}`
  el.style.setProperty('--curtain-accent', ACCENT[side])
  el.innerHTML = `<span>// ${(CURTAIN_LABEL[document.documentElement.lang] ?? CURTAIN_LABEL.en)[side]}</span>`
  el.setAttribute('aria-hidden', 'true')
  document.body.appendChild(el)
  return el
}

let arriving = null
try {
  arriving = sessionStorage.getItem('curtain')
  sessionStorage.removeItem('curtain')
} catch {
  // storage blocked: no curtain, the page just fades in
}
if (arriving && !reduceMotion) {
  document.documentElement.classList.add('curtain-arrive')
  curtain(arriving, 'out').addEventListener('animationend', (e) => e.currentTarget.remove())
}

document.addEventListener('click', (e) => {
  const link = e.target.closest?.('a[href]')
  if (!link || !isPlainClick(e) || link.target === '_blank' || link.hasAttribute('download')) return
  const url = new URL(link.href, location.href)
  if (url.origin !== location.origin) return

  if (url.pathname === location.pathname) {
    // a #section link on this page
    const target = url.hash && document.getElementById(decodeURIComponent(url.hash.slice(1)))
    if (!target || reduceMotion) return
    e.preventDefault()
    const offset = parseFloat(getComputedStyle(target).scrollMarginTop) || 0
    smoothScrollTo(target.getBoundingClientRect().top + window.scrollY - offset)
    history.pushState(null, '', url.hash)
    return
  }

  if (reduceMotion) return
  e.preventDefault()
  const side = url.pathname.startsWith('/video') ? 'video' : 'dev'
  try {
    sessionStorage.setItem('curtain', side)
  } catch {
    // storage blocked: the next page just fades in
  }
  curtain(side, 'in')
  setTimeout(() => location.assign(url.href), 420)
})

// coming back with the Back button can restore this page from cache with the curtain still down
window.addEventListener('pageshow', (e) => {
  if (e.persisted) document.querySelectorAll('.curtain').forEach((el) => el.remove())
})
