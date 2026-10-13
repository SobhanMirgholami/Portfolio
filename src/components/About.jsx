import Section from './Section.jsx'
import { about } from '../data/content.js'

export default function About() {
  return (
    <Section id="about" label="// about">
      <div className="glass flex max-w-3xl flex-col gap-6 rounded-[28px] p-7 sm:p-10 lg:ml-[20%]">
        <h2 className="font-display text-[clamp(28px,3.4vw,44px)] font-semibold leading-tight tracking-[-0.02em] text-balance">
          {about.title}
        </h2>
        {about.paragraphs.map((p) => (
          <p key={p.slice(0, 20)} className="text-lg leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </div>
    </Section>
  )
}
