'use client';

import React from 'react';

const MARCOS_HISTORICOS = [
  {
    ano: '1593',
    titulo: 'Fundação',
    fato: 'Bento Rocha funda o arraial que daria origem à cidade.',
    emoji: '📜',
    cor: '#00751D'
  },
  {
    ano: '1648',
    titulo: 'Batalha dos Guararapes',
    fato: 'Expulsão definitiva dos holandeses do solo brasileiro.',
    emoji: '⚔️',
    cor: '#0044CA'
  },
  {
    ano: '1654',
    titulo: 'Berço da Pátria',
    fato: 'Jaboatão é reconhecida como local onde nasceu o sentimento de nação.',
    emoji: '🇧🇷',
    cor: '#F9BC00'
  }
];

export default function HistoriaSection() {
  return (
    <section id="historia" className="relative lg:h-screen w-full flex flex-col bg-[#e3e7ef] overflow-hidden font-sans py-16 lg:py-0">
      
      {/* ── DESIGN DE FUNDO (DIAGONAL NA BASE) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute bottom-0 right-0 w-full lg:w-[60%] h-[50%] lg:h-full"
          style={{ 
            background: 'linear-gradient(145deg, #0037C1 0%, #0044CA 40%, #00BDFF 100%)',
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 20% 100%)' 
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-full lg:w-[30%] h-[15%] lg:h-[35%] opacity-90 z-10"
          style={{ 
            background: 'linear-gradient(to top right, #00751D 0%, #00DD4F 100%)',
            clipPath: 'polygon(0% 100%, 100% 100%, 0% 0%)' 
          }}
        />
      </div>

      <div className="relative z-20 grow mx-auto max-w-7xl px-6 flex items-center w-full h-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full">
          
          {/* ESQUERDA: TEXTO HISTÓRICO */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
               <span className="w-10 h-1.5 bg-[#F9BC00] rounded-full"></span>
               <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Nossa Origem</span>
            </div>
            
            <h2 className="text-5xl lg:text-8xl font-black text-[#0044CA] leading-[0.85] tracking-tighter uppercase italic">
              BERÇO DA <br />
              <span className="text-[#F9BC00] drop-shadow-[4px_4px_0px_#00751D]">PÁTRIA</span>
            </h2>

            <p className="mt-8 text-lg lg:text-2xl font-bold text-slate-700 leading-tight max-w-md mx-auto lg:mx-0">
              Foi nos montes de <span className="text-[#00751D]">Jaboatão</span> que o Brasil aprendeu a ser Brasil. Uma história escrita com bravura e orgulho.
            </p>

            <button className="mt-10 bg-[#0044CA] text-white px-10 py-4 rounded-2xl font-black text-sm tracking-widest hover:bg-[#F9BC00] hover:text-[#0044CA] transition-all shadow-[6px_6px_0px_#00751D]">
              CONHECER MUSEUS
            </button>
          </div>

          {/* DIREITA: TIMELINE DE CARDS */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {MARCOS_HISTORICOS.map((marco, index) => (
              <div 
                key={marco.ano}
                className="group bg-white/95 backdrop-blur-sm p-5 lg:p-6 rounded-4xl shadow-xl flex items-center gap-6 border-l-10 transition-all hover:scale-[1.02]"
                style={{ borderLeftColor: marco.cor }}
              >
                <div className="flex flex-col items-center justify-center">
                  <span className="text-3xl lg:text-4xl mb-1">{marco.emoji}</span>
                  <span className="text-xl font-black text-[#0044CA] leading-none">{marco.ano}</span>
                </div>
                
                <div className="h-12 w-px bg-slate-200 hidden sm:block" />

                <div className="text-left">
                  <h4 className="font-black text-[#0044CA] uppercase italic text-lg leading-tight">
                    {marco.titulo}
                  </h4>
                  <p className="text-xs lg:text-sm font-bold text-slate-600 mt-1 leading-snug">
                    {marco.fato}
                  </p>
                </div>
              </div>
            ))}

            {/* Badge de Destaque Nacional */}
            <div className="mt-4 p-6 bg-[#F9BC00] rounded-4xl border-4 border-white shadow-2xl flex items-center gap-4 rotate-1 lg:rotate-2">
              <span className="text-4xl">🏛️</span>
              <p className="font-black text-[#0044CA] text-sm lg:text-base leading-tight uppercase tracking-tighter">
                Patrimônio Histórico e <br />Cultural da Humanidade
              </p>
            </div>
          </div>

        </div>
      </div>


    </section>
  );
}