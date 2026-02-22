const stats = [
  { value: 'R$45k+', label: 'Faturamento Gerado', color: 'text-neon-green' },
  { value: '97%', label: 'Taxa de Satisfação', color: 'text-neon-purple' },
  { value: '51k+', label: 'Pedidos Processados', color: 'text-neon-cyan' },
  { value: 'R$3.4M', label: 'Volume Transacionado', color: 'text-neon-green' },
]

export default function Stats() {
  return (
    <section id="resultados" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-50/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon-purple/5 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-20">
          <span className="section-label">Resultados</span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-surface-900 tracking-tight">
            AUTOMATIZE.{' '}
            <span className="text-gradient">CONTROLE.</span>
            <br />
            <span className="text-neon-green">ESCALE.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bento-card text-center py-10 group hover:scale-[1.02] transition-transform duration-500"
            >
              <div className="relative z-10">
                <p className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold ${stat.color} mb-3 tracking-tight`}>
                  {stat.value}
                </p>
                <p className="text-muted text-sm font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent" />
          <span className="text-surface-400 text-xs font-heading uppercase tracking-[0.3em]">Números Reais</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent" />
        </div>
      </div>
    </section>
  )
}
