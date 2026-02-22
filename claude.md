# OrigeNow - Projeto Site Institucional

## Sobre o Projeto
Site institucional da OrigeNow, plataforma de soluções para vendedores do Mercado Livre.
O site apresenta as soluções, funcionalidades, resultados, equipe, FAQ, blog e formulário de contato.

## Stack Tecnológica
- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 6
- **Estilização:** Tailwind CSS v3.4 (NÃO usar v4)
- **Ícones:** Lucide React
- **Fontes:** Inter + Plus Jakarta Sans (Google Fonts)

## Estrutura do Projeto
```
OrigeNow/
├── public/
│   └── origenow_logo.png        # Logo da marca
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            # Navegação fixa com menu mobile
│   │   ├── Hero.tsx              # Seção principal com CTA
│   │   ├── Solutions.tsx         # Cards de soluções (4 cards)
│   │   ├── Features.tsx          # Lista de funcionalidades
│   │   ├── Stats.tsx             # Números/métricas da plataforma
│   │   ├── Clients.tsx           # Logos dos clientes/sellers
│   │   ├── Team.tsx              # Membros da equipe
│   │   ├── FAQ.tsx               # Perguntas frequentes (accordion)
│   │   ├── Blog.tsx              # Últimas postagens
│   │   ├── Contact.tsx           # Formulário de contato + info
│   │   └── Footer.tsx            # Footer com newsletter + links
│   ├── App.tsx                   # Composição da página
│   ├── main.tsx                  # Entry point
│   ├── index.css                 # Estilos globais + classes utilitárias
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js            # Configuração do Tailwind com tema custom
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── claude.md                     # Este arquivo
```

## Paleta de Cores
- **Primary (Purple):** #7c3aed (brand-purple), #5b21b6 (dark), #a78bfa (light)
- **Accent (Violet):** #8b5cf6
- **Gradients:** Purple → Indigo (#7c3aed → #4f46e5)
- **Highlight:** Yellow #fde047 (para destaques no hero)
- **Backgrounds:** white, gray-50, gray-900 (footer)

## Convenções de Código
- Componentes em PascalCase, um por arquivo
- Classes utilitárias customizadas definidas em `index.css` (@layer components)
- Usar classes do Tailwind diretamente nos componentes
- Responsivo: mobile-first (sm → md → lg → xl)
- Seções usam `section-padding` e `container-custom` para consistência

## Seções do Site (ordem no App.tsx)
1. **Navbar** - Navegação fixa, links âncora, menu hamburger no mobile
2. **Hero** - Título principal, subtítulo, CTAs, mockup de celular com floating stats
3. **Solutions** - 4 cards: Gestão de Pedidos, Escale Vendas, Segurança, Automação
4. **Features** - Imagem + lista de funcionalidades com checkmarks
5. **Stats** - Métricas (R$45k+, 97%, 51k+, R$3.4M+) em fundo gradiente
6. **Clients** - Grid de logos dos sellers atendidos
7. **Team** - Cards dos membros da equipe com avatar e LinkedIn
8. **FAQ** - Accordion com 5 perguntas frequentes
9. **Blog** - 3 cards de últimas postagens
10. **Contact** - Info de contato + formulário
11. **Footer** - Newsletter CTA, links, redes sociais, copyright

## Comandos
```bash
npm install      # Instalar dependências
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
```

## Referências Visuais
- `image.png` - Design de referência (estilo moderno, tipografia bold)
- `siteatual.png` - Site atual da OrigeNow (seções e conteúdo de referência)
- `origenow_logo.png` - Logo oficial da marca

## Notas
- Tailwind CSS v3 foi escolhido propositalmente para melhor configuração
- Imagens placeholder devem ser substituídas por assets reais
- Dados de contato, equipe e blog são placeholder
- O formulário de contato não tem backend conectado (apenas visual)
