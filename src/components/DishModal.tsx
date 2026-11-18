import { useEffect, useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Clock } from 'lucide-react';
import { MenuItem } from '../data/menu';
import { formatBRL, useCart } from '../context/CartContext';
import { ImageWithFallback } from './ImageWithFallback';
import { useStoreHours } from '../utils/storeHours';

interface DishModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

function getAudienceAdvice(item: MenuItem): string {
  if (item.audience.includes('kids')) {
    return 'Preparo suave e familiar, ideal para crianças e acompanhantes que preferem sabores clássicos.';
  }
  if (item.audience.includes('iniciante') && !item.audience.includes('tradicional')) {
    return 'Excelente porta de entrada para quem está conhecendo a culinária oriental — ingredientes cozidos, grelhados ou empanados.';
  }
  if (item.audience.includes('bebidas')) {
    return 'Sugestão da carta do Nypo Sushi para harmonizar com combinados, sashimis ou pratos quentes.';
  }
  return 'Preparo artesanal com cortes frescos ou maçaricados na hora, equilibrando textura, acidez e molhos autorais da casa.';
}

export function DishModal({ item, onClose }: DishModalProps) {
  const { addItem, openDrawer } = useCart();
  const [selectedVariationIdx, setSelectedVariationIdx] = useState(0);
  const [selectedCup, setSelectedCup] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');
  const storeHours = useStoreHours();

  useEffect(() => {
    if (!item) return;
    setSelectedVariationIdx(0);
    setSelectedCup('');
    setQuantity(1);
    setNotes('');
  }, [item]);

  useEffect(() => {
    if (!item) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [item, onClose]);

  if (!item) return null;

  const hasVariations = item.variations.length > 0;
  const activeVariation = hasVariations ? item.variations[selectedVariationIdx] : null;
  const unitPrice = activeVariation ? activeVariation.price : item.basePrice;
  const lineTotal = unitPrice * quantity;

  const handleAddToCart = () => {
    const combinedNotes = [
      selectedCup ? `Acompanhamento: ${selectedCup}` : '',
      notes.trim(),
    ]
      .filter(Boolean)
      .join(' · ');

    addItem({
      dishId: item.id,
      name: item.name,
      category: item.category,
      imageUrl: item.imageUrl,
      optionName: activeVariation?.name,
      unitPrice,
      quantity,
      notes: combinedNotes || undefined,
    });
    onClose();
  };

  const handleAddAndOpenCart = () => {
    handleAddToCart();
    openDrawer();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[#131317] border border-white/[0.12] rounded-sm shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dish Image Header */}
        <div className="relative h-52 sm:h-60 w-full bg-[#09090B] overflow-hidden border-b border-white/[0.08]">
          <ImageWithFallback
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover"
            fallbackLabel={item.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131317] via-transparent to-black/40" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar detalhes do prato"
            className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 text-[#F5F3EE] bg-[#09090B]/80 hover:bg-[#09090B] border border-white/[0.15] rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E28]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 pt-5">
          <div>
            <p className="text-xs tracking-wide text-[#C81E28] font-semibold">
              {item.category}
            </p>
            <h3
              id="dish-modal-title"
              className="mt-1.5 font-editorial text-2xl sm:text-3xl font-semibold text-[#F5F3EE] leading-tight"
            >
              {item.name}
            </h3>
          </div>

        <div className="mt-4 pt-4 border-t border-white/[0.08] space-y-5">
          <div>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              {item.description ||
                'Preparo especial da casa seguindo o padrão Nypo Sushi.'}
            </p>
            <p className="mt-2 text-xs text-[#71717A] leading-relaxed">
              {getAudienceAdvice(item)}
            </p>
          </div>

          {/* Variations selector (when dish has options like 05/10 unid or flavors) */}
          {hasVariations && (
            <div className="pt-4 border-t border-white/[0.08]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-[#F5F3EE] uppercase tracking-wider">
                  Escolha 1 opção
                </span>
                <span className="text-[11px] text-[#C81E28] font-medium">
                  Obrigatório
                </span>
              </div>
              <div className="space-y-2">
                {item.variations.map((v, idx) => {
                  const selected = idx === selectedVariationIdx;
                  return (
                    <button
                      key={v.name}
                      type="button"
                      onClick={() => setSelectedVariationIdx(idx)}
                      className={`w-full flex items-center justify-between gap-3 px-4 py-3 text-left rounded-sm border transition-colors ${
                        selected
                          ? 'bg-[#C81E28]/15 border-[#C81E28] text-[#F5F3EE]'
                          : 'bg-[#09090B] border-white/[0.08] text-[#D4D4D8] hover:border-white/25'
                      }`}
                    >
                      <span className="text-sm font-medium">{v.name}</span>
                      <span className="text-sm font-semibold tabular-nums shrink-0">
                        {formatBRL(v.price)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Cup options for drinks */}
          {item.cupOptions.length > 0 && (
            <div className="pt-4 border-t border-white/[0.08]">
              <span className="block text-xs font-semibold text-[#F5F3EE] uppercase tracking-wider mb-2.5">
                Deseja copo? (Opcional)
              </span>
              <div className="flex flex-wrap gap-2">
                {item.cupOptions.map((cup) => {
                  const active = selectedCup === cup;
                  return (
                    <button
                      key={cup}
                      type="button"
                      onClick={() => setSelectedCup(active ? '' : cup)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-sm border transition-colors ${
                        active
                          ? 'bg-[#F5F3EE] text-[#09090B] border-[#F5F3EE]'
                          : 'bg-[#09090B] text-[#A1A1AA] border-white/[0.1] hover:text-white'
                      }`}
                    >
                      {cup}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Observation note */}
          <div className="pt-4 border-t border-white/[0.08]">
            <label
              htmlFor="dish-notes"
              className="block text-xs font-semibold text-[#F5F3EE] uppercase tracking-wider mb-2"
            >
              Alguma observação? (Opcional)
            </label>
            <textarea
              id="dish-notes"
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex.: sem gergelim, sem cream cheese, mandar tarê extra..."
              className="w-full bg-[#09090B] border border-white/[0.12] focus:border-[#C81E28] rounded-sm px-3.5 py-2.5 text-sm text-[#F5F3EE] placeholder:text-[#71717A] focus:outline-none resize-none"
            />
          </div>
        </div>

        {/* Quantity + Add Actions */}
        <div className="mt-6 pt-5 border-t border-white/[0.08] space-y-3">
          {!storeHours.isOpen && (
            <p className="flex items-center gap-2 text-xs text-[#D4D4D8] bg-[#09090B] border border-[#C81E28]/40 rounded-sm px-3 py-2">
              <Clock className="w-3.5 h-3.5 text-[#C81E28] shrink-0" />
              <span>
                {storeHours.statusTitle}. Funcionamento: Terça a Domingo, 18:30 às 23:00.
              </span>
            </p>
          )}
          <div className="flex items-center justify-between gap-4">
            <div className="inline-flex items-center border border-white/[0.14] rounded-sm bg-[#09090B]">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Diminuir quantidade"
                className="w-10 h-10 inline-flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-10 text-center text-sm font-semibold text-[#F5F3EE] tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Aumentar quantidade"
                className="w-10 h-10 inline-flex items-center justify-center text-[#A1A1AA] hover:text-white transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-white bg-[#C81E28] hover:bg-[#DF2631] active:scale-[0.98] rounded-sm transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span>Adicionar · {formatBRL(lineTotal)}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={handleAddAndOpenCart}
            className="w-full py-2.5 text-xs font-medium text-[#D4D4D8] hover:text-white border border-white/[0.1] hover:border-white/25 rounded-sm transition-colors"
          >
            Adicionar e ir para a Sacola
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
