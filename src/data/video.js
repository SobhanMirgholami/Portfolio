// All the text on the video portfolio page (/video/) lives here.
// Text that changes with the language is written as { en: '...', fa: '...' } (see src/i18n.jsx).

// Browser-tab title, nav, hero buttons and labels of the video page.
export const videoPage = {
  title: { en: 'Sobhan Mirgholami — Video work', fa: 'سبحان میرغلامی — کارهای ویدیویی' },
  links: [
    { href: '#work', label: { en: 'work', fa: 'نمونه‌کار' } },
    { href: '#stack', label: { en: 'tools', fa: 'ابزارها' } },
    { href: '#contact', label: { en: 'contact', fa: 'تماس' } },
  ],
  cta: { en: '← Dev work', fa: '→ کارهای برنامه‌نویسی' },
  actions: [
    { href: '#work', label: { en: 'See my work', fa: 'دیدن کارهایم' }, primary: true },
    { href: '#contact', label: { en: 'Hire me', fa: 'همکاری با من' } },
  ],
  aboutLabel: { en: '// about', fa: '// درباره' },
  toolsLabel: { en: '// tools', fa: '// ابزارها' },
  note: {
    en: 'Available for freelance edits, reels and motion graphics.',
    fa: 'برای تدوین فریلنس، ریلز و موشن‌گرافیک در دسترسم.',
  },
  work: {
    label: { en: '// work', fa: '// نمونه‌کار' },
    heading: { en: 'Selected edits', fa: 'تدوین‌های منتخب' },
    play: { en: 'Play', fa: 'پخش' },
    comingSoon: { en: ', coming soon', fa: '، به‌زودی' }, // added after the title
    videoSoon: { en: 'video coming soon', fa: 'ویدیو به‌زودی' },
    close: { en: 'close ✕', fa: 'بستن ✕' },
  },
}

export const videoHero = {
  text: {
    en: 'Video editor and motion designer. I cut reels, ads and YouTube videos with pacing that keeps people watching.',
    fa: 'تدوینگر و موشن‌دیزاینر. ریلز، تبلیغات و ویدیوهای یوتیوب را با ریتمی تدوین می‌کنم که بیننده را تا آخر نگه دارد.',
  },
}

export const videoAbout = {
  title: { en: 'Every cut is a decision.', fa: 'هر کات یک تصمیم است.' },
  paragraphs: [
    {
      en: 'I spent years as a freelance video editor and motion designer: short-form reels, ads, YouTube videos and motion graphics for brands and creators.',
      fa: 'سال‌ها به‌صورت فریلنس تدوینگر و موشن‌دیزاینر بودم: ریلزهای کوتاه، تبلیغات، ویدیوهای یوتیوب و موشن‌گرافیک برای برندها و تولیدکننده‌های محتوا.',
    },
    {
      en: 'I care about rhythm, clean typography and sound that hits on the beat. These days I write code too, so I also build the tools and websites around the videos.',
      fa: 'ریتم، تایپوگرافی تمیز و صدایی که درست روی ضرب بنشیند برایم مهم است. این روزها کد هم می‌نویسم، پس ابزارها و وب‌سایت‌های کنار ویدیوها را هم خودم می‌سازم.',
    },
  ],
}

