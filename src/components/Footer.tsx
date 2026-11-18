import { STORE_INFO } from '../data/menu';
import { ImageWithFallback } from './ImageWithFallback';
import { LegalTab } from './LegalModal';

const LOGO_SRC = '/src/assets/images/nypo_logo.png';

interface FooterProps {
  onOpenLegal: (tab: LegalTab) => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-[#09090B] border-t border-white/[0.08] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <ImageWithFallback
              src={LOGO_SRC}
              alt="Logo Nypo Sushi"
              className="w-11 h-11 object-contain shrink-0"
              fallbackLabel="NS"
            />
            <div>
              <span className="font-editorial text-2xl font-semibold text-[#F5F3EE]">
                {STORE_INFO.brand}
              </span>
              <p className="mt-0.5 text-xs text-[#A1A1AA]">
                {STORE_INFO.address} · {STORE_INFO.whatsappDisplay}
              </p>
              <p className="mt-0.5 text-xs text-[#71717A]">
                Terça a Domingo, das 18:30 às 23:00 · Segunda-feira: Fechado
              </p>
            </div>
          </div>

          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap items-center gap-6 text-xs text-[#A1A1AA]"
          >
            <a href="#cardapio" className="hover:text-[#F5F3EE] transition-colors">
              Cardápio
            </a>
            <a href="#a-casa" className="hover:text-[#F5F3EE] transition-colors">
              A Casa
            </a>
            <a href="#galeria" className="hover:text-[#F5F3EE] transition-colors">
              Galeria
            </a>
            <a href="#duvidas" className="hover:text-[#F5F3EE] transition-colors">
              Dúvidas
            </a>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C81E28] hover:text-[#DF2631] font-medium transition-colors"
            >
              WhatsApp Oficial
            </a>
          </nav>
        </div>

        {/* Legal & Compliance Links */}
        <div className="pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#71717A]">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <button
              type="button"
              onClick={() => onOpenLegal('privacidade')}
              className="hover:text-[#D4D4D8] transition-colors"
            >
              Política de Privacidade (LGPD)
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('termos')}
              className="hover:text-[#D4D4D8] transition-colors"
            >
              Termos de Uso
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-[#D4D4D8] transition-colors"
            >
              Política de Cookies
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('alergenicos')}
              className="hover:text-[#D4D4D8] transition-colors"
            >
              Alergênicos &amp; Venda +18
            </button>
          </div>

          <p>
            © {new Date().getFullYear()} {STORE_INFO.brand}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
