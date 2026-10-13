import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// fonts are bundled with the site (no Google Fonts request)
import '@fontsource-variable/unbounded'
import '@fontsource-variable/manrope'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/600.css'

import './index.css'
import App from './App.jsx'

if (new URLSearchParams(window.location.search).has('credits')) {
  console.log(
    '%c<Co$mo/>%c\nBuilt by Sobhan Mirgholami (Co$mo)\nhttps://sobhan-cosmo.vercel.app',
    'color:#f5b942;font:700 22px monospace',
    'color:#ececf1;font:14px monospace',
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
