import Section from './Section.jsx'
import { devPage, featured, projects, profile } from '../data/content.js'
import { useText } from '../i18n.jsx'

function Tags({ tags, label }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {tags.map((t) => (
        <li key={t} className="rounded-full border border-[#33334a] px-2.5 py-1.5 font-mono text-xs text-[#d5d5e0]">
          {t}
        </li>
      ))}
    </ul>
  )
}

function Shot({ image, title, t }) {
  if (image) {
    return <img src={image} alt={`${t.screenshotOf} ${title}`} className="aspect-[18/11] w-full rounded-2xl object-cover" loading="lazy" />
  }
  return (
    <div className={`flex w-full items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.03] font-mono text-xs text-[#77778a] aspect-[18/11]`}>
      {t.screenshotSoon}
    </div>
  )
}

export default function Projects() {
  const t = useText(devPage.projects)
  const main = useText(featured)
  const list = useText(projects)
  return (
    <Section id="projects" label={t.label}>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-[clamp(28px,3.4vw,44px)] font-semibold tracking-[-0.02em]">{t.heading}</h2>
        <a href={profile.github} target="_blank" rel="noreferrer" className="font-mono text-sm text-amber hover:underline">
          {t.allRepos}
        </a>
      </div>

      <article className="glass mb-5 flex flex-col gap-8 rounded-[28px] p-6 sm:p-8 lg:flex-row">
        <div className="min-w-0 flex-1">
          <Shot image={main.image} title={main.title} t={t} />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-4">
          <p className="font-mono text-xs uppercase text-amber">{main.status}</p>
          <h3 className="font-display text-3xl font-semibold tracking-[-0.02em]">{main.title}</h3>
          <p className="text-[17px] leading-relaxed text-muted">{main.description}</p>
          <Tags tags={main.tags} label={t.builtWith} />
          <div className="flex flex-wrap gap-5 font-mono text-sm">
            {main.live && <a href={main.live} target="_blank" rel="noreferrer" className="text-amber hover:underline">{t.liveDemo}</a>}
            {main.code && <a href={main.code} target="_blank" rel="noreferrer" className="text-amber hover:underline">{t.code}</a>}
          </div>
        </div>
      </article>

      <div className="grid gap-5 md:grid-cols-2">
        {list.map((p) => (
          <article key={p.title} className="glass flex flex-col gap-3.5 rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
            <Shot image={p.image} title={p.title} t={t} />
            <p className="font-mono text-xs uppercase text-amber">{p.status}</p>
            <h3 className="font-display text-xl font-semibold">{p.title}</h3>
            <p className="leading-relaxed text-muted">{p.description}</p>
            <p className="mt-auto font-mono text-xs text-dim">{p.tags.join(' · ')}</p>
            {(p.live || p.code) && (
              <div className="flex flex-wrap gap-5 font-mono text-sm">
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="text-amber hover:underline">{t.live}</a>}
                {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="text-amber hover:underline">{t.code}</a>}
              </div>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
