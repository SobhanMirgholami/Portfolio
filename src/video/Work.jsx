import { useState } from 'react'
import Section from '../components/Section.jsx'
import { videoProjects } from '../data/video.js'
import { playable } from './media.js'
import { PlayIcon, Thumb } from './Reel.jsx'

const categories = ['All', ...new Set(videoProjects.map((p) => p.category))]

function Card({ item, onPlay }) {
  const canPlay = playable(item)
  return (
    <article className="glass flex flex-col gap-3.5 rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1">
      <button
        type="button"
        onClick={() => onPlay(item)}
        disabled={!canPlay}
        className="group relative block aspect-video w-full overflow-hidden rounded-2xl bg-[#0c0c14]"
        aria-label={canPlay ? `Play ${item.title}` : `${item.title}, coming soon`}
      >
        <Thumb item={item} />
        <span className="absolute inset-0 flex items-center justify-center">
          {canPlay ? <PlayIcon className="h-14 w-14" /> : <span className="font-mono text-xs text-[#77778a]">video coming soon</span>}
        </span>
      </button>
      <p className="font-mono text-xs uppercase text-coral">{item.category}</p>
      <h3 className="font-display text-xl font-semibold">{item.title}</h3>
      <p className="leading-relaxed text-muted">{item.description}</p>
      <p className="mt-auto font-mono text-xs text-dim">{item.tools.join(' · ')}</p>
    </article>
  )
}

export default function Work({ onPlay }) {
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? videoProjects : videoProjects.filter((p) => p.category === filter)
  return (
    <Section id="work" label="// work">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-[clamp(28px,3.4vw,44px)] font-semibold tracking-[-0.02em]">Selected edits</h2>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by type">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`rounded-full border px-4 py-2 font-mono text-[13px] transition-colors ${
                filter === c ? 'border-coral bg-coral text-[#12101a]' : 'border-[#3a3a4a] text-dim hover:border-fg hover:text-fg'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {shown.map((p) => (
          <Card key={p.title} item={p} onPlay={onPlay} />
        ))}
      </div>
    </Section>
  )
}
