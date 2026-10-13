import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// fonts are bundled with the site (no Google Fonts request)
import '@fontsource-variable/unbounded'
import '@fontsource-variable/manrope'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/600.css'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
