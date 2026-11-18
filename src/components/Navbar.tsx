import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { STORE_INFO } from '../data/menu';
import { useCart } from '../context/CartContext';
import { ImageWithFallback } from './ImageWithFallback';

const LOGO_SRC = '/src/assets/images/nypo_logo.png';

const NAV_LINKS = [
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'A Casa', href: '#a-casa' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalCount, openDrawer } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        scrolled || mobileOpen
          ? 'bg-[#09090B]/95 backdrop-blur-md border-b border-white/[0.08]'
          : 'bg-gradient-to-b from-[#09090B]/90 to-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand lockup with official logo */}
        <a
          href="#topo"
          className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E28] rounded-sm"
        >
          <ImageWithFallback
            src={LOGO_SRC}
            alt="Logo Nypo Sushi"
            loading="eager"
            className="h-10 w-10 object-contain shrink-0"
            fallbackLabel="NS"
          />
          <span className="font-editorial text-2xl sm:text-[26px] font-semibold tracking-tight text-[#F5F3EE] whitespace-nowrap">
            {STORE_INFO.brand}
          </span>
        </a>

        {/* Zone 2: 5 concise single-line text links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#A1A1AA]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-[#F5F3EE] transition-colors duration-150 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-px after:bg-[#C81E28] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E28] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action (Sacola / Pedido) + mobile menu trigger */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={openDrawer}
            aria-label={`Abrir sacola com ${totalCount} itens`}
            className="inline-flex items-center justify-center gap-2 bg-[#C81E28] hover:bg-[#DF2631] active:scale-[0.98] text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 rounded-sm transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span>Pedido</span>
            <span className="tabular-nums font-semibold">({totalCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-[#F5F3EE] hover:text-white border border-white/[0.12] rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E28]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0D0D10] border-t border-white/[0.08] px-4 py-5 space-y-2">
          <nav aria-label="Navegação mobile" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="py-3 px-3 text-base font-medium text-[#F5F3EE] hover:bg-white/[0.04] rounded-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
