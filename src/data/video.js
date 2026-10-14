// All the text on the video portfolio page (/video/) lives here.
// Videos: paste a YouTube or Vimeo link. YouTube thumbnails are fetched automatically;
// for Vimeo (or a custom frame) put an image in /public/media/ and set `thumbnail`.
// A video set to null shows as "coming soon".

export const videoHero = {
  text: 'Video editor and motion designer. I cut reels, ads and YouTube videos with pacing that keeps people watching.',
}

export const videoAbout = {
  title: 'Every cut is a decision.',
  paragraphs: [
    'I spent years as a freelance video editor and motion designer: short-form reels, ads, YouTube videos and motion graphics for brands and creators.',
    'I care about rhythm, clean typography and sound that hits on the beat. These days I write code too, so I also build the tools and websites around the videos.',
  ],
}

export const reel = {
  title: 'Showreel',
  video: null, // e.g. 'https://youtu.be/XXXXXXXXXXX'
  thumbnail: null,
}

// `category` builds the filter buttons automatically.
export const videoProjects = [
  {
    title: 'Brand promo',
    category: 'Commercial',
    description: 'A 30-second product ad: fast cuts, kinetic type and a clean color grade.',
    tools: ['Premiere Pro', 'After Effects'],
    video: null,
    thumbnail: null,
  },
  {
    title: 'Logo animation',
    category: 'Motion graphics',
    description: 'Animated logo reveal with shape layers and sound design.',
    tools: ['After Effects'],
    video: null,
    thumbnail: null,
  },
  {
    title: 'Instagram reels',
    category: 'Social',
    description: 'Vertical edits with captions, zooms and beat-synced transitions.',
    tools: ['Premiere Pro'],
    video: null,
    thumbnail: null,
  },
  {
    title: 'YouTube episode',
    category: 'Long-form',
    description: 'Full episode edit: story structure, b-roll, lower thirds and audio cleanup.',
    tools: ['Premiere Pro', 'After Effects'],
    video: null,
    thumbnail: null,
  },
]

export const videoStack = [
  { group: 'Editing', items: ['Premiere Pro', 'Color grading', 'Sound design'] },
  { group: 'Motion', items: ['After Effects', 'Kinetic typography', 'Logo animation'] },
  { group: 'Formats', items: ['Reels & Shorts', 'Ads', 'YouTube'] },
]
