import Logo from './Logo.jsx'
import { ui } from '../data/content.js'
import { LANGS, useLang, useText } from '../i18n.jsx'

// EN | فا | TR switch. It stays left-to-right in every language so the options never swap places.
const LANG_NAMES = { en: ['EN', 'English'], fa: ['فا', 'فارسی'], tr: ['TR', 'Türkçe'] }

function LangSwitch() {
  const { lang, setLang } = useLang()
  const t = useText(ui)
  return (
    <div
      role="group"
      dir="ltr"
      aria-label={t.language}
      className="flex items-center rounded-full border border-[#3a3a4a] p-1 font-mono text-[13px] font-semibold"
    >
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          lang={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          title={LANG_NAMES[code][1]}
          className={`rounded-full px-2.5 py-1 transition-colors ${lang === code ? 'bg-amber/15 text-amber' : 'text-dim hover:text-fg'}`}
        >
          {LANG_NAMES[code][0]}
        </button>
      ))}
    </div>
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
          <LangSwitch />
          <a href={cta.href} className={`rounded-full px-4 py-2.5 font-mono text-[13px] font-semibold text-ink ${cta.className}`}>
            {cta.label}
          </a>
        </div>
      </div>
    </header>
  )
}
