import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Decorative SVG components
const PatternTriangles = () => (
  <svg className="absolute bottom-[-10%] left-[-10%] w-[120%] h-[80%] opacity-20 text-surface-900" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M0 100 L50 40 L100 100 Z M50 40 L100 -20 L150 40 Z M-50 40 L0 -20 L50 40 Z M25 70 L75 70 L50 100 Z M75 70 L125 70 L100 100 Z M-25 70 L25 70 L0 100 Z" fill="currentColor" />
  </svg>
)

const StarPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10 text-surface-900" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M20 20 L22 15 L27 15 L23 12 L25 7 L20 10 L15 7 L17 12 L13 15 L18 15 Z" fill="currentColor" />
    <path d="M80 20 L82 15 L87 15 L83 12 L85 7 L80 10 L75 7 L77 12 L73 15 L78 15 Z" fill="currentColor" />
    <path d="M50 60 L54 50 L64 50 L56 44 L60 34 L50 40 L40 34 L44 44 L36 50 L46 50 Z" fill="currentColor" />
    <path d="M20 90 L22 85 L27 85 L23 82 L25 77 L20 80 L15 77 L17 82 L13 85 L18 85 Z" fill="currentColor" />
    <path d="M80 90 L82 85 L87 85 L83 82 L85 77 L80 80 L75 77 L77 82 L73 85 L78 85 Z" fill="currentColor" />
  </svg>
)

const InfinityPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20 text-surface-900" viewBox="0 0 100 100" preserveAspectRatio="none">
    <path d="M20 50 C20 30, 40 30, 50 50 C60 70, 80 70, 80 50 C80 30, 60 30, 50 50 C40 70, 20 70, 20 50" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M20 70 C20 50, 40 50, 50 70 C60 90, 80 90, 80 70 C80 50, 60 50, 50 70 C40 90, 20 90, 20 70" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M20 30 C20 10, 40 10, 50 30 C60 50, 80 50, 80 30 C80 10, 60 10, 50 30 C40 50, 20 50, 20 30" fill="none" stroke="currentColor" strokeWidth="4" />
  </svg>
)

const WaveformPattern = () => (
  <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-30 text-surface-900 px-4 mt-8">
    {[3, 5, 8, 4, 12, 16, 12, 6, 14, 8, 5, 3].map((h, i) => (
      <div key={i} className="w-2 bg-current rounded-full" style={{ height: `${h * 4}px` }} />
    ))}
  </div>
)

const CapsulePattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-15 text-surface-900" viewBox="0 0 100 100" preserveAspectRatio="none">
    <rect x="10" y="20" width="30" height="15" rx="7.5" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="50" y="20" width="40" height="15" rx="7.5" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="10" y="45" width="50" height="15" rx="7.5" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="70" y="45" width="20" height="15" rx="7.5" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="10" y="70" width="20" height="15" rx="7.5" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="40" y="70" width="50" height="15" rx="7.5" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
)

const marqueeWords = ['VENDAS', 'ESTRATÉGIA', 'OTIMIZAÇÃO', 'CRESCIMENTO', 'RESULTADOS', 'ESCALAR', 'INOVAÇÃO', 'LUCRO']

