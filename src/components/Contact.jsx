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
        </div>
        <div data-morph-anchor="contact" className="h-[180px] w-full shrink-0 sm:h-[260px] lg:h-[420px] lg:flex-1" aria-hidden="true" />
      </div>
    </section>
  )
}
