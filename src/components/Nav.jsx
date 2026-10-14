import Logo from './Logo.jsx'
import { ui } from '../data/content.js'
import { useLang, useText } from '../i18n.jsx'

// EN | فا switch. It stays left-to-right in both languages so the two options never swap places.
function LangToggle() {
  const { lang, setLang } = useLang()
  const t = useText(ui)
  const option = (code, label) => (
    <span lang={code} className={lang === code ? 'text-amber' : 'text-dim'}>
      {label}
    </span>
  )
  return (
    <button
      type="button"
      dir="ltr"
      onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
      aria-label={t.switchLang}
      title={t.switchLang}
      className="flex items-center gap-1.5 rounded-full border border-[#3a3a4a] px-3.5 py-2 font-mono text-[13px] font-semibold transition-colors hover:border-fg"
    >
      {option('en', 'EN')}
      <span className="text-[#3a3a4a]" aria-hidden="true">|</span>
      {option('fa', 'فا')}
    </button>
  )
}

// `links` are the section links; `cta` is the colored button on the right: { href, label, className }.
export default function Nav({ links, cta }) {
  const t = useText(ui)
  return (
    <header className="sticky top-0 z-30 border-b border-line/60 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-10">
        <a href="#top" className="text-fg no-underline" aria-label={t.backToTop}>
          <Logo size={20} />
        </a>
        <nav className="hidden gap-7 font-mono text-[13px] md:flex" aria-label={t.sections}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-dim transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <LangToggle />
          <a href={cta.href} className={`rounded-full px-4 py-2.5 font-mono text-[13px] font-semibold text-ink ${cta.className}`}>
            {cta.label}
          </a>
        </div>
      </div>
    </header>
  )
}
