// All the text on the video portfolio page (/video/) lives here.

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

// Your videos live in /public/videos/ and their poster images in /public/videos/posters/.
// Posters load with the page; a video only starts downloading when someone hovers or clicks it.
// `video` can also be a YouTube or Vimeo link. The first video is shown big at the top.
export const videoProjects = [
  {
    title: 'Hotel apartment tour',
    category: 'Promo',
    length: '1:05',
    description:
      'A walkthrough promo for a hotel apartment: the building, the lobby and every room type, with on-screen labels for room size so guests know exactly what they are booking.',
    tags: ['Walkthrough', 'On-screen labels', '16:9'],
    video: '/videos/hotel-promo.mp4',
    poster: '/videos/posters/hotel-promo.jpg',
    vertical: false,
  },
  {
    title: 'Client trust reel',
    category: 'Talking head',
    length: '0:54',
    description:
      "A business-tips reel in Persian about winning clients' trust: big numbered titles for each point, word-by-word captions and a motion-graphics cutaway to keep the pace up.",
    tags: ['Numbered titles', 'Captions', 'Motion graphics'],
    video: '/videos/client-growth-reel.mp4',
    poster: '/videos/posters/client-growth-reel.jpg',
    vertical: true,
  },
  {
    title: 'Money talk reel',
    category: 'Talking head',
    length: '1:04',
    description:
      'A creator reel that opens on a money-rain hook, then holds attention with tight jump cuts, punchy captions and a numbered list.',
    tags: ['Hook', 'Jump cuts', 'Captions'],
    video: '/videos/social-media-reel.mp4',
    poster: '/videos/posters/social-media-reel.jpg',
    vertical: true,
  },
  {
    title: 'Learn-Turkish skit',
    category: 'Comedy short',
    length: '0:41',
    description:
      'A comedy short for a Turkish-teaching page: a car-wash skit as the hook, then each Turkish phrase pops up with its Persian translation and emoji accents.',
    tags: ['Skit', 'Bilingual captions', 'Emoji pops'],
    video: '/videos/automotive-short.mp4',
    poster: '/videos/posters/automotive-short.jpg',
    vertical: true,
  },
]

export const videoStack = [
  { group: 'Editing', items: ['Premiere Pro', 'Color grading', 'Sound design'] },
  { group: 'Motion', items: ['After Effects', 'Kinetic typography', 'Logo animation'] },
  { group: 'Formats', items: ['Reels & Shorts', 'Ads', 'YouTube'] },
]
