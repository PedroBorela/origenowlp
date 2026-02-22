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
          {/* Left: Visual - Bento style */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Main visual card */}
              <div className="bento-card aspect-[4/5] relative overflow-hidden">
                {/* Ambient glow inside */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-neon-purple/20 rounded-full blur-[60px]" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-green/15 rounded-full blur-[60px]" />

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-neon-green/60" />
                      <div className="w-3 h-3 rounded-full bg-neon-purple/60" />
                      <div className="w-3 h-3 rounded-full bg-surface-300" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-surface-200 rounded-full w-3/4" />
                      <div className="h-3 bg-surface-200 rounded-full w-1/2" />
                      <div className="h-8 bg-neon-green/10 border border-neon-green/20 rounded-xl mt-4 w-full" />
                      <div className="h-8 bg-neon-purple/10 border border-neon-purple/20 rounded-xl w-5/6" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-surface-200/50 rounded-xl p-4 text-center">
                      <span className="text-2xl font-heading font-extrabold text-neon-green">97%</span>
                      <p className="text-muted text-[10px] mt-1">Satisfação</p>
                    </div>
                    <div className="bg-surface-200/50 rounded-xl p-4 text-center">
                      <span className="text-2xl font-heading font-extrabold text-neon-purple">51k</span>
                      <p className="text-muted text-[10px] mt-1">Pedidos</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 glass-card px-4 py-2 animate-float z-20">
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
              {features.map((feature, index) => (
                <div
                  key={index}
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
