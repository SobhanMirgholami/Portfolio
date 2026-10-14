// All the text on the site lives here.
// To change a sentence, a link or a project, edit this file only.
// A link set to null is hidden until you fill it in.
// Text that changes with the language is written as { en: '...', fa: '...' } (see src/i18n.jsx).

export const profile = {
  name: { en: 'Sobhan Mirgholami', fa: 'سبحان میرغلامی' },
  alias: 'Co$mo',
  role: {
    en: 'Computer Engineering student at Istanbul Gelişim University.',
    fa: 'دانشجوی مهندسی کامپیوتر در دانشگاه گلیشیم استانبول.',
  },
  pitch: {
    en: "I build web apps and AI tools, with a video editor's eye for motion.",
    fa: 'وب‌اپلیکیشن و ابزارهای هوش مصنوعی می‌سازم، با نگاه یک تدوینگر به حرکت و ریتم.',
  },
  email: 'sobhan.mirgholami.dev@gmail.com',
  github: 'https://github.com/SobhanMirgholami',
  linkedin: 'https://www.linkedin.com/in/sobhan-mirgholami-a2093b417/',
  phone: '+905541377790', // used for both the phone and WhatsApp buttons
  phoneDisplay: '+90 554 137 77 90',
  telegram: 'Cosmodev2099',
  cv: null, // e.g. '/Sobhan-Mirgholami-CV.pdf' after you put the PDF in /public
  videoSite: '/video/', // the video portfolio page (its text is in data/video.js)
}

// Labels and buttons shared by both pages.
export const ui = {
  backToTop: { en: 'Back to top', fa: 'بازگشت به بالا' },
  sections: { en: 'Sections', fa: 'بخش‌ها' },
  switchLang: { en: 'نمایش به فارسی', fa: 'Switch to English' },
  aka: { en: '// aka', fa: '// یا همان' },
  scrollHint: { en: 'scroll to morph', fa: 'اسکرول کن، شکل عوض می‌شود' },
  contact: {
    label: { en: '// contact', fa: '// تماس' },
    heading: { en: ["Let's build", 'something.'], fa: ['بیا با هم', 'چیزی بسازیم.'] },
    emailMe: { en: 'Email me', fa: 'ایمیل بزن' },
    copyEmail: { en: 'Copy email', fa: 'کپی ایمیل' },
    copied: { en: 'Email copied', fa: 'ایمیل کپی شد' },
    downloadCv: { en: 'Download CV', fa: 'دانلود رزومه' },
    whatsapp: { en: 'WhatsApp', fa: 'واتس‌اپ' },
    whatsappValue: { en: 'Chat with me', fa: 'با من چت کن' },
    telegram: { en: 'Telegram', fa: 'تلگرام' },
    phone: { en: 'Phone', fa: 'تلفن' },
  },
  footer: { en: 'Made with ☕ and late nights in Istanbul', fa: 'ساخته‌شده با ☕ و شب‌بیداری‌های استانبول' },
}

// The dev page: browser-tab title, nav, hero buttons and section labels.
export const devPage = {
  title: { en: 'Sobhan Mirgholami — Co$mo', fa: 'سبحان میرغلامی — Co$mo' },
  links: [
    { href: '#about', label: { en: 'about', fa: 'درباره' } },
    { href: '#projects', label: { en: 'projects', fa: 'پروژه‌ها' } },
    { href: '#stack', label: { en: 'stack', fa: 'مهارت‌ها' } },
    { href: '#contact', label: { en: 'contact', fa: 'تماس' } },
  ],
  cta: { en: 'Video work →', fa: 'کارهای ویدیویی ←' },
  actions: [
    { href: '#projects', label: { en: 'See projects', fa: 'دیدن پروژه‌ها' }, primary: true },
    { href: '#contact', label: { en: 'Get in touch', fa: 'تماس با من' } },
  ],
  aboutLabel: { en: '// about', fa: '// درباره' },
  stackLabel: { en: '// stack', fa: '// مهارت‌ها' },
  note: {
    en: 'Open to internships, junior roles and freelance work.',
    fa: 'آماده‌ی کارآموزی، موقعیت‌های جونیور و پروژه‌های فریلنس هستم.',
  },
  projects: {
    label: { en: '// projects', fa: '// پروژه‌ها' },
    heading: { en: "Things I've built", fa: 'چیزهایی که ساخته‌ام' },
    allRepos: { en: 'All repos on GitHub ↗', fa: 'همه‌ی ریپوها در GitHub ↖' },
    builtWith: { en: 'Built with', fa: 'ساخته‌شده با' },
    screenshotOf: { en: 'Screenshot of', fa: 'اسکرین‌شات' },
    screenshotSoon: { en: 'screenshot coming soon', fa: 'اسکرین‌شات به‌زودی' },
    liveDemo: { en: 'Live demo ↗', fa: 'دموی زنده ↖' },
    live: { en: 'Live ↗', fa: 'نسخه‌ی زنده ↖' },
    code: { en: 'Code ↗', fa: 'کد ↖' },
  },
}

// The card that opens the video portfolio.
export const videoTeaser = {
  kicker: { en: 'the other side of Co$mo', fa: 'روی دیگر Co$mo' },
  title: { en: 'Video editing & motion graphics', fa: 'تدوین ویدیو و موشن‌گرافیک' },
  text: {
    en: 'Years of freelance editing, motion design and color. Reels, ads and YouTube work.',
    fa: 'سال‌ها تدوین فریلنس، موشن‌دیزاین و اصلاح رنگ؛ ریلز، تبلیغات و ویدیوهای یوتیوب.',
  },
  button: { en: 'Watch my work →', fa: 'دیدن کارهایم ←' },
  image: null, // e.g. '/media/teaser.jpg' in public/media/ (a photo of you or a frame from your reel, 16:9)
}

