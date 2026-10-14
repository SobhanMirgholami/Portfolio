import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // three.js is ~900 kB before compression; it's lazy-loaded after the page shows, so that's fine
    chunkSizeWarningLimit: 1000,
    // two pages: the main site and the video portfolio at /video/
    rollupOptions: {
      input: {
        main: 'index.html',
        video: 'video/index.html',
      },
    },
  },
})
