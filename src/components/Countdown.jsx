import { useEffect, useState } from 'react'

const EVENT_DATE = new Date('2026-09-19T09:00:00')

function getTimeLeft() {
  const remaining = Math.max(0, EVENT_DATE.getTime() - Date.now())

  return {
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining / 3_600_000) % 24),
    minutes: Math.floor((remaining / 60_000) % 60),
    seconds: Math.floor((remaining / 1_000) % 60),
  }
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const timer = window.setInterval(() => setTime(getTimeLeft()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const units = [
    ['Days', time.days],
    ['Hours', time.hours],
    ['Minutes', time.minutes],
    ['Seconds', time.seconds],
  ]

  return (
    <div role="timer" aria-label="Countdown to Next Gen Summit" className="grid grid-cols-2 overflow-hidden rounded-3xl bg-[#090909] p-2 text-[#fffdf8] shadow-[0_18px_45px_rgba(9,9,9,0.16)] sm:grid-cols-4">
      {units.map(([label, value], index) => (
        <div
          className={`relative flex min-h-28 flex-col items-center justify-center px-4 py-5 text-center ${index > 0 ? 'sm:before:absolute sm:before:inset-y-6 sm:before:left-0 sm:before:w-px sm:before:bg-white/15' : ''}`}
          key={label}
        >
          <strong className="font-['Prata'] text-3xl font-normal tabular-nums sm:text-4xl">
            {String(value).padStart(2, '0')}
          </strong>
          <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}
