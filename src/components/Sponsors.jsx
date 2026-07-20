import Marquee from 'react-fast-marquee'

export default function Sponsors() {
  const logos = [
    { src: '/pxxl-logo.jpg', name: 'pxxl' },
    { src: '/reality3d-logo.jpg', name: 'Reality 3D Hub' },
  ]
  return (
    <section id="sponsors" className="overflow-hidden border-t border-[#d9d0c2] py-14 sm:py-20">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1180px]">
        <div className="mb-9 text-center text-sm text-[#6e675e]">Backed by founders and communities shaping Nigeria's tech future.</div>
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
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1180px]">
        <div className="mt-9 text-center text-sm">
          <span>Want your brand in this lineup?</span>
          {' '}<a className="font-semibold text-[#d94a2b] underline underline-offset-4" href="mailto:uwakmfone470@gmail.com">Become a partner →</a>
        </div>
      </div>
    </section>
  )
}
