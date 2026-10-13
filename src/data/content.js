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
  status: 'Featured · In progress',
  title: 'IGU Café Menu',
  description:
    'Students order from their phones, staff see orders live and the cashier prints an 80mm receipt. Row-level security on every table, prices calculated on the server, and Turkish, English and Arabic support.',
  tags: ['React', 'Vite', 'Tailwind', 'Supabase', 'Vercel'],
  live: null,
  code: null,
  image: null, // e.g. '/projects/cafe.png'
}

export const projects = [
  {
    status: 'In progress',
    title: 'Instagram Auto-Reply',
    description:
      'Replies to comments with keyword rules and an AI fallback, plus a dashboard to set keywords per post and reel.',
    tags: ['Python', 'AI', 'Dashboard'],
    code: null,
    image: null,
  },
  {
    status: 'Learning build',
    title: 'AI Agent from Scratch',
    description: 'A personal AI agent in Python with its own tool registry, built step by step without frameworks.',
    tags: ['Python', 'LLM APIs'],
    code: null,
    image: null,
  },
  {
    status: 'Practice',
    title: 'React Mini Apps',
    description: 'Movie Search, Profile Card and Movie List: where I learned components, props and state.',
    tags: ['React', 'Tailwind', 'Vite'],
    code: null,
    image: null,
  },
]

export const stack = [
  { group: 'Front-end', items: ['JavaScript', 'React', 'Vite', 'Tailwind CSS', 'HTML & CSS'] },
  { group: 'Back-end & languages', items: ['Python', 'Supabase', 'C++'] },
  { group: 'Tools & design', items: ['Git & GitHub', 'Figma', 'After Effects', 'Premiere Pro'] },
]
