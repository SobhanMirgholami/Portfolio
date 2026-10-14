import Logo from './Logo.jsx'

// `links` are the section links; `cta` is the colored button on the right: { href, label, className }.
export default function Nav({ links, cta }) {
  return (
    <header className="sticky top-0 z-30 border-b border-line/60 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-10">
        <a href="#top" className="text-fg no-underline" aria-label="Back to top">
          <Logo size={20} />
        </a>
        <nav className="hidden gap-7 font-mono text-[13px] md:flex" aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-dim transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
        </nav>
        <a href={cta.href} className={`rounded-full px-4 py-2.5 font-mono text-[13px] font-semibold text-ink ${cta.className}`}>
          {cta.label}
        </a>
      </div>
    </header>
  )
}
