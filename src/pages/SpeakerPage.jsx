import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const SPEAKERS = [
  { name: 'Gordian Etim', role: 'Senior Developer Experience Engineer / Product Engineer', topic: 'Build, Ship, Get Picked: A Playbook for the Next Generation of Builders', photo: '/Gordian.jpg' },
  { name: 'Debar', role: 'Co-Founder,Settle', topic: 'Build it,who will use it?', photo: '/DEBAR.jpg' },
  { name: 'Kufre-abasi Bassey', role: 'Co-Founder / Software Engineer', topic: 'From Student to Builder: How to Turn Your Skills Into Real-World Opportunities', photo: '/kufre.jpg' },
  { name: 'Aniebietabasi Obo', role: 'Developer & Designer', topic: 'One Builder, Many Futures', photo: '/jurstadev.jpg' },
  { name: 'Praise Gabriel Oton', role: 'Founder, Gem-Nexus', topic: "The advice we didn't get when we started our tech career", photo: '/praise.jpg' },
  { name: 'Honour', role: 'Technical Founder, pxxl', topic: 'Personal brand for technical builders', photo: '/pxxlfounder.jpeg' },
  { name: 'Josh', role: 'Co-Founder, Reality 3D Hub', topic: 'The Next Engineer', photo: '/josh.jpg' },
  
]

export default function SpeakerPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f0e7] font-['Inter'] leading-relaxed text-[#171513] antialiased">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1180px] pb-20 pt-12 sm:pt-20">
        <Navbar />
        

        <div className="mb-4 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#F236DE] before:h-px before:w-6 before:bg-[#F236DE]">
          Speakers
        </div>
        <h1 className="mb-14 max-w-[720px] font-['Prata'] text-[clamp(32px,6vw,56px)] font-normal leading-[1.1]">
          The people taking the stage at Next Gen Summit.
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {SPEAKERS.map((s) => (
            <div key={s.name}>
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#d9d0c2]">
                <img
                  src={s.photo}
                  alt={s.name}
                  className="h-full w-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
              <div className="mt-4">
                <div className="font-['Prata'] text-xl">{s.name}</div>
                <div className="mt-1 text-sm text-[#6e675e]">{s.role}</div>
                <div className="mt-2 text-sm leading-snug text-[#171513]">{s.topic}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}