import { Check, ArrowRight } from 'lucide-react'

const features = [
  { title: 'Painel Completo', description: 'Dashboard intuitivo com métricas em tempo real.' },
  { title: 'Gestão de Anúncios', description: 'Crie e gerencie anúncios de forma centralizada.' },
  { title: 'Controle de Estoque', description: 'Alertas automáticos e sincronização total.' },
  { title: 'Relatórios Avançados', description: 'Métricas detalhadas para tomada de decisão.' },
  { title: 'Atendimento Automatizado', description: 'Respostas automáticas personalizadas.' },
  { title: 'Integração Logística', description: 'Conecte-se com transportadoras facilmente.' },
]

export default function Features() {
  return (
    <section id="funcionalidades" className="section-padding relative overflow-hidden bg-surface-50">
      {/* Background glow */}
      <div className="absolute top-1/2 -translate-y-1/2 -left-40 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: iPhone Mockup */}
          <div className="lg:col-span-5 lg:-ml-6 xl:-ml-12">
            <div className="relative flex items-center justify-center lg:-translate-x-6 xl:-translate-x-16">
              {/* Ambient glow behind phone */}
              <div className="absolute w-72 h-72 bg-neon-purple/15 rounded-full blur-[90px]" />
              <div className="absolute w-48 h-48 bg-neon-green/10 rounded-full blur-[60px] -translate-x-8 translate-y-10" />

              {/* iPhone 15 Pro — floating + stacked layers */}
              {/* ↓ TAMANHO DO IPHONE — altere maxWidth para aumentar/diminuir */}
              <div
                className="relative z-10 w-full animate-float"
                style={{ maxWidth: 640, aspectRatio: '1 / 1' }}
              >
                {/* Layer 1: purple screen background */}
                <img
                  src="/iphone-color2.png"
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover overflow-hidden"
                  style={{ objectPosition: 'center' }}
                />

                {/* Layer 2: phone chrome frame (transparent over screen) */}
                <img
                  src="/iphone-frame2.png"
                  alt="iPhone 15 Pro com app Origenow"
                  className="absolute inset-0 w-full h-full object-cover z-20"
                  style={{ objectPosition: 'center' }}
                />
              </div>

              {/* Floating badge */}
              <div className="absolute top-6 -right-2 lg:-right-4 glass-card px-4 py-2 animate-float z-20">
                <span className="text-neon-green text-xs font-heading font-bold">+ 135 vendas/dia</span>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7">
            <span className="section-label">Funcionalidades</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-surface-900 mb-5 tracking-tight">
              Pensados para você{' '}
              <span className="text-gradient">vendedor</span>
            </h2>
            <p className="text-muted text-lg mb-10 max-w-lg">
              Ferramentas poderosas que simplificam sua operação e maximizam seus resultados no marketplace.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group flex gap-4 p-4 rounded-2xl hover:bg-surface-50/60 transition-all duration-300 cursor-default"
                >
                  <div className="w-8 h-8 rounded-lg bg-neon-green/10 border border-neon-green/20 flex items-center justify-center flex-shrink-0 group-hover:bg-neon-green/20 transition-colors">
                    <Check size={14} className="text-neon-green" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-surface-900 text-sm mb-1">{feature.title}</h4>
                    <p className="text-muted text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contato" className="btn-primary mt-10 inline-flex">
              Ver Todas as Features
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
