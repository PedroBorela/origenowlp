import { ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-surface-900 text-white">
      {/* Newsletter CTA */}
      <div className="container-custom px-5 sm:px-8 lg:px-12 py-16">
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-10 sm:p-14 text-center relative overflow-hidden">
          {/* Ambient glows */}
          <div className="absolute top-0 left-1/4 w-40 h-40 bg-neon-purple/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-neon-green/10 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
              Se inscreva em nossas{' '}
              <span className="text-neon-green">novidades</span>
            </h3>
            <p className="text-white/60 mb-8 max-w-md mx-auto">
              Receba dicas, novidades e estratégias para vender mais no Mercado Livre.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 px-5 py-3.5 bg-white/10 border border-white/15 rounded-full text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-neon-purple/50 focus:shadow-glow-sm transition-all duration-300"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Inscrever-se
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="container-custom px-5 sm:px-8 lg:px-12 pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <img
              src="/origenow_logo.png"
              alt="OrigeNow"
              className="h-9 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Soluções completas para vendedores do Mercado Livre escalarem suas operações.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-5">
              Plataforma
            </h4>
            <ul className="space-y-3">
              {['Soluções', 'Funcionalidades', 'Resultados', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/50 text-sm hover:text-neon-purple transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-5">
              Empresa
            </h4>
            <ul className="space-y-3">
              {['Sobre Nós', 'Blog', 'Contato', 'Carreiras'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 text-sm hover:text-neon-purple transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {['Termos de Uso', 'Privacidade', 'Cookies'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/50 text-sm hover:text-neon-purple transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} OrigeNow. Todos os direitos reservados.
          </p>
          <div className="flex gap-2">
            {['IG', 'LI', 'YT'].map((s) => (
              <a
                key={s}
                href="#"
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 text-[10px] font-heading font-bold hover:border-neon-purple/30 hover:text-neon-purple transition-all duration-300"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
