// src/app/historia/page.tsx (ou components/site/historia/HistoriaPage.tsx)
'use client';

import React, { useState, useRef } from 'react';

/* ─────────────────────────────────────────────
   DADOS
───────────────────────────────────────────── */

const PONTOS = [
  {
    id: 'monte',
    emoji: '⛰️',
    nome: 'Monte dos Guararapes',
    tag: 'PATRIMÔNIO',
    cor: '#0044CA',
    descricao:
      'Palco sagrado onde, em 1648 e 1654, luso-brasileiros, indígenas e africanos uniram forças para expulsar os holandeses — forjando pela primeira vez um sentimento coletivo de nação.',
    detalhes: [
      'Palco das duas Batalhas dos Guararapes',
      'Considerado o berço do Exército Brasileiro',
      'Vista panorâmica de toda a orla pernambucana',
      'Acesso por trilhas históricas preservadas',
    ],
  },
  {
    id: 'santuario',
    emoji: '⛪',
    nome: 'Santuário de N. Sra. dos Prazeres',
    tag: 'FÉ & ARTE',
    cor: '#F9BC00',
    descricao:
      'Erguido no alto do Monte em agradecimento pelas vitórias de 1648, o Santuário guarda um dos maiores acervos de azulejos portugueses do Brasil — arte sacra e história em cada detalhe.',
    detalhes: [
      'Construído em 1656, após a segunda batalha',
      'Um dos maiores acervos de azulejos portugueses do Brasil',
      'Ponto de peregrinação e fé de todo o Nordeste',
      'Arquitetura barroca preservada integralmente',
    ],
  },
  {
    id: 'mirante',
    emoji: '👁️',
    nome: 'Mirante Henrique Dias',
    tag: 'MEMÓRIA',
    cor: '#00751D',
    descricao:
      'Em homenagem ao líder afro-brasileiro que comandou a resistência, o Mirante oferece exposição permanente e monumentos que contam a origem do sentimento nacional — com vista de 360° do Monte.',
    detalhes: [
      'Exposição permanente sobre as Batalhas dos Guararapes',
      'Monumentos de Henrique Dias, Felipe Camarão e André Vidal de Negreiros',
      'Vista de 360° sobre o Monte e o litoral',
      'Espaço educativo para escolas e visitantes',
    ],
  },
  {
    id: 'fundacao',
    emoji: '📜',
    nome: 'Fundação de Jaboatão — 1593',
    tag: 'ORIGEM',
    cor: '#0044CA',
    descricao:
      'Bento Rocha funda o arraial às margens do Rio Jaboatão, em 1593. O nome vem do Tupi "Yabuatan" — "rio das cobras grandes" — e a cidade cresceu entre engenhos, fé e resistência.',
    detalhes: [
      'Fundação em 1593 por Bento Rocha',
      'Nome de origem Tupi: "Yabuatan" (rio das cobras grandes)',
      'Crescimento ligado à cultura canavieira e aos engenhos',
      'Município elevado à categoria de cidade em 1943',
    ],
  },
];

const BATALHAS = [
  {
    id: '1630',
    ano: '1630',
    evento: 'Invasão Holandesa',
    desc: 'A Companhia das Índias Ocidentais toma Recife e Olinda, iniciando 24 anos de ocupação no Nordeste brasileiro.',
    lado: 'left',
    cor: '#0044CA',
  },
  {
    id: '1645',
    ano: '1645',
    evento: 'Insurreição Pernambucana',
    desc: 'Colonos luso-brasileiros, indígenas e africanos se unem espontaneamente contra o domínio holandês — nasce a resistência.',
    lado: 'right',
    cor: '#00751D',
  },
  {
    id: '1648',
    ano: 'ABR\n1648',
    evento: '1ª Batalha dos Guararapes',
    desc: 'No Monte dos Guararapes, as forças de resistência vencem os holandeses pela primeira vez. Henrique Dias, Felipe Camarão e André Vidal de Negreiros lideram o combate.',
    lado: 'left',
    cor: '#F9BC00',
    destaque: true,
  },
  {
    id: '1649',
    ano: 'FEV\n1649',
    evento: '2ª Batalha dos Guararapes',
    desc: 'Segunda derrota definitiva dos holandeses no mesmo Monte. A vitória consolida a resistência e prenuncia a expulsão total.',
    lado: 'right',
    cor: '#F9BC00',
    destaque: true,
  },
  {
    id: '1654',
    ano: '1654',
    evento: 'Capitulação Holandesa',
    desc: 'Os holandeses assinam a capitulação e deixam definitivamente o Brasil. Jaboatão é reconhecida como o Berço da Pátria — onde nasceu o sentimento de nação brasileira.',
    lado: 'left',
    cor: '#0044CA',
  },
  {
    id: 'hoje',
    ano: 'HOJE',
    evento: 'Patrimônio e Memória Viva',
    desc: 'O Monte dos Guararapes é Patrimônio Histórico Nacional. Cada ano, milhares de visitantes sobem seus caminhos para entender onde o Brasil aprendeu a ser Brasil.',
    lado: 'right',
    cor: '#00751D',
  },
];

