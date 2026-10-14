import Section from '../components/Section.jsx'
import { reel } from '../data/video.js'
import { playable, thumbnailFor } from './media.js'

export function PlayIcon({ className = 'h-16 w-16' }) {
  return (
    <span className={`play-btn flex items-center justify-center rounded-full bg-coral text-[#12101a] ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="ml-[8%] h-[44%] w-[44%]" fill="currentColor">
        <path d="M7 4.5v15l12-7.5z" />
      </svg>
    </span>
  )
}

// The thumbnail, or a soft coral frame while there's none yet.
export function Thumb({ item }) {
  const src = thumbnailFor(item)
  if (src) return <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
  return <div className="h-full w-full bg-[radial-gradient(circle_at_30%_25%,rgb(255_93_122/0.22),transparent_65%),linear-gradient(160deg,#1a1020,#0c0c14)]" />
}

export default function Reel({ onPlay }) {
  const canPlay = playable(reel)
  return (
    <Section id="reel" label="// reel">
      <div className="glass glass-coral rounded-[28px] p-3 sm:p-4">
        <button
          type="button"
          onClick={() => onPlay(reel)}
          disabled={!canPlay}
          className="group relative block aspect-video w-full overflow-hidden rounded-[20px] bg-[#0c0c14]"
          aria-label={canPlay ? `Play ${reel.title}` : `${reel.title} coming soon`}
        >
          <Thumb item={reel} />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(circle,rgb(0_0_0/0.5),transparent_70%)]">
            <PlayIcon className="h-20 w-20 sm:h-24 sm:w-24" />
            <span className="font-display text-xl font-semibold sm:text-2xl">{reel.title}</span>
            {!canPlay && <span className="font-mono text-xs text-dim">coming soon</span>}
          </span>
        </button>
      </div>
    </Section>
  )
}
