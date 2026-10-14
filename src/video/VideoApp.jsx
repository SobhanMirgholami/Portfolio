import { useCallback, useState } from 'react'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Stack from '../components/Stack.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import Scene from '../components/Scene.jsx'
import Reel from './Reel.jsx'
import Work from './Work.jsx'
import Player from './Player.jsx'
import { VIDEO_SHAPES } from '../three/sampleShapes.js'
import { videoAbout, videoHero, videoStack } from '../data/video.js'

// The video portfolio (/video/). Same layout and parts as the main site,
// with coral as the accent (see .side-video in index.css) and the Adobe logos in the morph.
const links = [
  { href: '#reel', label: 'reel' },
  { href: '#work', label: 'work' },
  { href: '#stack', label: 'tools' },
  { href: '#contact', label: 'contact' },
]

export default function VideoApp() {
  const [sceneReady, setSceneReady] = useState(false)
  const onReady = useCallback(() => setSceneReady(true), [])
  const [playing, setPlaying] = useState(null)

  return (
    <>
      <Nav links={links} cta={{ href: '/', label: '← Dev work', className: 'bg-[#f5b942]' }} />
      <main>
        <Hero
          sceneReady={sceneReady}
          text={videoHero.text}
          actions={[
            { href: '#reel', label: 'Watch the reel', primary: true },
            { href: '#contact', label: 'Hire me' },
          ]}
        />
        <Reel onPlay={setPlaying} />
        <About data={videoAbout} />
        <Work onPlay={setPlaying} />
        <Stack groups={videoStack} label="// tools" />
        <Contact note="Available for freelance edits, reels and motion graphics." />
      </main>
      <Footer />
      <Player item={playing} onClose={() => setPlaying(null)} />
      <Scene shapes={VIDEO_SHAPES} onReady={onReady} />
    </>
  )
}
