import { useEffect, useRef } from 'react'
import { embedUrl } from './media.js'

// Full-screen player. Esc, the close button or a click outside the video closes it.
export default function Player({ item, onClose }) {
  const dialog = useRef(null)

  useEffect(() => {
    const d = dialog.current
    if (item && !d.open) d.showModal()
    if (!item && d.open) d.close()
  }, [item])

  return (
    <dialog
      ref={dialog}
      onClose={onClose}
      onClick={(e) => e.target === dialog.current && dialog.current.close()}
      className="player m-auto w-[min(1100px,94vw)] bg-transparent p-0 text-fg backdrop:bg-[#07070c]/85 backdrop:backdrop-blur-sm"
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
              close ✕
            </button>
          </div>
          <div className="aspect-video overflow-hidden rounded-2xl bg-black">
            <iframe
              src={embedUrl(item.video)}
              title={item.title}
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </dialog>
  )
}
