'use client';

import React from 'react';

const ROTEIROS = [
  {
    slug: 'jaboatao-em-um-dia',
    emoji: '☀️',
    titulo: 'Jaboatão em um Dia',
    duracao: '1 dia',
    descricao: 'Do centro histórico às piscinas naturais de Piedade.',
    paradas: ['Centro Histórico', 'Praça da Batalha', 'Piedade'],
    cor: '#00751D',
    corGradiente: 'linear-gradient(135deg, #00751D 0%, #00DD4F 100%)',
    tag: 'Popular',
  },
  {
    slug: 'fim-de-semana',
    emoji: '🌊',
    titulo: 'Fim de Semana',
    duracao: '2 dias',
    descricao: 'Praias, culinária e o interior verde com muito frevo.',
    paradas: ['Candeias', 'Barra de Jangada', 'Rural'],
    cor: '#F9BC00',
    corGradiente: 'linear-gradient(135deg, #F9BC00 0%, #FF8500 100%)',
    tag: 'Família',
  },
  {
    slug: 'passeio-da-fe',
    emoji: '⛪',
    titulo: 'Passeio da Fé',
    duracao: '1 dia',
    descricao: 'Igrejas históricas e o Parque Nacional dos Guararapes.',
    paradas: ['Igreja do Rosário', 'Monte', 'Santuário'],
    cor: '#0044CA',
    corGradiente: 'linear-gradient(135deg, #0044CA 0%, #00BDFF 100%)',
    tag: 'Cultural',
  },
];

export default function RoteirosSection() {
  return (
    <section id="roteiros" className="relative lg:h-screen w-full flex flex-col bg-white overflow-hidden font-sans py-12 lg:py-0">
      
      {/* Background Decorativo */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#F9BC00]/20 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0044CA]/20 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-center h-full w-full">
        
        {/* CABEÇALHO - Compacto no Desktop */}
        <div className="mb-8 lg:mb-10 text-center lg:text-left">
          <h2 className="text-4xl lg:text-6xl font-black text-[#0044CA] leading-none tracking-tighter uppercase italic">
            ROTEIROS <span className="text-[#F9BC00] drop-shadow-[2px_2px_0px_#00751D]">PRONTOS</span>
          </h2>
          <p className="mt-2 text-slate-600 font-bold text-sm lg:text-base max-w-xl">
            Escolha sua rota e descubra o melhor de Jaboatão dos Guararapes.
          </p>
        </div>

        {/* GRID DE CARDS - Ajustado para caber na tela */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {ROTEIROS.map((r) => (
            <div
              key={r.slug}
              className="group flex flex-col bg-white rounded-4xl border-b-8 border-slate-100 hover:border-[#F9BC00] transition-all shadow-lg hover:shadow-2xl overflow-hidden"
            >
              {/* Topo do Card - Menor altura */}
              <div className="p-5 lg:p-6 text-white" style={{ background: r.corGradiente }}>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-3xl">{r.emoji}</span>
                  <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/30">
                    {r.tag}
                  </span>
                </div>
                <h4 className="text-xl lg:text-2xl font-black uppercase italic leading-tight tracking-tighter">
                  {r.titulo}
                </h4>
              </div>

              {/* Conteúdo do Card - Compacto */}
              <div className="p-5 lg:p-6 flex flex-col gap-4">
                <div className="flex gap-2">
                  <span className="bg-slate-100 px-2 py-1 rounded-md text-[9px] font-black uppercase text-slate-500">
                    ⏱ {r.duracao}
                  </span>
                </div>

                <p className="text-slate-600 font-bold leading-snug text-xs lg:text-sm">
                  {r.descricao}
                </p>

                {/* Paradas - Lista simples */}
                <div className="space-y-1.5">
                  {r.paradas.map((p) => (
                    <div key={p} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: r.cor }} />
                      <span className="text-[11px] lg:text-xs font-bold text-slate-700">{p}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="w-full py-3 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all text-white mt-2 shadow-md hover:scale-[1.02] active:scale-95"
                  style={{ background: r.cor }}
                >
                  Ver Roteiro
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Botão de Rodapé - Mais discreto */}
        <div className="mt-8 lg:mt-10 text-center">
          <button className="bg-[#0044CA] text-white px-8 py-3 rounded-full font-black text-xs lg:text-sm tracking-widest hover:bg-[#F9BC00] hover:text-[#0044CA] transition-all shadow-[6px_6px_0px_#00751D]">
            TODOS OS ROTEIROS ★
          </button>
        </div>

      </div>
    </section>
  );
}