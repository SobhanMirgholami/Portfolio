import Logo from './Logo.jsx'
import { profile } from '../data/content.js'

const links = [
  { href: '#about', label: 'about' },
  { href: '#projects', label: 'projects' },
  { href: '#stack', label: 'stack' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-line/60 bg-ink/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-10">
        <a href="#top" className="text-fg no-underline" aria-label="Back to top">
          <Logo size={20} />
        </a>
        <nav className="hidden gap-7 font-mono text-[13px] md:flex" aria-label="Sections">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-dim transition-colors hover:text-fg">
              {l.label}
            </a>
          ))}
        </nav>
        {profile.videoSite ? (
          <a href={profile.videoSite} className="rounded-full bg-coral px-4 py-2.5 font-mono text-[13px] font-semibold text-ink">
            Video work ↗
          </a>
        ) : (
          <a href="#contact" className="rounded-full bg-amber px-4 py-2.5 font-mono text-[13px] font-semibold text-ink">
            Say hi
          </a>
        )}
      </div>
    </header>
  )
}
