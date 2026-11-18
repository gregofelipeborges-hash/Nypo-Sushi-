import { useMemo, useState } from 'react';
import { Search, Plus, SlidersHorizontal, ShoppingBag, X, Clock } from 'lucide-react';
import { AudienceTag, MENU_CATEGORIES, MenuItem } from '../data/menu';
import { formatBRL, useCart } from '../context/CartContext';
import { DishModal } from './DishModal';
import { ImageWithFallback } from './ImageWithFallback';
import { useStoreHours } from '../utils/storeHours';

interface MenuCatalogProps {
  selectedCategorySlug: string;
  onSelectCategorySlug: (slug: string) => void;
}

const AUDIENCE_FILTERS: { id: 'all' | AudienceTag; label: string }[] = [
  { id: 'all', label: 'Todos os Paladares' },
  { id: 'iniciante', label: 'Iniciantes & Sem Cru' },
  { id: 'tradicional', label: 'Clássicos & Especiais' },
  { id: 'kids', label: 'Pratos Kids' },
  { id: 'bebidas', label: 'Bebidas & Carta' },
];

const FEATURED_SLUGS = new Set([
  'combinados',
  'combinados-especiais',
  'uramaki-especial',
  'hot-roll',
  'joy',
]);

function getItemNote(item: MenuItem): string | null {
  if (item.audience.includes('kids')) return 'Infantil';
  if (item.category === 'HOT ROLL' || item.category === 'PRATOS QUENTES') {
    return 'Prato quente · Sem peixe cru';
  }
  if (item.category.includes('ESPECIAL')) return 'Assinatura da casa';
  if (item.variations.length > 0) return `${item.variations.length} opções`;
  return null;
}

