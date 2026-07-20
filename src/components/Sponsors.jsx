export default function Sponsors() {
  const logos = [
    { src: '/pxxl-logo.jpg', name: 'pxxl' },
    { src: '/reality3d-logo.jpg', name: 'Reality 3D Hub' },
  ]
  const loop = [...logos, ...logos] // duplicated for seamless scroll

  return (
    <section id="sponsors">
      <div className="wrap">
        <div className="backedby-label">Backed by founders and communities shaping Nigeria's tech future.</div>
      </div>
      <div className="marquee-wrap">
        <div className="marquee">
          {loop.map((logo, i) => (
            <div className="partnercard" key={i}>
              <img src={logo.src} alt={logo.name} />
              <span>{logo.name}</span>
            </div>
          ))}
        
        </div>
      </div>
      <div className="wrap">
        <div className="partner-cta reveal" style={{ marginTop: 36, textAlign: 'center' }}>
          <span>Want your brand in this lineup?</span>
          <a href="mailto:uwakmfone470@gmail.com">Become a partner →</a>
        </div>
      </div>
    </section>
  )
}