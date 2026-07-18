import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#about', label: 'About' },
    { href: '#who', label: "Who it's for" },
    { href: '#sponsors', label: 'Partners' },
    { href: '#faq', label: 'FAQ' },
  ]
  const close = () => setOpen(false)

  return (
    <>
      <nav>
        <div className="wrap navwrap">
          <div className="logo">Next Gen <em>Summit</em></div>
          <div className="desktop-only">
            <div className="navlinks">
              {links.map(l => <a key={l.href} href={l.href}>{l.label}</a>)}
            </div>
            <a href="#rsvp" className="navcta">RSVP</a>
          </div>
          <button
            className={`hamburger ${open ? 'open' : ''}`}
            aria-label="Menu"
            onClick={() => setOpen(o => !o)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="mlink" onClick={close}>{l.label}</a>
        ))}
        <a href="#rsvp" className="btn-primary navcta mlink" onClick={close}>RSVP</a>
      </div>
    </>
  )
}
