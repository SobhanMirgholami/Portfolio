// Helpers for the three kinds of `video`: a file in /public/videos/, a YouTube link or a Vimeo link.

function youtubeId(url) {
  return url?.match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/)([\w-]{11})/)?.[1] ?? null
}

function vimeoId(url) {
  return url?.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1] ?? null
}

export const isFile = (url) => /\.(mp4|webm|mov)$/i.test(url ?? '')

export function embedUrl(url) {
  const yt = youtubeId(url)
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&rel=0`
  const vm = vimeoId(url)
  if (vm) return `https://player.vimeo.com/video/${vm}?autoplay=1`
  return null
}

// your own poster wins; otherwise YouTube's thumbnail
export function posterFor(item) {
  if (item.poster) return item.poster
  const yt = youtubeId(item.video)
  return yt ? `https://i.ytimg.com/vi/${yt}/hqdefault.jpg` : null
}

export const playable = (item) => isFile(item.video) || Boolean(embedUrl(item.video))
