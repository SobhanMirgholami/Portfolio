// All the text on the site lives here.
// To change a sentence, a link or a project, edit this file only.
// A link set to null is hidden until you fill it in.

export const profile = {
  name: 'Sobhan Mirgholami',
  alias: 'Co$mo',
  role: 'Computer Engineering student at Istanbul Gelişim University.',
  pitch: "I build web apps and AI tools, with a video editor's eye for motion.",
  email: 'sobhan.mirgholami.dev@gmail.com',
  github: 'https://github.com/SobhanMirgholami',
  linkedin: 'https://www.linkedin.com/in/sobhan-mirgholami-a2093b417/',
  phone: '+905541377790', // used for both the phone and WhatsApp buttons
  phoneDisplay: '+90 554 137 77 90',
  telegram: 'Cosmodev2099',
  cv: null, // e.g. '/Sobhan-Mirgholami-CV.pdf' after you put the PDF in /public
  videoSite: null, // the video portfolio link, once it exists
}

export const about = {
  title: 'From cutting videos to writing code.',
  paragraphs: [
    "I spent years as a freelance video editor and motion designer, then taught English while studying Computer Engineering. Now I'm moving into software and AI engineering: React front-ends, Supabase back-ends and Python agents built from scratch.",
    'I care about things that work in real life, like an ordering app that makes the line at our university café shorter.',
  ],
}

export const featured = {
  status: 'Featured · Live demo',
  title: 'IGU Café Menu',
  description:
    'Students order from their phones, pick a pickup time and watch their order go from received to ready, with a push notification even when the app is closed. Staff work from a live dashboard with PIN login and print 80mm receipts; the manager edits the menu and exports sales reports to Excel. Every table is locked down with row-level security, prices are calculated in the database, and it runs in Turkish, English and Arabic.',
  tags: ['React', 'Supabase', 'PostgreSQL', 'Realtime', 'Web Push', 'i18next', 'Vercel'],
  live: 'https://igu-menu-iqcg.vercel.app',
  code: 'https://github.com/SobhanMirgholami/IGU-menu',
  image: '/projects/cafe-showcase.jpg',
}

export const projects = [
  {
    status: 'Live',
    title: 'Cafe Roll Digital Menu',
    description:
      'A QR-code menu for a real café, with search, categories and a Persian right-to-left layout. The owner manages products and photos from an admin dashboard; images are resized to WebP in the browser before upload.',
    tags: ['React', 'Supabase', 'Netlify'],
    live: 'https://roll-digital-menu.netlify.app',
    code: 'https://github.com/SobhanMirgholami/roll-menu',
    image: '/projects/roll-showcase.jpg',
  },
  {
    status: 'In progress',
    title: 'Instagram Auto-Reply',
    description:
      'Replies to comments with keyword rules and an AI fallback, plus a dashboard to set keywords per post and reel.',
    tags: ['Python', 'AI', 'Dashboard'],
    code: null,
    image: null,
  },
]

export const stack = [
  { group: 'Front-end', items: ['JavaScript', 'React', 'Vite', 'Tailwind CSS', 'HTML & CSS'] },
  { group: 'Back-end & languages', items: ['Python', 'Supabase'] },
  { group: 'Tools & design', items: ['Git & GitHub', 'After Effects', 'Premiere Pro'] },
]
