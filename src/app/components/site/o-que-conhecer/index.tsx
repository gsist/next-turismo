// src/app/components/site/o-que-conhecer/index.tsx
'use client';

import React, { useState } from 'react';

const CATEGORIAS = [
  {
    id: 'sol-rio-mar',
    emoji: '🌊',
    label: 'Sol, Rio & Mar',
    cor: '#0044CA',
    corTexto: '#fff',
    titulo: 'SOL, RIO\n& MAR',
    subtitulo: 'Onde o mar encontra a aventura',
    descricao:
      'A Orla de Jaboatão é repleta de atrações. De piscinas naturais a pôr do sol inesquecíveis, o município reúne praias, rios e manguezais para todos os perfis.',
    destaques: [
      { emoji: '🏖️', nome: 'Praia de Barra de Jangada', desc: 'Praia com atmosfera tranquila e tradicional, onde o Rio Jaboatão encontra o mar.' },
      { emoji: '🏖️', nome: 'Praia de Candeias', desc: 'Praia urbana com infraestrutura, piscinas naturais e formações de recife de água cristalina.' },
      { emoji: '🏖️', nome: 'Praia de Piedade', desc: 'Praia com águas claras, coqueirais e vista para o Monumento Gaivota Karina.' },
      { emoji: '🗿', nome: 'Monumento Gaivota Karina', desc: 'Ícone da Praia de Piedade, símbolo marcante da orla jaboatonense.' },
      { emoji: '🕉️', nome: 'Estátua de Iemanjá', desc: 'Em Barra de Jangada, ponto de encontro entre o rio e o mar.' },
      { emoji: '🏄', nome: 'Esportes Aquáticos', desc: 'Stand up paddle, kitesurf, windsurf, kayak e passeios de jangada.' },
    ],
    tag: 'LITORAL',
  },
  {
    id: 'historia-cultura',
    emoji: '🏛️',
    label: 'História & Cultura',
    cor: '#F9BC00',
    corTexto: '#0044CA',
    titulo: 'HISTÓRIA\n& CULTURA',
    subtitulo: 'Berço da Pátria',
    descricao:
      'Jaboatão dos Guararapes é Berço da Pátria Brasileira. Foi no Monte dos Guararapes que nasceu o sentimento de nação — palco das históricas Batalhas de 1648 e 1654. Igrejas históricas, miradouros, museus e esculturas revelam 370 anos de história.',
    destaques: [
      { emoji: '⚔️', nome: 'Parque Histórico Nacional Monte dos Guararapes', desc: 'Palco das Batalhas que forjaram a identidade nacional brasileira.' },
      { emoji: '👁️', nome: 'Mirante Henrique Dias', desc: 'Exposição e monumentos que contam a origem do sentimento nacional.' },
      { emoji: '👁️', nome: 'Mirante André Vidal de Negreiros', desc: 'Belvedere no Monte dos Guararapes com vista panorâmica da região.' },
      { emoji: '⛪', nome: 'Santuário N. Sra. dos Prazeres', desc: 'Um dos maiores templos com azulejos portugueses do Brasil, no Monte dos Guararapes.' },
      { emoji: '🎭', nome: 'Espaço Vida Marinha', desc: 'Espaço de educação ambiental dedicado à preservação marinha em Piedade.' },
      { emoji: '📜', nome: 'Instituto Histórico de Jaboatão', desc: 'Acervo histórico preservando a memória e identidade da cidade.' },
    ],
    tag: 'HISTÓRIA',
  },
  {
    id: 'igrejas',
    emoji: '⛪',
    label: 'Igrejas & Templos',
    cor: '#00751D',
    corTexto: '#fff',
    titulo: 'IGREJAS &\nTEMPLOS',
    subtitulo: 'Fé e patrimônio',
    descricao:
      'Jaboatão possui um rico acervo de igrejas e capelas, muitas com arquitetura colonial e décadas de história. Espaços de devoção e patrimônio cultural.',
    destaques: [
      { emoji: '⛪', nome: 'Matriz de Santo Amaro', desc: 'Centro paroquial histórico na Rua Santo Amaro, Centro.' },
      { emoji: '⛪', nome: 'Igreja de N. Sra. da Piedade', desc: 'Igrejinha histórica na Avenida Beira Mar, Piedade.' },
      { emoji: '⛪', nome: 'Paróquia N. Sra. do Rosário - Centro', desc: 'Igreja matriz no coração da cidade.' },
      { emoji: '⛪', nome: 'Basílica de N. Sra. Auxiliadora', desc: 'Primeira Basílica em zona rural do mundo, na Colônia Salesiana, Vila Rica.' },
      { emoji: '⛪', nome: 'Paróquia N. Sra. do Rosário - Prazeres', desc: 'Templo religioso em Prazeres com rica história.' },
      { emoji: '⛪', nome: 'Paróquia N. Sra. das Candeias', desc: 'Igreja em Candeias, importante centro de devoção.' },
    ],
    tag: 'RELIGIÃO',
  },
  {
    id: 'artesanato',
    emoji: '🎨',
    label: 'Artesanato & Ateliês',
    cor: '#0044CA',
    corTexto: '#fff',
    titulo: 'ARTE\nSANATO',
    subtitulo: 'De Jaboatão para o mundo',
    descricao:
      'O artesanato jaboatonense é destaque nacional e internacional. Ateliês criativos abrigam mestres escultores, artesãos e artistas plásticos que levam a alma pernambucana para além das fronteiras.',
    destaques: [
      { emoji: '🗿', nome: 'Ateliê Nicola', desc: 'Avenida Comercial, 8383, Candeias. Esculturas e arte. Tel: (81) 3469-0421' },
      { emoji: '🎨', nome: 'Ateliê Alex Mont\'Elberto', desc: 'Rua Médico Vicente Fonseca, 941, Candeias. Tel: (81) 3474-3996' },
      { emoji: '🪡', nome: 'Ateliê Iara Tenório', desc: 'Rua Antônio de Farias, 580. Artes diversas. Tel: (81) 98757-6467' },
      { emoji: '🪘', nome: 'Ateliê Mestre Saúba', desc: 'Rua João Martins, 16, Vila Rica. Tel: (81) 3482-7383' },
      { emoji: '🎭', nome: 'Ateliê Domingos e Patrícia Barros', desc: 'Rua Igarassu, 1964. Design e criatividade. Tel: (81) 3361-1965' },
      { emoji: '✨', nome: 'Oficina de Formas', desc: 'Rua Consuelo Leandro Dutra, 215. Arte criativa.' },
    ],
    tag: 'ARTE',
  },
  {
    id: 'compras',
    emoji: '🛍️',
    label: 'Compras & Mercados',
    cor: '#00751D',
    corTexto: '#fff',
    titulo: 'COMPRAS &\nMERCADOS',
    subtitulo: 'Tudo que você precisa',
    descricao:
      'De galerias comerciais a shopping centers, Jaboatão oferece diversas opções de compras. Encontre artesanato, moda, farmácias e tudo mais no melhor da cidade.',
    destaques: [
      { emoji: '🏬', nome: 'Shopping Guararapes Open Mall', desc: 'Avenida Bernardo Vieira de Melo, 209. Tel: (81) 3093-1809' },
      { emoji: '🏬', nome: 'The Garden Open Mall', desc: 'Avenida Barreto Menezes, 800. Tel: (81) 2122-2211' },
      { emoji: '🏪', nome: 'Casa Rosário Colab', desc: 'Galeria colaborativa na Rua Santo Amaro, 97. Artesanato local.' },
      { emoji: '🏪', nome: 'Shopping Yapoatan Center', desc: 'Rua Bernardo Vieira de Melo, 14. Compras variadas.' },
      { emoji: '💊', nome: 'Drogaria São Paulo', desc: 'Rua Dr. Aniceto Varejão, 4455. Tel: (81) 3096-0751' },
      { emoji: '💊', nome: 'Pague Menos', desc: 'Rua Dr. Aniceto Varejão, 100. Tel: (81) 4002-8282' },
    ],
    tag: 'COMPRAS',
  },
  {
    id: 'festividades',
    emoji: '🎉',
    label: 'Festividades',
    cor: '#F9BC00',
    corTexto: '#0044CA',
    titulo: 'FESTIVI\nDADES',
    subtitulo: 'É festa o ano inteiro',
    descricao:
      'Jaboatão celebra o ano todo com festividades religiosas, culturais e populares. Santo Amaro, N. Sra. dos Prazeres, Carnaval e São João animam a cidade com muita música, fé e hospitalidade nordestina.',
    destaques: [
      { emoji: '⛪', nome: 'Festa de Santo Amaro', desc: 'Rua Santo Amaro, Centro. Celebração do padroeiro da cidade com muita fé e alegria.' },
      { emoji: '⛪', nome: 'Festa de N. Sra. dos Prazeres', desc: 'Uma das maiores celebrações religiosas de Pernambuco, no Monte dos Guararapes.' },
      { emoji: '🌺', nome: 'Festa de Iemanjá', desc: 'Celebração das tradições afro-brasileiras em Barra de Jangada.' },
      { emoji: '✝️', nome: 'Festa de N. Sra. da Piedade', desc: 'Devoção e tradição na histórica praia de Piedade.' },
      { emoji: '🥁', nome: 'Carnaval de Jaboatão', desc: 'Frevo, maracatu e toda a energia da folia pernambucana.' },
      { emoji: '⭐', nome: 'São João em Jaboatão', desc: 'Quadrilhas, forró e comidas típicas animam junho inteiro.' },
    ],
    tag: 'FESTAS',
  },
  {
    id: 'atrativos-naturais',
    emoji: '🌿',
    label: 'Atrativos Naturais',
    cor: '#00751D',
    corTexto: '#fff',
    titulo: 'ATRATIVOS\nNATURAIS',
    subtitulo: 'Riqueza ambiental',
    descricao:
      'Jaboatão preserva belezas naturais: parques, lagoas e manguezais. O Parque Histórico Nacional Monte dos Guararapes é patrimônio da humanidade e refúgio da biodiversidade nordestina.',
    destaques: [
      { emoji: '🏞️', nome: 'Parque Histórico Nacional Monte dos Guararapes', desc: 'Patrimônio natural e histórico com trilhas e vistas panorâmicas.' },
      { emoji: '💧', nome: 'Lagoa Olho D\'Água (Lagoa do Náutico)', desc: 'Rua Lagoa do Náutico, Barra de Jangada. Espelho d\'água com beleza cênica.' },
      { emoji: '💧', nome: 'Barragem Duas Unas', desc: 'Obra de engenharia que fornece água à região e beleza paisagística.' },
      { emoji: '🌳', nome: 'Parque da Cidade', desc: 'Estrada da Batalha, 2026, Prazeres. Área verde com recreação.' },
      { emoji: '🌳', nome: 'Parque Jefferson de Freitas', desc: 'Rua Estrada da Luz, Santo Aleixo. Espaço para lazer e natureza.' },
      { emoji: '🌿', nome: 'Rio Jaboatão e Manguezais', desc: 'Ecossistema rico em biodiversidade, palco de passeios de barco.' },
    ],
    tag: 'NATURA',
  },
];

