import Marquee from 'react-fast-marquee'

const WHY_PARTNER = [
  "Direct access to Uyo's most active young tech talent, before they blow up",
  'Brand visibility across a high-energy content campaign: pre-event, day-of, and the recap',
  'Association with a first-of-its-kind youth tech platform, built to grow every year',
  'Real engagement, not just a logo slapped somewhere: speaking slots, demo tables, and direct intros to talent',
]

const TIERS = [
  { name: 'Gold', price: '₦600,000', perks: ['Talking slot & premium branding', 'Roll-up banners + demo table', 'Full-page advert + dedicated feature'] },
  { name: 'Diamond', price: '₦450,000', featured: true, perks: ['Talking slot', 'Roll-up banner + demo table', 'Custom social post'] },
  { name: 'Platinum', price: '₦300,000', perks: ['Talking slot', 'Logo on holding slides', 'Demo table'] },
  { name: 'Silver', price: '₦150,000', perks: ['Talking slot', 'Logo placement', 'Mention in event content'] },
]

export default function Sponsors() {
  const logos = [
    { src: '/pxxl-logo.jpg', name: 'pxxl' },
    { src: '/reality3d-logo.jpg', name: 'Reality 3D Hub' },
  ]
  return (
    <section id="sponsors" className="overflow-hidden border-t border-[#d9d0c2] py-14 sm:py-20">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1180px]">
        <div className="mb-9 text-center text-sm text-[#6e675e]">Backed by founders and communities shaping Uyo's tech future, real ones only.</div>
      </div>
      <div className="my-5 overflow-hidden">
        <Marquee pauseOnHover speed={42} autoFill>
          {logos.map((logo) => (
            <div className="mr-4 flex items-center gap-3.5 whitespace-nowrap rounded-lg border border-[#d9d0c2] bg-[#fffdf8] px-6 py-4" key={logo.name}>
              <img className="h-9 w-9 rounded-lg object-cover" src={logo.src} alt={logo.name} />
              <span className="font-['Prata'] text-[15px]">{logo.name}</span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="mx-auto mt-16 w-[calc(100%-2rem)] max-w-[1180px]">
        <div className="mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F236DE] before:h-px before:w-6 before:bg-[#F236DE]">Why Partner</div>
        <h2 className="mb-10 max-w-[660px] font-['Prata'] text-[clamp(26px,5vw,40px)] font-normal leading-[1.16]">Free entry means the room fills with people who pulled up because they actually care.</h2>
        <ul className="list-none">
          {WHY_PARTNER.map((p, i) => (
            <li className="flex gap-3.5 border-t border-[#d9d0c2] py-4 text-sm text-[#6e675e] last:border-b" key={i}>
              <span className="shrink-0 font-['Prata'] text-sm text-[#F236DE]">{String(i + 1).padStart(2, '0')}</span> {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-16 w-[calc(100%-2rem)] max-w-[1180px]">
        <div className="mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F236DE] before:h-px before:w-6 before:bg-[#F236DE]">Partnership Options</div>
        <h2 className="mb-3 max-w-[660px] font-['Prata'] text-[clamp(26px,5vw,40px)] font-normal leading-[1.16]">Flexible by design, let's shape what works for you.</h2>
        <p className="mb-10 max-w-xl text-[15px] text-[#6e675e]">Every tier includes a talking slot, social mention, logo placement, and shoutout on the day.</p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map(t => (
            <div key={t.name} className={`relative rounded-2xl border p-7 ${t.featured ? 'border-[#F236DE] bg-[#fffdf8] shadow-[0_18px_50px_rgba(9,9,9,0.07)]' : 'border-[#d9d0c2] bg-[#fffdf8]'}`}>
              {t.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-[#F236DE] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-[#fffdf8]">Selected</span>
              )}
              <div className="font-['Prata'] text-xl">{t.name}</div>
              <div className="mt-2 font-['Prata'] text-3xl text-[#F236DE]">{t.price}</div>
              <ul className="mt-6 list-none space-y-3">
                {t.perks.map(perk => (
                  <li className="flex gap-2.5 text-sm text-[#6e675e]" key={perk}>
                    <span className="shrink-0 text-[#F236DE]">→</span> {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-9 text-center text-sm text-[#6e675e]">
          Looking for something below ₦150,000, or an in-kind partnership? Reach out, we're happy to work something out.
        </div>
        <div className="mt-3 text-center text-sm">
          <span>Want your brand in this lineup?</span>
          {' '}<a className="font-semibold text-[#F236DE] underline underline-offset-4" href="mailto:whakee@nextgensummit.xyz"> Become a partner →</a>
        </div>
      </div>
    </section>
  )
}
