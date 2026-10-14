import { Component, Suspense, lazy, useEffect, useState } from 'react'

// The 3D code (three.js) is big, so it's loaded only after the page has appeared.
const MorphCanvas = lazy(() => import('../three/MorphCanvas.jsx'))

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

// The morphing background. `shapes` is DEV_SHAPES or VIDEO_SHAPES from three/sampleShapes.js.
export default function Scene({ shapes, onReady }) {
  const [load3d, setLoad3d] = useState(false)

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

  if (!load3d) return null
  return (
    <SafeScene>
      <Suspense fallback={null}>
        <MorphCanvas shapes={shapes} onReady={onReady} />
      </Suspense>
    </SafeScene>
  )
}
