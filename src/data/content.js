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
    gallery: { en: 'Screenshots', fa: 'اسکرین‌شات‌ها', tr: 'Ekran görüntüleri' },
    fullSize: { en: 'Open full size', fa: 'نمایش در اندازه‌ی کامل', tr: 'Tam boyutta aç' },
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
  // staff and manager screens were captured with sample data, not real orders
  gallery: [
    { src: '/projects/igu/student-login.webp', label: { en: 'Student: sign in with a university email', fa: 'دانشجو: ورود با ایمیل دانشگاه', tr: 'Öğrenci: üniversite e-postasıyla giriş' } },
    { src: '/projects/igu/student-home.webp', label: { en: 'Student: menu and live order progress', fa: 'دانشجو: منو و پیگیری زنده‌ی سفارش', tr: 'Öğrenci: menü ve canlı sipariş takibi' } },
    { src: '/projects/igu/student-options.webp', label: { en: 'Student: size, milk and extras', fa: 'دانشجو: انتخاب اندازه، شیر و افزودنی', tr: 'Öğrenci: boy, süt ve ekstra seçimi' } },
    { src: '/projects/igu/student-cart.webp', label: { en: 'Student: cart and pickup time', fa: 'دانشجو: سبد خرید و زمان تحویل', tr: 'Öğrenci: sepet ve teslim saati' } },
    { src: '/projects/igu/student-arabic-dark.webp', label: { en: 'Arabic, right-to-left, dark theme', fa: 'عربی، راست‌به‌چپ، پوسته‌ی تیره', tr: 'Arapça, sağdan sola, koyu tema' } },
    { src: '/projects/igu/staff-pin.webp', label: { en: 'Staff: PIN login on the shared computer', fa: 'کارکنان: ورود با PIN روی سیستم مشترک', tr: 'Personel: ortak bilgisayarda PIN girişi' } },
    { src: '/projects/igu/staff-orders.webp', label: { en: 'Staff: live orders dashboard', fa: 'کارکنان: داشبورد زنده‌ی سفارش‌ها', tr: 'Personel: canlı sipariş paneli' } },
    { src: '/projects/igu/manager-menu.webp', label: { en: 'Manager: menu editor in 3 languages', fa: 'مدیر: ویرایش منو به ۳ زبان', tr: 'Yönetici: 3 dilde menü düzenleyici' } },
    { src: '/projects/igu/manager-options.webp', label: { en: 'Manager: option groups', fa: 'مدیر: گروه‌های گزینه', tr: 'Yönetici: seçenek grupları' } },
    { src: '/projects/igu/manager-staff.webp', label: { en: 'Manager: staff and activity log', fa: 'مدیر: کارکنان و گزارش فعالیت', tr: 'Yönetici: personel ve işlem kaydı' } },
    { src: '/projects/igu/manager-reports.webp', label: { en: 'Manager: sales report with Excel export', fa: 'مدیر: گزارش فروش با خروجی Excel', tr: 'Yönetici: Excel’e aktarılabilen satış raporu' } },
  ],
}

