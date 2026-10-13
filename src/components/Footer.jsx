import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto flex max-w-7xl flex-wrap justify-between gap-3 border-t border-line/70 px-5 pb-12 pt-8 font-mono text-[13px] text-[#77778a] sm:px-10">
      <span>© {new Date().getFullYear()} {profile.name} · {profile.alias}</span>
      <span>Made with ☕ and late nights in Istanbul</span>
    </footer>
  )
}
