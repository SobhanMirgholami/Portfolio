import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LangProvider } from './i18n.jsx'
import './boot.js'
import App from './App.jsx'
import { devPage } from './data/content.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider title={devPage.title}>
      <App />
    </LangProvider>
  </StrictMode>,
)
