import { ArrowRight, ArrowUpRight, Calendar } from 'lucide-react'

const posts = [
  {
    title: 'Como aumentar suas vendas no Mercado Livre em 2025',
    excerpt: 'Descubra estratégias comprovadas para escalar sua operação e vender mais.',
    date: '15 Jan 2025',
    category: 'Vendas',
  },
  {
    title: 'Guia completo de gestão de estoque para e-commerce',
    excerpt: 'Aprenda a controlar seu estoque de forma eficiente e evitar rupturas de produto.',
    date: '10 Jan 2025',
    category: 'Gestão',
  },
  {
    title: 'Automatização: o futuro do e-commerce no Brasil',
    excerpt: 'Entenda como a automação pode transformar sua operação no marketplace.',
    date: '05 Jan 2025',
    category: 'Tech',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="section-padding relative bg-surface-50">
      <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-neon-purple/5 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6">
          <div>
            <span className="section-label">Blog</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-surface-900 tracking-tight">
              Últimas{' '}
              <span className="text-gradient">Postagens</span>
            </h2>
          </div>
          <a
            href="#"
            className="btn-ghost group"
          >
            Ver todos
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <article key={index} className="group bento-card cursor-pointer">
              <div className="relative z-10">
                {/* Image placeholder */}
                <div className="relative rounded-2xl aspect-video mb-5 overflow-hidden bg-gradient-to-br from-neon-purple/10 to-neon-green/5 border border-surface-200/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-surface-400 text-xs font-heading">Imagem do Post</span>
                  </div>
                  {/* Category tag */}
                  <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-heading font-bold uppercase tracking-wider bg-surface/70 backdrop-blur-md text-neon-green rounded-full border border-surface-300/50">
                    {post.category}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={12} className="text-surface-400" />
                  <span className="text-surface-400 text-xs">{post.date}</span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-base font-bold text-surface-900 group-hover:text-neon-purple transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    className="text-surface-400 group-hover:text-neon-purple flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 mt-0.5"
                  />
                </div>
                <p className="text-muted text-sm leading-relaxed mt-2">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