export const about = {
  title: { en: 'From cutting videos to writing code.', fa: 'از تدوین ویدیو تا نوشتن کد.' },
  paragraphs: [
    {
      en: "I spent years as a freelance video editor and motion designer, then taught English while studying Computer Engineering. Now I'm moving into software and AI engineering: React front-ends, Supabase back-ends and Python agents built from scratch.",
      fa: 'سال‌ها به‌صورت فریلنس تدوینگر و موشن‌دیزاینر بودم و بعد، در کنار تحصیل مهندسی کامپیوتر، انگلیسی درس دادم. حالا دارم وارد مهندسی نرم‌افزار و هوش مصنوعی می‌شوم: فرانت‌اندهای React، بک‌اندهای Supabase و ایجنت‌های Python که از صفر می‌سازم.',
    },
    {
      en: 'I care about things that work in real life, like an ordering app that makes the line at our university café shorter.',
      fa: 'برایم مهم است چیزی بسازم که در زندگی واقعی به کار بیاید؛ مثل اپ سفارشی که صف کافه‌ی دانشگاهمان را کوتاه‌تر می‌کند.',
    },
  ],
}

export const featured = {
  status: { en: 'Featured · Live demo', fa: 'ویژه · دموی زنده' },
  title: { en: 'IGU Café Menu', fa: 'منوی کافه‌ی IGU' },
  description: {
    en: 'Students order from their phones, pick a pickup time and watch their order go from received to ready, with a push notification even when the app is closed. Staff work from a live dashboard with PIN login and print 80mm receipts; the manager edits the menu and exports sales reports to Excel. Every table is locked down with row-level security, prices are calculated in the database, and it runs in Turkish, English and Arabic.',
    fa: 'دانشجوها با گوشی سفارش می‌دهند، زمان تحویل را انتخاب می‌کنند و می‌بینند سفارششان از «دریافت شد» تا «آماده است» پیش می‌رود؛ حتی وقتی اپ بسته است نوتیفیکیشن می‌گیرند. کارکنان با یک داشبورد زنده و ورود با PIN کار می‌کنند و رسید ۸۰ میلی‌متری چاپ می‌کنند؛ مدیر منو را ویرایش می‌کند و گزارش فروش را در Excel می‌گیرد. همه‌ی جدول‌ها با row-level security قفل شده‌اند، قیمت‌ها در خود دیتابیس حساب می‌شوند و اپ به ترکی، انگلیسی و عربی کار می‌کند.',
  },
  tags: ['React', 'Supabase', 'PostgreSQL', 'Realtime', 'Web Push', 'i18next', 'Vercel'],
  live: 'https://igu-menu-iqcg.vercel.app',
  code: 'https://github.com/SobhanMirgholami/IGU-menu',
  image: '/projects/cafe-showcase.jpg',
}

export const projects = [
  {
    status: { en: 'Live', fa: 'آنلاین' },
    title: { en: 'Cafe Roll Digital Menu', fa: 'منوی دیجیتال کافه رول' },
    description: {
      en: 'A QR-code menu for a real café, with search, categories and a Persian right-to-left layout. The owner manages products and photos from an admin dashboard; images are resized to WebP in the browser before upload.',
      fa: 'منوی QR برای یک کافه‌ی واقعی، با جستجو، دسته‌بندی و چیدمان راست‌به‌چپ فارسی. صاحب کافه محصولات و عکس‌ها را از داشبورد مدیریت عوض می‌کند و عکس‌ها پیش از آپلود، در خود مرورگر کوچک و به WebP تبدیل می‌شوند.',
    },
    tags: ['React', 'Supabase', 'Netlify'],
    live: 'https://roll-digital-menu.netlify.app',
    code: 'https://github.com/SobhanMirgholami/roll-menu',
    image: '/projects/roll-showcase.jpg',
  },
  {
    status: { en: 'In progress', fa: 'در حال ساخت' },
    title: { en: 'Instagram Auto-Reply', fa: 'پاسخ خودکار اینستاگرام' },
    description: {
      en: 'Replies to comments with keyword rules and an AI fallback, plus a dashboard to set keywords per post and reel.',
      fa: 'با قانون‌های کلیدواژه‌ای و یک هوش مصنوعی پشتیبان به کامنت‌ها جواب می‌دهد، همراه با داشبوردی برای تعیین کلیدواژه‌های هر پست و ریل.',
    },
    tags: ['Python', { en: 'AI', fa: 'هوش مصنوعی' }, { en: 'Dashboard', fa: 'داشبورد' }],
    code: null,
    image: null,
  },
]

export const stack = [
  { group: { en: 'Front-end', fa: 'فرانت‌اند' }, items: ['JavaScript', 'React', 'Vite', 'Tailwind CSS', 'HTML & CSS'] },
  { group: { en: 'Back-end & languages', fa: 'بک‌اند و زبان‌ها' }, items: ['Python', 'Supabase'] },
  { group: { en: 'Tools & design', fa: 'ابزار و طراحی' }, items: ['Git & GitHub', 'After Effects', 'Premiere Pro'] },
]
