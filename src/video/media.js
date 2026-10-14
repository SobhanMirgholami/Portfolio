// Helpers to turn a YouTube or Vimeo link into an embed player and a thumbnail.

function youtubeId(url) {
  return url?.match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/)([\w-]{11})/)?.[1] ?? null
}

function vimeoId(url) {
  return url?.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1] ?? null
}

export function embedUrl(url) {
  const yt = youtubeId(url)
  if (yt) return `https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&rel=0`
  const vm = vimeoId(url)
  if (vm) return `https://player.vimeo.com/video/${vm}?autoplay=1`
  return null
}

// your own image wins; otherwise YouTube's thumbnail
export function thumbnailFor(item) {
  if (item.thumbnail) return item.thumbnail
  const yt = youtubeId(item.video)
  return yt ? `https://i.ytimg.com/vi/${yt}/hqdefault.jpg` : null
}

export const playable = (item) => Boolean(embedUrl(item.video))
