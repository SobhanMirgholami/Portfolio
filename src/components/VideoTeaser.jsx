import { profile, videoTeaser } from '../data/content.js'
import { useText } from '../i18n.jsx'

// Until there's a picture, the preview shows a little editing timeline.
function TimelinePlaceholder() {
  const tracks = [
    ['w-[22%]', 'w-[34%]', 'w-[18%]'],
    ['w-[40%]', 'w-[26%]'],
    ['w-[14%]', 'w-[20%]', 'w-[30%]'],
  ]
  return (
    <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-[radial-gradient(circle_at_30%_20%,rgb(255_93_122/0.28),transparent_60%)] p-5">
      {tracks.map((clips, i) => (
        <div key={i} className="flex gap-1.5">
          {clips.map((w, j) => (
            <span key={j} className={`h-3 rounded-sm ${w} ${i === 1 ? 'bg-[#9999ff]/50' : 'bg-coral/45'}`} />
          ))}
        </div>
      ))}
      <span className="absolute bottom-3 top-6 left-[46%] w-px bg-coral" aria-hidden="true" />
    </div>
  )
}

// The preview card on the main site; the whole card links to the video portfolio page.
export default function VideoTeaser() {
  const teaser = useText(videoTeaser)
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 sm:px-10">
      <a
        href={profile.videoSite}
        className="video-teaser glass glass-coral group flex flex-col gap-7 rounded-[28px] p-5 text-fg sm:p-7 lg:flex-row lg:items-center lg:gap-10"
      >
        <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-2xl bg-[#140c14] lg:w-[48%]">
          {teaser.image ? (
            <img src={teaser.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          ) : (
            <TimelinePlaceholder />
          )}
          <span className="teaser-play absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-coral text-[#12101a]">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true">
              <path d="M7 4.5v15l12-7.5z" />
            </svg>
          </span>
        </div>
        <div className="flex min-w-0 flex-col items-start gap-4 pb-2 lg:pb-0">
          <p className="font-mono text-[13px] text-coral">{teaser.kicker}</p>
          <p className="font-display text-[clamp(26px,3vw,40px)] font-semibold leading-tight tracking-[-0.02em]">{teaser.title}</p>
          <p className="text-lg leading-relaxed text-muted">{teaser.text}</p>
          <span className="mt-2 rounded-full bg-coral px-6 py-4 font-bold text-[#12101a] transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
            {teaser.button}
          </span>
        </div>
      </a>
    </div>
  )
}
