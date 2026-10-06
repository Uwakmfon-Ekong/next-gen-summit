import { Link } from 'react-router-dom'

const FEATURED_SPEAKERS = [
  { name: 'Gordian Etim', role: 'Build, Ship, Get Picked', photo: '/Gordian.jpg' },
  { name: 'Kufre-abasi Bassey', role: 'From Student to Builder', photo: '/kufre.jpg' },
  { name: 'Aniebietabasi Obo', role: 'One Builder, Many Futures', photo: '/jurstadev.jpg' },
  { name: 'Honour', role: 'Building in Public', photo: '/pxxlfounder.jpeg' },
]

export default function Speakers() {
  return (
    <section id="speakers" className="border-t border-[#d9d0c2] py-14 sm:py-20">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1180px]">
        <div className="mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F236DE] before:h-px before:w-6 before:bg-[#F236DE]">Who's Talking</div>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-[660px] font-['Prata'] text-[clamp(26px,5vw,40px)] font-normal leading-[1.16]">People who've actually built the thing, not just talked about it.</h2>
          <Link to="/speakers" className="whitespace-nowrap border-b border-[#090909] pb-1 text-[15px] text-[#090909] no-underline">
            See all speakers
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {FEATURED_SPEAKERS.map((s) => (
            <div key={s.name} className="group">
              <div className="mx-auto aspect-square w-20 overflow-hidden rounded-full bg-[#d9d0c2] sm:w-24">
                <img
                  src={s.photo}
                  alt={s.name}
                  className="h-full w-full object-cover transition-all duration-300 group-hover:grayscale-0"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="mt-3 text-center">
                <div className="font-['Prata'] text-base">{s.name}</div>
                <div className="text-xs text-[#6e675e]">{s.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}