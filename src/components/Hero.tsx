import { ArrowRight, Sparkles } from 'lucide-react'
import { FloatingMarketplaceIcons } from './ui/floating-marketplace-icons'

export default function Hero() {
  return (
    <section id="hero" className="relative pt-[80px] bg-[#130624] pb-10 overflow-hidden">

      {/* Floating Ecosystem Icons Background */}
      <FloatingMarketplaceIcons />

      <div className="container-custom px-4 md:px-6 relative z-10 flex flex-col items-center justify-center min-h-[70vh]">
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center pointer-events-none mt-16">
          {/* Badge */}
          <div className="opacity-0 animate-slide-up mb-6 border border-white/10 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm">
            <span className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-[0.2em] text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-purple"></span>
              Plataforma #1 para Mercado Livre
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8 opacity-0 animate-slide-up-delay-1 text-white">
            <span>ESTRATÉGIAS INTELIGENTES.</span>
            <br />
            <span>CRESCIMENTO ACELERADO.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mb-12 leading-relaxed opacity-0 animate-slide-up-delay-2">
            Automatize, controle e escale suas vendas no Mercado Livre
            com a plataforma mais completa e robusta do mercado.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-0 animate-slide-up-delay-3 mb-20 pointer-events-auto">

            {/* Interactive Switch Button */}
            <div className="elementor-widget-html h-[64px] w-[250px] cursor-hover">
              <a href="#solucoes" className="botao">
                <div className="container-botao">
                  <div className="wrapper-icones">
                    <div className="wrapper-2">
                      <div className="icone-1"></div>
                      <Sparkles className="icone-2" size={12} strokeWidth={3} />
                    </div>
                  </div>
                  <div className="fundo">
                    <span className="texto-2">EXPLORAR SOLUÇÕES</span>
                  </div>
                  <span className="texto-1">EXPLORAR SOLUÇÕES</span>
                </div>
              </a>
            </div>

            {/* Glowing Border Button */}
            <a href="#contato" className="btn9 cursor-hover">
              <span className="sr-only">Quero me inscrever</span>
            </a>

          </div>
        </div>

        {/* Bento Preview Grid */}
        <div className="w-full mt-8 grid grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          {/* Large card */}
          <div className="col-span-2 lg:col-span-2 row-span-2 bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm border border-black/5">
            <div>
              <div className="w-10 h-10 rounded-xl bg-surface-100 border border-black/10 flex items-center justify-center mb-4">
                <span className="text-surface-900 font-heading font-bold text-sm">E</span>
              </div>
              <h3 className="font-heading text-lg font-bold text-surface-900 mb-1">Escale com Sucesso</h3>
              <p className="text-surface-600 text-sm">com nossa expertise completa</p>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
              {['ESCALA', 'EXECUÇÃO', 'OTIMIZAÇÃO'].map((tag) => (
                <span key={tag} className="px-2.5 py-1 text-[10px] font-heading font-bold uppercase tracking-wider bg-surface-100 text-surface-600 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats card */}
          <div className="col-span-1 lg:col-span-1 bg-white rounded-3xl p-6 flex flex-col justify-center items-center text-center shadow-sm border border-black/5">
            <span className="text-3xl sm:text-4xl font-heading font-extrabold text-neon-purple">&gt;135</span>
            <span className="text-surface-600 text-xs mt-1">Sellers Ativos</span>
          </div>

          {/* Image card placeholder */}
          <div className="col-span-3 lg:col-span-2 row-span-2 relative bg-gradient-to-br from-neon-purple/10 to-surface-100 min-h-[200px] rounded-3xl border border-black/5 overflow-hidden flex items-center justify-center">
            <div className="text-center relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white border border-black/5 mx-auto mb-3 flex items-center justify-center shadow-sm">
                <span className="text-surface-900 text-2xl font-heading font-bold">O</span>
              </div>
              <p className="text-surface-600 text-xs font-medium">Dashboard Preview</p>
            </div>
          </div>

          {/* Volume card */}
          <div className="col-span-1 lg:col-span-1 bg-white rounded-3xl p-6 flex flex-col justify-center items-center text-center shadow-sm border border-black/5">
            <span className="text-3xl sm:text-4xl font-heading font-extrabold text-surface-900">6M</span>
            <span className="text-surface-600 text-xs mt-1">Volume Total</span>
          </div>

          {/* Bottom wide card */}
          <div className="col-span-2 lg:col-span-1 bg-white rounded-3xl p-6 flex items-center justify-center shadow-sm border border-black/5">
            <p className="text-surface-600 text-xs text-center">
              Struggling with <span className="text-surface-900 font-bold">marketplace?</span>
              <br />
              <span className="text-neon-purple font-heading font-bold">We've got the solution.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
