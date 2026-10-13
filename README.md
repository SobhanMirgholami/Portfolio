<div align="center">

# 🪐 &lt;Co$mo/&gt; Portfolio

My developer portfolio, with a 3D logo that morphs into my tech stack as you scroll.

![Status](https://img.shields.io/badge/status-in%20progress-f5b942?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-r3f-000000?style=for-the-badge&logo=threedotjs&logoColor=white)

</div>

## 💡 Why I built this

I spent years editing videos and doing motion graphics before I moved into code. I wanted a portfolio that shows both sides: real projects, and the eye for motion I bring from video. So instead of a plain hero image, my own logo is made of thousands of glowing points that flow into each technology I use.

## ✨ Features

**For visitors**
- 🪐 3D `<Co$mo/>` logo that morphs into JavaScript → React → Vite → Tailwind → Python, then back, as you scroll
- 🖱️ The logo tilts with your mouse
- 📂 Featured project + project cards
- 📬 One-click copy for my email
- 📱 Works on phones (fewer points, smaller logo)

**Under the hood**
- ⚡ The 3D code loads only after the page appears, so text shows instantly
- 🧯 If a device can't run WebGL, a CSS version of the logo stays instead
- ♿ Respects "reduce motion" settings
- ✏️ All text lives in one file: `src/data/content.js`

## 🛠️ Tech stack

| Part | Tool |
| --- | --- |
| UI | React 19 + Vite 8 |
| Styling | Tailwind CSS 4 |
| 3D | three.js + React Three Fiber, custom GLSL shader |
| Fonts | Unbounded, Manrope, JetBrains Mono (self-hosted with Fontsource) |

## 📁 Project structure

<details>
<summary>Click to open</summary>

```
public/
  favicon.svg
  logos/                 ← SVG logos the 3D object morphs into
src/
  data/content.js        ← all the text and links
  components/            ← Nav, Hero, About, Projects, Stack, Contact, Footer
  three/
    sampleShapes.js      ← turns the logo + SVGs into points
    MorphCanvas.jsx      ← the 3D scene and the morph shader
  App.jsx
  index.css              ← design tokens (colors, fonts)
```

</details>

## 🚀 Getting started

1. Install packages
   ```bash
   npm install
   ```
2. Start the dev server
   ```bash
   npm run dev
   ```
3. Build for production
   ```bash
   npm run build
   ```

To add a technology to the morph, put its SVG in `public/logos/` and add it to `LOGO_FILES` in `src/three/sampleShapes.js`.

## 🗺️ Roadmap

- ✅ Design and logo
- ✅ 3D morphing hero
- 🚧 Project screenshots and links
- 📌 Deploy on Vercel
- 📌 Video portfolio and cross-links
- 📌 CV download

## 👨‍💻 About me

**Sobhan Mirgholami** (Co$mo), Computer Engineering student at Istanbul Gelişim University.

[GitHub](https://github.com/SobhanMirgholami) · [LinkedIn](https://www.linkedin.com/in/sobhan-mirgholami-a2093b417/)

<div align="center">

Made with ☕ and late nights in Istanbul

</div>
make the morphing object more visible by adding glass like effect on each section so the client can see it morphing clearly