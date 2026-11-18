import { useEffect } from 'react';
import { X, ShieldCheck, FileText, Cookie, AlertTriangle } from 'lucide-react';
import { STORE_INFO } from '../data/menu';

export type LegalTab = 'privacidade' | 'termos' | 'cookies' | 'alergenicos';

interface LegalModalProps {
  activeTab: LegalTab | null;
  onSelectTab: (tab: LegalTab) => void;
  onClose: () => void;
}

const TABS: { id: LegalTab; label: string; icon: typeof ShieldCheck }[] = [
  { id: 'privacidade', label: 'Privacidade (LGPD)', icon: ShieldCheck },
  { id: 'termos', label: 'Termos de Uso', icon: FileText },
  { id: 'cookies', label: 'Cookies', icon: Cookie },
  { id: 'alergenicos', label: 'Alergênicos & +18', icon: AlertTriangle },
];

export function LegalModal({ activeTab, onSelectTab, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!activeTab) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeTab, onClose]);

  if (!activeTab) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Informações legais e privacidade"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[88vh] flex flex-col bg-[#131317] border border-white/[0.12] rounded-sm shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-white/[0.08] flex items-center justify-between gap-4 bg-[#09090B]">
          <div>
            <p className="text-xs font-semibold text-[#C81E28] tracking-wide">
              Transparência & Conformidade
            </p>
            <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#F5F3EE]">
              Políticas do {STORE_INFO.brand}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar janela legal"
            className="w-10 h-10 inline-flex items-center justify-center text-[#A1A1AA] hover:text-white border border-white/[0.1] rounded-sm transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-6 pt-3 pb-3 border-b border-white/[0.08] flex items-center gap-2 overflow-x-auto no-scrollbar bg-[#0D0D10]">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectTab(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-sm transition-colors whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-[#C81E28] text-white'
                    : 'bg-[#131317] text-[#A1A1AA] hover:text-[#F5F3EE] border border-white/[0.08]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5 text-sm text-[#D4D4D8] leading-relaxed">
          {activeTab === 'privacidade' && (
            <>
              <h3 className="font-editorial text-2xl font-semibold text-[#F5F3EE]">
                Política de Privacidade (LGPD — Lei nº 13.709/2018)
              </h3>
              <p className="text-[#A1A1AA]">
                O <strong className="text-[#F5F3EE]">{STORE_INFO.brand}</strong> ({STORE_INFO.address})
                respeita a sua privacidade e trata os dados informados neste site em conformidade
                com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018).
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-[#F5F3EE]">1. Dados coletados e finalidade</h4>
                <p className="text-[#A1A1AA]">
                  Os dados inseridos por você na comanda ou no formulário de atendimento (nome,
                  telefone/WhatsApp, endereço para entrega, forma de pagamento e observações do
                  pedido) são utilizados exclusivamente para montar a mensagem do seu pedido e
                  encaminhá-la ao atendimento oficial via WhatsApp ({STORE_INFO.whatsappDisplay}).
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-[#F5F3EE]">2. Armazenamento e compartilhamento</h4>
                <p className="text-[#A1A1AA]">
                  Não comercializamos, alugamos ou compartilhamos suas informações pessoais com
                  terceiros para fins publicitários. Os itens da sua sacola permanecem salvos apenas
                  localmente no seu navegador para sua comodidade durante a navegação.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-[#F5F3EE]">3. Direitos do titular</h4>
                <p className="text-[#A1A1AA]">
                  A qualquer momento você pode solicitar informações, correção ou exclusão de
                  eventuais registros de atendimento entrando em contato pelo WhatsApp oficial{' '}
                  <span className="text-[#F5F3EE]">{STORE_INFO.whatsappDisplay}</span> ou
                  presencialmente em nosso endereço em Palmitos, SC.
                </p>
              </div>
            </>
          )}

          {activeTab === 'termos' && (
            <>
              <h3 className="font-editorial text-2xl font-semibold text-[#F5F3EE]">
                Termos e Condições de Uso
              </h3>
              <p className="text-[#A1A1AA]">
                Ao navegar e montar sua comanda no site do{' '}
                <strong className="text-[#F5F3EE]">{STORE_INFO.brand}</strong>, você concorda com
                as seguintes condições de atendimento:
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-[#F5F3EE]">
                  1. Confirmação de pedido, valores e disponibilidade
                </h4>
                <p className="text-[#A1A1AA]">
                  O envio da comanda pelo site gera um pré-pedido detalhado no WhatsApp oficial da
                  loja. A confirmação final de disponibilidade de insumos frescos, tempo estimado de
                  preparo e eventual taxa de entrega conforme o bairro em Palmitos/SC ocorre no
                  atendimento direto com nossa equipe.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-[#F5F3EE]">2. Imagens ilustrativas</h4>
                <p className="text-[#A1A1AA]">
                  As fotografias exibidas no site têm caráter ilustrativo e editorial. A
                  apresentação final dos pratos para delivery segue embalagens térmicas adequadas ao
                  transporte seguro dos alimentos.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-[#F5F3EE]">
                  3. Cancelamentos e alterações (CDC)
                </h4>
                <p className="text-[#A1A1AA]">
                  Alterações ou cancelamentos devem ser solicitados imediatamente pelo WhatsApp{' '}
                  <span className="text-[#F5F3EE]">{STORE_INFO.whatsappDisplay}</span> antes do
                  início do preparo na cozinha. Atuamos em total respeito ao Código de Defesa do
                  Consumidor (Lei nº 8.078/1990).
                </p>
              </div>
            </>
          )}

          {activeTab === 'cookies' && (
            <>
              <h3 className="font-editorial text-2xl font-semibold text-[#F5F3EE]">
                Política de Cookies & Armazenamento Local
              </h3>
              <p className="text-[#A1A1AA]">
                Utilizamos apenas armazenamento local essencial e cookies técnicos necessários para o
                funcionamento adequado da experiência de pedidos:
              </p>

              <div className="border border-white/[0.08] bg-[#09090B] rounded-sm divide-y divide-white/[0.08]">
                <div className="p-4">
                  <p className="font-semibold text-[#F5F3EE] text-xs uppercase tracking-wider">
                    Essencial · Comanda de Pedidos
                  </p>
                  <p className="mt-1 text-xs text-[#A1A1AA]">
                    Mantém os pratos, variações e observações escolhidos por você salvos enquanto
                    navega pelo cardápio, evitando que sua seleção se perca ao atualizar a página.
                  </p>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-[#F5F3EE] text-xs uppercase tracking-wider">
                    Essencial · Preferência de Privacidade
                  </p>
                  <p className="mt-1 text-xs text-[#A1A1AA]">
                    Registra a sua escolha no aviso de cookies para não exibir o banner repetidamente.
                  </p>
                </div>
              </div>

              <p className="text-xs text-[#A1A1AA]">
                Não utilizamos cookies de rastreamento invasivo ou venda de perfil comportamental.
                Você pode limpar esses dados a qualquer momento nas configurações do seu navegador.
              </p>
            </>
          )}

          {activeTab === 'alergenicos' && (
            <>
              <h3 className="font-editorial text-2xl font-semibold text-[#F5F3EE]">
                Alergênicos, Pescado Cru & Bebidas Alcoólicas (+18)
              </h3>

              <div className="space-y-3">
                <h4 className="font-semibold text-[#F5F3EE]">
                  1. Alerta sobre Alergênicos e Contaminação Cruzada
                </h4>
                <p className="text-[#A1A1AA]">
                  Nossa cozinha manipula diariamente{' '}
                  <strong className="text-[#F5F3EE]">
                    peixes, crustáceos (camarão, kani), moluscos (polvo), glúten (farinha panko,
                    shoyu, massas), soja, gergelim, leite e derivados (cream cheese, queijo brie,
                    gorgonzola, queijo coalho) e oleaginosas (amêndoas)
                  </strong>
                  . Caso possua alergia ou intolerância alimentar severa, informe no campo de
                  observações e confirme diretamente no WhatsApp antes de concluir o pedido.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-[#F5F3EE]">
                  2. Consumo de Pescado Cru e Público Sensível
                </h4>
                <p className="text-[#A1A1AA]">
                  Sashimis, niguiris, ceviches e pokes utilizam peixes frescos manipulados segundo
                  boas práticas sanitárias. Para crianças pequenas, gestantes, idosos com restrição
                  ou pessoas que preferem alimentos cozidos, recomendamos nossas linhas{' '}
                  <em>Hot Roll</em>, <em>Pratos Quentes</em> e <em>Pratos Kids</em>.
                </p>
              </div>

              <div className="space-y-3 p-4 bg-[#09090B] border border-[#C81E28]/40 rounded-sm">
                <h4 className="font-semibold text-[#C81E28]">
                  3. Proibição de Venda de Bebidas Alcoólicas a Menores de 18 Anos
                </h4>
                <p className="text-[#A1A1AA]">
                  Em cumprimento ao Estatuto da Criança e do Adolescente (Lei nº 8.069/1990, arts.
                  81 e 243), é estritamente proibida a venda e entrega de cervejas, vinhos,
                  espumantes, 51 ICE, Keep Cooler e destilados a menores de 18 anos. A comprovação
                  de maioridade com documento oficial com foto poderá ser solicitada no ato da
                  entrega ou retirada. Se beber, não dirija.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-white/[0.08] bg-[#09090B] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-medium bg-[#C81E28] hover:bg-[#DF2631] text-white rounded-sm transition-colors"
          >
            Entendi e Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
