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

      {/* Spline 3D Robot - Right Sidebar Full Height */}
      <div className="absolute top-0 right-[-5%] w-full lg:w-[55%] h-full z-0 flex items-center justify-end lg:justify-center pointer-events-auto opacity-90 overflow-hidden">
        <div className="w-full h-full scale-[1.0] lg:scale-[1.1] origin-center sm:origin-right lg:origin-center mt-20 lg:mt-0">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="container-custom px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col pointer-events-none w-full h-full">
        {/* Main Content Area: Text on the left */}
        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left pt-16 lg:pt-0">

          {/* Badge */}
          <div className="opacity-0 animate-slide-up mb-6 border border-white/10 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm pointer-events-auto mt-4 sm:mt-12 lg:mt-0 lg:mt-[-40px]">
            <span className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-[0.2em] text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-neon-purple"></span>
              {'Plataforma #1 para Mercado Livre'}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold leading-[1.1] md:leading-[1.15] tracking-tight mb-6 opacity-0 animate-slide-up-delay-1 text-white drop-shadow-lg">
            <span>ESTRATÉGIAS INTELIGENTES.</span>
            <br />
            <span className="gradient-text">CRESCIMENTO ACELERADO.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed opacity-0 animate-slide-up-delay-2 drop-shadow-md">
            Automatize, controle e escale suas vendas no Mercado Livre
            com a plataforma mais completa e robusta do mercado.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 opacity-0 animate-slide-up-delay-3 mb-16 lg:mb-20 pointer-events-auto">
            {/* Primary CTA */}
            <a
              href="#contato"
              className="neon-cta inline-flex h-12 md:h-14 items-center justify-center rounded-full px-8 font-medium text-white transition-all hover:scale-105 focus:outline-none cursor-hover"
            >
              Falar com um consultor
            </a>

            {/* Secondary CTA */}
            <a
              href="#solucoes"
              className="inline-flex h-12 md:h-14 items-center justify-center rounded-full border border-white/20 bg-transparent px-8 font-medium text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#130624] cursor-hover"
            >
              como funciona?
            </a>
          </div>

        </div>

        {/* Marketplace Integrations Bar - Centered at the bottom */}
        <div className="w-full mt-auto mb-10 z-20 pointer-events-none self-center lg:self-start transform lg:translate-y-[80px]">
          <div className="pointer-events-auto w-full lg:max-w-[70%] xl:max-w-4xl mx-auto lg:mx-0">
            <MarketplaceBar />
          </div>
        </div>
      </div>

    </section>
  )
}
