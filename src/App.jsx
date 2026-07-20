import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import WhoItsFor from './components/WhoItsFor.jsx'
import Sponsors from './components/Sponsors.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import TicketPage from './pages/TicketPage.jsx'

function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f0e7] font-['Inter'] leading-relaxed text-[#171513] antialiased">
      <Navbar />
      <Hero />
      <About />
      <WhoItsFor />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ticket" element={<TicketPage />} />
    </Routes>
  )
}
