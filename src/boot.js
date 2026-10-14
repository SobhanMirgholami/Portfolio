// Shared by both pages (main site and /video/): fonts, styles and the console credits.

// fonts are bundled with the site (no Google Fonts request)
import '@fontsource-variable/unbounded'
import '@fontsource-variable/manrope'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/600.css'

import './index.css'

// credits, printed in the browser console on every page load
console.log(
  '%c<Co$mo/>%c\nBuilt by Sobhan Mirgholami (Co$mo)\nhttps://sobhan-cosmo.vercel.app',
  'color:#f5b942;font:700 22px monospace',
  'color:#ececf1;font:14px monospace',
)

// Links between the two pages (main site <-> /video/) fade the page out before leaving.
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
document.addEventListener('click', (e) => {
  const link = e.target.closest?.('a[href]')
  if (!link || reduceMotion || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
  if (link.target === '_blank' || link.hasAttribute('download')) return
  const url = new URL(link.href, location.href)
  if (url.origin !== location.origin || url.pathname === location.pathname) return // other sites and #section links
  e.preventDefault()
  document.documentElement.classList.add('page-leave')
  setTimeout(() => location.assign(url.href), 250)
})
// coming back with the Back button can restore the faded-out page from cache: show it again
window.addEventListener('pageshow', () => document.documentElement.classList.remove('page-leave'))
