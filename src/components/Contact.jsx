import { useState } from 'react'
import { profile } from '../data/content.js'

function CopyEmail() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard blocked: the address is still visible and selectable
    }
  }
  return (
    <button type="button" onClick={copy} className="rounded-full border border-[#3a3a4a] px-5 py-[15px] font-bold text-fg hover:border-fg">
      {copied ? 'Copied ✓' : 'Copy email'}
    </button>
  )
}

// Simple line icons. The part marked "fillable" fills with the app's color on hover.
const icons = {
  whatsapp: (
    <>
      <path className="fillable" d="M3.5 20.5l1.4-4.2A8.5 8.5 0 1 1 8 19.3z" />
      <path d="M9 8.6c.2-.5.6-.6.9-.6h.4c.2 0 .4.1.5.4l.6 1.4c.1.2 0 .5-.1.6l-.5.6c.6 1.1 1.4 1.9 2.5 2.5l.6-.5c.2-.2.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.4c0 .3-.1.7-.6.9-1.6.8-4.7-1-6.1-3.4C8.8 11 8.6 9.6 9 8.6z" fill="currentColor" stroke="none" />
    </>
  ),
  telegram: (
    <>
      <path className="fillable" d="M21.5 3.5 2.8 10.7c-.8.3-.8 1.4 0 1.6l4.6 1.5 1.8 5.6c.2.7 1.1.9 1.6.4l2.6-2.5 4.8 3.5c.6.4 1.4.1 1.6-.6l3-15.4c.2-.8-.6-1.5-1.3-1.3z" />
      <path d="M7.4 13.8 18 6.7l-8.2 8.1" />
    </>
  ),
  phone: (
    <path className="fillable" d="M5 3.5h3.2l1.6 4.3-2.1 1.4a11.5 11.5 0 0 0 7.1 7.1l1.4-2.1 4.3 1.6V19a1.8 1.8 0 0 1-1.9 1.8A16.6 16.6 0 0 1 3.2 5.4 1.8 1.8 0 0 1 5 3.5z" />
  ),
}

function ContactChip({ href, label, value, icon, brand, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className="contact-chip glass flex min-w-0 max-w-full items-center gap-3 rounded-2xl py-3 pl-4 pr-5 text-fg"
      style={{ '--brand': brand }}
    >
      <svg className="chip-icon h-7 w-7 shrink-0 text-fg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
        {icons[icon]}
      </svg>
      <span className="flex min-w-0 flex-col leading-tight">
        <span className="font-mono text-[11px] uppercase tracking-wider text-dim">{label}</span>
        <span className="truncate font-semibold">{value}</span>
      </span>
    </a>
  )
}

export default function Contact() {
  const outline = 'rounded-full border border-[#3a3a4a] px-5 py-[15px] font-bold text-fg hover:border-fg'
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl scroll-mt-20 border-t border-line/70 px-5 py-20 sm:px-10 sm:py-28">
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
        <div className="flex min-w-0 flex-1 flex-col items-start gap-7">
          <p className="font-mono text-sm text-amber">// contact</p>
          <h2 className="font-display text-[clamp(36px,6vw,80px)] font-extrabold leading-none tracking-[-0.04em]">
            Let's build
            <br />
            something.
          </h2>
          <p className="text-lg text-muted">Open to internships, junior roles and freelance work.</p>
          <p className="select-all break-all font-mono text-base text-fg sm:text-lg">{profile.email}</p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-full bg-amber px-6 py-4 font-bold text-ink">Email me</a>
            <CopyEmail />
            <a href={profile.github} target="_blank" rel="noreferrer" className={outline}>GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={outline}>LinkedIn</a>
            {profile.cv && <a href={profile.cv} className={outline}>Download CV</a>}
          </div>
          <div className="flex w-full flex-wrap gap-3">
            <ContactChip href={`https://wa.me/${profile.phone.replace('+', '')}`} label="WhatsApp" value="Chat with me" icon="whatsapp" brand="#25D366" external />
            <ContactChip href={`https://t.me/${profile.telegram}`} label="Telegram" value={`@${profile.telegram}`} icon="telegram" brand="#26A5E4" external />
            <ContactChip href={`tel:${profile.phone}`} label="Phone" value={profile.phoneDisplay} icon="phone" brand="#f5b942" />
          </div>
        </div>
        <div data-morph-anchor="contact" className="h-[180px] w-full shrink-0 sm:h-[260px] lg:h-[420px] lg:flex-1" aria-hidden="true" />
      </div>
    </section>
  )
}
