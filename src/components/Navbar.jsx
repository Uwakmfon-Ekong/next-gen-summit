import { useEffect, useState } from 'react'
import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [desktop, setDesktop] = useState(() => window.innerWidth >= 768)
  const [compact, setCompact] = useState(false)
  const { scrollY } = useScroll()
  const desktopWidth = useTransform(scrollY, [0, 180], ['80%', '40%'])
  const links = [
    { href: '/#about', label: 'About' },
    { href: '/#who', label: "Who it's for" },
    { href: '/#sponsors', label: 'Partners' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/speakers', label: 'Speakers' },
  ]

  useEffect(() => {
    const updateDesktop = () => setDesktop(window.innerWidth >= 768)
    window.addEventListener('resize', updateDesktop)
    return () => window.removeEventListener('resize', updateDesktop)
  }, [])

  useMotionValueEvent(scrollY, 'change', value => setCompact(desktop && value > 90))

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-4 z-[100]">
        <motion.nav
          className="pointer-events-auto mx-auto max-w-[1120px] rounded-full border border-black bg-[#090909] shadow-[0_12px_30px_rgba(9,9,9,0.12)]"
          style={{ width: desktop ? desktopWidth : 'calc(100% - 2rem)' }}
        >
          <div className="mx-auto flex h-16 w-full items-center justify-between px-3 pl-6 sm:pl-7">
          <motion.a
            href="/"
            className={`shrink-0 font-['Prata'] text-[19px] text-[#fffdf8] no-underline ${compact ? 'hidden' : 'block'}`}
            initial={false}
            animate={{ opacity: compact ? 0 : 1 }}
          >
            Next Gen <em className="text-[#d94a2b]">Summit</em>
          </motion.a>
          <div className={`hidden items-center gap-5 md:flex ${compact ? 'mx-auto' : ''}`}>
            <div className="flex items-center gap-6 text-[13px] text-stone-300">
              {links.map(link => (
                <a className="border-b border-transparent py-2 no-underline transition-colors hover:border-[#d94a2b] hover:text-white" key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <a href="/ticket" className="rounded-full bg-[#fffdf8] px-5 py-2.5 text-[13px] font-bold text-[#090909] no-underline transition-colors hover:bg-stone-200">
              Ticket
            </a>
          </div>
          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border-0 bg-transparent p-2 md:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen(value => !value)}
          >
            <span className={`h-0.5 w-full rounded-full bg-white transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}></span>
            <span className={`h-0.5 w-full rounded-full bg-white transition-opacity ${open ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-full rounded-full bg-white transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}></span>
          </button>
          </div>
        </motion.nav>
      </div>
      <div className="h-20" aria-hidden="true"></div>

      <div className={`fixed inset-0 z-[99] flex flex-col items-center justify-center gap-9 bg-[#090909] pt-20 transition-all duration-300 md:hidden ${open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'}`}>
        {links.map(link => (
          <a key={link.href} href={link.href} className="font-['Prata'] text-2xl text-[#fffdf8] no-underline" onClick={() => setOpen(false)}>{link.label}</a>
        ))}
        <a href="/ticket" className="rounded-full bg-[#fffdf8] px-8 py-3 text-sm font-bold text-[#090909] no-underline" onClick={() => setOpen(false)}>Get Ticket</a>
      </div>
    </>
  )
}
