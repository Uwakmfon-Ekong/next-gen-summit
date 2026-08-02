export default function About() {
  const points = [
    "All about innovation, getting the next gen caught up on tech fr",
    "Building a real future for Uyo's tech scene, starting with us",
    "Comes with a hackathon where you build real stuff that actually works",
    "Plus a live debate where the crowd votes in real time with NFC smart tags, no cap",
  ]
  return (
    <section id="about" className="border-t border-[#d9d0c2] py-14 sm:py-20">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1180px]">
        <div className="mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F236DE] before:h-px before:w-6 before:bg-[#F236DE]">The Idea</div>
        <h2 className="mb-4 max-w-[660px] font-['Prata'] text-[clamp(26px,5vw,40px)] font-normal leading-[1.16]">A student-run tech event, built different for real innovation and real impact.</h2>
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="font-['Prata'] text-[clamp(21px,3.4vw,28px)] leading-[1.42]">
            Free entry means the room fills with people who pulled up because they <span className="text-[#F236DE]">care</span>, not because a ticket was cheap.
          </p>
          <ul className="list-none">
            {points.map((p, i) => (
              <li className="flex gap-3.5 border-t border-[#d9d0c2] py-4 text-sm text-[#6e675e] last:border-b" key={i}>
                <span className="shrink-0 font-['Prata'] text-sm text-[#F236DE]">{String(i + 1).padStart(2, '0')}</span> {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
