import { ArrowDownRight, ExternalLink } from 'lucide-react';
import { MENU_CATEGORIES, STORE_INFO } from '../data/menu';
import { ImageWithFallback } from './ImageWithFallback';

const HERO_IMAGE = '/src/assets/images/hero_nypo_sushi_1795032225575.jpg';

export function Hero() {
  const totalItems = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="topo" className="relative bg-[#09090B] pt-[72px]">
      {/* Full-bleed dark-luxury photographic stage */}
      <div className="relative min-h-[78vh] lg:min-h-[84vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={HERO_IMAGE}
            alt="Seleção omakase do Nypo Sushi com niguiris de salmão fresco e torô selado com folha de ouro sobre pedra ardósia"
            loading="eager"
            className="w-full h-full object-cover object-center lg:object-[70%_center]"
            fallbackLabel="Nypo Sushi · Palmitos, SC"
          />
          {/* Measured contrast scrims */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/85 to-[#09090B]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-[#09090B]/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm tracking-wide text-[#A1A1AA] mb-5">
              <span>{STORE_INFO.city}</span>
              <span aria-hidden="true" className="mx-2 text-[#C81E28]">
                ·
              </span>
              <span>Av. Brasil, 859 — Centro</span>
            </p>

            <h1
              className="font-editorial font-semibold text-[#F5F3EE] tracking-tight leading-[1.04]"
              style={{
                fontSize: 'clamp(2.65rem, 5.2vw, 4.75rem)',
                textWrap: 'balance',
              }}
            >
              Onde o corte preciso encontra o calor da mesa.
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#D4D4D8] leading-relaxed max-w-xl">
              Do primeiro hot roll crocante ao sashimi de torô trufado. Uma cozinha pensada para
              receber com a mesma dedicação quem prova sushi pela primeira vez, quem já domina os
              clássicos, crianças e toda a família.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#cardapio"
                className="inline-flex items-center justify-center gap-2 bg-[#C81E28] hover:bg-[#DF2631] active:scale-[0.98] text-white text-sm font-medium px-6 py-3.5 rounded-sm transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Explorar Cardápio Completo</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/[0.18] hover:border-white/40 bg-[#09090B]/60 hover:bg-[#131317] text-[#F5F3EE] text-sm font-medium px-5 py-3.5 rounded-sm transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E28]"
              >
                <span>WhatsApp da Loja</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#A1A1AA]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width 4-column summary strip directly below hero */}
      <div className="border-y border-white/[0.08] bg-[#0D0D10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
          <div className="py-6 sm:px-6 first:pl-0">
            <p className="font-editorial text-3xl sm:text-4xl font-semibold text-[#F5F3EE] tabular-nums">
              {MENU_CATEGORIES.length}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-[#A1A1AA]">
              Categorias da cozinha ao bar
            </p>
          </div>
          <div className="py-6 sm:px-6">
            <p className="font-editorial text-3xl sm:text-4xl font-semibold text-[#F5F3EE] tabular-nums">
              {totalItems}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-[#A1A1AA]">
              Pratos, sushis e variações reais
            </p>
          </div>
          <div className="py-6 sm:px-6">
            <p className="font-editorial text-3xl sm:text-4xl font-semibold text-[#F5F3EE]">
              Cru, Hot & Kids
            </p>
            <p className="mt-1 text-xs sm:text-sm text-[#A1A1AA]">
              Receitas para todas as idades
            </p>
          </div>
          <div className="py-6 sm:px-6 last:pr-0">
            <p className="font-editorial text-3xl sm:text-4xl font-semibold text-[#C81E28]">
              WhatsApp
            </p>
            <p className="mt-1 text-xs sm:text-sm text-[#A1A1AA]">
              Monte seu cardápio e envie pronto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
