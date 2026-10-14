import { useState } from 'react'
import Section from '../components/Section.jsx'
import { videoPage, videoProjects } from '../data/video.js'
import { useText } from '../i18n.jsx'
import { isFile, playable, posterFor } from './media.js'

function PlayIcon({ className = 'h-16 w-16' }) {
  return (
    <span className={`play-btn flex items-center justify-center rounded-full bg-coral text-[#12101a] ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="ml-[8%] h-[44%] w-[44%]" fill="currentColor">
        <path d="M7 4.5v15l12-7.5z" />
      </svg>
    </span>
  )
}

// The poster image, plus a muted preview that only downloads while the mouse is over it.
// Clicking opens the full player.
function Preview({ item, onPlay, className, t }) {
  const [hover, setHover] = useState(false)
  const canPlay = playable(item)
  const poster = posterFor(item)
  return (
    <button
      type="button"
      onClick={() => onPlay(item)}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setHover(true)}
      onPointerLeave={() => setHover(false)}
      disabled={!canPlay}
      className={`group relative block w-full overflow-hidden rounded-2xl bg-[#0c0c14] ${className}`}
      aria-label={canPlay ? `${t.play} ${item.title}` : `${item.title}${t.comingSoon}`}
    >
      {poster && <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" decoding="async" />}
      {hover && isFile(item.video) && (
        <video src={item.video} className="absolute inset-0 h-full w-full object-cover" muted loop playsInline autoPlay preload="auto" aria-hidden="true" />
      )}
      <span className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hover ? 'opacity-0' : ''}`}>
        {canPlay ? <PlayIcon className="h-14 w-14" /> : <span className="font-mono text-xs text-[#77778a]">{t.videoSoon}</span>}
      </span>
      {item.length && (
        <span className="absolute bottom-3 end-3 rounded-md bg-black/65 px-2 py-1 font-mono text-xs text-fg">{item.length}</span>
      )}
    </button>
  )
}

function Info({ item, big }) {
  return (
    <>
      <p className="font-mono text-xs uppercase text-coral">{item.category}</p>
      <h3 className={`font-display font-semibold ${big ? 'text-3xl tracking-[-0.02em]' : 'text-xl'}`}>{item.title}</h3>
      <p className={`leading-relaxed text-muted ${big ? 'text-[17px]' : ''}`}>{item.description}</p>
      <p className="mt-auto font-mono text-xs text-dim">{item.tags.join(' · ')}</p>
    </>
  )
}

export default function Work({ onPlay }) {
  const t = useText(videoPage.work)
  const [featured, ...rest] = useText(videoProjects)
  return (
    <Section id="work" label={t.label}>
      <h2 className="mb-10 font-display text-[clamp(28px,3.4vw,44px)] font-semibold tracking-[-0.02em]">{t.heading}</h2>

      {featured && (
        <article className="glass glass-coral mb-5 flex flex-col gap-8 rounded-[28px] p-5 sm:p-7 lg:flex-row lg:items-center">
          <div className="min-w-0 lg:flex-[1.3]">
            <Preview item={featured} onPlay={onPlay} t={t} className={featured.vertical ? 'aspect-[4/5]' : 'aspect-video'} />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <Info item={featured} big />
          </div>
        </article>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p) => (
          <article key={p.title} className="glass flex flex-col gap-3.5 rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1">
            <Preview item={p} onPlay={onPlay} t={t} className={p.vertical ? 'aspect-[4/5]' : 'aspect-video'} />
            <Info item={p} />
          </article>
        ))}
      </div>
    </Section>
  )
}