export function MenuCatalog({
  selectedCategorySlug,
  onSelectCategorySlug,
}: MenuCatalogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [audienceFilter, setAudienceFilter] = useState<'all' | AudienceTag>('all');
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [activeDish, setActiveDish] = useState<MenuItem | null>(null);
  const { addItem, totalCount, subtotal, openDrawer, lastAddedName } = useCart();
  const storeHours = useStoreHours();

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredCategories = useMemo(() => {
    const isSearching = normalizedQuery.length > 0;
    const isFilteringAudience = audienceFilter !== 'all';

    return MENU_CATEGORIES.filter((cat) => {
      if (!isSearching && selectedCategorySlug !== 'all' && cat.slug !== selectedCategorySlug) {
        return false;
      }
      return true;
    })
      .map((cat) => {
        const items = cat.items.filter((item) => {
          const matchesAudience =
            !isFilteringAudience || item.audience.includes(audienceFilter);
          const matchesSearch =
            !isSearching ||
            item.name.toLowerCase().includes(normalizedQuery) ||
            item.description.toLowerCase().includes(normalizedQuery) ||
            item.category.toLowerCase().includes(normalizedQuery);
          return matchesAudience && matchesSearch;
        });
        return { ...cat, items };
      })
      .filter((cat) => cat.items.length > 0);
  }, [normalizedQuery, audienceFilter, selectedCategorySlug]);

  const visibleCategories = useMemo(() => {
    if (
      normalizedQuery.length > 0 ||
      audienceFilter !== 'all' ||
      selectedCategorySlug !== 'all' ||
      showAllCategories
    ) {
      return filteredCategories;
    }
    return filteredCategories.filter((cat) => FEATURED_SLUGS.has(cat.slug));
  }, [
    filteredCategories,
    normalizedQuery,
    audienceFilter,
    selectedCategorySlug,
    showAllCategories,
  ]);

  const totalMatches = filteredCategories.reduce((sum, c) => sum + c.items.length, 0);

  const handleResetFilters = () => {
    setSearchQuery('');
    setAudienceFilter('all');
    onSelectCategorySlug('all');
    setShowAllCategories(true);
  };

  const handlePrimaryItemAction = (item: MenuItem) => {
    if (item.variations.length > 0 || item.cupOptions.length > 0) {
      setActiveDish(item);
      return;
    }
    addItem({
      dishId: item.id,
      name: item.name,
      category: item.category,
      imageUrl: item.imageUrl,
      unitPrice: item.basePrice,
      quantity: 1,
    });
  };

  return (
    <section id="cardapio" className="py-20 sm:py-28 bg-[#0D0D10] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading + active cart summary strip */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div className="max-w-2xl">
            <p className="text-xs tracking-wide text-[#C81E28] font-semibold">
              Monte seu Cardápio & Envie no WhatsApp
            </p>
            <h2
              className="mt-2 font-editorial text-3xl sm:text-5xl font-semibold text-[#F5F3EE] leading-[1.08]"
              style={{ textWrap: 'balance' }}
            >
              Escolha quantos pratos quiser e finalize direto com a loja.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A1A1AA]">
              Selecione cada sushi, variação de tamanho ou prato quente para montar sua comanda. Ao
              concluir, enviamos o cardápio pronto para o WhatsApp oficial do Nypo Sushi.
            </p>
          </div>

          {/* Search input */}
          <div className="w-full lg:w-80 shrink-0">
            <label htmlFor="menu-search" className="sr-only">
              Buscar no cardápio
            </label>
            <div className="relative">
              <Search className="w-4 h-4 text-[#A1A1AA] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="menu-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar salmão, hot roll, brie, kids..."
                className="w-full bg-[#131317] border border-white/[0.12] focus:border-[#C81E28] rounded-sm pl-10 pr-9 py-2.5 text-sm text-[#F5F3EE] placeholder:text-[#71717A] focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Limpar busca"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#A1A1AA] hover:text-white p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Operating Hours Notice when closed */}
        {!storeHours.isOpen && (
          <div
            role="note"
            className="mt-6 bg-[#131317] border border-[#C81E28]/50 rounded-sm px-5 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3"
          >
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#C81E28] mt-0.5 shrink-0" />
              <div className="text-sm leading-relaxed">
                <p className="font-semibold text-[#F5F3EE]">
                  {storeHours.statusTitle} · {storeHours.nextOpeningText}
                </p>
                <p className="text-xs text-[#A1A1AA] mt-0.5">
                  Horário de atendimento: <span className="text-[#D4D4D8]">{storeHours.scheduleLine}</span> ({storeHours.closedDayLine}). Você já pode montar sua comanda antecipadamente.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Inline Sacola Banner inside menu when items > 0 */}
        {totalCount > 0 && (
          <div className="mt-6 bg-[#131317] border border-[#C81E28]/50 rounded-sm px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#C81E28] shrink-0" />
              <p className="text-sm text-[#F5F3EE]">
                <span className="font-semibold tabular-nums">
                  {totalCount} {totalCount === 1 ? 'item' : 'itens'}
                </span>{' '}
                na sua comanda · Subtotal:{' '}
                <span className="font-semibold tabular-nums">{formatBRL(subtotal)}</span>
              </p>
            </div>
            <button
              type="button"
              onClick={openDrawer}
              className="px-4 py-2 text-xs font-medium bg-[#C81E28] hover:bg-[#DF2631] text-white rounded-sm transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto"
            >
              Revisar Pedido & Enviar no WhatsApp
            </button>
          </div>
        )}

        {/* Audience segmented controls + Category bar */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {AUDIENCE_FILTERS.map((tab) => {
              const active = audienceFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setAudienceFilter(tab.id);
                    if (tab.id !== 'all') onSelectCategorySlug('all');
                  }}
                  className={`px-3.5 py-2 text-xs font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E28] ${
                    active
                      ? 'bg-[#C81E28] text-white'
                      : 'bg-[#131317] text-[#A1A1AA] hover:text-[#F5F3EE] border border-white/[0.08]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
            <button
              type="button"
              onClick={() => onSelectCategorySlug('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 ${
                selectedCategorySlug === 'all'
                  ? 'bg-[#F5F3EE] text-[#09090B]'
                  : 'text-[#A1A1AA] hover:text-[#F5F3EE] bg-white/[0.03] border border-white/[0.06]'
              }`}
            >
              Todas as Categorias ({MENU_CATEGORIES.length})
            </button>
            {MENU_CATEGORIES.map((cat) => {
              const active = selectedCategorySlug === cat.slug;
              return (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => {
                    onSelectCategorySlug(cat.slug);
                    setAudienceFilter('all');
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#F5F3EE] text-[#09090B]'
                      : 'text-[#A1A1AA] hover:text-[#F5F3EE] bg-white/[0.03] border border-white/[0.06]'
                  }`}
                >
                  {cat.name} ({cat.items.length})
                </button>
              );
            })}
          </div>
        </div>

        {/* Result counter */}
        <div className="mt-4 flex items-center justify-between text-xs text-[#A1A1AA]">
          <p className="tabular-nums">
            Exibindo {visibleCategories.reduce((s, c) => s + c.items.length, 0)} de{' '}
            {totalMatches} itens encontrados
          </p>
          {(searchQuery || audienceFilter !== 'all' || selectedCategorySlug !== 'all') && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-[#C81E28] hover:text-[#DF2631] font-medium transition-colors"
            >
              Limpar filtros
            </button>
          )}
        </div>

        {/* Category Lists */}
        {visibleCategories.length === 0 ? (
          <div className="mt-12 py-16 px-6 text-center bg-[#131317] border border-white/[0.08] rounded-sm">
            <p className="font-editorial text-2xl text-[#F5F3EE]">
              Nenhum prato encontrado para essa busca.
            </p>
            <p className="mt-2 text-sm text-[#A1A1AA]">
              Tente outro termo como salmão, camarão, uramaki, hot roll ou limpe os filtros.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="mt-5 px-5 py-2.5 text-xs font-medium bg-[#C81E28] hover:bg-[#DF2631] text-white rounded-sm transition-colors"
            >
              Mostrar Cardápio Completo
            </button>
          </div>
        ) : (
          <div className="mt-10 space-y-14">
            {visibleCategories.map((cat) => (
              <div key={cat.slug} id={`cat-${cat.slug}`}>
                <div className="flex items-baseline justify-between gap-4 pb-3 border-b border-white/[0.08]">
                  <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#F5F3EE]">
                    {cat.name}
                  </h3>
                  <span className="text-xs text-[#A1A1AA] tabular-nums shrink-0">
                    {cat.items.length} {cat.items.length === 1 ? 'opção' : 'opções'}
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {cat.items.map((item) => {
                    const note = getItemNote(item);
                    const hasVariations = item.variations.length > 0 || item.cupOptions.length > 0;
                    return (
                      <article
                        key={item.id}
                        className="group bg-[#131317] border border-white/[0.08] hover:border-[#C81E28]/50 rounded-sm p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5"
                      >
                        <div className="flex items-start gap-4">
                          {/* Side representation image of the dish */}
                          <button
                            type="button"
                            onClick={() => setActiveDish(item)}
                            aria-label={`Ampliar imagem de ${item.name}`}
                            className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 overflow-hidden rounded-sm border border-white/[0.08] bg-[#09090B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E28]"
                          >
                            <ImageWithFallback
                              src={item.imageUrl}
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                              fallbackLabel={item.name}
                            />
                          </button>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-2 text-[11px] uppercase tracking-wider text-[#A1A1AA]">
                              <span className="truncate">{note || item.category}</span>
                            </div>

                            <h4 className="mt-1 text-base font-semibold text-[#F5F3EE] leading-snug">
                              {item.name}
                            </h4>

                            <p className="mt-1 text-sm font-semibold text-[#C81E28] tabular-nums whitespace-nowrap">
                              {item.price}
                            </p>

                            <p className="mt-1.5 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed line-clamp-2">
                              {item.description ||
                                'Preparo exclusivo Nypo Sushi. Clique em ver detalhes.'}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex items-center justify-between gap-3">
                          <button
                            type="button"
                            onClick={() => setActiveDish(item)}
                            className="text-xs font-medium text-[#A1A1AA] hover:text-[#F5F3EE] py-1.5 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E28] rounded-sm"
                          >
                            Ver detalhes / Obs.
                          </button>

                          <button
                            type="button"
                            onClick={() => handlePrimaryItemAction(item)}
                            className="inline-flex items-center gap-1.5 bg-[#C81E28] hover:bg-[#DF2631] active:scale-[0.98] text-white text-xs font-medium px-3.5 py-2 rounded-sm transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                          >
                            {hasVariations ? (
                              <>
                                <SlidersHorizontal className="w-3.5 h-3.5" />
                                <span>Escolher opção</span>
                              </>
                            ) : (
                              <>
                                <Plus className="w-3.5 h-3.5" />
                                <span>Adicionar</span>
                              </>
                            )}
                          </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {!showAllCategories &&
          selectedCategorySlug === 'all' &&
          audienceFilter === 'all' &&
          normalizedQuery.length === 0 && (
            <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-[#A1A1AA]">
                Mostrando as 5 categorias principais de sushi. Explore também Entradas,
                Temakis, Sashimis, Pratos Quentes, Pratos Kids e Carta de Bebidas.
              </p>
              <button
                type="button"
                onClick={() => setShowAllCategories(true)}
                className="px-5 py-3 text-sm font-medium bg-[#131317] hover:bg-[#1A1A20] text-[#F5F3EE] border border-white/[0.15] rounded-sm transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E28]"
              >
                Ver Todas as 19 Categorias ({MENU_CATEGORIES.reduce((s, c) => s + c.items.length, 0)} itens)
              </button>
            </div>
          )}

        {/* Quiet Legal & Allergen Notice */}
        <div className="mt-10 pt-6 border-t border-white/[0.06] text-xs text-[#71717A] leading-relaxed space-y-1.5">
          <p>
            Alérgicos: nossos pratos podem conter ou apresentar traços de peixes, crustáceos
            (camarão, kani), polvo, soja, gergelim, glúten, amêndoas e derivados de leite. Informe
            qualquer restrição alimentar no campo de observações antes de finalizar.
          </p>
          <p>
            Venda e entrega de bebidas alcoólicas proibidas para menores de 18 anos (Lei nº
            8.069/1990). Valores e disponibilidade sujeitos à confirmação no atendimento.
          </p>
        </div>
      </div>

      {/* Transient toast when adding an item */}
      {lastAddedName && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-40 max-w-sm bg-[#131317] border border-[#C81E28] rounded-sm px-4 py-3 shadow-2xl flex items-center justify-between gap-4"
        >
          <p className="text-xs text-[#F5F3EE] truncate">
            Adicionado: <span className="font-semibold">{lastAddedName}</span>
          </p>
          <button
            type="button"
            onClick={openDrawer}
            className="text-xs font-semibold text-[#C81E28] hover:text-[#DF2631] whitespace-nowrap shrink-0"
          >
            Ver Comanda ({totalCount})
          </button>
        </div>
      )}

      <DishModal item={activeDish} onClose={() => setActiveDish(null)} />
    </section>
  );
}
