const CARDS = [
  { idx: 'Builders', title: 'Developers & Engineers', desc: 'Young builders shipping real projects, looking for visibility and collaborators.' },
  { idx: 'Capital', title: 'Founders & Investors', desc: "Early-stage founders and the investors who want first access to PH's talent pipeline." },
  { idx: 'Community', title: 'The Tech-Curious', desc: 'Students, career-switchers, and anyone building their next opportunity.' },
]

export default function WhoItsFor() {
  return (
    <section id="who" className="whoitsfor reveal reveal-delay-1">
      <div className="wrap">
        <div className="eyebrow">Who It's For</div>
        <h2 className="sectitle">A deliberate mix — not just a hackathon, not just a mixer.</h2>
        <p className="secdesc">Three groups, one room, one day.</p>
      </div>
      <div className="wrap" style={{ padding: '0 28px' }}>
        <div className="grid3">
          {CARDS.map(c => (
            <div className="card" key={c.idx}>
              <div className="idx">{c.idx}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
