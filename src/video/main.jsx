import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../boot.js'
import VideoApp from './VideoApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VideoApp />
  </StrictMode>,
)