export default function Expertise() {
  const sectionRef = useRef<HTMLElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Heading animation
    gsap.from('.expertise-heading', {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.expertise-heading',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    // Subtitle animation
    gsap.from('.expertise-subtitle', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.expertise-subtitle',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    // Cards animation
    gsap.from('.expertise-card', {
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.1,
      ease: 'back.out(1.2)',
      scrollTrigger: {
        trigger: '.expertise-grid',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })

    // Marquee GSAP-powered infinite scroll
    const marqueeInner = marqueeRef.current
    if (marqueeInner) {
      gsap.to(marqueeInner, {
        xPercent: -50,
        ease: 'none',
        duration: 20,
        repeat: -1,
      })
    }
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} id="expertise" className="relative overflow-hidden bg-surface py-20 md:py-32">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-custom relative z-10 px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-24">
          <h2 className="expertise-heading font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold italic text-surface-900 leading-[1.05] tracking-tight mb-6">
            ESCALE, E CONQUISTE
            <br className="hidden sm:block" />
            COM NOSSA{' '}
            <span className="inline-flex items-center align-middle mx-2">
              <span className="imgg" style={{ zIndex: 3 }}>
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" alt="Consultor" className="w-10 h-10 md:w-14 md:h-14 object-cover" />
              </span>
              <span className="imgg" style={{ zIndex: 2 }}>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" alt="Consultor" className="w-10 h-10 md:w-14 md:h-14 object-cover" />
              </span>
              <span className="imgg" style={{ zIndex: 1 }}>
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Consultor" className="w-10 h-10 md:w-14 md:h-14 object-cover" />
              </span>
            </span>{' '}
            EXPERTISE
          </h2>

          <p className="expertise-subtitle text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mt-8">
            Conte com o nosso auxílio para otimizar sua operação de ecommerce no Mercado Livre, esteja ela iniciando ou já em pleno funcionamento.
          </p>
        </div>

        {/* Custom Bento Grid */}
        <div className="expertise-grid flex flex-col lg:flex-row gap-4 md:gap-5 max-w-[1300px] mx-auto items-stretch lg:min-h-[700px]">

          {/* Column 1 */}
          <div className="flex-1 flex flex-col justify-end lg:pb-24">
            <div className="expertise-card bg-neon-purple/10 text-surface-900 p-6 md:p-8 rounded-[2rem] h-[340px] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl lg:text-2xl font-bold leading-tight">Melhoria de Anúncios<br />e Otimização</h3>
                  <span className="text-sm font-semibold mt-6 block opacity-70">01</span>
                </div>
              </div>
              <PatternTriangles />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex-1 flex flex-col gap-4 md:gap-5">
            <div className="expertise-card bg-neon-purple/20 text-surface-900 p-6 md:p-8 rounded-[2rem] h-[280px] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl lg:text-2xl font-bold leading-tight">Assessoria Completa<br />para Vendedores</h3>
                  <span className="text-sm font-semibold mt-6 block opacity-70">02</span>
                </div>
              </div>
              <StarPattern />
            </div>
            <div className="expertise-card bg-surface-800 text-white p-6 md:p-8 rounded-[2rem] h-[360px] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop" alt="Team working" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl lg:text-2xl font-bold leading-tight shadow-black drop-shadow-md">Estratégias Sob Medida<br />para Crescer</h3>
                  <span className="text-sm font-semibold mt-6 block opacity-80 drop-shadow-md">05</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex-1 flex flex-col gap-4 md:gap-5 lg:pt-16">
            <div className="expertise-card bg-surface-800 text-white p-6 md:p-8 rounded-[2rem] h-[400px] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" alt="Professional with headset" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl lg:text-2xl font-bold leading-tight shadow-black drop-shadow-md">Transformando Desafios<br />em Oportunidades</h3>
                  <span className="text-sm font-semibold mt-6 block opacity-80 drop-shadow-md">03</span>
                </div>
              </div>
            </div>
            <div className="expertise-card bg-neon-purple/30 text-surface-900 p-6 md:p-8 rounded-[2rem] h-[220px] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h3 className="font-heading text-xl lg:text-2xl font-bold leading-tight pr-2">Inovação e Estratégia,<br />Garantindo Sucesso</h3>
                  <span className="text-sm font-semibold opacity-70">07</span>
                </div>
                <WaveformPattern />
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex-1 flex flex-col gap-4 md:gap-5">
            <div className="expertise-card bg-neon-purple text-white p-6 md:p-8 rounded-[2rem] h-[320px] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl lg:text-2xl font-bold leading-tight">Consultoria Especializada,<br />Resultados Mensuráveis</h3>
                  <span className="text-sm font-semibold mt-6 block opacity-70">04</span>
                </div>
              </div>
              <InfinityPattern />
            </div>
            <div className="expertise-card bg-surface-800 text-white p-6 md:p-8 rounded-[2rem] h-[340px] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop" alt="Professional looking at laptop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl lg:text-[1.35rem] font-bold leading-tight shadow-black drop-shadow-md">Desbloqueie o Potencial<br />da sua Operação</h3>
                  <span className="text-sm font-semibold mt-6 block opacity-80 drop-shadow-md">06</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 5 */}
          <div className="flex-1 flex flex-col justify-center lg:pt-16 lg:pb-8">
            <div className="expertise-card bg-surface-200 text-surface-900 p-6 md:p-8 rounded-[2rem] h-[340px] relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-xl lg:text-2xl font-bold leading-tight">Navegando ao Sucesso<br />com Estratégias<br />Comprovadas</h3>
                  <span className="text-sm font-semibold mt-6 block opacity-70">08</span>
                </div>
              </div>
              <CapsulePattern />
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="relative py-6 md:py-8 border-y border-surface-200/20 bg-surface-50/20 overflow-hidden mt-20">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className="flex items-center gap-4 sm:gap-6 mx-4 sm:mx-6">
              <span className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-surface-300/60 hover:text-neon-green transition-colors duration-300 cursor-default">
                {word}
              </span>
              <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-neon-green/30" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