/* ─────────────────────────────────────────────
   COMPONENTE
───────────────────────────────────────────── */

export default function HistoriaPage() {
  const [pontoAtivo, setPontoAtivo] = useState<string | null>(null);
  
  // Refs para cada item da linha do tempo
  const timelineRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  // Ref para a seção de pontos históricos
  const pontosSectionRef = useRef<HTMLElement | null>(null);
  // Ref para o card da fundação
  const fundacaoCardRef = useRef<HTMLDivElement | null>(null);

  const scrollToTimelineItem = (id: string) => {
    const element = timelineRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const abrirPontoFundacao = () => {
    // Primeiro scroll até a seção de pontos
    const pontosSection = document.getElementById('pontos');
    if (pontosSection) {
      pontosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Depois abre o card da fundação
    setTimeout(() => {
      setPontoAtivo('fundacao');
    }, 500);
  };

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
              background: 'linear-gradient(145deg, #0037C1 0%, #0044CA 40%, #00BDFF 100%)',
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 20% 100%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-full lg:w-[30%] h-[15%] lg:h-[35%] opacity-90 z-10"
            style={{
              background: 'linear-gradient(to top right, #00751D 0%, #00DD4F 100%)',
              clipPath: 'polygon(0% 100%, 100% 100%, 0% 0%)',
            }}
          />
          {/* Watermark */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[-5%] pointer-events-none select-none opacity-[0.03] text-[22vw] font-black leading-none text-[#0044CA] hidden lg:block">
            1654
          </div>
        </div>

        <div className="relative z-20 grow mx-auto max-w-7xl px-5 sm:px-8 flex items-center w-full min-h-screen">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center w-full py-32 lg:py-0">

            {/* Esquerda */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                <span className="w-10 h-1.5 bg-[#F9BC00] rounded-full" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-600">Nossa Origem</span>
              </div>

              <h1 className="text-6xl sm:text-8xl lg:text-[7rem] font-black text-[#0044CA] leading-[0.85] tracking-tighter uppercase italic">
                BERÇO DA <br />
                <span className="text-[#F9BC00] drop-shadow-[4px_4px_0px_#00751D]">PÁTRIA</span>
              </h1>

              <p className="mt-8 text-lg sm:text-2xl font-bold text-slate-700 leading-tight max-w-md mx-auto lg:mx-0">
                Foi nos montes de{' '}
                <span className="text-[#00751D]">Jaboatão</span>{' '}
                que o Brasil aprendeu a ser Brasil. Uma história escrita com bravura, sangue e orgulho.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#pontos"
                  className="bg-[#0044CA] text-white px-10 py-4 rounded-2xl font-black text-sm tracking-widest hover:bg-[#F9BC00] hover:text-[#0044CA] transition-all shadow-[6px_6px_0px_#00751D] text-center"
                >
                  EXPLORAR HISTÓRIA
                </a>
                <a
                  href="#batalhas"
                  className="border-4 border-[#0044CA] text-[#0044CA] px-10 py-4 rounded-2xl font-black text-sm tracking-widest hover:bg-[#0044CA] hover:text-white transition-all text-center"
                >
                  VER LINHA DO TEMPO
                </a>
              </div>
            </div>

            {/* Direita — cards resumo */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {[
                { id: '1593', ano: '1593', titulo: 'Fundação', emoji: '📜', cor: '#00751D', acao: 'fundacao' },
                { id: '1648', ano: '1648', titulo: '1ª Batalha dos Guararapes', emoji: '⚔️', cor: '#0044CA', acao: 'timeline' },
                { id: '1654', ano: '1654', titulo: 'Berço da Pátria', emoji: '🇧🇷', cor: '#F9BC00', acao: 'timeline' },
              ].map((m) => (
                <div
                  key={m.id}
                  onClick={() => {
                    if (m.acao === 'fundacao') {
                      abrirPontoFundacao();
                    } else {
                      scrollToTimelineItem(m.id);
                    }
                  }}
                  className="group bg-white/95 backdrop-blur-sm p-5 lg:p-6 rounded-4xl shadow-xl flex items-center gap-6 border-l-10 transition-all hover:scale-[1.02] cursor-pointer"
                  style={{ borderLeftColor: m.cor }}
                >
                  <div className="flex flex-col items-center justify-center shrink-0">
                    <span className="text-3xl lg:text-4xl mb-1">{m.emoji}</span>
                    <span className="text-xl font-black text-[#0044CA] leading-none">{m.ano}</span>
                  </div>
                  <div className="h-12 w-px bg-slate-200 hidden sm:block" />
                  <div className="text-left">
                    <h4 className="font-black text-[#0044CA] uppercase italic text-lg leading-tight">{m.titulo}</h4>
                    {m.acao === 'fundacao' && (
                      <span className="text-[10px] font-bold text-[#00751D] mt-1 block">Clique para ver detalhes →</span>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-2 p-6 bg-[#F9BC00] rounded-4xl border-4 border-white shadow-2xl flex items-center gap-4 lg:rotate-1">
                <span className="text-4xl">🏛️</span>
                <p className="font-black text-[#0044CA] text-sm lg:text-base leading-tight uppercase tracking-tighter">
                  Patrimônio Histórico <br />Nacional do Brasil
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SEÇÃO: PONTOS HISTÓRICOS
      ══════════════════════════════════════ */}
      <section id="pontos" ref={pontosSectionRef} className="relative w-full bg-white py-20 sm:py-28 overflow-hidden">

        <div className="absolute top-0 right-0 w-[40%] h-1.5 bg-[#F9BC00]" />

        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          {/* Header */}
          <div className="mb-12 sm:mb-16 text-center lg:text-left">
            <div className="flex items-center gap-3 mb-3 justify-center lg:justify-start">
              <span className="w-10 h-1.5 bg-[#F9BC00] rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-400">Onde a história vive</span>
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#0044CA] leading-[0.85] tracking-tighter uppercase italic">
              PONTOS <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #0044CA' }}>
                HISTÓRICOS
              </span>
            </h2>
          </div>

          {/* Grid de cards */}
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {PONTOS.map((ponto) => {
              const aberto = pontoAtivo === ponto.id;
              return (
                <div
                  key={ponto.id}
                  ref={ponto.id === 'fundacao' ? fundacaoCardRef : null}
                  className="group rounded-4xl overflow-hidden shadow-xl cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                  style={{ borderBottom: `6px solid ${ponto.cor}` }}
                  onClick={() => setPontoAtivo(aberto ? null : ponto.id)}
                >
                  {/* Topo colorido */}
                  <div
                    className="p-7 sm:p-8 flex items-start gap-5 transition-all duration-300"
                    style={{ backgroundColor: aberto ? ponto.cor : '#f8f9fc' }}
                  >
                    <div
                      className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center text-3xl shadow-sm"
                      style={{ backgroundColor: aberto ? 'rgba(255,255,255,0.2)' : `${ponto.cor}18` }}
                    >
                      {ponto.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                        className="inline-block px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest mb-2"
                        style={{
                          backgroundColor: aberto ? 'rgba(255,255,255,0.25)' : `${ponto.cor}20`,
                          color: aberto ? '#fff' : ponto.cor,
                        }}
                      >
                        {ponto.tag}
                      </span>
                      <h3
                        className="font-black text-lg sm:text-xl uppercase italic leading-tight tracking-tight"
                        style={{ color: aberto ? '#fff' : ponto.cor }}
                      >
                        {ponto.nome}
                      </h3>
                    </div>
                    <div
                      className="shrink-0 transition-transform duration-300 mt-1"
                      style={{
                        color: aberto ? '#fff' : ponto.cor,
                        transform: aberto ? 'rotate(90deg)' : 'rotate(0deg)',
                      }}
                    >
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Conteúdo expandido */}
                  <div
                    className="overflow-hidden transition-all duration-500 bg-white"
                    style={{ maxHeight: aberto ? '400px' : '0px' }}
                  >
                    <div className="px-7 sm:px-8 py-6 border-t border-slate-100">
                      <p className="text-slate-600 font-bold text-sm sm:text-base leading-relaxed mb-5">
                        {ponto.descricao}
                      </p>
                      <ul className="space-y-2">
                        {ponto.detalhes.map((d) => (
                          <li key={d} className="flex items-start gap-3 text-sm font-bold text-slate-700">
                            <span
                              className="mt-1 w-2 h-2 rounded-full shrink-0"
                              style={{ backgroundColor: ponto.cor }}
                            />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SEÇÃO: LINHA DO TEMPO DAS BATALHAS
      ══════════════════════════════════════ */}
      <section id="batalhas" className="relative w-full bg-[#e3e7ef] py-20 sm:py-28 overflow-hidden">

        {/* Fundo decorativo */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-2"
            style={{ background: 'linear-gradient(to right, #00751D, #F9BC00, #0044CA)' }}
          />
          <div className="absolute bottom-[-5%] left-[-3%] pointer-events-none select-none opacity-[0.03] text-[28vw] font-black leading-none text-[#0044CA] hidden lg:block">
            1648
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8">

          {/* Header */}
          <div className="mb-14 sm:mb-20 text-center">
            <div className="flex items-center gap-3 mb-3 justify-center">
              <span className="w-10 h-1.5 bg-[#F9BC00] rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-600">Cronologia</span>
            </div>
            <h2 className="text-5xl sm:text-7xl font-black text-[#0044CA] leading-[0.85] tracking-tighter uppercase italic">
              A LINHA DO <br />
              <span className="text-[#F9BC00] drop-shadow-[3px_3px_0px_#00751D]">TEMPO</span>
            </h2>
            <p className="mt-4 text-slate-600 font-bold text-base sm:text-lg max-w-lg mx-auto leading-snug">
              De 1630 a 1654 — os 24 anos que forjaram a identidade brasileira nos montes de Jaboatão.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Linha central */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-slate-300 rounded-full hidden sm:block" />

            <div className="space-y-8 sm:space-y-0">
              {BATALHAS.map((item, i) => {
                const isLeft = item.lado === 'left';
                return (
                  <div
                    key={item.id}
                    ref={(el) => { timelineRefs.current[item.id] = el; }}
                    className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 ${
                      isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    {/* Conteúdo */}
                    <div className={`w-full sm:w-[calc(50%-2rem)] ${isLeft ? 'sm:pr-8 sm:text-right' : 'sm:pl-8 sm:text-left'}`}>
                      <div
                        className={`
                          rounded-3xl p-5 sm:p-6 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl
                          ${item.destaque ? 'border-4' : 'bg-white'}
                        `}
                        style={
                          item.destaque
                            ? { backgroundColor: item.cor, borderColor: '#fff' }
                            : { borderLeft: isLeft ? 'none' : `4px solid ${item.cor}`, borderRight: isLeft ? `4px solid ${item.cor}` : 'none' }
                        }
                      >
                        <p
                          className="text-[9px] font-black uppercase tracking-widest mb-1 whitespace-pre-line"
                          style={{ color: item.destaque ? 'rgba(255,255,255,0.7)' : item.cor }}
                        >
                          {item.ano}
                        </p>
                        <h4
                          className="font-black text-base sm:text-lg uppercase italic leading-tight mb-2"
                          style={{ color: item.destaque ? '#fff' : item.cor }}
                        >
                          {item.evento}
                        </h4>
                        <p
                          className="text-xs sm:text-sm font-bold leading-snug"
                          style={{ color: item.destaque ? 'rgba(255,255,255,0.9)' : '#475569' }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Ponto central */}
                    <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center shadow-xl border-4 border-white z-10"
                      style={{ backgroundColor: item.cor }}
                    >
                      <span className="text-white font-black text-[10px]">
                        {item.destaque ? '⚔️' : '●'}
                      </span>
                    </div>

                    {/* Espaçador lado vazio */}
                    <div className="hidden sm:block w-[calc(50%-2rem)]" />
                  </div>
                );
              })}
            </div>
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
            VISITE O <br />
            <span className="text-[#F9BC00]">BERÇO DA PÁTRIA</span>
          </h2>
          <p className="text-white/80 font-bold text-base sm:text-lg max-w-md mx-auto leading-snug mb-10">
            Suba o Monte dos Guararapes e sinta onde o Brasil nasceu. Uma experiência que transforma.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/roteiros/passeio-da-fe"
              className="bg-[#F9BC00] text-[#0044CA] px-10 py-4 rounded-2xl font-black text-sm tracking-widest hover:scale-105 transition-all shadow-[6px_6px_0px_#00751D] text-center"
            >
              ROTEIRO DO PASSEIO DA FÉ ★
            </a>
            <a
              href="/o-que-conhecer"
              className="border-4 border-white text-white px-10 py-4 rounded-2xl font-black text-sm tracking-widest hover:bg-white hover:text-[#0044CA] transition-all text-center"
            >
              VER TODOS OS DESTINOS
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}