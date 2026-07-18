 

 export default function Hero() {
  const eventDate = new Date('2026-09-19T09:00:00')
  const days = Math.max(0, Math.ceil((eventDate - new Date()) / (1000 * 60 * 60 * 24)))

  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <div className="reveal in">
          <div className="datebar">
            September 19, 2026 <span className="sep">·</span> Port Harcourt 
          </div>
          <h1 className="title">
            Built by the next <span className="it">generation</span>, for the next generation.
          </h1>
          <p className="subhead">
            A one-day summit for builders, founders, investors, and the tech-curious in their 20s —
            the room where Nigeria's next wave of tech talent shows up.
          </p>
          <div className="herobtns">
            <a href="#rsvp" className="btn-primary">Reserve Your Seat</a>
            <a href="#about" className="btn-ghost">Learn more</a>
          </div>
        </div>

        <div className="hero-graphic reveal in reveal-delay-2">
          <div className="starburst-glow"></div>
          <div className="stat-badge">
            <div className="n">500+</div>
            <div className="l">Attendees<br />Expected</div>
          </div>
          <div className="speaker-card sc1">
           <img src="/whakee.jpeg" alt="Speaker Name" />
            <div className="speaker-info">
              <div className="name">Speaker TBC</div>
              <div className="role">Confirmed lineup coming</div>
              <span className="speaker-tag">Speaker</span>
            </div>
          </div>
          <div className="speaker-card sc2">
            <div className="speaker-photo">
              <img src="/whakee.jpeg" alt="Speaker Name" />
            </div>
            <div className="speaker-info">
              <div className="name">Speaker TBC</div>
              <div className="role">Confirmed lineup coming</div>
              <span className="speaker-tag">Speaker</span>
            </div>
          </div>
          <div className="speaker-card sc3">
            <img src="/whakee.jpeg" alt="Speaker Name" />
            <div className="speaker-info">
              <div className="name">Speaker TBC</div>
              <div className="role">Confirmed lineup coming</div>
              <span className="speaker-tag">Speaker</span>
            </div>
          </div>
          <div className="placeholder-note">Placeholder cards — swap in real speaker photos once confirmed</div>
        </div>
      </div>

      <div className="wrap" style={{ marginTop: 48 }}>
        <div className="stat-strip reveal">
          <div className="stat-strip-item">
            <div><div className="n">300+</div><div className="l">Attendees</div></div>
          </div>
          <div className="stat-strip-divider"></div>
          <div className="stat-strip-item">
            <div><div className="n">1</div><div className="l">Day</div></div>
          </div>
          <div className="stat-strip-divider"></div>
          <div className="stat-strip-item">
            <div><div className="n">{days}</div><div className="l">Days to go</div></div>
          </div>
          <div className="stat-strip-divider"></div>
          <div className="stat-strip-item">
            <div><div className="n">Free</div><div className="l">Entry</div></div>
          </div>
        </div>
      </div>
    </header>
  )
}