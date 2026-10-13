import Section from './Section.jsx'
import { stack } from '../data/content.js'

export default function Stack() {
  return (
    <Section id="stack" label="// stack">
      <div className="glass flex flex-col gap-8 rounded-[28px] p-7 sm:p-10 lg:ml-[20%]">
        {stack.map((g) => (
          <div key={g.group} className="flex flex-col gap-3">
            <h3 className="font-display text-base font-semibold">{g.group}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {g.items.map((s) => (
                <li key={s} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[15px] font-medium transition-colors hover:border-amber">
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
