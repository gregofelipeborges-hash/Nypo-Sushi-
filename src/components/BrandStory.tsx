import { ImageWithFallback } from './ImageWithFallback';

const CHEF_IMAGE = '/src/assets/images/chef_craft_nypo_1795032226869.jpg';

const PILLARS = [
  {
    num: '01.',
    title: 'Para quem prova pela primeira vez',
    body: 'Começar no universo japonês não precisa ser intimidador. Nossos Hot Rolls empanados na farinha panko, Temakis quentes, Yakissobas, Risoto de Camarão e Pratos Kids acolhem com texturas crocantes e sabores familiares.',
  },
  {
    num: '02.',
    title: 'Para apreciadores exigentes',
    body: 'Peças de precisão para quem conhece cada corte: Sashimi Torô com salsa e azeite trufado, Ussuzukuri de polvo, Joys maçaricados com queijo brie e geleia de pimenta, além do Dragon Gold com folha de ouro.',
  },
  {
    num: '03.',
    title: 'Mesa compartilhada entre gerações',
    body: 'Pensamos o cardápio para unir crianças, jovens, adultos e avós ao redor da mesma mesa — combinando porções infantis, carnes grelhadas, entradas leves como Sunomono e grandes combinados de até 101 peças.',
  },
];

export function BrandStory() {
  return (
    <section id="a-casa" className="py-20 sm:py-28 bg-[#09090B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left photographic panel */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 min-h-[340px] lg:min-h-full overflow-hidden rounded-sm border border-white/[0.08] bg-[#131317]">
              <ImageWithFallback
                src={CHEF_IMAGE}
                alt="Sushiman preparando lâminas de salmão fresco com faca yanagiba sobre tábua escura no Nypo Sushi"
                className="w-full h-full object-cover object-center"
                fallbackLabel="Ofício e Precisão"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <p className="text-xs text-[#D4D4D8]">
                  Corte manual diário · Arroz temperado na hora · Palmitos, SC
                </p>
              </div>
            </div>
          </div>

          {/* Right editorial column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs tracking-wide text-[#C81E28] font-semibold">
              A Casa & Filosofia
            </p>
            <h2
              className="mt-3 font-editorial text-3xl sm:text-5xl font-semibold text-[#F5F3EE] leading-[1.08]"
              style={{ textWrap: 'balance' }}
            >
              Tradição japonesa adaptada ao ritmo de quem aprecia comer bem.
            </h2>
            <p className="mt-5 text-base text-[#A1A1AA] leading-relaxed max-w-2xl">
              No Nypo Sushi, cada prato é preparado sob demanda para preservar contraste de
              temperatura, frescor do peixe e crocância do empanado. Seja no salão da Av. Brasil
              ou no conforto de casa, a experiência começa na escolha clara de cada peça.
            </p>

            <div className="mt-10 divide-y divide-white/[0.08] border-t border-white/[0.08]">
              {PILLARS.map((pillar) => (
                <div key={pillar.num} className="py-6 first:pt-6 last:pb-0">
                  <div className="flex items-baseline gap-3">
                    <span className="font-editorial text-xl font-semibold text-[#C81E28] tabular-nums">
                      {pillar.num}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold text-[#F5F3EE]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm sm:text-[15px] text-[#A1A1AA] leading-relaxed pl-0 sm:pl-9">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
