import { useCallback, useState } from 'react'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Stack from '../components/Stack.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'
import Scene from '../components/Scene.jsx'
import Work from './Work.jsx'
import Player from './Player.jsx'
import { VIDEO_SHAPES } from '../three/sampleShapes.js'
import { videoAbout, videoHero, videoPage, videoStack } from '../data/video.js'
import { useText } from '../i18n.jsx'

// The video portfolio (/video/). Same layout and parts as the main site,
// with coral as the accent (see .side-video in index.css) and the Adobe logos in the morph.
export default function VideoApp() {
  const [sceneReady, setSceneReady] = useState(false)
  const onReady = useCallback(() => setSceneReady(true), [])
  const [playing, setPlaying] = useState(null)
  const page = useText(videoPage)
  const hero = useText(videoHero)

  return (
    <>
      <Nav links={page.links} cta={{ href: '/', label: page.cta, className: 'bg-[#f5b942]' }} />
      <main>
        <Hero sceneReady={sceneReady} text={hero.text} actions={page.actions} />
        <Work onPlay={setPlaying} />
        <About data={videoAbout} label={page.aboutLabel} />
        <Stack groups={videoStack} label={page.toolsLabel} />
        <Contact note={page.note} />
      </main>
      <Footer />
      <Player item={playing} onClose={() => setPlaying(null)} />
      <Scene shapes={VIDEO_SHAPES} onReady={onReady} />
    </>
  )
}
