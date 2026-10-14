// All the text on the video portfolio page (/video/) lives here.
// Text that changes with the language is written as { en: '...', fa: '...', tr: '...' } (see src/i18n.jsx).

// Browser-tab title, nav, hero buttons and labels of the video page.
export const videoPage = {
  title: { en: 'Sobhan Mirgholami — Video work', fa: 'سبحان میرغلامی — کارهای ویدیویی', tr: 'Sobhan Mirgholami — Video işleri' },
  links: [
    { href: '#work', label: { en: 'work', fa: 'نمونه‌کار', tr: 'işler' } },
    { href: '#stack', label: { en: 'tools', fa: 'ابزارها', tr: 'araçlar' } },
    { href: '#contact', label: { en: 'contact', fa: 'تماس', tr: 'iletişim' } },
  ],
  cta: { en: '← Dev work', fa: '→ کارهای برنامه‌نویسی', tr: '← Yazılım işleri' },
  actions: [
    { href: '#work', label: { en: 'See my work', fa: 'دیدن کارهایم', tr: 'İşlerimi gör' }, primary: true },
    { href: '#contact', label: { en: 'Hire me', fa: 'همکاری با من', tr: 'Birlikte çalışalım' } },
  ],
  aboutLabel: { en: '// about', fa: '// درباره', tr: '// hakkımda' },
  toolsLabel: { en: '// tools', fa: '// ابزارها', tr: '// araçlar' },
  note: {
    en: 'Available for freelance edits, reels and motion graphics.',
    fa: 'برای تدوین فریلنس، ریلز و موشن‌گرافیک در دسترسم.',
    tr: 'Freelance kurgu, reels ve motion graphics işlerine açığım.',
  },
  work: {
    label: { en: '// work', fa: '// نمونه‌کار', tr: '// işler' },
    heading: { en: 'Selected edits', fa: 'تدوین‌های منتخب', tr: 'Seçme kurgular' },
    play: { en: 'Play', fa: 'پخش', tr: 'Oynat:' },
    comingSoon: { en: ', coming soon', fa: '، به‌زودی', tr: ', yakında' }, // added after the title
    videoSoon: { en: 'video coming soon', fa: 'ویدیو به‌زودی', tr: 'video yakında' },
    close: { en: 'close ✕', fa: 'بستن ✕', tr: 'kapat ✕' },
  },
}

export const videoHero = {
  text: {
    en: 'Video editor and motion designer. I cut reels, ads and YouTube videos with pacing that keeps people watching.',
    fa: 'تدوینگر و موشن‌دیزاینر. ریلز، تبلیغات و ویدیوهای یوتیوب را با ریتمی تدوین می‌کنم که بیننده را تا آخر نگه دارد.',
    tr: 'Video editörü ve motion tasarımcısı. Reels, reklam ve YouTube videolarını izleyiciyi ekranda tutan bir ritimle kurguluyorum.',
  },
}

export const videoAbout = {
  title: { en: 'Every cut is a decision.', fa: 'هر کات یک تصمیم است.', tr: 'Her kesme bir karardır.' },
  paragraphs: [
    {
      en: 'I spent years as a freelance video editor and motion designer: short-form reels, ads, YouTube videos and motion graphics for brands and creators.',
      fa: 'سال‌ها به‌صورت فریلنس تدوینگر و موشن‌دیزاینر بودم: ریلزهای کوتاه، تبلیغات، ویدیوهای یوتیوب و موشن‌گرافیک برای برندها و تولیدکننده‌های محتوا.',
      tr: 'Yıllarca freelance video editörü ve motion tasarımcısı olarak çalıştım: markalar ve içerik üreticileri için kısa reels, reklamlar, YouTube videoları ve motion graphics.',
    },
    {
      en: 'I care about rhythm, clean typography and sound that hits on the beat. These days I write code too, so I also build the tools and websites around the videos.',
      fa: 'ریتم، تایپوگرافی تمیز و صدایی که درست روی ضرب بنشیند برایم مهم است. این روزها کد هم می‌نویسم، پس ابزارها و وب‌سایت‌های کنار ویدیوها را هم خودم می‌سازم.',
      tr: 'Ritim, temiz tipografi ve tam vuruşa oturan ses benim için önemli. Artık kod da yazıyorum; videoların etrafındaki araçları ve web sitelerini de kendim geliştiriyorum.',
    },
  ],
}

