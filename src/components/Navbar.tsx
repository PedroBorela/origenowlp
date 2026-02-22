import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Funcionalidades', href: '#funcionalidades' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: '#blog' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-surface/90 backdrop-blur-xl border-b border-surface-200/50 shadow-sm pointer-events-auto'
        : 'bg-transparent pointer-events-none'
        }`}
    >
      <div className="container-custom px-4 md:px-6">
        <div className="flex items-center justify-between lg:justify-start h-[80px]">
          {/* Logo */}
          <a href="#hero" className="relative z-10 flex items-center gap-3 group mr-12 pointer-events-auto">
            <img
              src="/origenow_logo.png"
              alt="OrigeNow"
              className="h-8 md:h-9 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 pointer-events-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2 py-2 text-sm font-heading font-medium text-surface-600 hover:text-[#741EA8] transition-all duration-200 uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Space reserved for Tab on Right (Only visually reserved, the tab is rendered in Hero layer) */}
          <div className="hidden lg:block ml-auto w-[280px]"></div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-10 p-2 text-surface-600 hover:text-[#741EA8] transition-colors pointer-events-auto"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 top-[80px] h-screen bg-surface/95 backdrop-blur-2xl animate-fade-in pointer-events-auto">
            <div className="flex flex-col gap-2 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-heading font-bold text-surface-800 hover:text-[#741EA8] py-4 border-b border-surface-200/30 transition-colors uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
