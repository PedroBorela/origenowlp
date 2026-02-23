const words = ['SCALE', 'EXECUTION', 'OPTIMIZE', 'VISION', 'GROWTH', 'AUTOMATE', 'CONTROL', 'PROFIT']
const repeatedWords = Array.from({ length: 4 }, (_, rep) =>
  words.map((word) => ({ id: `${word}-${rep}`, word }))
).flat()

export default function Marquee() {
  return (
    <section className="py-8 border-y border-surface-200/30 overflow-hidden bg-surface-50/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {repeatedWords.map((item) => (
          <span key={item.id} className="flex items-center gap-6 mx-6">
            <span className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-surface-300 hover:text-neon-green transition-colors duration-300 cursor-default">
              {item.word}
            </span>
            <span className="w-2 h-2 rounded-full bg-neon-green/40" />
          </span>
        ))}
      </div>
    </section>
  )
}
