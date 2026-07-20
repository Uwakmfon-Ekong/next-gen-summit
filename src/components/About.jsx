export default function About() {
  const points = [
    "Direct access to PH's most active young builders, before they're on anyone's radar",
    "Real talks and demos from people actually shipping — not just panels",
    "A platform designed to grow annually, not a one-off",
    "Genuine engagement over passive networking",
  ]
  return (
    <section id="about" className="">
      <div className="wrap reveal reveal-delay-1">
        <div className="eyebrow">Why This Exists</div>
        <h2 className="sectitle">Port Harcourt's rising tech talent rarely gets a stage built for them.</h2>
        <div className="split">
          <p className="quote">
            Free entry means the room fills with people who showed up because they <span className="it">care</span> — not because a ticket was cheap.
          </p>
          <ul className="whylist">
            {points.map((p, i) => (
              <li key={i}><span className="n">{String(i + 1).padStart(2, '0')}</span> {p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
