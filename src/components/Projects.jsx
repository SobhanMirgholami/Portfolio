import Section from './Section.jsx'
import { featured, projects, profile } from '../data/content.js'

function Tags({ tags }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Built with">
      {tags.map((t) => (
        <li key={t} className="rounded-full border border-[#33334a] px-2.5 py-1.5 font-mono text-xs text-[#d5d5e0]">
          {t}
        </li>
      ))}
    </ul>
  )
}

function Shot({ image, title, tall }) {
  if (image) {
    return <img src={image} alt={`Screenshot of ${title}`} className={`w-full rounded-2xl object-cover ${tall ? 'h-72 lg:h-80' : 'h-44'}`} loading="lazy" />
  }
  return (
    <div className={`flex w-full items-center justify-center rounded-2xl border border-dashed border-[#3a3a52] bg-[#161624] font-mono text-xs text-[#77778a] ${tall ? 'h-72 lg:h-80' : 'h-44'}`}>
      screenshot coming soon
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects" label="// projects">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h2 className="font-display text-[clamp(28px,3.4vw,44px)] font-semibold tracking-[-0.02em]">Things I've built</h2>
        <a href={profile.github} target="_blank" rel="noreferrer" className="font-mono text-sm text-amber hover:underline">
          All repos on GitHub ↗
        </a>
      </div>

      <article className="mb-5 flex flex-col gap-8 rounded-[28px] border border-line bg-panel p-6 sm:p-8 lg:flex-row">
        <div className="min-w-0 flex-1">
          <Shot image={featured.image} title={featured.title} tall />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-center gap-4">
          <p className="font-mono text-xs uppercase text-amber">{featured.status}</p>
          <h3 className="font-display text-3xl font-semibold tracking-[-0.02em]">{featured.title}</h3>
          <p className="text-[17px] leading-relaxed text-muted">{featured.description}</p>
          <Tags tags={featured.tags} />
          <div className="flex flex-wrap gap-5 font-mono text-sm">
            {featured.live && <a href={featured.live} target="_blank" rel="noreferrer" className="text-amber hover:underline">Live demo ↗</a>}
            {featured.code && <a href={featured.code} target="_blank" rel="noreferrer" className="text-amber hover:underline">Code ↗</a>}
          </div>
        </div>
      </article>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="flex flex-col gap-3.5 rounded-3xl border border-line bg-panel p-6 transition-transform duration-300 hover:-translate-y-1">
            <Shot image={p.image} title={p.title} />
            <p className="font-mono text-xs uppercase text-amber">{p.status}</p>
            <h3 className="font-display text-xl font-semibold">{p.title}</h3>
            <p className="leading-relaxed text-muted">{p.description}</p>
            <p className="mt-auto font-mono text-xs text-dim">{p.tags.join(' · ')}</p>
            {p.code && <a href={p.code} target="_blank" rel="noreferrer" className="font-mono text-sm text-amber hover:underline">Code ↗</a>}
          </article>
        ))}
      </div>
    </Section>
  )
}
