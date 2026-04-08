// src/app/components/site/home/HeroSection/index.tsx
'use client';

import React from 'react';

const ROTEIROS = [
  { href: '/roteiros/jaboatao-em-um-dia', emoji: '☀️', label: 'Jaboatão em um Dia' },
  { href: '/roteiros/fim-de-semana', emoji: '🌊', label: 'Fim de Semana' },
  { href: '/roteiros/passeio-da-fe', emoji: '⛪', label: 'Passeio da Fé' },
];

const STRIP = ['Praias', 'História', 'Gastronomia', 'Turismo Rural', 'Cultura'];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white font-sans flex flex-col">

      {/* ── DESIGN DE FUNDO ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* Mobile: fundo azul completo */}
        <div
          className="lg:hidden absolute inset-0"
          style={{
            background: 'linear-gradient(145deg, #0037C1 0%, #0044CA 40%, #00BDFF 100%)',
          }}
        />

        {/* Desktop: Bloco Azul lateral */}
        <div
          className="hidden lg:block absolute top-0 right-0 w-[62%] h-full"
          style={{
            background: 'linear-gradient(145deg, #0037C1 0%, #0044CA 40%, #00BDFF 100%)',
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%)',
          }}
        />

        {/* Bloco Verde */}
        <div
          className="absolute bottom-0 right-0 w-full h-[12%] sm:h-[10%] lg:w-[45%] lg:h-[40%] opacity-90 z-10"
          style={{
            background: 'linear-gradient(to top right, #00751D 0%, #008C32 50%, #00DD4F 100%)',
            clipPath: 'polygon(100% 0, 5% 100%, 100% 100%)',
          }}
        />

        {/* Sol decorativo */}
        <div
          className="absolute top-[-5%] right-[10%] w-48 h-48 sm:w-72 sm:h-72 lg:w-125 lg:h-125 rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, #FDC300 0%, #F9BC00 50%, #FF8500 100%)',
            filter: 'blur(70px)',
          }}
        />
      </div>

      {/* ── CONTEÚDO PRINCIPAL ── */}
      <div className="
        relative z-20 grow mx-auto max-w-7xl w-full
        px-5 sm:px-8 lg:px-6
        pt-32 pb-28
        sm:pt-36 sm:pb-28
        lg:pt-0 lg:pb-0 lg:flex lg:items-center
      ">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-24 items-center w-full">

          {/* ── COLUNA ESQUERDA ── */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

            <h1 className="
              font-black leading-[0.85] tracking-tighter uppercase italic drop-shadow-sm
              text-[clamp(3.5rem,13vw,8.5rem)]
              text-white lg:text-[#0044CA]
            ">
              VIVA <br />
              <span className="inline-block mt-2" style={{ color: '#F9BC00', textShadow: '5px 5px 0px #00751D' }}>
                JABOATÃO
              </span>
            </h1>

            <div className="mt-8 lg:mt-16 max-w-xl">
              <p className="text-base sm:text-xl lg:text-3xl font-bold leading-snug text-white lg:text-slate-800">
                Onde o{' '}
                <span className="text-[#7DFFA0] lg:text-[#00751D]">Verde</span>{' '}
                dos montes abraça o{' '}
                <span className="text-[#A8D8FF] lg:text-[#0044CA]">Azul</span>{' '}
                do mar e o{' '}
                <span className="text-[#F9BC00]">Amarelo</span>{' '}
                do sol brilha.
              </p>
            </div>

            <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
              <button className="
                bg-[#F9BC00] text-[#0044CA]
                px-10 py-4 sm:px-12 sm:py-5
                text-lg sm:text-xl font-black rounded-2xl
                transition-all hover:scale-105 active:scale-95
                shadow-[8px_8px_0px_#00751D]
              ">
                EXPLORAR AGORA
              </button>

              <button className="
                border-4 text-white font-black rounded-2xl shadow-xl transition-all
                border-white hover:bg-white hover:text-[#0044CA]
                lg:bg-white/80 lg:backdrop-blur-sm lg:border-[#0044CA] lg:text-[#0044CA]
                lg:hover:bg-[#0044CA] lg:hover:text-white
                px-10 py-4 sm:px-12 sm:py-5
                text-lg sm:text-xl
              ">
                GALERIA
              </button>
            </div>
          </div>

          {/* ── COLUNA DIREITA: CARDS ── */}
          <div className="lg:col-span-5 flex flex-col gap-5 w-full max-w-md mx-auto lg:mx-0">

            <div className="flex items-center gap-3 mb-1 justify-center lg:justify-end lg:mt-32">
              <span className="h-0.5 w-8 bg-white/50 rounded-full" />
              <span className="text-white font-black text-[10px] uppercase tracking-[0.35em]">Roteiros Oficiais</span>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {ROTEIROS.map((r) => (
                <div
                  key={r.label}
                  className="
                    group bg-white/95 hover:bg-[#F9BC00]
                    p-4 sm:p-6 rounded-4xl
                    shadow-2xl transition-all duration-300
                    flex items-center gap-4 sm:gap-6
                    cursor-pointer border-b-10 border-[#00751D]
                    hover:-translate-y-1
                  "
                >
                  <div className="
                    w-12 h-12 sm:w-16 sm:h-16
                    bg-slate-50 rounded-2xl shrink-0 shadow-sm
                    flex items-center justify-center
                    text-3xl sm:text-4xl
                    group-hover:bg-white
                  ">
                    {r.emoji}
                  </div>
                  <div className="flex flex-col text-left min-w-0">
                    <span className="text-[10px] sm:text-xs font-black text-[#00751D] uppercase tracking-tighter opacity-80">
                      Experiência
                    </span>
                    <span className="text-sm sm:text-lg lg:text-xl font-black text-[#0044CA] leading-tight truncate">
                      {r.label}
                    </span>
                  </div>
                  <div className="ml-auto text-[#0044CA] shrink-0 transform group-hover:scale-125 transition-transform">
                    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Badge Histórico */}
            <div className="
              mt-2 sm:mt-4 p-6 sm:p-8
              bg-[#0044CA] text-white rounded-4xl
              flex items-center gap-4 sm:gap-6
              border-4 border-[#F9BC00] shadow-2xl
              lg:translate-x-6
            ">
              <div className="bg-[#F9BC00] p-3 rounded-2xl text-3xl sm:text-4xl shadow-inner shrink-0">🏛️</div>
              <div className="text-left">
                <p className="text-[#F9BC00] font-black text-3xl sm:text-4xl leading-none tracking-tighter">1654</p>
                <p className="font-bold text-[10px] sm:text-xs uppercase tracking-widest text-white/90 mt-1">
                  Berço da Pátria Brasileira
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── BARRA INFERIOR ── */}
      <div className="relative z-30 w-full bg-[#00751D] py-4 sm:py-6 border-t-4 border-[#F9BC00]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-12 gap-y-3">
          {STRIP.map((item, i) => (
            <div key={item} className="flex items-center gap-3 sm:gap-4">
              <span className="text-white font-black text-[11px] sm:text-[13px] uppercase tracking-[0.25em] sm:tracking-[0.3em] italic">
                {item}
              </span>
              {i < STRIP.length - 1 && (
                <span className="text-[#F9BC00] font-bold opacity-50 text-xs">★</span>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}