export const projects = [
  {
    status: { en: 'Live · Client project', fa: 'آنلاین · پروژه‌ی مشتری', tr: 'Yayında · Müşteri projesi' },
    title: { en: 'Nikan Turkish Group', fa: 'گروه نیکان ترکیش', tr: 'Nikan Turkish Group' },
    description: {
      en: 'A full redesign for an Istanbul services company, in Persian (right-to-left) and Turkish, with light and dark themes. Everything on the site, from the daily lira rate to property listings, announcements, photos and contact buttons, is edited from a Persian admin panel. Row-level security lets visitors only read published content and send messages.',
      fa: 'بازطراحی کامل سایت یک شرکت خدماتی در استانبول، به فارسی (راست‌به‌چپ) و ترکی، با پوسته‌ی روشن و تیره. همه‌چیز سایت، از نرخ روز لیر تا آگهی‌های ملک، اطلاعیه‌ها، عکس‌ها و دکمه‌های تماس، از یک پنل مدیریت فارسی ویرایش می‌شود. row-level security باعث می‌شود بازدیدکننده‌ها فقط محتوای منتشرشده را ببینند و پیام بفرستند.',
      tr: 'İstanbul’daki bir hizmet şirketi için Farsça (sağdan sola) ve Türkçe, açık ve koyu temalı baştan yeni bir tasarım. Günlük lira kurundan emlak ilanlarına, duyurulara, fotoğraflara ve iletişim düğmelerine kadar sitedeki her şey Farsça bir yönetim panelinden düzenlenir. Row-level security sayesinde ziyaretçiler yalnızca yayındaki içeriği görür ve mesaj gönderebilir.',
    },
    tags: ['React', 'Supabase', 'PostgreSQL', 'RLS', 'i18next', 'Tailwind CSS', 'Vercel'],
    live: 'https://nikan-turkish.vercel.app',
    code: null, // client project, source is private
    image: '/projects/nikan-showcase.jpg',
    gallery: [
      { src: '/projects/nikan/client-home-fa.webp', label: { en: 'Home page, Persian', fa: 'صفحه‌ی اصلی، فارسی', tr: 'Ana sayfa, Farsça' } },
      { src: '/projects/nikan/client-home-fa-dark.webp', label: { en: 'Dark theme', fa: 'پوسته‌ی تیره', tr: 'Koyu tema' } },
      { src: '/projects/nikan/client-home-tr.webp', label: { en: 'Home page, Turkish', fa: 'صفحه‌ی اصلی، ترکی', tr: 'Ana sayfa, Türkçe' } },
      { src: '/projects/nikan/client-real-estate.webp', label: { en: 'Real estate with filters', fa: 'املاک با فیلتر', tr: 'Filtreli emlak sayfası' } },
      { src: '/projects/nikan/client-contact.webp', label: { en: 'Contact form by department', fa: 'فرم تماس با انتخاب واحد', tr: 'Birim seçmeli iletişim formu' } },
      { src: '/projects/nikan/client-mobile-fa.webp', label: { en: 'Mobile', fa: 'موبایل', tr: 'Mobil' } },
      { src: '/projects/nikan/admin-dashboard.webp', label: { en: 'Admin: dashboard and lira rate', fa: 'پنل مدیریت: داشبورد و نرخ لیر', tr: 'Yönetim: panel ve lira kuru' } },
      { src: '/projects/nikan/admin-listings.webp', label: { en: 'Admin: listing editor with FA/TR tabs', fa: 'پنل مدیریت: ویرایش آگهی با زبانه‌های فارسی و ترکی', tr: 'Yönetim: FA/TR sekmeli ilan düzenleyici' } },
      { src: '/projects/nikan/admin-pictures.webp', label: { en: 'Admin: slider and pictures', fa: 'پنل مدیریت: اسلایدر و تصاویر', tr: 'Yönetim: slayt ve görseller' } },
    ],
  },
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
    gallery: [
      { src: '/projects/roll/menu-desktop.webp', label: { en: 'Menu on desktop', fa: 'منو روی دسکتاپ', tr: 'Masaüstünde menü' } },
      { src: '/projects/roll/menu-mobile.webp', label: { en: 'Menu on a phone, by category', fa: 'منو روی گوشی، با دسته‌بندی', tr: 'Telefonda menü, kategoriye göre' } },
      { src: '/projects/roll/admin-login.webp', label: { en: 'Admin sign-in', fa: 'ورود مدیر', tr: 'Yönetici girişi' } },
      { src: '/projects/roll/admin-products.webp', label: { en: 'Admin: add and manage products', fa: 'پنل مدیریت: افزودن و مدیریت محصولات', tr: 'Yönetim: ürün ekleme ve yönetme' } },
      { src: '/projects/roll/admin-edit.webp', label: { en: 'Admin: edit a product', fa: 'پنل مدیریت: ویرایش محصول', tr: 'Yönetim: ürün düzenleme' } },
    ],
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
