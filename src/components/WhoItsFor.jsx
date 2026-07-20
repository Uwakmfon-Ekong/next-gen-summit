const CARDS = [
  { idx: 'Builders', title: 'Developers & Engineers', desc: 'Young builders shipping real projects, looking for visibility and collaborators.' },
  { idx: 'Capital', title: 'Founders & Investors', desc: "Early-stage founders and the investors who want first access to PH's talent pipeline." },
  { idx: 'Community', title: 'The Tech-Curious', desc: 'Students, career-switchers, and anyone building their next opportunity.' },
]

export default function WhoItsFor() {
  return (
    <section id="who" className="border-t border-[#d9d0c2] py-14 sm:py-20">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1180px]">
        <div className="mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d94a2b] before:h-px before:w-6 before:bg-[#d94a2b]">Who It's For</div>
        <h2 className="mb-4 max-w-[660px] font-['Prata'] text-[clamp(26px,5vw,40px)] font-normal leading-[1.16]">A deliberate mix — not just a hackathon, not just a mixer.</h2>
        <p className="mb-12 max-w-xl text-[15px] text-[#6e675e]">Three groups, one room, one day.</p>
      </div>
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1180px]">
        <div className="grid overflow-hidden rounded-2xl border border-[#d9d0c2] bg-[#d9d0c2] gap-px md:grid-cols-3">
          {CARDS.map(c => (
            <div className="bg-[#fffdf8] p-8 transition-colors hover:bg-[#eee7db]" key={c.idx}>
              <div className="mb-4 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#d94a2b]">{c.idx}</div>
              <h3 className="mb-2.5 font-['Prata'] text-xl font-normal">{c.title}</h3>
              <p className="text-sm text-[#6e675e]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
