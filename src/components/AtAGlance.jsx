const STATS = [
  { value: '300', label: 'Attendees expected' },
  { value: '1', label: 'Day, single-track focus' },
  { value: '20s', label: 'Core speaker & attendee age' },
  { value: 'Free', label: 'Entry for every attendee' },
]

export default function AtAGlance() {
  return (
    <section className="border-t border-[#d9d0c2] py-14 sm:py-20">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1180px]">
        <div className="mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F236DE] before:h-px before:w-6 before:bg-[#F236DE]">At A Glance</div>
        <h2 className="mb-12 max-w-[660px] font-['Prata'] text-[clamp(26px,5vw,40px)] font-normal leading-[1.16]">A focused, high-energy room, not a stretched-thin crowd.</h2>
        <div className="grid overflow-hidden rounded-2xl border border-[#d9d0c2] bg-[#d9d0c2] gap-px sm:grid-cols-4">
          {STATS.map(s => (
            <div className="bg-[#fffdf8] px-6 py-8 text-center" key={s.label}>
              <div className="font-['Prata'] text-4xl text-[#F236DE] sm:text-5xl">{s.value}</div>
              <div className="mt-2.5 text-xs text-[#6e675e]">{s.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-9 text-sm text-[#6e675e]">Comes with a hackathon and a live audience-voted debate. Not side quests, the main event.</p>
      </div>
    </section>
  )
}
