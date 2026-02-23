import { useRef } from 'react'
import { Package, TrendingUp, ShieldCheck, Zap, ArrowUpRight } from 'lucide-react'
import {
  ParticleCard,
  GlobalSpotlight,
  useMobileDetection,
  DEFAULT_GLOW_COLOR,
} from './MagicBento'

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
    accent: 'neon-pink',
  },
]

const accentMap: Record<string, { bg: string; text: string; border: string; glowRgb: string }> = {
  'neon-purple': {
    bg: 'bg-neon-purple/10',
    text: 'text-neon-purple',
    border: 'border-neon-purple/20',
    glowRgb: '147, 51, 234',
  },
  'neon-green': {
    bg: 'bg-neon-green/10',
    text: 'text-neon-green',
    border: 'border-neon-green/20',
    glowRgb: '0, 224, 116',
  },
  'neon-cyan': {
    bg: 'bg-neon-cyan/10',
    text: 'text-neon-cyan',
    border: 'border-neon-cyan/20',
    glowRgb: '6, 214, 224',
  },
  'neon-pink': {
    bg: 'bg-pink-500/10',
    text: 'text-pink-500',
    border: 'border-pink-500/20',
    glowRgb: '236, 72, 153',
  },
}

const GLOW_COLOR = DEFAULT_GLOW_COLOR

export default function Solutions() {
  const gridRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobileDetection()

  return (
    <section id="solucoes" className="section-padding relative bg-[#F8F9FA]">
      {/* Glow CSS for border effect */}
      <style>{`
        .solutions-grid {
          --glow-x: 50%;
          --glow-y: 50%;
          --glow-intensity: 0;
          --glow-radius: 200px;
          --glow-color: ${GLOW_COLOR};
        }
        .solution-card--glow::after {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
              rgba(${GLOW_COLOR}, calc(var(--glow-intensity) * 0.8)) 0%,
              rgba(${GLOW_COLOR}, calc(var(--glow-intensity) * 0.4)) 30%,
              transparent 60%);
          border-radius: inherit;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
          z-index: 1;
          transition: opacity 0.3s ease;
        }
      `}</style>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-purple/5 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="section-label">Sobre nós</span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-surface-900 mb-5 tracking-tight">
            Soluções para{' '}
            <span className="gradient-text">Todas as Operações</span>
          </h2>
          <p className="text-[#4B5563] text-lg font-medium">
            Independente do tamanho, temos a solução ideal para você crescer no Mercado Livre.
          </p>
        </div>

        {/* Spotlight effect across the grid */}
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={isMobile}
          enabled
          spotlightRadius={350}
          glowColor={GLOW_COLOR}
        />

        <div ref={gridRef} className="bento-section solutions-grid grid sm:grid-cols-2 gap-4">
          {solutions.map((item) => {
            const colors = accentMap[item.accent]
            return (
              <ParticleCard
                key={item.title}
                className="card solution-card--glow bg-white p-6 sm:p-8 rounded-3xl border border-surface-200/50 cursor-pointer transition-all duration-500 shadow-sm hover:shadow-md"
                disableAnimations={isMobile}
                particleCount={8}
                glowColor={colors.glowRgb}
                enableTilt
                clickEffect
                enableMagnetism={false}
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
                  <p className="text-[#4B5563] text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </ParticleCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
