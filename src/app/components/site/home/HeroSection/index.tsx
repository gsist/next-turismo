// src/app/components/site/home/HeroSection/index.tsx
'use client';

import Image from 'next/image';

const STRIP = ['Praias', 'História & Cultura', 'Gastronomia', 'Hospedagem', 'Festas', 'Turismo Rural'];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden font-sans flex flex-col">

      {/* ── IMAGEM DE FUNDO ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Lugares/bg-hotel.jpg"
          alt="Paisagem de Jaboatão"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay gradiente para melhor legibilidade do texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        {/* Overlay adicional na parte inferior para suavizar transição */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* ── CONTEÚDO PRINCIPAL ── */}
      <div className="
        relative z-10 grow mx-auto max-w-7xl w-full
        px-5 sm:px-8 lg:px-6
        pt-32 pb-28
        sm:pt-36 sm:pb-28
        lg:pt-0 lg:pb-0 lg:flex lg:items-center
      ">
        <div className="w-full">

          {/* ── TEXTO CENTRAL ── */}
          <div className="flex flex-col items-center text-center">

            <h1 className="
              font-black leading-[1.1] tracking-tight
              text-[clamp(1.75rem,6vw,4.5rem)]
              text-white drop-shadow-2xl
            ">
              Jaboatão dos Guararapes:<br />
              <span className="text-[#F9BC00]">História, Sol e Mar</span>
            </h1>

            <div className="mt-5 lg:mt-7 max-w-3xl">
              <p className="text-base sm:text-lg lg:text-2xl font-normal leading-relaxed text-white/90 drop-shadow-md">
                Berço da Pátria desde 1593. Entre história colonial, praias paradisíacas e tradição — 
                o destino perfeito para explorar Pernambuco.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* ── BARRA INFERIOR ── */}
      <div className="relative z-20 w-full bg-[#00751D]/95 backdrop-blur-sm py-4 sm:py-5 border-t-2 border-[#F9BC00]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-12 gap-y-3">
          {STRIP.map((item, i) => (
            <div key={item} className="flex items-center gap-3 sm:gap-4">
              <span className="text-white font-black text-[11px] sm:text-[13px] uppercase tracking-[0.25em] sm:tracking-[0.3em] italic">
                {item}
              </span>
              {i < STRIP.length - 1 && (
                <span className="text-[#F9BC00] font-bold opacity-60 text-xs">★</span>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}