// Your videos live in /public/videos/ and their poster images in /public/videos/posters/.
// Posters load with the page; a video only starts downloading when someone hovers or clicks it.
// `video` can also be a YouTube or Vimeo link. The first video is shown big at the top.
export const videoProjects = [
  {
    title: { en: 'Hotel apartment tour', fa: 'تور هتل‌آپارتمان', tr: 'Otel daire turu' },
    category: { en: 'Promo', fa: 'تیزر تبلیغاتی', tr: 'Tanıtım' },
    length: '1:05',
    description: {
      en: 'A walkthrough promo for a hotel apartment: the building, the lobby and every room type, with on-screen labels for room size so guests know exactly what they are booking.',
      fa: 'ویدیوی معرفی یک هتل‌آپارتمان: ساختمان، لابی و همه‌ی انواع اتاق، با برچسب‌های روی تصویر برای متراژ هر اتاق تا مهمان دقیقاً بداند چه چیزی رزرو می‌کند.',
      tr: 'Bir otel dairesi için tanıtım turu: bina, lobi ve tüm oda tipleri; misafirler tam olarak neyi rezerve ettiklerini bilsin diye oda büyüklüğünü gösteren ekran etiketleriyle.',
    },
    tags: [{ en: 'Walkthrough', fa: 'تور ویدیویی', tr: 'Tur' }, { en: 'On-screen labels', fa: 'برچسب روی تصویر', tr: 'Ekran etiketleri' }, '16:9'],
    video: '/videos/hotel-promo.mp4',
    poster: '/videos/posters/hotel-promo.jpg',
    vertical: false,
  },
  {
    title: { en: 'Client trust reel', fa: 'ریل اعتماد مشتری', tr: 'Müşteri güveni reels’i' },
    category: { en: 'Talking head', fa: 'تاکینگ‌هد', tr: 'Konuşma videosu' },
    length: '0:54',
    description: {
      en: "A business-tips reel in Persian about winning clients' trust: big numbered titles for each point, word-by-word captions and a motion-graphics cutaway to keep the pace up.",
      fa: 'ریلی فارسی با نکته‌های کسب‌وکار درباره‌ی جلب اعتماد مشتری: تیترهای شماره‌دار بزرگ برای هر نکته، زیرنویس کلمه‌به‌کلمه و یک کات‌اوی موشن‌گرافیک برای حفظ ریتم.',
      tr: 'Müşterilerin güvenini kazanmak üzerine Farsça bir iş ipuçları reels’i: her madde için büyük numaralı başlıklar, kelime kelime altyazılar ve tempoyu yüksek tutan bir motion graphics ara planı.',
    },
    tags: [{ en: 'Numbered titles', fa: 'تیترهای شماره‌دار', tr: 'Numaralı başlıklar' }, { en: 'Captions', fa: 'زیرنویس', tr: 'Altyazı' }, { en: 'Motion graphics', fa: 'موشن‌گرافیک', tr: 'Motion graphics' }],
    video: '/videos/client-growth-reel.mp4',
    poster: '/videos/posters/client-growth-reel.jpg',
    vertical: true,
  },
  {
    title: { en: 'Money talk reel', fa: 'ریل حرف‌های مالی', tr: 'Para sohbeti reels’i' },
    category: { en: 'Talking head', fa: 'تاکینگ‌هد', tr: 'Konuşma videosu' },
    length: '1:04',
    description: {
      en: 'A creator reel that opens on a money-rain hook, then holds attention with tight jump cuts, punchy captions and a numbered list.',
      fa: 'ریل یک تولیدکننده‌ی محتوا که با هوک باران پول شروع می‌شود و بعد با جامپ‌کات‌های فشرده، زیرنویس‌های پرانرژی و یک فهرست شماره‌دار توجه را نگه می‌دارد.',
      tr: 'Para yağmuru kancasıyla açılan, ardından sıkı jump cut’lar, vurucu altyazılar ve numaralı bir listeyle dikkati tutan bir içerik üreticisi reels’i.',
    },
    tags: [{ en: 'Hook', fa: 'هوک', tr: 'Kanca' }, { en: 'Jump cuts', fa: 'جامپ‌کات', tr: 'Jump cut' }, { en: 'Captions', fa: 'زیرنویس', tr: 'Altyazı' }],
    video: '/videos/social-media-reel.mp4',
    poster: '/videos/posters/social-media-reel.jpg',
    vertical: true,
  },
  {
    title: { en: 'Learn-Turkish skit', fa: 'اسکچ آموزش ترکی', tr: 'Türkçe öğrenme skeci' },
    category: { en: 'Comedy short', fa: 'ویدیوی کوتاه طنز', tr: 'Komedi kısa video' },
    length: '0:41',
    description: {
      en: 'A comedy short for a Turkish-teaching page: a car-wash skit as the hook, then each Turkish phrase pops up with its Persian translation and emoji accents.',
      fa: 'ویدیوی کوتاه طنز برای یک پیج آموزش ترکی: یک اسکچ در کارواش به‌عنوان هوک، و بعد هر عبارت ترکی با ترجمه‌ی فارسی و ایموجی روی صفحه ظاهر می‌شود.',
      tr: 'Türkçe öğreten bir sayfa için komedi kısa videosu: kanca olarak bir oto yıkama skeci, ardından her Türkçe ifade Farsça çevirisi ve emoji vurgularıyla ekrana gelir.',
    },
    tags: [{ en: 'Skit', fa: 'اسکچ', tr: 'Skeç' }, { en: 'Bilingual captions', fa: 'زیرنویس دوزبانه', tr: 'İki dilli altyazı' }, { en: 'Emoji pops', fa: 'ایموجی‌های پاپ‌آپ', tr: 'Emoji efektleri' }],
    video: '/videos/automotive-short.mp4',
    poster: '/videos/posters/automotive-short.jpg',
    vertical: true,
  },
]

export const videoStack = [
  { group: { en: 'Editing', fa: 'تدوین', tr: 'Kurgu' }, items: ['Premiere Pro', { en: 'Color grading', fa: 'اصلاح رنگ', tr: 'Renk düzenleme' }, { en: 'Sound design', fa: 'طراحی صدا', tr: 'Ses tasarımı' }] },
  { group: { en: 'Motion', fa: 'موشن', tr: 'Motion' }, items: ['After Effects', { en: 'Kinetic typography', fa: 'تایپوگرافی متحرک', tr: 'Kinetik tipografi' }, { en: 'Logo animation', fa: 'انیمیشن لوگو', tr: 'Logo animasyonu' }] },
  { group: { en: 'Formats', fa: 'فرمت‌ها', tr: 'Formatlar' }, items: [{ en: 'Reels & Shorts', fa: 'ریلز و شورتس', tr: 'Reels ve Shorts' }, { en: 'Ads', fa: 'تبلیغات', tr: 'Reklamlar' }, 'YouTube'] },
]
