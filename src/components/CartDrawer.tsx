import { useState, useEffect } from 'react';
import { X, Plus, Minus, Trash2, MessageCircle, Copy, Check, ShoppingBag, Clock } from 'lucide-react';
import { formatBRL, useCart } from '../context/CartContext';
import { STORE_INFO } from '../data/menu';
import { ImageWithFallback } from './ImageWithFallback';
import { useStoreHours } from '../utils/storeHours';

const LOGO_SRC = '/src/assets/images/nypo_logo.png';

type DeliveryMode = 'entrega' | 'retirada';
type PaymentMethod = 'Pix' | 'Cartão na entrega/balcão' | 'Dinheiro';

export function CartDrawer() {
  const {
    items,
    totalCount,
    subtotal,
    isDrawerOpen,
    closeDrawer,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const [deliveryMode, setDeliveryMode] = useState<DeliveryMode>('entrega');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [reference, setReference] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('Pix');
  const [changeFor, setChangeFor] = useState('');
  const [generalNotes, setGeneralNotes] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [readyWhatsappUrl, setReadyWhatsappUrl] = useState<string | null>(null);
  const [readyMessageText, setReadyMessageText] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const storeHours = useStoreHours();

  useEffect(() => {
    if (!isDrawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDrawer();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isDrawerOpen, closeDrawer]);

  if (!isDrawerOpen) return null;

  const buildOrderMessage = (): string => {
    const lines: string[] = [];
    lines.push('*NOVO PEDIDO — NYPO SUSHI*');
    lines.push('--------------------------------');
    lines.push('*Cardápio Selecionado:*');

    items.forEach((item, index) => {
      const label = item.optionName ? `${item.name} (${item.optionName})` : item.name;
      lines.push(
        `${index + 1}. *${item.quantity}x ${label}* — ${formatBRL(
          item.unitPrice * item.quantity
        )}`
      );
      if (item.notes) {
        lines.push(`   _Obs: ${item.notes}_`);
      }
    });

    lines.push('--------------------------------');
    lines.push(`*Subtotal dos itens:* ${formatBRL(subtotal)}`);
    lines.push(
      `*Recebimento:* ${
        deliveryMode === 'entrega'
          ? 'Entrega (Delivery em Palmitos)'
          : 'Retirada no balcão (Av. Brasil, 859)'
      }`
    );

    if (deliveryMode === 'entrega') {
      lines.push(`*Endereço:* ${address.trim()}`);
      lines.push(`*Bairro:* ${neighborhood.trim()}`);
      if (reference.trim()) {
        lines.push(`*Complemento / Ref.:* ${reference.trim()}`);
      }
    }

    lines.push(`*Cliente:* ${customerName.trim()}`);
    lines.push(`*Telefone:* ${customerPhone.trim()}`);
    lines.push(`*Pagamento:* ${paymentMethod}`);
    if (paymentMethod === 'Dinheiro' && changeFor.trim()) {
      lines.push(`*Troco para:* ${changeFor.trim()}`);
    }
    if (generalNotes.trim()) {
      lines.push(`*Observações gerais:* ${generalNotes.trim()}`);
    }

    return lines.join('\n');
  };

  const handlePrepareWhatsapp = () => {
    const nextErrors: Record<string, string> = {};
    if (customerName.trim().length < 2) {
      nextErrors.customerName = 'Informe seu nome.';
    }
    if (customerPhone.replace(/\D/g, '').length < 10) {
      nextErrors.customerPhone = 'Informe um WhatsApp/telefone com DDD.';
    }
    if (deliveryMode === 'entrega') {
      if (address.trim().length < 4) {
        nextErrors.address = 'Informe rua e número para entrega.';
      }
      if (neighborhood.trim().length < 2) {
        nextErrors.neighborhood = 'Informe o bairro.';
      }
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const msg = buildOrderMessage();
    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    setReadyMessageText(msg);
    setReadyWhatsappUrl(url);
  };

  const handleCopySummary = async () => {
    try {
      await navigator.clipboard.writeText(readyMessageText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore clipboard errors
    }
  };

  const handleResetReady = () => {
    setReadyWhatsappUrl(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Sacola de pedido"
      onClick={closeDrawer}
    >
      <aside
        className="w-full max-w-lg bg-[#0D0D10] border-l border-white/[0.1] h-full flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-white/[0.08] flex items-center justify-between gap-4 bg-[#09090B]">
          <div className="flex items-center gap-3">
            <ImageWithFallback
              src={LOGO_SRC}
              alt="Nypo Sushi"
              className="w-9 h-9 object-contain"
              fallbackLabel="NS"
            />
            <div>
              <h2 className="font-editorial text-2xl font-semibold text-[#F5F3EE] leading-none">
                Sua Comanda
              </h2>
              <p className="mt-1 text-xs text-[#A1A1AA] tabular-nums">
                {totalCount} {totalCount === 1 ? 'item selecionado' : 'itens selecionados'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Fechar sacola"
            className="w-10 h-10 inline-flex items-center justify-center text-[#A1A1AA] hover:text-white border border-white/[0.1] rounded-sm transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {!storeHours.isOpen && (
            <div className="p-4 bg-[#131317] border border-[#C81E28]/60 rounded-sm space-y-1.5">
              <div className="flex items-center gap-2 text-[#C81E28]">
                <Clock className="w-4 h-4 shrink-0" />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  {storeHours.statusTitle}
                </span>
              </div>
              <p className="text-xs text-[#D4D4D8] leading-relaxed">
                {storeHours.nextOpeningText}. Nosso horário de funcionamento é{' '}
                <strong className="text-[#F5F3EE]">Terça a Domingo, das 18:30 às 23:00</strong>{' '}
                (Segunda-feira: Fechado).
              </p>
              <p className="text-[11px] text-[#A1A1AA]">
                Você pode montar seu cardápio agora mesmo e enviar como solicitação antecipada ou
                retornar no horário de atendimento.
              </p>
            </div>
          )}

          {items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <ShoppingBag className="w-10 h-10 text-[#C81E28] mx-auto opacity-80" />
              <h3 className="font-editorial text-2xl text-[#F5F3EE]">
                Seu cardápio está vazio.
              </h3>
              <p className="text-sm text-[#A1A1AA] max-w-xs mx-auto leading-relaxed">
                Escolha os pratos e variações desejados no menu para montar seu pedido e enviar
                direto no WhatsApp oficial do Nypo Sushi.
              </p>
              <a
                href="#cardapio"
                onClick={closeDrawer}
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-medium bg-[#C81E28] hover:bg-[#DF2631] text-white rounded-sm transition-colors"
              >
                Explorar Cardápio
              </a>
            </div>
          ) : readyWhatsappUrl ? (
            <div className="space-y-5">
              <div className="p-5 bg-[#131317] border border-[#C81E28]/50 rounded-sm space-y-3">
                <p className="text-xs font-semibold text-[#C81E28] uppercase tracking-wider">
                  Cardápio Pronto para Envio
                </p>
                <h3 className="font-editorial text-2xl font-semibold text-[#F5F3EE]">
                  Clique abaixo para enviar seu pedido no WhatsApp da loja.
                </h3>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  Todo o seu pedido já está formatado com quantidades, variações e dados de
                  entrega para o número oficial <span className="text-[#F5F3EE]">{STORE_INFO.whatsappDisplay}</span>.
                </p>

                <a
                  href={readyWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-[#C81E28] hover:bg-[#DF2631] text-white text-sm font-medium px-5 py-3.5 rounded-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Pedido no WhatsApp Oficial</span>
                </a>
              </div>

              <div className="bg-[#09090B] border border-white/[0.08] rounded-sm p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-[#A1A1AA]">
                    Prévia da mensagem do pedido
                  </span>
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-1.5 text-xs text-[#F5F3EE] hover:text-[#C81E28] transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copiado' : 'Copiar texto'}</span>
                  </button>
                </div>
                <pre className="text-xs text-[#D4D4D8] whitespace-pre-wrap font-sans leading-relaxed">
                  {readyMessageText}
                </pre>
              </div>

              <div className="flex items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleResetReady}
                  className="px-4 py-2.5 text-xs font-medium text-[#D4D4D8] hover:text-white border border-white/[0.12] rounded-sm transition-colors"
                >
                  Editar dados ou itens
                </button>
                <button
                  type="button"
                  onClick={() => {
                    clearCart();
                    setReadyWhatsappUrl(null);
                  }}
                  className="px-4 py-2.5 text-xs font-medium text-[#A1A1AA] hover:text-white transition-colors"
                >
                  Limpar sacola
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Selected Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                    Itens Escolhidos
                  </span>
                  <button
                    type="button"
                    onClick={clearCart}
                    className="text-xs text-[#A1A1AA] hover:text-[#C81E28] transition-colors"
                  >
                    Limpar tudo
                  </button>
                </div>

                <div className="divide-y divide-white/[0.08] border border-white/[0.08] bg-[#131317] rounded-sm">
                  {items.map((item) => (
                    <div key={item.cartItemId} className="p-4 flex flex-col gap-3">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 min-w-0">
                          {item.imageUrl && (
                            <div className="w-12 h-12 rounded-sm overflow-hidden border border-white/[0.08] bg-[#09090B] shrink-0">
                              <ImageWithFallback
                                src={item.imageUrl}
                                alt={item.name}
                                className="w-full h-full object-cover"
                                fallbackLabel={item.name}
                              />
                            </div>
                          )}
                          <div className="min-w-0">
                            <p className="text-[11px] uppercase tracking-wider text-[#A1A1AA] truncate">
                              {item.category}
                            </p>
                            <h4 className="text-sm font-semibold text-[#F5F3EE] mt-0.5">
                              {item.name}
                            </h4>
                            {item.optionName && (
                              <p className="text-xs text-[#D4D4D8] mt-0.5">{item.optionName}</p>
                            )}
                            {item.notes && (
                              <p className="text-xs text-[#A1A1AA] italic mt-1">
                                Obs: {item.notes}
                              </p>
                            )}
                          </div>
                        </div>
                        <span className="text-sm font-semibold text-[#F5F3EE] tabular-nums shrink-0">
                          {formatBRL(item.unitPrice * item.quantity)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center border border-white/[0.12] rounded-sm bg-[#09090B]">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartItemId, -1)}
                            aria-label={`Diminuir ${item.name}`}
                            className="w-8 h-8 inline-flex items-center justify-center text-[#A1A1AA] hover:text-white"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-semibold tabular-nums text-[#F5F3EE]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.cartItemId, 1)}
                            aria-label={`Aumentar ${item.name}`}
                            className="w-8 h-8 inline-flex items-center justify-center text-[#A1A1AA] hover:text-white"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.cartItemId)}
                          aria-label={`Remover ${item.name}`}
                          className="inline-flex items-center gap-1 text-xs text-[#A1A1AA] hover:text-[#EF4444] transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span>Remover</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery / Pickup + Customer Details */}
              <div className="pt-4 border-t border-white/[0.08] space-y-4">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                  Entrega & Pagamento
                </span>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDeliveryMode('entrega')}
                    className={`py-2.5 px-3 text-xs font-medium rounded-sm border transition-colors ${
                      deliveryMode === 'entrega'
                        ? 'bg-[#C81E28] border-[#C81E28] text-white'
                        : 'bg-[#131317] border-white/[0.08] text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    Entrega (Delivery)
                  </button>
                  <button
                    type="button"
                    onClick={() => setDeliveryMode('retirada')}
                    className={`py-2.5 px-3 text-xs font-medium rounded-sm border transition-colors ${
                      deliveryMode === 'retirada'
                        ? 'bg-[#C81E28] border-[#C81E28] text-white'
                        : 'bg-[#131317] border-white/[0.08] text-[#A1A1AA] hover:text-white'
                    }`}
                  >
                    Retirar no Balcão
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="cart-name" className="block text-xs text-[#D4D4D8] mb-1">
                      Seu nome *
                    </label>
                    <input
                      id="cart-name"
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Nome completo"
                      className="w-full bg-[#131317] border border-white/[0.12] focus:border-[#C81E28] rounded-sm px-3 py-2 text-sm text-[#F5F3EE] placeholder:text-[#71717A] focus:outline-none"
                    />
                    {errors.customerName && (
                      <p className="mt-1 text-[11px] text-[#EF4444]">{errors.customerName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cart-phone" className="block text-xs text-[#D4D4D8] mb-1">
                      Seu WhatsApp *
                    </label>
                    <input
                      id="cart-phone"
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="(49) 99999-9999"
                      className="w-full bg-[#131317] border border-white/[0.12] focus:border-[#C81E28] rounded-sm px-3 py-2 text-sm text-[#F5F3EE] placeholder:text-[#71717A] focus:outline-none"
                    />
                    {errors.customerPhone && (
                      <p className="mt-1 text-[11px] text-[#EF4444]">{errors.customerPhone}</p>
                    )}
                  </div>
                </div>

                {deliveryMode === 'entrega' ? (
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="sm:col-span-2">
                        <label htmlFor="cart-address" className="block text-xs text-[#D4D4D8] mb-1">
                          Rua e número *
                        </label>
                        <input
                          id="cart-address"
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Ex.: Av. Brasil, 500"
                          className="w-full bg-[#131317] border border-white/[0.12] focus:border-[#C81E28] rounded-sm px-3 py-2 text-sm text-[#F5F3EE] placeholder:text-[#71717A] focus:outline-none"
                        />
                        {errors.address && (
                          <p className="mt-1 text-[11px] text-[#EF4444]">{errors.address}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="cart-bairro" className="block text-xs text-[#D4D4D8] mb-1">
                          Bairro *
                        </label>
                        <input
                          id="cart-bairro"
                          type="text"
                          value={neighborhood}
                          onChange={(e) => setNeighborhood(e.target.value)}
                          placeholder="Centro"
                          className="w-full bg-[#131317] border border-white/[0.12] focus:border-[#C81E28] rounded-sm px-3 py-2 text-sm text-[#F5F3EE] placeholder:text-[#71717A] focus:outline-none"
                        />
                        {errors.neighborhood && (
                          <p className="mt-1 text-[11px] text-[#EF4444]">
                            {errors.neighborhood}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="cart-ref" className="block text-xs text-[#D4D4D8] mb-1">
                        Complemento / Ponto de referência (Opcional)
                      </label>
                      <input
                        id="cart-ref"
                        type="text"
                        value={reference}
                        onChange={(e) => setReference(e.target.value)}
                        placeholder="Apto, casa, próximo a..."
                        className="w-full bg-[#131317] border border-white/[0.12] focus:border-[#C81E28] rounded-sm px-3 py-2 text-sm text-[#F5F3EE] placeholder:text-[#71717A] focus:outline-none"
                      />
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-[#A1A1AA] bg-[#131317] border border-white/[0.08] rounded-sm px-3.5 py-2.5">
                    Retirada em: <span className="text-[#F5F3EE]">{STORE_INFO.address}</span>
                  </p>
                )}

                <div>
                  <span className="block text-xs text-[#D4D4D8] mb-1.5">
                    Forma de pagamento
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Pix', 'Cartão na entrega/balcão', 'Dinheiro'] as PaymentMethod[]).map(
                      (method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setPaymentMethod(method)}
                          className={`py-2 px-2 text-xs font-medium rounded-sm border transition-colors ${
                            paymentMethod === method
                              ? 'bg-[#F5F3EE] text-[#09090B] border-[#F5F3EE]'
                              : 'bg-[#131317] text-[#A1A1AA] border-white/[0.08] hover:text-white'
                          }`}
                        >
                          {method === 'Cartão na entrega/balcão' ? 'Cartão' : method}
                        </button>
                      )
                    )}
                  </div>
                </div>

                {paymentMethod === 'Dinheiro' && (
                  <div>
                    <label htmlFor="cart-troco" className="block text-xs text-[#D4D4D8] mb-1">
                      Troco para quanto? (Opcional)
                    </label>
                    <input
                      id="cart-troco"
                      type="text"
                      value={changeFor}
                      onChange={(e) => setChangeFor(e.target.value)}
                      placeholder="Ex.: R$ 100,00 ou Não precisa"
                      className="w-full bg-[#131317] border border-white/[0.12] focus:border-[#C81E28] rounded-sm px-3 py-2 text-sm text-[#F5F3EE] placeholder:text-[#71717A] focus:outline-none"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="cart-general-notes" className="block text-xs text-[#D4D4D8] mb-1">
                    Observações gerais (Opcional)
                  </label>
                  <input
                    id="cart-general-notes"
                    type="text"
                    value={generalNotes}
                    onChange={(e) => setGeneralNotes(e.target.value)}
                    placeholder="Ex.: enviar 3 pares de hashi e shoyu tradicional"
                    className="w-full bg-[#131317] border border-white/[0.12] focus:border-[#C81E28] rounded-sm px-3 py-2 text-sm text-[#F5F3EE] placeholder:text-[#71717A] focus:outline-none"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Sticky Drawer Footer */}
        {items.length > 0 && !readyWhatsappUrl && (
          <div className="px-6 py-5 border-t border-white/[0.08] bg-[#09090B] space-y-3">
            {items.some(
              (i) =>
                i.category === 'CERVEJAS' ||
                i.category === 'DESTILADOS' ||
                /keep cooler|51 ice/i.test(i.name)
            ) && (
              <p className="text-[11px] text-[#D4D4D8] bg-[#131317] border border-[#C81E28]/40 rounded-sm px-3 py-2 leading-snug">
                Seu pedido contém bebida alcoólica. Entrega permitida apenas para maiores de 18
                anos mediante documento oficial com foto (Lei nº 8.069/1990).
              </p>
            )}
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-[#A1A1AA]">
                Subtotal ({totalCount} {totalCount === 1 ? 'item' : 'itens'})
              </span>
              <span className="text-xl font-semibold text-[#F5F3EE] tabular-nums">
                {formatBRL(subtotal)}
              </span>
            </div>
            <button
              type="button"
              onClick={handlePrepareWhatsapp}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#C81E28] hover:bg-[#DF2631] active:scale-[0.99] text-white text-sm font-medium py-3.5 px-5 rounded-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>
                {storeHours.isOpen
                  ? 'Gerar Pedido para WhatsApp'
                  : 'Preparar Pedido Antecipado (WhatsApp)'}
              </span>
            </button>
            <p className="text-[11px] text-[#71717A] leading-snug text-center">
              Ao continuar, seus dados são usados apenas para montar este pedido no WhatsApp
              oficial (LGPD). Taxa de entrega e prazo confirmados pela loja.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
