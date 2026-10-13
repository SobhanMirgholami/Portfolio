import Section from './Section.jsx'
import { stack } from '../data/content.js'

export default function Stack() {
  return (
    <Section id="stack" label="// stack">
      <div className="flex flex-col gap-8 lg:ml-[25%]">
        {stack.map((g) => (
          <div key={g.group} className="flex flex-col gap-3">
            <h3 className="font-display text-base font-semibold">{g.group}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {g.items.map((s) => (
                <li key={s} className="rounded-xl border border-[#2a2a3e] bg-[#141420]/90 px-4 py-2.5 text-[15px] font-medium transition-colors hover:border-amber">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
