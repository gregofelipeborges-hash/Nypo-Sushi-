import { useState, FormEvent } from 'react';
import { ChevronDown, MapPin, Phone, ExternalLink, CheckCircle2, MessageCircle, Clock } from 'lucide-react';
import { STORE_INFO } from '../data/menu';
import { useStoreHours } from '../utils/storeHours';

const FAQS = [
  {
    q: 'Nunca comi sushi antes. Quais opções vocês recomendam para começar?',
    a: 'Sugerimos iniciar pelos Hot Rolls (como Hot Filadélfia ou Hot Camarão), que são enrolados empanados na farinha panko e servidos quentes, ou pelos nossos Yakissobas, Bolinho de Salmão e Uramaki Skin. No cardápio acima, use o filtro "Iniciantes & Sem Cru" para ver todas as opções.',
  },
  {
    q: 'O restaurante tem opções para crianças e para quem prefere comida tradicional?',
    a: 'Sim. Contamos com a seção Pratos Kids (Espaguete na Manteiga com Filé Mignon, Mix de Tilápia e Batata Frita), além de Filé Mignon, Salmão Grelhado, Risoto de Camarão e porções de tilápia para atender todas as idades na mesma mesa.',
  },
  {
    q: 'Como funciona a montagem do pedido e o envio para o WhatsApp?',
    a: 'Você escolhe quantos pratos e bebidas quiser diretamente no cardápio (incluindo variações como 5 ou 10 unidades e observações). Depois, abre a sua Comanda no topo da tela, informa se deseja entrega ou retirada e a forma de pagamento — e o site gera o cardápio pronto para enviar direto no WhatsApp oficial (+55 49 3647-7073).',
  },
  {
    q: 'Há opções para grupos grandes ou comemorações em família?',
    a: 'Sim. Nossos Combinados vão de 15 a 43 peças, e o Combinado Nypo Especial reúne 101 peças para 4 pessoas. Para encomendas maiores ou reservas de mesa, você pode nos enviar uma solicitação pelo formulário abaixo.',
  },
  {
    q: 'Quais são os dias e horários de funcionamento do Nypo Sushi?',
    a: 'Atendemos de terça-feira a domingo, das 18:30 às 23:00 (fechado às segundas-feiras). Fora desse horário você pode navegar pelo cardápio completo e montar sua comanda normalmente para enviar assim que abrirmos.',
  },
];