// Your videos live in /public/videos/ and their poster images in /public/videos/posters/.
// Posters load with the page; a video only starts downloading when someone hovers or clicks it.
// `video` can also be a YouTube or Vimeo link. The first video is shown big at the top.
export const videoProjects = [
  {
    title: { en: 'Hotel apartment tour', fa: 'تور هتل‌آپارتمان' },
    category: { en: 'Promo', fa: 'تیزر تبلیغاتی' },
    length: '1:05',
    description: {
      en: 'A walkthrough promo for a hotel apartment: the building, the lobby and every room type, with on-screen labels for room size so guests know exactly what they are booking.',
      fa: 'ویدیوی معرفی یک هتل‌آپارتمان: ساختمان، لابی و همه‌ی انواع اتاق، با برچسب‌های روی تصویر برای متراژ هر اتاق تا مهمان دقیقاً بداند چه چیزی رزرو می‌کند.',
    },
    tags: [{ en: 'Walkthrough', fa: 'تور ویدیویی' }, { en: 'On-screen labels', fa: 'برچسب روی تصویر' }, '16:9'],
    video: '/videos/hotel-promo.mp4',
    poster: '/videos/posters/hotel-promo.jpg',
    vertical: false,
  },
  {
    title: { en: 'Client trust reel', fa: 'ریل اعتماد مشتری' },
    category: { en: 'Talking head', fa: 'تاکینگ‌هد' },
    length: '0:54',
    description: {
      en: "A business-tips reel in Persian about winning clients' trust: big numbered titles for each point, word-by-word captions and a motion-graphics cutaway to keep the pace up.",
      fa: 'ریلی فارسی با نکته‌های کسب‌وکار درباره‌ی جلب اعتماد مشتری: تیترهای شماره‌دار بزرگ برای هر نکته، زیرنویس کلمه‌به‌کلمه و یک کات‌اوی موشن‌گرافیک برای حفظ ریتم.',
    },
    tags: [{ en: 'Numbered titles', fa: 'تیترهای شماره‌دار' }, { en: 'Captions', fa: 'زیرنویس' }, { en: 'Motion graphics', fa: 'موشن‌گرافیک' }],
    video: '/videos/client-growth-reel.mp4',
    poster: '/videos/posters/client-growth-reel.jpg',
    vertical: true,
  },
  {
    title: { en: 'Money talk reel', fa: 'ریل حرف‌های مالی' },
    category: { en: 'Talking head', fa: 'تاکینگ‌هد' },
    length: '1:04',
    description: {
      en: 'A creator reel that opens on a money-rain hook, then holds attention with tight jump cuts, punchy captions and a numbered list.',
      fa: 'ریل یک تولیدکننده‌ی محتوا که با هوک باران پول شروع می‌شود و بعد با جامپ‌کات‌های فشرده، زیرنویس‌های پرانرژی و یک فهرست شماره‌دار توجه را نگه می‌دارد.',
    },
    tags: [{ en: 'Hook', fa: 'هوک' }, { en: 'Jump cuts', fa: 'جامپ‌کات' }, { en: 'Captions', fa: 'زیرنویس' }],
    video: '/videos/social-media-reel.mp4',
    poster: '/videos/posters/social-media-reel.jpg',
    vertical: true,
  },
  {
    title: { en: 'Learn-Turkish skit', fa: 'اسکچ آموزش ترکی' },
    category: { en: 'Comedy short', fa: 'ویدیوی کوتاه طنز' },
    length: '0:41',
    description: {
      en: 'A comedy short for a Turkish-teaching page: a car-wash skit as the hook, then each Turkish phrase pops up with its Persian translation and emoji accents.',
      fa: 'ویدیوی کوتاه طنز برای یک پیج آموزش ترکی: یک اسکچ در کارواش به‌عنوان هوک، و بعد هر عبارت ترکی با ترجمه‌ی فارسی و ایموجی روی صفحه ظاهر می‌شود.',
    },
    tags: [{ en: 'Skit', fa: 'اسکچ' }, { en: 'Bilingual captions', fa: 'زیرنویس دوزبانه' }, { en: 'Emoji pops', fa: 'ایموجی‌های پاپ‌آپ' }],
    video: '/videos/automotive-short.mp4',
    poster: '/videos/posters/automotive-short.jpg',
    vertical: true,
  },
]

export const videoStack = [
  { group: { en: 'Editing', fa: 'تدوین' }, items: ['Premiere Pro', { en: 'Color grading', fa: 'اصلاح رنگ' }, { en: 'Sound design', fa: 'طراحی صدا' }] },
  { group: { en: 'Motion', fa: 'موشن' }, items: ['After Effects', { en: 'Kinetic typography', fa: 'تایپوگرافی متحرک' }, { en: 'Logo animation', fa: 'انیمیشن لوگو' }] },
  { group: { en: 'Formats', fa: 'فرمت‌ها' }, items: [{ en: 'Reels & Shorts', fa: 'ریلز و شورتس' }, { en: 'Ads', fa: 'تبلیغات' }, 'YouTube'] },
]
