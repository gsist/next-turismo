// src/app/historia/page.tsx (ou components/site/historia/HistoriaPage.tsx)
'use client';

import React from 'react';

/* ─────────────────────────────────────────────
   DADOS
───────────────────────────────────────────── */

/* ─────────────────────────────────────────────
   COMPONENTE
───────────────────────────────────────────── */

export default function HistoriaPage() {

  return (
    <main className="w-full bg-[#e3e7ef] font-sans overflow-x-hidden">

      {/* ══════════════════════════════════════
          HERO — mesmo visual da HistoriaSection
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen w-full flex flex-col bg-[#e3e7ef] overflow-hidden py-0">

        {/* Fundo */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute bottom-0 right-0 w-full lg:w-[60%] h-[50%] lg:h-full"
            style={{
              background: 'linear-gradient(145deg, #00751D 0%, #00DD4F 40%, #F9BC00 100%)',
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 20% 100%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-full lg:w-[30%] h-[15%] lg:h-[35%] opacity-90 z-10"
            style={{
              background: 'linear-gradient(to top right, #F9BC00 0%, #00DD4F 100%)',
              clipPath: 'polygon(0% 100%, 100% 100%, 0% 0%)',
            }}
          />
        </div>

        <div className="relative z-20 grow mx-auto max-w-7xl px-5 sm:px-8 flex items-center w-full min-h-screen">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full py-32 lg:py-0">

            {/* Esquerda — texto em card */}
            <div className="lg:col-span-6">
              <div className="bg-white/95 backdrop-blur-sm p-8 lg:p-10 rounded-4xl shadow-2xl border-4 border-[#F9BC00]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-10 h-1.5 bg-[#F9BC00] rounded-full" />
                  <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-600">Nossa História</span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0044CA] leading-[0.85] tracking-tighter uppercase italic mb-6">
                  HISTÓRIA DO <br />
                  <span className="text-[#F9BC00]">MUNICÍPIO</span>
                </h1>

                <p className="text-base sm:text-lg font-bold text-slate-700 leading-tight mb-8">
                  Jaboatão é um município rico em história, cultura e desenvolvimento. Conheça sua trajetória desde a fundação até os dias atuais.
                </p>

                <blockquote className="text-[#0044CA] font-black text-sm sm:text-base italic leading-relaxed border-l-4 border-[#F9BC00] pl-4">
                  "De arraial a cidade moderna, Jaboatão carrega a essência da resistência e do progresso brasileiro."
                </blockquote>
              </div>
            </div>

            {/* Direita — emoji e card */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center space-y-6">
              <span className="text-8xl lg:text-9xl">🏛️</span>
              <div className="bg-[#e3e7ef] p-6 rounded-3xl shadow-xl border-l-8 border-[#0044CA] max-w-sm">
                <h3 className="font-black text-[#0044CA] uppercase italic text-lg mb-3">1593 - HOJE</h3>
                <p className="text-slate-700 font-bold text-sm leading-relaxed">
                  Da fundação às margens do Rio Jaboatão até se tornar um polo industrial e cultural, a história de um município que cresce com o Brasil.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTEÚDO DETALHADO
      ══════════════════════════════════════ */}
      <section className="relative w-full bg-white py-20 sm:py-28 overflow-hidden">

        <div className="max-w-6xl mx-auto px-5 sm:px-8">

          {/* Header */}
          <div className="mb-12 sm:mb-16 text-center">
            <div className="flex items-center gap-3 mb-3 justify-center">
              <span className="w-10 h-1.5 bg-[#F9BC00] rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-400">do arraial à metrópole</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0044CA] leading-[0.85] tracking-tighter uppercase italic">
              EVOLUÇÃO DE <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #0044CA' }}>
                JABOATÃO
              </span>
            </h2>
          </div>

          {/* Grid de destaques */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#e3e7ef] p-6 rounded-2xl border-l-4 border-[#0044CA]">
              <h3 className="font-black text-[#0044CA] uppercase italic text-xl mb-4">🏛️ Fundação - 1593</h3>
              <p>
                O arraial de Jaboatão foi fundado em 1593 por Bento Rocha, estabelecido às margens do Rio Jaboatão. O nome "Yabuatan" significa "rio das cobras grandes" em Tupi.
              </p>
            </div>

            <div className="bg-[#e3e7ef] p-6 rounded-2xl border-l-4 border-[#00751D]">
              <h3 className="font-black text-[#0044CA] uppercase italic text-xl mb-4">💼 Economia Moderna</h3>
              <p>
                De base agrícola colonial, Jaboatão transformou-se em polo industrial no século XX, com investimentos em infraestrutura, educação e serviços.
              </p>
            </div>

            <div className="bg-[#e3e7ef] p-6 rounded-2xl border-l-4 border-[#F9BC00]">
              <h3 className="font-black text-[#0044CA] uppercase italic text-xl mb-4">🎨 Cultura Viva</h3>
              <p>
                Festas juninas, manifestações artísticas e tradições locais preservam a identidade cultural, promovendo o turismo e a diversidade.
              </p>
            </div>
          </div>

          {/* Conteúdo narrativo */}
          <div className="space-y-8 text-slate-700 font-bold text-base sm:text-lg leading-relaxed max-w-4xl mx-auto">

            <p>
              Jaboatão dos Guararapes, localizado na Região Metropolitana do Recife, possui uma trajetória histórica fascinante que reflete a formação e o desenvolvimento do Brasil. Desde sua fundação como um pequeno arraial no século XVI, o município evoluiu para se tornar um importante centro urbano e econômico.
            </p>

            <p>
              Durante o período colonial, Jaboatão destacou-se como área agrícola produtiva, com ênfase na cana-de-açúcar e engenhos. Sua localização estratégica próximo a Recife contribuiu para seu crescimento, e a região foi palco de eventos históricos significativos, incluindo as Batalhas dos Guararapes, que marcaram a vitória brasileira contra os holandeses.
            </p>

            <p>
              No século XX, Jaboatão passou por uma transformação industrial intensa, diversificando sua economia e tornando-se um polo de desenvolvimento na região metropolitana. Investimentos em infraestrutura, educação e serviços públicos impulsionaram seu crescimento, mantendo viva sua herança histórica enquanto abraça o futuro.
            </p>

            <p>
              Hoje, Jaboatão dos Guararapes combina seu rico patrimônio histórico com modernidade urbana. Reconhecido como parte do Patrimônio Histórico Nacional pelas Batalhas dos Guararapes, o município continua a se desenvolver como centro cultural, econômico e turístico da região.
            </p>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA FINAL
      ══════════════════════════════════════ */}
      <section className="relative w-full bg-[#0044CA] py-16 sm:py-20 overflow-hidden">
        <div
          className="absolute bottom-0 right-0 w-[40%] h-full opacity-20"
          style={{
            background: 'linear-gradient(to top left, #00751D, transparent)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="text-6xl mb-6 block">🏛️</span>
          <h2 className="text-4xl sm:text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase italic mb-4">
            VISITE <br />
            <span className="text-[#F9BC00]">JABOATÃO</span>
          </h2>
          <p className="text-white/80 font-bold text-base sm:text-lg max-w-md mx-auto leading-snug mb-10">
            Conheça a história e a cultura de Jaboatão. Um município com raízes profundas e futuro promissor.
          </p>
        </div>
      </section>

    </main>
  );
}