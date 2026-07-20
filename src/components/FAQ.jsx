import { useState } from 'react'

const ITEMS = [
  { q: 'Is it really free?', a: 'Yes — entry is completely free, made possible by our partners. RSVP to reserve your seat.' },
  { q: 'Where exactly in Port Harcourt?', a: 'Venue details will be shared with registered attendees closer to the date.' },
  { q: 'Do I need to be a developer to attend?', a: 'Not at all. Next Gen Summit is for builders, founders, investors, and anyone curious about tech.' },
  { q: 'How do I become a sponsor or speaker?', a: "Reach out via the contact details in the footer — we'd love to hear from you." },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)
  return (
    <section id="faq" className="border-t border-[#d9d0c2] py-14 sm:py-20">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1180px]">
        <div className="mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d94a2b] before:h-px before:w-6 before:bg-[#d94a2b]">FAQ</div>
        <h2 className="mb-4 font-['Prata'] text-[clamp(26px,5vw,40px)] font-normal leading-tight">Questions, answered.</h2>
        <div>
          {ITEMS.map((item, i) => (
            <div className="border-t border-[#d9d0c2] py-5 last:border-b" key={i}>
              <button
                className="flex w-full items-center justify-between gap-4 bg-transparent text-left font-['Prata'] text-base"
                aria-expanded={openIdx === i}
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
              >
                {item.q}
                <span className={`shrink-0 font-['Inter'] text-xl text-[#d94a2b] transition-transform ${openIdx === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div className={`grid transition-[grid-template-rows] duration-300 ${openIdx === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <p className="overflow-hidden text-sm text-[#6e675e]"><span className="block pt-3">{item.a}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
