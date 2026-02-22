import { Linkedin, ArrowUpRight } from 'lucide-react'

const team = [
  { name: 'Membro 1', role: 'CEO & Founder', initial: 'C', linkedin: 'https://linkedin.com/' },
  { name: 'Membro 2', role: 'CTO', initial: 'T', linkedin: 'https://linkedin.com/' },
  { name: 'Membro 3', role: 'Head de Vendas', initial: 'V', linkedin: 'https://linkedin.com/' },
  { name: 'Membro 4', role: 'Designer', initial: 'D', linkedin: 'https://linkedin.com/' },
]

export default function Team() {
  return (
    <section className="section-padding relative overflow-hidden bg-surface-50">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left text */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="section-label">Equipe</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-surface-900 mb-5 tracking-tight">
              Um Time{' '}
              <span className="text-gradient">Apaixonado</span>{' '}
              por Resultados
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Conheça os profissionais dedicados a fazer seu negócio crescer no marketplace.
            </p>
          </div>

          {/* Right cards */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
            {team.map((member) => (
              <div key={member.name} className="group bento-card">
                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="relative w-20 h-20 mb-6">
                    <div className="w-full h-full rounded-2xl bg-gradient-to-br from-neon-purple/20 to-neon-green/20 border border-surface-300 flex items-center justify-center group-hover:border-neon-purple/40 transition-colors duration-500">
                      <span className="text-3xl font-heading font-extrabold text-gradient">
                        {member.initial}
                      </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-neon-green rounded-full border-2 border-surface-50" />
                  </div>

                  <h3 className="font-heading text-xl font-bold text-surface-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-muted text-sm mb-4">{member.role}</p>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-surface-400 hover:text-neon-purple transition-colors"
                  >
                    <Linkedin size={13} />
                    LinkedIn
                    <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
