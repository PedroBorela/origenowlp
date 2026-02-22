import { Send, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'E-mail', value: 'contato@origenow.com.br' },
  { icon: Phone, label: 'Telefone', value: '(11) 99999-9999' },
  { icon: MapPin, label: 'Localização', value: 'São Paulo, SP - Brasil' },
]

export default function Contact() {
  return (
    <section id="contato" className="section-padding relative overflow-hidden bg-surface pb-0">
      {/* Background glows */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-neon-green/5 rounded-full blur-[100px]" />

      <div className="container-custom relative z-10">
        {/* Header outside folder */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-20 px-4 md:px-0">
          <div>
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-extrabold text-[#e9ece8] tracking-tight leading-none uppercase">
              CONTACT <span className="text-neon-green block sm:inline">US</span>
            </h2>
          </div>
          <p className="text-[#e9ece8]/60 text-sm max-w-xs md:text-right hidden sm:block">
            Pronto para escalar? Fale com nossa equipe e agende uma conversa.
          </p>
        </div>

        {/* Design 2 Folder Wrapper */}
        <div className="folder-wrapper design-two !p-0 !mt-0 !bg-transparent md:mr-10">
          <div className="card-content with-sidebar bg-contact !p-8 md:!p-12 lg:!p-16 !pb-32 sm:!pb-40 shadow-xl border border-black/5">

            {/* Left Sidebar */}
            <div className="sidebar-floating flex">
              <a href="https://instagram.com/origenow" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="sidebar-icon active"><Instagram size={20} /></a>
              <a href="https://linkedin.com/company/origenow" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="sidebar-icon"><Linkedin size={20} /></a>
              <a href="https://youtube.com/@origenow" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="sidebar-icon"><Youtube size={20} /></a>
              <a href="https://twitter.com/origenow" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="sidebar-icon"><Twitter size={20} /></a>
            </div>

            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 relative z-10 w-full">
              {/* Left: Info cards */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-[#0f392b] tracking-tight mb-2">Master Your<br />Strategy.</h3>
                </div>

                <div className="space-y-4 pt-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="group flex items-center gap-5 p-4 rounded-2xl bg-white border border-black/5 shadow-sm transition-all hover:shadow-md">
                      <div className="w-12 h-12 rounded-xl bg-[#dbe8d9] flex justify-center items-center flex-shrink-0 group-hover:bg-neon-green/20 transition-colors">
                        <item.icon size={18} className="text-[#0f392b]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[#0f392b]/60 text-[10px] font-heading font-bold uppercase tracking-wider mb-0.5">{item.label}</p>
                        <p className="text-[#0f392b] text-sm font-medium truncate">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Nome completo"
                        className="w-full px-5 py-4 bg-white border border-[#0f392b]/10 rounded-2xl text-sm text-[#0f392b] placeholder:text-[#0f392b]/40 focus:outline-none focus:border-neon-green focus:shadow-[0_0_15px_rgba(34,216,101,0.2)] transition-all duration-300"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="E-mail profissional"
                        className="w-full px-5 py-4 bg-white border border-[#0f392b]/10 rounded-2xl text-sm text-[#0f392b] placeholder:text-[#0f392b]/40 focus:outline-none focus:border-neon-green focus:shadow-[0_0_15px_rgba(34,216,101,0.2)] transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Telefone"
                      className="w-full px-5 py-4 bg-white border border-[#0f392b]/10 rounded-2xl text-sm text-[#0f392b] placeholder:text-[#0f392b]/40 focus:outline-none focus:border-neon-green focus:shadow-[0_0_15px_rgba(34,216,101,0.2)] transition-all duration-300"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Como podemos te ajudar?"
                      className="w-full px-5 py-4 bg-white border border-[#0f392b]/10 rounded-2xl text-sm text-[#0f392b] placeholder:text-[#0f392b]/40 focus:outline-none focus:border-neon-green focus:shadow-[0_0_15px_rgba(34,216,101,0.2)] transition-all duration-300 resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full shadow-lg shadow-neon-green/20">
                    Enviar Mensagem
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>

            {/* Huge watermarked text at the bottom */}
            <div className="absolute bottom-4 right-6 left-6 md:right-10 md:left-10 flex justify-end pointer-events-none opacity-[0.85] overflow-hidden select-none">
              <h2 className="font-heading font-extrabold text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-[0.8] text-[#0f392b] tracking-tighter m-0 max-w-full truncate">
                ORIGENOW
              </h2>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
