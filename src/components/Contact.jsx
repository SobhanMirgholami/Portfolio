import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { profile, ui } from '../data/content.js'
import { useLang, useText } from '../i18n.jsx'

// After copying, the label morphs into "<copied/>" with a tick, stays locked for 2s, then morphs back.
// Both labels sit on top of each other; the button is sized to the wider one so nothing around it moves.
function CopyEmail({ t }) {
  const { lang } = useLang()
  const [copied, setCopied] = useState(false)
  const [width, setWidth] = useState(null)
  const idleRef = useRef(null)
  const doneRef = useRef(null)
  const timer = useRef(null)

  useLayoutEffect(() => {
    // 40px side padding + 2px border; re-measure once the web fonts have loaded
    const measure = () => setWidth(Math.max(idleRef.current.offsetWidth, doneRef.current.offsetWidth) + 42)
    measure()
    document.fonts?.ready.then(measure)
  }, [lang])
  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    let ok = false
    try {
      await navigator.clipboard.writeText(profile.email)
      ok = true
    } catch {
      // some browsers deny the clipboard API on deployed sites: fall back to the old select-and-copy way
      const area = document.createElement('textarea')
      area.value = profile.email
      area.setAttribute('readonly', '')
      area.style.cssText = 'position:fixed;opacity:0;pointer-events:none'
      document.body.appendChild(area)
      area.select()
      ok = document.execCommand('copy')
      area.remove()
    }
    // if both fail the address is still visible and selectable
    if (!ok) return
    setCopied(true)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      type="button"
      onClick={copy}
      disabled={copied}
      data-copied={copied || undefined}
      style={width ? { width } : undefined}
      className="copy-btn relative overflow-hidden rounded-full border border-[#3a3a4a] px-5 py-[15px] font-bold text-fg enabled:hover:border-fg"
    >
      <span className="invisible" aria-hidden="true">x</span>
      <span ref={idleRef} className="copy-label copy-idle" aria-hidden={copied}>{t.copyEmail}</span>
      <span ref={doneRef} className="copy-label copy-done flex items-center gap-2 font-mono text-amber" aria-hidden={!copied}>
        <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path className="copy-tick" d="M3 8.5 6.5 12 13 4.5" />
        </svg>
        {'<copied/>'}
      </span>
      <span className="sr-only" aria-live="polite">{copied ? t.copied : ''}</span>
    </button>
  )
}

// Simple line icons. On hover the lines take the app's color; the part marked "fillable" also fills.
const icons = {
  whatsapp: (
    <>
      <path d="M3.5 20.5l1.4-4.2A8.5 8.5 0 1 1 8 19.3z" />
      <path d="M9 8.6c.2-.5.6-.6.9-.6h.4c.2 0 .4.1.5.4l.6 1.4c.1.2 0 .5-.1.6l-.5.6c.6 1.1 1.4 1.9 2.5 2.5l.6-.5c.2-.2.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.4c0 .3-.1.7-.6.9-1.6.8-4.7-1-6.1-3.4C8.8 11 8.6 9.6 9 8.6z" fill="currentColor" stroke="none" />
    </>
  ),
  telegram: (
    <>
      <path d="M21.5 3.5 2.8 10.7c-.8.3-.8 1.4 0 1.6l4.6 1.5 1.8 5.6c.2.7 1.1.9 1.6.4l2.6-2.5 4.8 3.5c.6.4 1.4.1 1.6-.6l3-15.4c.2-.8-.6-1.5-1.3-1.3z" />
      <path d="M7.4 13.8 18 6.7l-8.2 8.1" />
    </>
  ),
  phone: (
    <path className="fillable" d="M5 3.5h3.2l1.6 4.3-2.1 1.4a11.5 11.5 0 0 0 7.1 7.1l1.4-2.1 4.3 1.6V19a1.8 1.8 0 0 1-1.9 1.8A16.6 16.6 0 0 1 3.2 5.4 1.8 1.8 0 0 1 5 3.5z" />
  ),
}

function ContactChip({ href, label, value, icon, brand, external, ltr }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="contact-chip glass flex min-w-0 max-w-full items-center gap-3 rounded-2xl py-3 ps-4 pe-5 text-fg"
      style={{ '--brand': brand }}
    >
      <svg className="chip-icon h-7 w-7 shrink-0 text-fg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
        {icons[icon]}
      </svg>
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="font-mono text-[11px] uppercase tracking-wider text-dim">{label}</span>
        <span className="truncate font-semibold" dir={ltr ? 'ltr' : undefined}>{value}</span>
      </span>
    </a>
  )
}

export default function Contact({ note }) {
  const t = useText(ui.contact)
  const outline = 'rounded-full border border-[#3a3a4a] px-5 py-[15px] font-bold text-fg hover:border-fg'
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 border-t border-line/70 px-5 py-20 sm:px-10 sm:py-28">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-7">
          <p className="font-mono text-sm text-amber">{t.label}</p>
          <h2 className="font-display text-[clamp(36px,6vw,80px)] font-extrabold leading-none tracking-[-0.04em]">
            {t.heading[0]}
            <br />
            {t.heading[1]}
          </h2>
          <p className="text-lg text-muted">{note}</p>
          <p className="select-all break-all font-mono text-base text-fg sm:text-lg" dir="ltr">{profile.email}</p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-full bg-amber px-6 py-4 font-bold text-ink">{t.emailMe}</a>
            <CopyEmail t={t} />
            <a href={profile.github} target="_blank" rel="noreferrer" className={outline}>GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={outline}>LinkedIn</a>
            {profile.cv && <a href={profile.cv} className={outline}>{t.downloadCv}</a>}
          </div>
          <div className="flex w-full flex-wrap gap-3">
            <ContactChip href={`https://wa.me/${profile.phone.replace('+', '')}`} label={t.whatsapp} value={t.whatsappValue} icon="whatsapp" brand="#25D366" external />
            <ContactChip href={`https://t.me/${profile.telegram}`} label={t.telegram} value={`@${profile.telegram}`} icon="telegram" brand="#26A5E4" external ltr />
            <ContactChip href={`tel:${profile.phone}`} label={t.phone} value={profile.phoneDisplay} icon="phone" brand="var(--color-amber)" ltr />
          </div>
        </div>
        <div data-morph-anchor="contact" className="h-[180px] w-full shrink-0 sm:h-[260px] lg:h-[420px] lg:flex-1" aria-hidden="true" />
      </div>
    </section>
  )
}
