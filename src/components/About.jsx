export default function About() {
  const points = [
    "Direct access to PH's most active young builders, before they're on anyone's radar",
    "Real talks and demos from people actually shipping — not just panels",
    "A platform designed to grow annually, not a one-off",
    "Genuine engagement over passive networking",
  ]
  return (
    <section id="about" className="border-t border-[#d9d0c2] py-14 sm:py-20">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1180px]">
        <div className="mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d94a2b] before:h-px before:w-6 before:bg-[#d94a2b]">Why This Exists</div>
        <h2 className="mb-4 max-w-[660px] font-['Prata'] text-[clamp(26px,5vw,40px)] font-normal leading-[1.16]">Port Harcourt's rising tech talent rarely gets a stage built for them.</h2>
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="font-['Prata'] text-[clamp(21px,3.4vw,28px)] leading-[1.42]">
            Free entry means the room fills with people who showed up because they <span className="text-[#d94a2b]">care</span> — not because a ticket was cheap.
          </p>
          <ul className="list-none">
            {points.map((p, i) => (
              <li className="flex gap-3.5 border-t border-[#d9d0c2] py-4 text-sm text-[#6e675e] last:border-b" key={i}>
                <span className="shrink-0 font-['Prata'] text-sm text-[#d94a2b]">{String(i + 1).padStart(2, '0')}</span> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
