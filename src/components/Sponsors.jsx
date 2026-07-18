export default function Sponsors() {
  return (
    <section id="sponsors">
      <div className="wrap">
        <div className="backedby-label reveal">Backed by founders and communities shaping Nigeria's tech future.</div>
        <div className="backedby-row reveal">
          <div className="backedby-item">
            <img src="/pxxl-logo.jpg" alt="pxxl" />
            <span>pxxl</span>
          </div>
          <div className="backedby-item">
            <img src="/reality3d-logo.jpg" alt="Reality 3D Hub" />
            <span>Reality 3D Hub</span>
          </div>
          <div className="backedby-item open">+ your brand here</div>
        </div>
        <div className="partner-cta reveal" style={{ marginTop: 36 }}>
          <span>Want your brand in this lineup?</span>
          <a href="mailto:uwakmfone470@gmail.com">Become a partner →</a>
        </div>
      </div>
    </section>
  )
}