export default function OQueConhecerSection() {
  const [ativo, setAtivo] = useState(CATEGORIAS[0].id);

  const categoria = CATEGORIAS.find((c) => c.id === ativo)!;

  return (
    <section
      id="o-que-conhecer"
      className="relative w-full min-h-screen bg-[#f0f2f7] overflow-hidden font-sans flex flex-col"
    >
      {/* ── FUNDO DECORATIVO ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Bloco diagonal verde */}
        <div
          className="absolute top-0 left-0 w-full h-[18%] opacity-80"
          style={{
            background: 'linear-gradient(to bottom right, #00751D 0%, #00DD4F 100%)',
            clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)',
          }}
        />
        {/* Marca d'água */}
        <div className="absolute bottom-[-4%] right-[-2%] pointer-events-none select-none opacity-[0.04] text-[20vw] font-black leading-none whitespace-nowrap text-[#0044CA] hidden lg:block">
          JABOATÃO
        </div>
      </div>

      {/* ── HEADER ── */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-5 sm:px-8 pt-36 pb-0 sm:pt-40 lg:pt-60">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-10 h-1.5 bg-[#F9BC00] rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-white lg:text-slate-600">
                Descubra o destino
              </span>
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-[6.0rem] font-black text-[#0044CA] leading-[0.85] tracking-tighter uppercase italic">
              O QUE <br />
              <span
                className="text-[#F9BC00]"
                style={{ textShadow: '4px 4px 0px #00751D' }}
              >
                CONHECER
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* ── ABAS DE NAVEGAÇÃO ── */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-5 sm:px-8 mt-8 sm:mt-10 lg:mt-12">
        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setAtivo(cat.id)}
              className={`
                flex items-center gap-2 px-4 py-2.5 rounded-2xl
                font-black text-[10px] sm:text-xs uppercase tracking-widest
                transition-all duration-300 border-2
                ${ativo === cat.id
                  ? 'text-white scale-105 shadow-xl border-transparent'
                  : 'bg-white/80 text-slate-500 border-slate-200 hover:border-transparent hover:text-white'
                }
              `}
              style={
                ativo === cat.id
                  ? { backgroundColor: cat.cor }
                  : undefined
              }
              onMouseEnter={(e) => {
                if (ativo !== cat.id) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = cat.cor;
                }
              }}
              onMouseLeave={(e) => {
                if (ativo !== cat.id) {
                  (e.currentTarget as HTMLElement).style.backgroundColor = '';
                }
              }}
            >
              <span className="text-base">{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── CONTEÚDO PRINCIPAL ── */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-5 sm:px-8 mt-8 sm:mt-10 pb-20 sm:pb-28 flex-1">
        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6">

          {/* CARD HERO DA CATEGORIA */}
          <div
            className="lg:col-span-5 rounded-4xl sm:rounded-[2.5rem] p-7 sm:p-10 flex flex-col justify-between min-h-75 sm:min-h-95 lg:min-h-120 shadow-2xl transition-all duration-500"
            style={{ backgroundColor: categoria.cor }}
          >
            <div>
              <span
                className="inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.3em] mb-6 border-2"
                style={{
                  color: categoria.cor,
                  backgroundColor: categoria.corTexto,
                  borderColor: categoria.corTexto,
                }}
              >
                {categoria.tag}
              </span>

              <h3
                className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.85] tracking-tighter uppercase italic whitespace-pre-line"
                style={{ color: categoria.corTexto }}
              >
                {categoria.titulo}
              </h3>

              <p
                className="mt-2 text-[10px] font-black uppercase tracking-widest opacity-70"
                style={{ color: categoria.corTexto }}
              >
                {categoria.subtitulo}
              </p>
            </div>

            <div>
              <p
                className="text-sm sm:text-base font-bold leading-snug opacity-90 mb-8 max-w-sm"
                style={{ color: categoria.corTexto }}
              >
                {categoria.descricao}
              </p>

              <button
                className="px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg"
                style={{
                  backgroundColor: categoria.corTexto,
                  color: categoria.cor,
                }}
              >
                EXPLORAR {categoria.label.toUpperCase()} ★
              </button>
            </div>
          </div>

          {/* GRID DE DESTAQUES */}
          <div className="lg:col-span-7 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
            {categoria.destaques.map((dest, i) => (
              <div
                key={dest.nome}
                className="group bg-white rounded-3xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex items-start gap-4 border-b-4"
                style={{ borderBottomColor: categoria.cor }}
              >
                <div
                  className="w-12 h-12 shrink-0 rounded-2xl flex items-center justify-center text-2xl shadow-sm transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${categoria.cor}18` }}
                >
                  {dest.emoji}
                </div>
                <div className="min-w-0">
                  <h4
                    className="font-black text-sm sm:text-base uppercase italic leading-tight tracking-tight"
                    style={{ color: categoria.cor }}
                  >
                    {dest.nome}
                  </h4>
                  <p className="text-xs text-slate-500 font-bold mt-1 leading-snug">
                    {dest.desc}
                  </p>
                </div>
                <div
                  className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: categoria.cor }}
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}