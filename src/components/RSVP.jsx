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
    <section id="rsvp" className="border-t border-[#d9d0c2] py-14 sm:py-20">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1180px]">
        <div className="mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#d94a2b] before:h-px before:w-6 before:bg-[#d94a2b]">Secure Your Seat</div>
        <h2 className="mb-6 max-w-[660px] font-['Prata'] text-[clamp(26px,5vw,40px)] font-normal leading-[1.16]">RSVP — it's free, but seats aren't infinite.</h2>

        <div className="overflow-hidden rounded-3xl border border-[#d9d0c2] bg-[#fffdf8] p-5 shadow-[0_18px_50px_rgba(9,9,9,0.07)] sm:p-12">
          {status !== 'success' ? (
            <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="font-['Prata'] text-6xl leading-none text-[#d94a2b]">{count != null ? count : '—'}</div>
                <div className="mt-2 text-xs uppercase tracking-wide text-[#6e675e]">of {CAP} seats claimed</div>
                <div className="mt-6 h-1 overflow-hidden bg-[#d9d0c2]">
                  <div className="h-full bg-[#d94a2b] transition-[width] duration-500" style={{ width: `${pct}%` }}></div>
                </div>
                <p className="mt-3 text-sm text-[#6e675e]">
                  Entry is free thanks to our partners. We just need a few details to hold your place.
                </p>
              </div>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-[#d94a2b]">Full Name</label>
                    <input className="w-full rounded-lg border border-[#d9d0c2] bg-white px-4 py-3.5 text-[15px] outline-none transition-colors focus:border-[#d94a2b]" name="name" type="text" required placeholder="Ada Obi" value={form.name} onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-[#d94a2b]">Email</label>
                    <input className="w-full rounded-lg border border-[#d9d0c2] bg-white px-4 py-3.5 text-[15px] outline-none transition-colors focus:border-[#d94a2b]" name="email" type="email" required placeholder="ada@email.com" value={form.email} onChange={handleChange} />
                  </div>
                  <div className="mb-4">
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.08em] text-[#d94a2b]">What describes you best?</label>
                    <select className="w-full rounded-lg border border-[#d9d0c2] bg-white px-4 py-3.5 text-[15px] outline-none transition-colors focus:border-[#d94a2b]" name="role" value={form.role} onChange={handleChange}>
                      <option>Builder / Developer</option>
                      <option>Founder / Investor</option>
                      <option>Student / Exploring tech</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button type="submit" className="mt-1.5 w-full rounded-full bg-[#090909] p-4 text-[15px] font-bold text-[#fffdf8] transition-colors hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-50" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Claiming...' : 'Claim My Free Seat'}
                  </button>
                  <div className="mt-2 min-h-4 text-xs text-[#c53e25]">{message}</div>
                </form>
              </div>
            </div>
          ) : (
            <div className="py-9 text-center">
              <div className="mb-3 font-['Prata'] text-4xl text-[#d94a2b]">✓</div>
              <h3 className="font-['Prata'] text-2xl">You're in.</h3>
              <p className="mt-2.5 text-sm text-[#6e675e]">Check your email for confirmation. See you September 19 in Port Harcourt.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
