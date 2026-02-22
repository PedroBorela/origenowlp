import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Como funciona a integração com o Mercado Livre?',
    answer:
      'Nossa plataforma se conecta diretamente à API oficial do Mercado Livre, garantindo sincronização em tempo real de pedidos, estoque, mensagens e métricas.',
  },
  {
    question: 'Quanto tempo leva para configurar?',
    answer:
      'A configuração inicial leva em média 15 minutos. Basta conectar sua conta do Mercado Livre e personalizar as preferências da sua operação.',
  },
  {
    question: 'Posso usar com múltiplas contas do Mercado Livre?',
    answer:
      'Sim! Nossa plataforma suporta múltiplas contas, permitindo que você gerencie todas as suas operações em um único painel centralizado.',
  },
  {
    question: 'Qual o custo da plataforma?',
    answer:
      'Oferecemos planos flexíveis que se adaptam ao tamanho da sua operação. Entre em contato conosco para uma proposta personalizada.',
  },
  {
    question: 'Vocês oferecem suporte técnico?',
    answer:
      'Sim, oferecemos suporte via chat, e-mail e telefone em horário comercial. Clientes do plano Pro têm acesso a suporte prioritário 24/7.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding relative">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neon-green/5 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10 max-w-3xl">
        <div className="text-center mb-16">
          <span className="section-label">FAQ</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-surface-900 mb-5 tracking-tight">
            Perguntas{' '}
            <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-muted text-lg">
            Tire suas dúvidas sobre a plataforma OrigeNow.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`glass-card overflow-hidden transition-all duration-500 ${isOpen ? 'border-neon-purple/30' : ''
                  }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex items-center justify-between w-full px-6 py-5 text-left group"
                >
                  <span className="font-heading font-bold text-surface-900 text-sm sm:text-base pr-6 group-hover:text-neon-purple transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen
                      ? 'bg-neon-purple/20 text-neon-purple rotate-0'
                      : 'bg-surface-200 text-muted rotate-0'
                    }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-muted text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