export function FaqAndContact() {
  const storeHours = useStoreHours();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [occasion, setOccasion] = useState('Reserva de mesa');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string; message?: string }>({});
  const [whatsappInquiryUrl, setWhatsappInquiryUrl] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: { name?: string; phone?: string; message?: string } = {};

    if (name.trim().length < 2) {
      nextErrors.name = 'Informe seu nome completo.';
    }
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) {
      nextErrors.phone = 'Informe um telefone ou WhatsApp válido com DDD.';
    }
    if (message.trim().length < 8) {
      nextErrors.message = 'Descreva brevemente sua dúvida, reserva ou encomenda.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      const text = [
        `*ATENDIMENTO — NYPO SUSHI*`,
        `*Assunto:* ${occasion}`,
        `*Nome:* ${name.trim()}`,
        `*Telefone:* ${phone.trim()}`,
        `*Mensagem:* ${message.trim()}`,
      ].join('\n');
      setWhatsappInquiryUrl(
        `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`
      );
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0D0D10] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* FAQ */}
        <div id="duvidas" className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <p className="text-xs tracking-wide text-[#C81E28] font-semibold">
              Perguntas Frequentes
            </p>
            <h2
              className="mt-2 font-editorial text-3xl sm:text-4xl font-semibold text-[#F5F3EE] leading-[1.1]"
              style={{ textWrap: 'balance' }}
            >
              Tudo claro antes do seu primeiro pedido.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              Dúvidas comuns sobre pratos crus e quentes, atendimento infantil e envio da comanda
              direto para o nosso WhatsApp oficial.
            </p>
          </div>

          <div className="lg:col-span-7 divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {FAQS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full py-5 flex items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81E28]"
                  >
                    <span className="text-base font-medium text-[#F5F3EE]">{item.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#A1A1AA] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#C81E28]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-5 pr-8 text-sm text-[#A1A1AA] leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Contact & Location */}
        <div
          id="contato"
          className="pt-16 border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14"
        >
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs tracking-wide text-[#C81E28] font-semibold">
                Localização & Atendimento
              </p>
              <h2
                className="mt-2 font-editorial text-3xl sm:text-4xl font-semibold text-[#F5F3EE] leading-[1.1]"
                style={{ textWrap: 'balance' }}
              >
                Visite o salão ou fale direto pelo WhatsApp.
              </h2>

              <div className="mt-8 space-y-5 text-sm text-[#A1A1AA]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C81E28] mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#F5F3EE]">Endereço Oficial</p>
                    <p className="mt-0.5">{STORE_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C81E28] mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#F5F3EE]">WhatsApp Oficial da Loja</p>
                    <a
                      href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 inline-block hover:text-[#F5F3EE] transition-colors tabular-nums"
                    >
                      {STORE_INFO.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C81E28] mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-[#F5F3EE]">Horário de Funcionamento</p>
                    <p className="mt-0.5">{storeHours.scheduleLine}</p>
                    <p className="text-xs text-[#71717A] mt-0.5">{storeHours.closedDayLine}</p>
                    <p
                      className={`mt-1.5 text-xs font-medium ${
                        storeHours.isOpen ? 'text-[#D4D4D8]' : 'text-[#C81E28]'
                      }`}
                    >
                      {storeHours.statusTitle} · {storeHours.nextOpeningText}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap gap-6">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#C81E28] hover:text-[#DF2631] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chamar no WhatsApp</span>
              </a>

              <a
                href={STORE_INFO.deliwayUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#F5F3EE] hover:text-[#C81E28] transition-colors"
              >
                <span>Ver loja no Deliway</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#131317] border border-white/[0.08] rounded-sm p-6 sm:p-8">
            {whatsappInquiryUrl ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-10 h-10 text-[#C81E28] mx-auto" />
                <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#F5F3EE]">
                  Mensagem pronta, {name.split(' ')[0]}.
                </h3>
                <p className="text-sm text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
                  Sua solicitação sobre <span className="text-[#F5F3EE]">{occasion}</span> já está
                  formatada. Clique abaixo para enviar diretamente no WhatsApp oficial do Nypo Sushi.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium bg-[#C81E28] hover:bg-[#DF2631] text-white rounded-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enviar no WhatsApp da Loja</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setWhatsappInquiryUrl(null);
                      setName('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="px-5 py-3 text-xs font-medium bg-white/[0.06] hover:bg-white/[0.12] text-[#F5F3EE] rounded-sm transition-colors"
                  >
                    Nova mensagem
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="font-editorial text-2xl font-semibold text-[#F5F3EE]">
                    Reservas, Eventos & Atendimento
                  </h3>
                  <p className="mt-1 text-xs text-[#A1A1AA]">
                    Preencha abaixo para gerar uma mensagem direta de reserva ou encomenda no
                    WhatsApp da loja.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-[#D4D4D8] mb-1.5"
                    >
                      Nome completo
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                      className="w-full bg-[#09090B] border border-white/[0.12] focus:border-[#C81E28] rounded-sm px-3.5 py-2.5 text-sm text-[#F5F3EE] placeholder:text-[#71717A] focus:outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-[#EF4444]">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-medium text-[#D4D4D8] mb-1.5"
                    >
                      WhatsApp / Telefone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(49) 99999-9999"
                      className="w-full bg-[#09090B] border border-white/[0.12] focus:border-[#C81E28] rounded-sm px-3.5 py-2.5 text-sm text-[#F5F3EE] placeholder:text-[#71717A] focus:outline-none"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-[#EF4444]">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-occasion"
                    className="block text-xs font-medium text-[#D4D4D8] mb-1.5"
                  >
                    Assunto
                  </label>
                  <select
                    id="contact-occasion"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                    className="w-full bg-[#09090B] border border-white/[0.12] focus:border-[#C81E28] rounded-sm px-3.5 py-2.5 text-sm text-[#F5F3EE] focus:outline-none"
                  >
                    <option value="Reserva de mesa">Reserva de mesa no salão</option>
                    <option value="Encomenda de combinados">
                      Encomenda de combinados para evento
                    </option>
                    <option value="Dúvida sobre cardápio">
                      Dúvida sobre ingredientes ou alergênicos
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-[#D4D4D8] mb-1.5"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Informe data, número de pessoas ou preferência de pratos..."
                    className="w-full bg-[#09090B] border border-white/[0.12] focus:border-[#C81E28] rounded-sm px-3.5 py-2.5 text-sm text-[#F5F3EE] placeholder:text-[#71717A] focus:outline-none resize-none"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-[#EF4444]">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 text-sm font-medium bg-[#C81E28] hover:bg-[#DF2631] active:scale-[0.98] text-white rounded-sm transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  Preparar Mensagem no WhatsApp
                </button>
                <p className="text-[11px] text-[#71717A] leading-relaxed">
                  Os dados informados são usados exclusivamente para iniciar seu atendimento pelo
                  WhatsApp oficial, em conformidade com a Política de Privacidade (LGPD).
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
