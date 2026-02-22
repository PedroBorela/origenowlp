import { Package, TrendingUp, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react'

const solutions = [
  {
    icon: Package,
    title: 'Gestão de Pedidos',
    description: 'Controle total sobre seus pedidos em um único painel intuitivo e em tempo real.',
    accent: 'neon-purple',
  },
  {
    icon: TrendingUp,
    title: 'Escale suas Vendas',
    description: 'Ferramentas para aumentar seu faturamento e alcançar mais clientes automaticamente.',
    accent: 'neon-green',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança Total',
    description: 'Seus dados protegidos com criptografia de ponta e monitoramento contínuo.',
    accent: 'neon-cyan',
  },
  {
    icon: Zap,
    title: 'Automação Inteligente',
    description: 'Automatize respostas, envios e controle de estoque com inteligência artificial.',
    accent: 'neon-purple',
  },
]

const accentMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  'neon-purple': {
    bg: 'bg-neon-purple/10',
    text: 'text-neon-purple',
    border: 'border-neon-purple/20',
    glow: 'group-hover:shadow-glow-purple',
  },
  'neon-green': {
    bg: 'bg-neon-green/10',
    text: 'text-neon-green',
    border: 'border-neon-green/20',
    glow: 'group-hover:shadow-glow-green',
  },
  'neon-cyan': {
    bg: 'bg-neon-cyan/10',
    text: 'text-neon-cyan',
    border: 'border-neon-cyan/20',
    glow: 'group-hover:shadow-[0_0_30px_rgba(6,214,224,0.3)]',
  },
}

export default function Solutions() {
  return (
    <section id="solucoes" className="section-padding relative">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-purple/5 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="section-label">Soluções</span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-surface-900 mb-5 tracking-tight">
            Soluções para{' '}
            <span className="text-gradient">Todas as Operações</span>
          </h2>
          <p className="text-muted text-lg">
            Independente do tamanho, temos a solução ideal para você crescer no Mercado Livre.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {solutions.map((item, index) => {
            const colors = accentMap[item.accent]
            return (
              <div
                key={index}
                className={`group bento-card cursor-pointer ${colors.glow} transition-all duration-500`}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${colors.bg} border ${colors.border} flex items-center justify-center transition-all duration-300`}>
                      <item.icon size={24} className={colors.text} />
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-surface-400 group-hover:text-surface-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-surface-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
