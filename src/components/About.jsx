import Section from './Section.jsx'
import { about } from '../data/content.js'
import { useText } from '../i18n.jsx'

export default function About({ data = about, label = '// about' }) {
  const d = useText(data)
  return (
    <Section id="about" label={label}>
      <div className="glass flex max-w-3xl flex-col gap-6 rounded-[28px] p-7 sm:p-10 lg:ms-[20%]">
        <h2 className="font-display text-[clamp(28px,3.4vw,44px)] font-semibold leading-tight tracking-[-0.02em] text-balance">
          {d.title}
        </h2>
        {d.paragraphs.map((p) => (
          <p key={p.slice(0, 20)} className="text-lg leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </div>
    </Section>
  )
}
