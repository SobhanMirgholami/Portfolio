import { useCallback, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Stack from './components/Stack.jsx'
import VideoTeaser from './components/VideoTeaser.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Scene from './components/Scene.jsx'
import { DEV_SHAPES } from './three/sampleShapes.js'
import { devPage, profile } from './data/content.js'
import { useText } from './i18n.jsx'

export default function App() {
  const [sceneReady, setSceneReady] = useState(false)
  const onReady = useCallback(() => setSceneReady(true), [])
  const page = useText(devPage)
  const { role, pitch } = useText(profile)

  return (
    <>
      <Nav links={page.links} cta={{ href: profile.videoSite, label: page.cta, className: 'bg-coral' }} />
      <main>
        <Hero sceneReady={sceneReady} text={`${role} ${pitch}`} actions={page.actions} />
        <About label={page.aboutLabel} />
        <Projects />
        <Stack label={page.stackLabel} />
        <VideoTeaser />
        <Contact note={page.note} />
      </main>
      <Footer />
      <Scene shapes={DEV_SHAPES} onReady={onReady} />
    </>
  )
}
