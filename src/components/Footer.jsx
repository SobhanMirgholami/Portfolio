import { profile, ui } from '../data/content.js'
import { useText } from '../i18n.jsx'

export default function Footer() {
  const { name } = useText(profile)
  const t = useText(ui)
  return (
    <footer className="relative z-10 mx-auto flex max-w-7xl flex-wrap justify-between gap-3 border-t border-line/70 px-5 pb-12 pt-8 font-mono text-[13px] text-[#77778a] sm:px-10">
      <span>© {new Date().getFullYear()} {name} · {profile.alias}</span>
      <span>{t.footer}</span>
    </footer>
  )
}
