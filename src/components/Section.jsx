// Shared wrapper so every section has the same width, padding and label style.
export default function Section({ id, label, children, className = '' }) {
  return (
    <section id={id} className={`relative z-10 mx-auto max-w-7xl scroll-mt-20 border-t border-line/70 px-5 py-20 sm:px-10 sm:py-24 ${className}`}>
      {label && <p className="mb-6 font-mono text-sm text-amber">{label}</p>}
      {children}
    </section>
  )
}
