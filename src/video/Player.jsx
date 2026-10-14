import { useEffect, useRef } from 'react'
import { embedUrl, isFile } from './media.js'
import { videoPage } from '../data/video.js'
import { useText } from '../i18n.jsx'

// Full-screen player. Esc, the close button or a click outside the video closes it.
// Vertical videos get a narrow frame so they fit the screen height.
export default function Player({ item, onClose }) {
  const dialog = useRef(null)
  const t = useText(videoPage.work)

  useEffect(() => {
    const d = dialog.current
    if (item && !d.open) d.showModal()
    if (!item && d.open) d.close()
  }, [item])

  const width = item?.vertical ? 'w-[min(94vw,calc(80vh*9/16))]' : 'w-[min(1100px,94vw)]'
  return (
    <dialog
      ref={dialog}
      onClose={onClose}
      onClick={(e) => e.target === dialog.current && dialog.current.close()}
      className={`player m-auto bg-transparent p-0 text-fg backdrop:bg-[#07070c]/85 backdrop:backdrop-blur-sm ${width}`}
      aria-label={item?.title}
    >
      {item && (
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between gap-4">
            <p className="min-w-0 truncate font-display text-lg font-semibold">{item.title}</p>
            <button
              type="button"
              onClick={() => dialog.current.close()}
              className="shrink-0 rounded-full border border-[#3a3a4a] px-4 py-2 font-mono text-sm hover:border-fg"
            >
              {t.close}
            </button>
          </div>
          <div className={`overflow-hidden rounded-2xl bg-black ${item.vertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
            {isFile(item.video) ? (
              <video src={item.video} poster={item.poster} className="h-full w-full" controls autoPlay playsInline />
            ) : (
              <iframe
                src={embedUrl(item.video)}
                title={item.title}
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}
    </dialog>
  )
}
