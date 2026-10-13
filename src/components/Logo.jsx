// The <Co$mo/> wordmark. `size` is the font size in px.
export default function Logo({ size = 20, className = '' }) {
  return (
    <span
      className={`inline-flex items-center font-mono font-semibold tracking-tight ${className}`}
      style={{ fontSize: size }}
      aria-label="Co$mo"
    >
      <span className="text-[#5d5d75]" aria-hidden="true">&lt;</span>
      <span aria-hidden="true">Co</span>
      <span className="text-amber" aria-hidden="true">$</span>
      <span aria-hidden="true">mo</span>
      <span className="text-[#5d5d75]" aria-hidden="true">/&gt;</span>
      <span
        className="cursor-blink ml-1 inline-block bg-amber"
        style={{ width: size * 0.45, height: size * 0.9 }}
        aria-hidden="true"
      />
    </span>
  )
}

// A CSS-only "3D" version, shown before the WebGL scene is ready.
export function LogoFallback({ size = 84 }) {
  return (
    <div className="logo-3d relative whitespace-nowrap font-mono font-semibold leading-none tracking-tighter" style={{ fontSize: size }} aria-hidden="true">
      <div
        className="absolute left-0 top-0 text-[#15151f]"
        style={{
          textShadow:
            '1px 1px 0 #1b1b28, 2px 2px 0 #1b1b28, 3px 3px 0 #202030, 4px 4px 0 #202030, 5px 5px 0 #25253a, 6px 6px 0 #25253a, 7px 7px 0 #2a2a40, 8px 8px 0 #2f2f48, 18px 26px 40px rgba(0,0,0,0.7)',
        }}
      >
        &lt;Co$mo/&gt;
      </div>
      <div className="relative flex items-center">
        <span className="metal-text">&lt;Co</span>
        <span className="metal-amber">$</span>
        <span className="metal-text">mo/&gt;</span>
        <span className="ml-2 inline-block bg-amber" style={{ width: size * 0.45, height: size * 0.9, boxShadow: '0 0 40px #f5b942' }} />
      </div>
    </div>
  )
}
