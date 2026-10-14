import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LangProvider } from '../i18n.jsx'
import '../boot.js'
import VideoApp from './VideoApp.jsx'
import { videoPage } from '../data/video.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LangProvider title={videoPage.title}>
      <VideoApp />
    </LangProvider>
  </StrictMode>,
)
