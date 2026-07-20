import Navbar from '../components/Navbar.jsx'
import RSVP from '../components/RSVP.jsx'
import Footer from '../components/Footer.jsx'

export default function TicketPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f0e7] font-['Inter'] leading-relaxed text-[#171513] antialiased">
      <Navbar />
      <main className="pt-16 sm:pt-24">
        <div className="mx-auto mb-10 w-[calc(100%-2rem)] max-w-[1180px] text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#d94a2b]">Next Gen Summit · September 19, 2026</span>
          <h1 className="mx-auto mt-4 max-w-3xl font-['Prata'] text-[clamp(40px,7vw,72px)] leading-[1.08]">
            Your seat in the room starts here.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-[#6e675e]">
            Claim your free ticket for one day of honest conversations, live demos, and meaningful connections in Port Harcourt.
          </p>
        </div>
        <RSVP />
      </main>
      <Footer />
    </div>
  )
}
