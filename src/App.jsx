import { Component, Suspense, lazy, useCallback, useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Stack from './components/Stack.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { profile } from './data/content.js'

// The 3D code (three.js) is big, so it's loaded only after the page has appeared.
const MorphCanvas = lazy(() => import('./three/MorphCanvas.jsx'))

// If a device can't run WebGL, keep the CSS logo instead of crashing the page.
class SafeScene extends Component {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch(err) {
    console.warn('[morph] 3D scene disabled:', err)
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

function VideoTeaser() {
  const inner = (
    <>
      <div className="flex min-w-0 flex-col gap-2.5">
        <p className="font-mono text-[13px] text-coral">the other side of {profile.alias}</p>
        <p className="font-display text-[clamp(24px,3vw,36px)] font-semibold tracking-[-0.02em]">Video editing &amp; motion graphics</p>
      </div>
      <span className="rounded-full bg-coral px-6 py-4 font-bold text-[#12101a]">{profile.videoSite ? 'Watch the reel ↗' : 'Coming soon'}</span>
    </>
  )
  const cls = 'glass glass-coral flex flex-wrap items-center justify-between gap-6 rounded-[28px] p-8 sm:p-10'
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 sm:px-10">
      {profile.videoSite ? <a href={profile.videoSite} className={`${cls} text-fg`}>{inner}</a> : <div className={cls}>{inner}</div>}
    </div>
  )
}

export default function App() {
  const [load3d, setLoad3d] = useState(false)
  const [sceneReady, setSceneReady] = useState(false)
  const onReady = useCallback(() => setSceneReady(true), [])

  useEffect(() => {
    // wait until the browser is idle so the text shows up first
    const start = () => setLoad3d(true)
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(start, { timeout: 1500 })
      return () => window.cancelIdleCallback(id)
    }
    const id = setTimeout(start, 400)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero sceneReady={sceneReady} />
        <About />
        <Projects />
        <Stack />
        <VideoTeaser />
        <Contact />
      </main>
      <Footer />
      {load3d && (
        <SafeScene>
          <Suspense fallback={null}>
            <MorphCanvas onReady={onReady} />
          </Suspense>
        </SafeScene>
      )}
    </>
  )
}
