// src/app/components/site/home/Roteiro/index.tsx
'use client';

import React from 'react';

const ROTEIROS = [
  {
    slug: 'jaboatao-em-um-dia',
    titulo: 'Jaboatão em um Dia',
    duracao: '1 dia',
    img: '/images/Lugares/bg-hotel.jpg',
    cor: '#00751D',
  },
  {
    slug: 'fim-de-semana',
    titulo: 'Fim de Semana',
    duracao: '2 dias',
    img: '/images/Lugares/bg-ondeir.jpg',
    cor: '#F9BC00',
  },
  {
    slug: 'passeio-da-fe',
    titulo: 'Passeio da Fé',
    duracao: '1 dia',
    img: '/images/Lugares/gastronomia.png',
    cor: '#0044CA',
  },
];

export default function RoteirosSection() {
  return (
    <section
      id="roteiros"
      className="relative h-auto lg:h-screen w-full flex flex-col bg-white overflow-hidden py-12 lg:py-8"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-between h-full w-full">

        {/* Header - Margens reduzidas para sobrar espaço para os cards */}
        <div className="mb-6 lg:mb-8 mt-4 lg:mt-6 text-center lg:text-left shrink-0">
          <h2 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-[#0044CA] tracking-tighter uppercase leading-[0.9] italic">
            VIVA A <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #0044CA' }}>
              EXPERIÊNCIA
            </span>
          </h2>
          <div className="h-1.5 w-24 bg-[#F9BC00] mt-3 rounded-full mx-auto lg:mx-0" />
        </div>

        {/* Grid Interativo - Ocupa o espaço central disponível */}
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:flex-1 min-h-0 py-4">
          {ROTEIROS.map((r, idx) => (
            <div
              key={r.slug}
              className="group relative flex-none h-64 lg:h-full lg:flex-1 overflow-hidden rounded-3xl lg:rounded-[2.5rem] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] lg:hover:flex-[1.6] cursor-pointer bg-slate-900 shadow-xl"
            >
              <img
                src={r.img}
                alt={r.titulo}
                className="absolute inset-0 w-full h-full object-cover opacity-70 lg:grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent z-10" />

              <div className="absolute bottom-5 left-5 right-5 lg:bottom-8 lg:left-8 z-20">
                <div className="mb-2">
                  <span
                    className="px-3 py-1 rounded-full text-[9px] font-black uppercase text-white tracking-widest border border-white/30 backdrop-blur-sm"
                    style={{ backgroundColor: `${r.cor}cc` }}
                  >
                    {r.duracao}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl lg:text-4xl font-black text-white uppercase leading-none italic tracking-tighter">
                  {r.titulo}
                </h3>

                <div className="mt-3 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-10 lg:group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  <span className="inline-flex items-center gap-2 text-[#F9BC00] font-black text-[10px] uppercase tracking-widest">
                    Explorar Roteiro
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" className="hidden lg:block"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </div>

              <div className="absolute top-5 left-5 z-20 text-white/30 font-black text-xl italic">
                0{idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé da Seção - Com margem inferior para não "colar" no fim da tela */}
        <div className="mt-6 lg:mt-8 mb-4 lg:mb-6 flex flex-col md:flex-row items-center justify-between border-t border-slate-100 pt-6 gap-6 shrink-0">
          <p className="text-slate-500 font-bold text-xs max-w-xs text-center md:text-left">
            Passe o mouse para revelar as cores vibrantes dos destinos.
          </p>

          <button className="w-full md:w-auto bg-[#0044CA] hover:bg-[#F9BC00] text-white hover:text-[#0044CA] px-8 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-all shadow-[5px_5px_0px_#00751D] active:translate-y-1 active:shadow-none">
            Ver Todos os Pontos ★
          </button>
        </div>

      </div>
    </section>
  );
}