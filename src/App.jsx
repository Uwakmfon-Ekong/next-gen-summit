import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import WhoItsFor from './components/WhoItsFor.jsx'
import Sponsors from './components/Sponsors.jsx'
import RSVP from './components/RSVP.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhoItsFor />
      <Sponsors />
      <RSVP />
      <FAQ />
      <Footer />
    </>
  )
}
