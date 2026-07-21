export default function Footer() {
  return (
    <footer className="bg-[#090909] py-12 text-center text-[#fffdf8]">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1180px]">
        <div className="mb-3.5 font-['Prata'] text-xl">Next Gen <em className="text-[#d94a2b]">Summit</em></div>
        <p className="text-xs text-stone-400">September 19, 2026 · Port Harcourt · Free Entry</p>
        <div className="mt-4 flex flex-wrap justify-center gap-5 text-[13px]">
          <a className="border-b border-stone-700 pb-0.5 no-underline hover:border-[#d94a2b]" href="mailto:whakee@nextgensummit.xyz">Email</a>
          <a className="border-b border-stone-700 pb-0.5 no-underline hover:border-[#d94a2b]" href="https://t.me/whakeee" target="_blank" rel="noreferrer">Telegram</a>
          <a className="border-b border-stone-700 pb-0.5 no-underline hover:border-[#d94a2b]" href="https://x.com/nextgensummit26?s=20" target="_blank" rel="noreferrer">X</a>
        </div>
      </div>
    </footer>
  )
}
