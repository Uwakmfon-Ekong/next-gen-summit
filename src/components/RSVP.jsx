import { useEffect, useState } from 'react'

// Set VITE_RSVP_ENDPOINT in your .env file to the Google Apps Script Web App URL.
// See README.md for the full setup (Code.gs) that saves entries to a Google Sheet
// and sends a confirmation email.
const ENDPOINT = import.meta.env.VITE_RSVP_ENDPOINT
const CAP = 500

export default function RSVP() {
  const [count, setCount] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', role: 'Builder / Developer' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!ENDPOINT) return
    fetch(`${ENDPOINT}?action=count`)
      .then(r => r.json())
      .then(data => setCount(data.count ?? 0))
      .catch(() => setCount(null))
  }, [])

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')

    if (!form.name.trim() || !form.email.trim()) {
      setMessage('Please fill in your name and email.')
      return
    }
    if (!ENDPOINT) {
      setMessage('RSVP endpoint not configured yet — see README.md.')
      return
    }

    setStatus('loading')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' }, // avoids CORS preflight against Apps Script
        body: JSON.stringify({ action: 'rsvp', ...form }),
      })
      const data = await res.json()

      if (data.status === 'duplicate') {
        setMessage("Looks like you've already RSVP'd with this email.")
        setStatus('idle')
        return
      }
      if (data.status === 'full') {
        setMessage("We're all full — but check back, more seats may open up.")
        setStatus('idle')
        return
      }
      if (data.status !== 'ok') {
        throw new Error(data.message || 'Unknown error')
      }

      setCount(data.count ?? (count ?? 0) + 1)
      setStatus('success')
    } catch (err) {
      setMessage('Something went wrong — please try again.')
      setStatus('idle')
    }
  }

  const pct = count != null ? Math.min(100, (count / CAP) * 100) : 0

  return (
    <section id="rsvp">
      <div className="wrap">
        <div className="eyebrow">Secure Your Seat</div>
        <h2 className="sectitle">RSVP — it's free, but seats aren't infinite.</h2>

        <div className="rsvp-wrap">
          {status !== 'success' ? (
            <div className="rsvp-grid">
              <div>
                <div className="counter-num">{count != null ? count : '—'}</div>
                <div className="counter-lbl">of {CAP} seats claimed</div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${pct}%` }}></div>
                </div>
                <p className="rsvp-desc">
                  Entry is free thanks to our partners. We just need a few details to hold your place.
                </p>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label>Full Name</label>
                    <input name="name" type="text" required placeholder="Ada Obi" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input name="email" type="email" required placeholder="ada@email.com" value={form.email} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label>What describes you best?</label>
                    <select name="role" value={form.role} onChange={handleChange}>
                      <option>Builder / Developer</option>
                      <option>Founder / Investor</option>
                      <option>Student / Exploring tech</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button type="submit" className="rsvp-submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Claiming...' : 'Claim My Free Seat'}
                  </button>
                  <div className="formmsg">{message}</div>
                </form>
              </div>
            </div>
          ) : (
            <div className="rsvp-success" style={{ display: 'block' }}>
              <div className="check">✓</div>
              <h3>You're in.</h3>
              <p>Check your email for confirmation. See you September 19 in Port Harcourt.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
