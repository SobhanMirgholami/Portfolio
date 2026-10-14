// All the text on the site lives here.
// To change a sentence, a link or a project, edit this file only.
// A link set to null is hidden until you fill it in.
// Text that changes with the language is written as { en: '...', fa: '...', tr: '...' } (see src/i18n.jsx).

export const profile = {
  name: { en: 'Sobhan Mirgholami', fa: 'سبحان میرغلامی', tr: 'Sobhan Mirgholami' },
  alias: 'Co$mo',
  role: {
    en: 'Computer Engineering student at Istanbul Gelişim University.',
    fa: 'دانشجوی مهندسی کامپیوتر در دانشگاه گلیشیم استانبول.',
    tr: 'İstanbul Gelişim Üniversitesi’nde Bilgisayar Mühendisliği öğrencisi.',
  },
  pitch: {
    en: "I build web apps and AI tools, with a video editor's eye for motion.",
    fa: 'وب‌اپلیکیشن و ابزارهای هوش مصنوعی می‌سازم، با نگاه یک تدوینگر به حرکت و ریتم.',
    tr: 'Bir video editörünün harekete bakan gözüyle web uygulamaları ve yapay zekâ araçları geliştiriyorum.',
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
  backToTop: { en: 'Back to top', fa: 'بازگشت به بالا', tr: 'Başa dön' },
  sections: { en: 'Sections', fa: 'بخش‌ها', tr: 'Bölümler' },
  language: { en: 'Language', fa: 'زبان', tr: 'Dil' }, // label of the EN / فا / TR switch
  aka: { en: '// aka', fa: '// یا همان', tr: '// diğer adıyla' },
  scrollHint: { en: 'scroll to morph', fa: 'اسکرول کن، شکل عوض می‌شود', tr: 'dönüşüm için kaydır' },
  contact: {
    label: { en: '// contact', fa: '// تماس', tr: '// iletişim' },
    heading: { en: ["Let's build", 'something.'], fa: ['بیا با هم', 'چیزی بسازیم.'], tr: ['Hadi birlikte', 'bir şey yapalım.'] },
    emailMe: { en: 'Email me', fa: 'ایمیل بزن', tr: 'E-posta gönder' },
    copyEmail: { en: 'Copy email', fa: 'کپی ایمیل', tr: 'E-postayı kopyala' },
    copied: { en: 'Email copied', fa: 'ایمیل کپی شد', tr: 'E-posta kopyalandı' },
    downloadCv: { en: 'Download CV', fa: 'دانلود رزومه', tr: 'CV’yi indir' },
    whatsapp: { en: 'WhatsApp', fa: 'واتس‌اپ', tr: 'WhatsApp' },
    whatsappValue: { en: 'Chat with me', fa: 'با من چت کن', tr: 'Benimle yazış' },
    telegram: { en: 'Telegram', fa: 'تلگرام', tr: 'Telegram' },
    phone: { en: 'Phone', fa: 'تلفن', tr: 'Telefon' },
  },
  footer: { en: 'Made with ☕ and late nights in Istanbul', fa: 'ساخته‌شده با ☕ و شب‌بیداری‌های استانبول', tr: 'İstanbul’da ☕ ve uzun gecelerle yapıldı' },
}

// The dev page: browser-tab title, nav, hero buttons and section labels.
export const devPage = {
  title: { en: 'Sobhan Mirgholami — Co$mo', fa: 'سبحان میرغلامی — Co$mo', tr: 'Sobhan Mirgholami — Co$mo' },
  links: [
    { href: '#about', label: { en: 'about', fa: 'درباره', tr: 'hakkımda' } },
    { href: '#projects', label: { en: 'projects', fa: 'پروژه‌ها', tr: 'projeler' } },
    { href: '#stack', label: { en: 'stack', fa: 'مهارت‌ها', tr: 'yetenekler' } },
    { href: '#contact', label: { en: 'contact', fa: 'تماس', tr: 'iletişim' } },
  ],
  cta: { en: 'Video work →', fa: 'کارهای ویدیویی ←', tr: 'Video işleri →' },
  actions: [
    { href: '#projects', label: { en: 'See projects', fa: 'دیدن پروژه‌ها', tr: 'Projeleri gör' }, primary: true },
    { href: '#contact', label: { en: 'Get in touch', fa: 'تماس با من', tr: 'İletişime geç' } },
  ],
  aboutLabel: { en: '// about', fa: '// درباره', tr: '// hakkımda' },
  stackLabel: { en: '// stack', fa: '// مهارت‌ها', tr: '// yetenekler' },
  note: {
    en: 'Open to internships, junior roles and freelance work.',
    fa: 'آماده‌ی کارآموزی، موقعیت‌های جونیور و پروژه‌های فریلنس هستم.',
    tr: 'Staj, junior pozisyonlar ve freelance işlere açığım.',
  },
  projects: {
    label: { en: '// projects', fa: '// پروژه‌ها', tr: '// projeler' },
    heading: { en: "Things I've built", fa: 'چیزهایی که ساخته‌ام', tr: 'Geliştirdiklerim' },
    allRepos: { en: 'All repos on GitHub ↗', fa: 'همه‌ی ریپوها در GitHub ↖', tr: 'Tüm repolar GitHub’da ↗' },
    builtWith: { en: 'Built with', fa: 'ساخته‌شده با', tr: 'Kullanılanlar' },
    screenshotOf: { en: 'Screenshot of', fa: 'اسکرین‌شات', tr: 'Ekran görüntüsü:' },
    screenshotSoon: { en: 'screenshot coming soon', fa: 'اسکرین‌شات به‌زودی', tr: 'ekran görüntüsü yakında' },
    liveDemo: { en: 'Live demo ↗', fa: 'دموی زنده ↖', tr: 'Canlı demo ↗' },
    live: { en: 'Live ↗', fa: 'نسخه‌ی زنده ↖', tr: 'Canlı ↗' },
    code: { en: 'Code ↗', fa: 'کد ↖', tr: 'Kod ↗' },
  },
}

// The card that opens the video portfolio.
export const videoTeaser = {
  kicker: { en: 'the other side of Co$mo', fa: 'روی دیگر Co$mo', tr: 'Co$mo’nun diğer yüzü' },
  title: { en: 'Video editing & motion graphics', fa: 'تدوین ویدیو و موشن‌گرافیک', tr: 'Video kurgu ve motion graphics' },
  text: {
    en: 'Years of freelance editing, motion design and color. Reels, ads and YouTube work.',
    fa: 'سال‌ها تدوین فریلنس، موشن‌دیزاین و اصلاح رنگ؛ ریلز، تبلیغات و ویدیوهای یوتیوب.',
    tr: 'Yıllarca freelance kurgu, motion tasarım ve renk düzenleme. Reels, reklam ve YouTube işleri.',
  },
  button: { en: 'Watch my work →', fa: 'دیدن کارهایم ←', tr: 'İşlerimi izle →' },
  image: null, // e.g. '/media/teaser.jpg' in public/media/ (a photo of you or a frame from your reel, 16:9)
}

export const about = {
  title: { en: 'From cutting videos to writing code.', fa: 'از تدوین ویدیو تا نوشتن کد.', tr: 'Video kesmekten kod yazmaya.' },
  paragraphs: [
    {
      en: "I spent years as a freelance video editor and motion designer, then taught English while studying Computer Engineering. Now I'm moving into software and AI engineering: React front-ends, Supabase back-ends and Python agents built from scratch.",
      fa: 'سال‌ها به‌صورت فریلنس تدوینگر و موشن‌دیزاینر بودم و بعد، در کنار تحصیل مهندسی کامپیوتر، انگلیسی درس دادم. حالا دارم وارد مهندسی نرم‌افزار و هوش مصنوعی می‌شوم: فرانت‌اندهای React، بک‌اندهای Supabase و ایجنت‌های Python که از صفر می‌سازم.',
      tr: 'Yıllarca freelance video editörü ve motion tasarımcısı olarak çalıştım, ardından Bilgisayar Mühendisliği okurken İngilizce öğrettim. Şimdi yazılım ve yapay zekâ mühendisliğine geçiyorum: React ön yüzler, Supabase arka uçlar ve sıfırdan yazdığım Python ajanları.',
    },
    {
      en: 'I care about things that work in real life, like an ordering app that makes the line at our university café shorter.',
      fa: 'برایم مهم است چیزی بسازم که در زندگی واقعی به کار بیاید؛ مثل اپ سفارشی که صف کافه‌ی دانشگاهمان را کوتاه‌تر می‌کند.',
      tr: 'Gerçek hayatta işe yarayan şeyleri önemsiyorum; üniversitemizin kafesindeki sırayı kısaltan bir sipariş uygulaması gibi.',
    },
  ],
}

export const featured = {
  status: { en: 'Featured · Live demo', fa: 'ویژه · دموی زنده', tr: 'Öne çıkan · Canlı demo' },
  title: { en: 'IGU Café Menu', fa: 'منوی کافه‌ی IGU', tr: 'IGU Kafe Menüsü' },
  description: {
    en: 'Students order from their phones, pick a pickup time and watch their order go from received to ready, with a push notification even when the app is closed. Staff work from a live dashboard with PIN login and print 80mm receipts; the manager edits the menu and exports sales reports to Excel. Every table is locked down with row-level security, prices are calculated in the database, and it runs in Turkish, English and Arabic.',
    fa: 'دانشجوها با گوشی سفارش می‌دهند، زمان تحویل را انتخاب می‌کنند و می‌بینند سفارششان از «دریافت شد» تا «آماده است» پیش می‌رود؛ حتی وقتی اپ بسته است نوتیفیکیشن می‌گیرند. کارکنان با یک داشبورد زنده و ورود با PIN کار می‌کنند و رسید ۸۰ میلی‌متری چاپ می‌کنند؛ مدیر منو را ویرایش می‌کند و گزارش فروش را در Excel می‌گیرد. همه‌ی جدول‌ها با row-level security قفل شده‌اند، قیمت‌ها در خود دیتابیس حساب می‌شوند و اپ به ترکی، انگلیسی و عربی کار می‌کند.',
    tr: 'Öğrenciler telefonlarından sipariş verir, teslim saatini seçer ve siparişin “alındı”dan “hazır”a ilerleyişini izler; uygulama kapalıyken bile push bildirimi gelir. Personel PIN girişli canlı bir panelden çalışır ve 80 mm fiş yazdırır; yönetici menüyü düzenler ve satış raporlarını Excel’e aktarır. Her tablo row-level security ile korunur, fiyatlar veritabanında hesaplanır ve uygulama Türkçe, İngilizce ve Arapça çalışır.',
  },
  tags: ['React', 'Supabase', 'PostgreSQL', 'Realtime', 'Web Push', 'i18next', 'Vercel'],
  live: 'https://igu-menu-iqcg.vercel.app',
  code: 'https://github.com/SobhanMirgholami/IGU-menu',
  image: '/projects/cafe-showcase.jpg',
}

export const projects = [
  {
    status: { en: 'Live', fa: 'آنلاین', tr: 'Yayında' },
    title: { en: 'Cafe Roll Digital Menu', fa: 'منوی دیجیتال کافه رول', tr: 'Cafe Roll Dijital Menü' },
    description: {
      en: 'A QR-code menu for a real café, with search, categories and a Persian right-to-left layout. The owner manages products and photos from an admin dashboard; images are resized to WebP in the browser before upload.',
      fa: 'منوی QR برای یک کافه‌ی واقعی، با جستجو، دسته‌بندی و چیدمان راست‌به‌چپ فارسی. صاحب کافه محصولات و عکس‌ها را از داشبورد مدیریت عوض می‌کند و عکس‌ها پیش از آپلود، در خود مرورگر کوچک و به WebP تبدیل می‌شوند.',
      tr: 'Gerçek bir kafe için arama, kategoriler ve Farsça sağdan sola düzene sahip bir QR menü. Kafe sahibi ürünleri ve fotoğrafları yönetim panelinden düzenler; görseller yüklenmeden önce tarayıcıda küçültülüp WebP’ye dönüştürülür.',
    },
    tags: ['React', 'Supabase', 'Netlify'],
    live: 'https://roll-digital-menu.netlify.app',
    code: 'https://github.com/SobhanMirgholami/roll-menu',
    image: '/projects/roll-showcase.jpg',
  },
  {
    status: { en: 'In progress', fa: 'در حال ساخت', tr: 'Geliştiriliyor' },
    title: { en: 'Instagram Auto-Reply', fa: 'پاسخ خودکار اینستاگرام', tr: 'Instagram Otomatik Yanıt' },
    description: {
      en: 'Replies to comments with keyword rules and an AI fallback, plus a dashboard to set keywords per post and reel.',
      fa: 'با قانون‌های کلیدواژه‌ای و یک هوش مصنوعی پشتیبان به کامنت‌ها جواب می‌دهد، همراه با داشبوردی برای تعیین کلیدواژه‌های هر پست و ریل.',
      tr: 'Yorumlara anahtar kelime kurallarıyla, gerekirse de yapay zekâyla yanıt verir; her gönderi ve reel için anahtar kelime belirlenen bir paneli de var.',
    },
    tags: ['Python', { en: 'AI', fa: 'هوش مصنوعی', tr: 'Yapay zekâ' }, { en: 'Dashboard', fa: 'داشبورد', tr: 'Panel' }],
    code: null,
    image: null,
  },
]

export const stack = [
  { group: { en: 'Front-end', fa: 'فرانت‌اند', tr: 'Ön yüz' }, items: ['JavaScript', 'React', 'Vite', 'Tailwind CSS', 'HTML & CSS'] },
  { group: { en: 'Back-end & languages', fa: 'بک‌اند و زبان‌ها', tr: 'Arka uç ve diller' }, items: ['Python', 'Supabase'] },
  { group: { en: 'Tools & design', fa: 'ابزار و طراحی', tr: 'Araçlar ve tasarım' }, items: ['Git & GitHub', 'After Effects', 'Premiere Pro'] },
]
