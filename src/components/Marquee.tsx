const words = ['SCALE', 'EXECUTION', 'OPTIMIZE', 'VISION', 'GROWTH', 'AUTOMATE', 'CONTROL', 'PROFIT']

export default function Marquee() {
  const repeated = [...words, ...words, ...words, ...words]

  return (
    <section className="py-8 border-y border-surface-200/30 overflow-hidden bg-surface-50/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeated.map((word, i) => (
          <span key={i} className="flex items-center gap-6 mx-6">
            <span className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-surface-300 hover:text-neon-green transition-colors duration-300 cursor-default">
              {word}
            </span>
            <span className="w-2 h-2 rounded-full bg-neon-green/40" />
          </span>
        ))}
      </div>
    </section>
  )
}
