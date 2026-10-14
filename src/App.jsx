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
import { profile } from './data/content.js'

const links = [
  { href: '#about', label: 'about' },
  { href: '#projects', label: 'projects' },
  { href: '#stack', label: 'stack' },
  { href: '#contact', label: 'contact' },
]

export default function App() {
  const [sceneReady, setSceneReady] = useState(false)
  const onReady = useCallback(() => setSceneReady(true), [])

  return (
    <>
      <Nav links={links} cta={{ href: profile.videoSite, label: 'Video work →', className: 'bg-coral' }} />
      <main>
        <Hero
          sceneReady={sceneReady}
          text={`${profile.role} ${profile.pitch}`}
          actions={[
            { href: '#projects', label: 'See projects', primary: true },
            { href: '#contact', label: 'Get in touch' },
          ]}
        />
        <About />
        <Projects />
        <Stack />
        <VideoTeaser />
        <Contact />
      </main>
      <Footer />
      <Scene shapes={DEV_SHAPES} onReady={onReady} />
    </>
  )
}
