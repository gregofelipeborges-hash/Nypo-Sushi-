import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

interface GallerySectionProps {
  onJumpToCategory: (slug: string) => void;
}

const GALLERY_ITEMS = [
  {
    id: 'combinados',
    slug: 'combinados',
    image: '/src/assets/images/featured_combinado_nypo_1795032226632.jpg',
    alt: 'Combinado de sushis variados com sashimis de salmão, uramakis crocantes, joys e hot rolls sobre cerâmica preta',
    kicker: 'Para compartilhar · 15 a 101 peças',
    title: 'Combinados & Barcas Especiais',
    caption:
      'Seleções equilibradas com sashimis frescos, uramakis autorais, joys e hot filadélfia.',
    colSpan: 'lg:col-span-7',
  },
  {
    id: 'hot-temaki',
    slug: 'hot-roll',
    image: '/src/assets/images/featured_hot_temaki_1795032228286.jpg',
    alt: 'Hot Filadélfia crocante empanado na farinha panko com molho tarê ao lado de temaki de salmão fresco',
    kicker: 'Crocância & Conforto',
    title: 'Hot Rolls & Temakis na Hora',
    caption:
      'Empanados na panko, recheios cremosos e opções doces com morango ou banana.',
    colSpan: 'lg:col-span-5',
  },
  {
    id: 'ceviche-poke',
    slug: 'entradas',
    image: '/src/assets/images/featured_ceviche_poke_1795032227658.jpg',
    alt: 'Ceviche de salmão e poke artesanal servidos em tigela de cerâmica preta fosca',
    kicker: 'Frescor & Cítricos',
    title: 'Entradas, Ceviches & Pokes',
    caption:
      'Sunomono tradicional, harumakis crocantes, ceviches cítricos e pokes completos.',
    colSpan: 'lg:col-span-12',
    wide: true,
  },
];

export function GallerySection({ onJumpToCategory }: GallerySectionProps) {
  return (
    <section id="galeria" className="py-20 sm:py-28 bg-[#09090B] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-xs tracking-wide text-[#C81E28] font-semibold">
            Composição Visual & Sabores
          </p>
          <h2
            className="mt-2 font-editorial text-3xl sm:text-5xl font-semibold text-[#F5F3EE] leading-[1.08]"
            style={{ textWrap: 'balance' }}
          >
            Texturas contrastantes em cada serviço.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className={`${item.colSpan} group relative overflow-hidden rounded-sm border border-white/[0.08] bg-[#131317] ${
                item.wide ? 'aspect-[16/9] lg:aspect-[21/9]' : 'aspect-[4/3]'
              }`}
            >
              <ImageWithFallback
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                fallbackLabel={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/40 to-transparent" />

              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-xl">
                  <p className="text-xs text-[#D4D4D8] tracking-wide">{item.kicker}</p>
                  <h3 className="mt-1 font-editorial text-2xl sm:text-3xl font-semibold text-[#F5F3EE]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#D4D4D8] leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <a
                  href="#cardapio"
                  onClick={() => onJumpToCategory(item.slug)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium bg-[#09090B]/85 hover:bg-[#C81E28] text-white border border-white/[0.18] hover:border-[#C81E28] rounded-sm transition-colors whitespace-nowrap shrink-0 self-start sm:self-end"
                >
                  <span>Ver opções</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
