import { MarketplaceBar } from './ui/marketplace-bar'
import LiquidEther from './ui/liquid-ether'
import { SplineScene } from './ui/splite'

export default function Hero() {
  return (
    <section id="hero" className="relative pt-[80px] bg-[#130624] pb-10 overflow-hidden min-h-screen flex items-center">

      {/* Liquid Ether Background */}
      <div className="absolute inset-0 z-0 opacity-60 pointer-events-none">
        <LiquidEther
          colors={['#7c3aed', '#4f46e5', '#9d4edd']}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={1.8}
          mouseForce={15}
          resolution={0.4}
        />
      </div>

      {/* Spline 3D Robot Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-auto opacity-70">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      <div className="container-custom px-4 md:px-6 relative z-10 flex flex-col items-center justify-center pointer-events-none">
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-16 mt-[-80px]">
          {/* Badge */}
          <div className="opacity-0 animate-slide-up mb-6 border border-white/10 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm pointer-events-auto">
            <span className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-[0.2em] text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-purple"></span>
              {'Plataforma #1 para Mercado Livre'}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] md:leading-[1.15] tracking-tight mb-8 opacity-0 animate-slide-up-delay-1 text-white drop-shadow-lg">
            <span>ESTRATÉGIAS INTELIGENTES.</span>
            <br />
            <span>CRESCIMENTO ACELERADO.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-lg sm:text-xl max-w-2xl mb-12 lg:mb-16 leading-relaxed opacity-0 animate-slide-up-delay-2 drop-shadow-md">
            Automatize, controle e escale suas vendas no Mercado Livre
            com a plataforma mais completa e robusta do mercado.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 opacity-0 animate-slide-up-delay-3 mb-20 md:mb-24 pointer-events-auto">

            {/* Primary CTA */}
            <a
              href="#contato"
              className="inline-flex h-12 md:h-14 items-center justify-center rounded-full bg-neon-purple px-8 font-medium text-white transition-all hover:bg-neon-purple/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(157,78,221,0.4)] focus:outline-none focus:ring-2 focus:ring-neon-purple focus:ring-offset-2 focus:ring-offset-[#130624] cursor-hover"
            >
              Falar com um Especialista
            </a>

            {/* Secondary CTA */}
            <a
              href="#solucoes"
              className="inline-flex h-12 md:h-14 items-center justify-center rounded-full border border-white/20 bg-transparent px-8 font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#130624] cursor-hover"
            >
              Ver Nossos Serviços
            </a>

          </div>

          {/* Marketplace Integrations Bar */}
          <div className="pointer-events-auto w-full">
            <MarketplaceBar />
          </div>
        </div>

      </div>
    </section>
  )
}
