import { animate, motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import Countdown from './Countdown.jsx'

export default function Hero() {
  const { scrollYProgress } = useScroll()
  const hoverProgress = useMotionValue(0)
  const separation = useTransform(
    [scrollYProgress, hoverProgress],
    ([scroll, hover]) => 15 * (1 - Math.max(Math.min(scroll / 0.05, 1), hover)),
  )
  const smoothSeparation = useSpring(separation, {
    stiffness: 180,
    damping: 24,
    mass: 0.6,
  })
  const negativeSeparation = useTransform(smoothSeparation, value => -value)
  const joinPuzzle = () => animate(hoverProgress, 1, { duration: 0.3 })
  const releasePuzzle = () => animate(hoverProgress, 0, { duration: 0.3 })

  return (
    <header className="pt-20 pb-10 sm:pt-28">
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1180px] items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-[clamp(36px,6vw,88px)]">
        <div>
          <h1 className="mb-6 max-w-[720px] font-['Prata'] text-[clamp(36px,7.4vw,74px)] font-normal leading-[1.08] tracking-tight">
            Built by the next <span className="text-[#d94a2b]">generation</span>, for the
            next generation.
          </h1>
          <p className="mb-10 max-w-[520px] text-[17px] text-[#6e675e]">
            A one-day summit for builders, founders, investors, and the
            tech-curious in their 20s — the room where Nigeria's next wave of
            tech talent shows up.
          </p>
          <div className="mb-6 flex flex-wrap items-center gap-5">
            <a href="/ticket" className="rounded-full bg-[#090909] px-8 py-4 text-[15px] font-bold text-[#fffdf8] no-underline transition-transform hover:-translate-y-0.5">
              Get Your Free Ticket
            </a>
            <a href="#about" className="border-b border-[#090909] pb-1 text-[15px] text-[#090909] no-underline">
              Learn more
            </a>
          </div>
        </div>

        <div className="grid aspect-square h-auto w-full max-w-[520px] place-items-center justify-self-center lg:h-[480px]" aria-label="Featured Next Gen Summit community members">
          <div
            className="group relative isolate aspect-square w-full max-w-[440px]"
            onMouseEnter={joinPuzzle}
            onMouseLeave={releasePuzzle}
            onFocus={joinPuzzle}
            onBlur={releasePuzzle}
          >
            <svg className="h-full w-full overflow-visible" viewBox="0 0 400 400" role="img" aria-labelledby="puzzle-title puzzle-desc">
              <title id="puzzle-title">Next Gen Summit community</title>
              <desc id="puzzle-desc">Four portraits arranged as interlocking jigsaw pieces.</desc>
              <defs>
                <clipPath id="puzzle-one">
                  <path d="M0 0H200V55C175 45 170 75 185 86C200 97 220 82 220 106C220 130 200 138 185 122C170 106 155 126 160 148C165 170 190 160 200 200C170 190 165 220 145 220C120 220 118 195 130 185C145 170 122 155 105 160C82 166 95 190 70 200H0Z" />
                </clipPath>
                <clipPath id="puzzle-two">
                  <path d="M200 0H400V200H330C305 210 318 234 295 240C278 245 255 230 270 215C282 205 280 175 255 175C235 175 230 205 200 200C190 160 165 170 160 148C155 126 170 106 185 122C200 138 220 130 220 106C220 82 200 97 185 86C170 75 175 45 200 55Z" />
                </clipPath>
                <clipPath id="puzzle-three">
                  <path d="M0 200H70C95 190 82 166 105 160C122 155 145 170 130 185C118 195 120 220 145 220C165 220 170 190 200 200C210 230 180 235 180 255C180 280 210 282 220 270C235 255 250 278 245 295C239 318 215 305 200 330V400H0V330C25 340 30 310 15 299C0 288 -20 303 -20 279C-20 255 0 247 15 263C30 279 45 259 40 237C35 215 10 225 0 200Z" />
                </clipPath>
                <clipPath id="puzzle-four">
                  <path d="M200 200C230 205 235 175 255 175C280 175 282 205 270 215C255 230 278 245 295 240C318 234 305 210 330 200H400V270C375 260 370 290 385 301C400 312 420 297 420 321C420 345 400 353 385 337C370 321 355 341 360 363C365 385 390 375 400 400H330C340 375 310 370 299 385C288 400 303 420 279 420C255 420 247 400 263 385C279 370 259 355 237 360C215 365 225 390 200 400V330C215 305 239 318 245 295C250 278 235 255 220 270C210 282 180 280 180 255C180 235 210 230 200 200Z" />
                </clipPath>
              </defs>

              <motion.g
                className="cursor-pointer saturate-[.88] transition-[filter] duration-300 group-hover:saturate-100 focus:outline-none"
                tabIndex="0"
                style={{ x: negativeSeparation, y: negativeSeparation }}
              >
                <image href="/whakee.jpeg" width="220" height="220" preserveAspectRatio="xMidYMid slice" clipPath="url(#puzzle-one)" />
                <path className="pointer-events-none fill-none stroke-[#d94a2b] stroke-[3] [stroke-linejoin:round] [vector-effect:non-scaling-stroke]" d="M0 0H200V55C175 45 170 75 185 86C200 97 220 82 220 106C220 130 200 138 185 122C170 106 155 126 160 148C165 170 190 160 200 200C170 190 165 220 145 220C120 220 118 195 130 185C145 170 122 155 105 160C82 166 95 190 70 200H0Z" />
              </motion.g>
              <motion.g
                className="cursor-pointer saturate-[.88] transition-[filter] duration-300 group-hover:saturate-100 focus:outline-none"
                tabIndex="0"
                style={{ x: smoothSeparation, y: negativeSeparation }}
              >
                <image href="/pxxlfounder.jpeg" x="160" width="240" height="240" preserveAspectRatio="xMidYMid slice" clipPath="url(#puzzle-two)" />
                <path className="pointer-events-none fill-none stroke-[#d94a2b] stroke-[3] [stroke-linejoin:round] [vector-effect:non-scaling-stroke]" d="M200 0H400V200H330C305 210 318 234 295 240C278 245 255 230 270 215C282 205 280 175 255 175C235 175 230 205 200 200C190 160 165 170 160 148C155 126 170 106 185 122C200 138 220 130 220 106C220 82 200 97 185 86C170 75 175 45 200 55Z" />
              </motion.g>
              <motion.g
                className="cursor-pointer saturate-[.88] transition-[filter] duration-300 group-hover:saturate-100 focus:outline-none"
                tabIndex="0"
                style={{ x: negativeSeparation, y: smoothSeparation }}
              >
                <image href="/emmy.jpeg" y="160" width="245" height="240" preserveAspectRatio="xMidYMid slice" clipPath="url(#puzzle-three)" />
                <path className="pointer-events-none fill-none stroke-[#d94a2b] stroke-[3] [stroke-linejoin:round] [vector-effect:non-scaling-stroke]" d="M0 200H70C95 190 82 166 105 160C122 155 145 170 130 185C118 195 120 220 145 220C165 220 170 190 200 200C210 230 180 235 180 255C180 280 210 282 220 270C235 255 250 278 245 295C239 318 215 305 200 330V400H0V330C25 340 30 310 15 299C0 288 -20 303 -20 279C-20 255 0 247 15 263C30 279 45 259 40 237C35 215 10 225 0 200Z" />
              </motion.g>
              <motion.g
                className="cursor-pointer saturate-[.88] transition-[filter] duration-300 group-hover:saturate-100 focus:outline-none"
                tabIndex="0"
                style={{ x: smoothSeparation, y: smoothSeparation }}
              >
                <image href="/geng.jpeg" x="180" y="160" width="240" height="260" preserveAspectRatio="xMidYMid slice" clipPath="url(#puzzle-four)" />
                <path className="pointer-events-none fill-none stroke-[#d94a2b] stroke-[3] [stroke-linejoin:round] [vector-effect:non-scaling-stroke]" d="M200 200C230 205 235 175 255 175C280 175 282 205 270 215C255 230 278 245 295 240C318 234 305 210 330 200H400V270C375 260 370 290 385 301C400 312 420 297 420 321C420 345 400 353 385 337C370 321 355 341 360 363C365 385 390 375 400 400H330C340 375 310 370 299 385C288 400 303 420 279 420C255 420 247 400 263 385C279 370 259 355 237 360C215 365 225 390 200 400V330C215 305 239 318 245 295C250 278 235 255 220 270C210 282 180 280 180 255C180 235 210 230 200 200Z" />
              </motion.g>
            </svg>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 w-[calc(100%-2rem)] max-w-[1180px]">
        <Countdown />
      </div>
    </header>
  );
}
