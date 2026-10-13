<img src="assets/banner1.svg" alt="sobhan" width="100%">

<div align="center">

# 🪐 &lt;Co$mo/&gt; Portfolio

### My developer portfolio, where my logo morphs into my tech stack as you scroll.

![Status](https://img.shields.io/badge/status-in%20development-orange?style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-990000?style=for-the-badge&logo=webgl&logoColor=white)

**🌙 Dark · 🪟 Frosted glass · 🌀 3D scroll morph · 📱 Mobile ready**

### 🔗 [See it live](https://sobhan-cosmo.vercel.app)

</div>

---

## 💡 Why I built this

Before I started writing code, I spent years editing videos and making motion graphics. A plain portfolio with a photo and a list of skills didn't feel like me.

So I made my own logo, `<Co$mo/>`, out of thousands of glowing points that flow into each technology I use as you scroll, and back again at the end. It shows my projects and the eye for motion I bring from video. 🚀

---

## 🎨 Design

**Dark, cosmic and code-flavored**, with one amber accent.

- 🟡 Near-black background with an amber `$` accent (coral for the video side)
- 🪟 Frosted glass sections, so the 3D logo stays visible behind the content
- 🔤 **Unbounded** for headings, **Manrope** for text, **JetBrains Mono** for code bits
- 🌀 The logo morphs `<Co$mo/>` → JavaScript → React → Vite → Tailwind → Python → `<Co$mo/>`
- 🫧 Contact chips fill with WhatsApp green and Telegram blue, and float on hover
- ♿ Respects "reduce motion", keyboard focus styles, readable contrast

---

## ✨ Features

### 👀 For visitors
- 🪐 3D logo made of ~6,500 points that morphs as you scroll
- 🖱️ The logo tilts with your mouse
- 📂 Featured project with a 3-phone showcase, plus project cards with live and code links
- 📬 One-click email copy, plus WhatsApp, Telegram and phone
- 📱 Phones get fewer points and a smaller logo so it stays smooth

### 🛠️ Under the hood
- ⚡ The 3D code (three.js) loads only after the page appears, so the text shows instantly
- 🧯 If a device can't run WebGL, a CSS version of the logo stays instead
- 🎨 Every shape is sampled from a hidden canvas into points; a custom GLSL shader slides each point to the next shape
- ✏️ All text and links live in one file: `src/data/content.js`

---

## 🛠️ Tech stack

| | Technology |
|---|---|
| ⚛️ Frontend | React 19 + Vite 8 |
| 🎨 Styling | Tailwind CSS 4 with design tokens |
| 🪐 3D | three.js + React Three Fiber, custom GLSL shader |
| 🔤 Fonts | Unbounded, Manrope, JetBrains Mono (self-hosted with Fontsource) |
| 🚀 Hosting | Vercel, auto-deploy on every push |

---

## 📁 Project structure

<details>
<summary>Click to expand</summary>

```
src/
├── components/
│   ├── Nav.jsx            🧭 Top bar with the <Co$mo/> logo
│   ├── Hero.jsx           🪐 Name, pitch and the slot the 3D logo flies to
│   ├── About.jsx          📖 From video to code
│   ├── Projects.jsx       📂 Featured project + cards
│   ├── Stack.jsx          🧰 Skills by group
│   ├── Contact.jsx        📬 Email, WhatsApp, Telegram, phone
│   ├── Logo.jsx           ✏️ Wordmark + CSS fallback logo
│   ├── Section.jsx        🧱 Shared section wrapper
│   └── Footer.jsx         🔗 Footer line
├── three/
│   ├── sampleShapes.js    🎯 Turns the logo + SVGs into points
│   └── MorphCanvas.jsx    🌀 3D scene and morph shader
├── data/
│   └── content.js         ✏️ All the text and links
├── App.jsx                🧩 Page layout + lazy 3D loading
└── index.css              🎨 Design tokens, glass, hover animations

public/
├── logos/                 🖼️ SVGs the logo morphs into
├── projects/              📸 Project showcase images
└── favicon.svg            💲 The $ favicon

assets/
└── banner1.svg            🎨 README banner

LICENSE.md                 📜 How you can use this code
```

</details>

---

## 🚀 Getting started

**1. Clone and install**
```bash
npm install
```

**2. Edit your content**

Open `src/data/content.js` and change the text, links and projects. A link set to `null` stays hidden.

**3. Add a technology to the morph (optional)**

Put its SVG in `public/logos/` and add it to `LOGO_FILES` in `src/three/sampleShapes.js`.

> 💡 One-color SVGs get the brand color you set in `LOGO_FILES` automatically.

**4. Run it**
```bash
npm run dev
```

> ⚠️ In Windows PowerShell 5, run commands one per line: `&&` doesn't work there.

---

## 🗺️ Roadmap

### ✅ Done
- [x] 🎨 Design sketch and `<Co$mo/>` logo
- [x] 🪐 3D morphing hero with my real tech logos
- [x] 🪟 Frosted glass sections
- [x] 📸 Project showcases for IGU Café and Cafe Roll
- [x] 📬 WhatsApp, Telegram and phone contact chips
- [x] 🚀 Live on Vercel
- [x] 📜 Own license: free to use with credit

### 🚧 In progress
- [ ] 📸 Instagram Auto-Reply showcase

### 📌 Planned
- [ ] 📄 CV download
- [ ] 🎬 Video editing portfolio and cross-links

### 🔮 Future ideas
- [ ] 🌍 Turkish version
- [ ] ✍️ Blog posts about what I build

---

## 📜 License

This project has its own license. **Please read [LICENSE.md](LICENSE.md) before using the code.**

- ✅ You can copy, change and use it **if you credit me** or **get my permission**
- 🚫 You can't claim it as your own work

---

## 👨‍💻 About me

Hi, I'm **Sobhan Mirgholami**, a Computer Engineering student at **Istanbul Gelişim University**. I love programming, design, and solving real problems I see around me. This one started because I wanted a portfolio that moves like my videos do. 🎬

[LinkedIn](https://www.linkedin.com/in/sobhan-mirgholami-a2093b417/) · [GitHub](https://github.com/SobhanMirgholami)

---

<div align="center">

Made with ☕ and late nights in Istanbul

⭐ If you like this project, give it a star!

</div>
