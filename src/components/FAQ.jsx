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
    <section id="faq">
      <div className="wrap">
        <div className="eyebrow">FAQ</div>
        <h2 className="sectitle">Questions, answered.</h2>
        <div className="faqlist">
          {ITEMS.map((item, i) => (
            <div className={`faq-item ${openIdx === i ? 'open' : ''}`} key={i}>
              <div className="faq-q" onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                {item.q} <span className="plus">+</span>
              </div>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
