import { profile } from '../data/content.js'
import { LogoFallback } from './Logo.jsx'

// The right column is an empty "slot". The 3D logo is drawn on a fixed canvas
// behind the page and flies to wherever this slot is (see three/MorphCanvas.jsx).
// `text` and `actions` change per page; actions are [{ href, label, primary }].
export default function Hero({ sceneReady, text, actions }) {
  return (
    <section id="top" className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-5 pb-20 pt-6 sm:px-10 lg:min-h-[78vh] lg:flex-row lg:gap-12">
      <div className="relative z-10 flex min-w-0 flex-1 flex-col gap-7">
        <p className="font-mono text-sm text-amber">// aka {profile.alias}</p>
        <h1 className="font-display text-[clamp(44px,6.5vw,92px)] font-extrabold leading-[0.95] tracking-[-0.04em] text-balance">
          Sobhan
          <br />
          Mirgholami
        </h1>
        <p className="max-w-[30rem] text-lg leading-relaxed text-muted sm:text-xl">{text}</p>
        <div className="flex flex-wrap gap-3">
          {actions.map((a) =>
            a.primary ? (
              <a key={a.href} href={a.href} className="rounded-full bg-fg px-6 py-4 font-bold text-ink">
                {a.label}
              </a>
            ) : (
              <a key={a.href} href={a.href} className="rounded-full border border-[#3a3a4a] px-6 py-[15px] font-bold text-fg hover:border-fg">
                {a.label}
              </a>
            ),
          )}
        </div>
      </div>

      <div
        data-morph-anchor="hero"
        className="relative flex h-[220px] w-full shrink-0 items-center justify-center sm:h-[320px] lg:h-[520px] lg:flex-1"
        aria-hidden="true"
      >
        <div className={`transition-opacity duration-700 ${sceneReady ? 'opacity-0' : 'opacity-100'}`}>
          <div className="hidden lg:block"><LogoFallback size={78} /></div>
          <div className="lg:hidden"><LogoFallback size={44} /></div>
        </div>
        <p className="absolute bottom-0 left-1/2 hidden -translate-x-1/2 whitespace-nowrap font-mono text-xs text-dim lg:block">
          scroll to morph
        </p>
      </div>
    </section>
  )
}
