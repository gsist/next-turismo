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
      { emoji: '🪸', nome: 'Piscinas Naturais de Candeias', desc: 'Formações de recife que criam piscinas de água cristalina no calçadão.' },
      { emoji: '🗿', nome: 'Monumento Gaivota Karina', desc: 'Ícone da Praia de Piedade, símbolo da orla jaboatonense.' },
      { emoji: '⛵', nome: 'Estátua de Iemanjá', desc: 'Em Barra de Jangada, onde o Rio Jaboatão encontra o mar.' },
      { emoji: '🏄', nome: 'Esportes Aquáticos', desc: 'Stand up paddle, kitesurf, windsurf, kayak e passeio de jangada.' },
      { emoji: '🐢', nome: 'Desova de Tartarugas', desc: 'Pontos de desova monitorados ao longo das praias.' },
      { emoji: '🚤', nome: 'Passeio de Barco', desc: 'Rio Jaboatão e Rio Pirapama com manguezal e marisqueiras.' },
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
    subtitulo: 'Onde a história encontra a preservação',
    descricao:
      'Berço da Pátria Brasileira. Foi no Monte dos Guararapes que nasceu o sentimento de nação — palco das históricas Batalhas de 1648 e 1654.',
    destaques: [
      { emoji: '⚔️', nome: 'Monte dos Guararapes', desc: 'Palco das Batalhas que expulsaram os holandeses e forjaram a identidade nacional.' },
      { emoji: '👁️', nome: 'Mirante Henrique Dias', desc: 'Exposição e monumentos que contam a origem do sentimento nacional brasileiro.' },
      { emoji: '⛪', nome: 'Santuário de Nossa Senhora dos Prazeres', desc: 'Um dos templos com maior número de azulejos portugueses do Brasil.' },
      { emoji: '🐟', nome: 'Espaço Vida Marinha', desc: 'Dedicado à preservação ambiental na Praia de Piedade.' },
      { emoji: '⛵', nome: 'Igrejinha de Piedade', desc: 'Marco histórico e arquitetônico da orla.' },
      { emoji: '📜', nome: 'Berço da Pátria — 1654', desc: 'Jaboatão reconhecida como local onde nasceu o sentimento de nação.' },
    ],
    tag: 'HISTÓRIA',
  },
  {
    id: 'gastronomia',
    emoji: '🍽️',
    label: 'Gastronomia',
    cor: '#00751D',
    corTexto: '#fff',
    titulo: 'GASTRO\nNOMIA',
    subtitulo: 'Nossas delícias não têm igual!',
    descricao:
      'A culinária jaboatonense é um convite aos sentidos. Frutos do mar frescos predominam nos bares e restaurantes da orla e às margens do Rio Jaboatão.',
    destaques: [
      { emoji: '🎂', nome: 'Bolo Souza Leão', desc: 'Patrimônio da gastronomia pernambucana — receita de uma das famílias mais antigas da cidade.' },
      { emoji: '🦐', nome: 'Frutos do Mar', desc: 'Bares e restaurantes da orla servem o melhor do frescor do Atlântico.' },
      { emoji: '🌊', nome: 'Orla Gastronômica', desc: 'Dezenas de bares e restaurantes à beira-mar e às margens do Rio Jaboatão.' },
      { emoji: '🌿', nome: 'Comida Caseira Rural', desc: 'No Engenho Penanduba: pratos típicos com macaxeira, cará e farinha de casa.' },
      { emoji: '🐟', nome: 'Pesque-pague', desc: 'Experiência completa de pesca e culinária no Aconchego Família Rural.' },
      { emoji: '🍳', nome: 'Casa de Farinha', desc: 'Tradição viva da cultura rural nordestina no Engenho Penanduba.' },
    ],
    tag: 'SABORES',
  },
  {
    id: 'artesanato',
    emoji: '🎨',
    label: 'Artesanato',
    cor: '#0044CA',
    corTexto: '#fff',
    titulo: 'ARTE\nSANATO',
    subtitulo: 'De Jaboatão para o mundo',
    descricao:
      'O artesanato jaboatonense é destaque nacional e internacional. Artistas da cidade levam a alma criativa da gente pernambucana para além das fronteiras.',
    destaques: [
      { emoji: '🗿', nome: 'Mestre Nicola', desc: 'Escultor renomado cujas obras são referência do artesanato local.' },
      { emoji: '🪡', nome: 'Iara Tenório', desc: 'Artesã de destaque nacional com trabalhos únicos.' },
      { emoji: '🎭', nome: 'Maraçane de França', desc: 'Expressão da identidade cultural e criativa de Jaboatão.' },
      { emoji: '🪘', nome: 'Mestre Saúba', desc: 'Artesão que preserva a tradição viva da cultura popular.' },
      { emoji: '✨', nome: 'Alex Mont\'Elberto', desc: 'Artista que leva Jaboatão para além das fronteiras nacionais.' },
      { emoji: '🛍️', nome: 'Feiras de Artesanato', desc: 'Espaços de comercialização e valorização dos artesãos locais.' },
    ],
    tag: 'ARTE',
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
      'Jaboatão celebra o ano todo com festividades religiosas, culturais e populares que animam moradores e visitantes com muita música e hospitalidade.',
    destaques: [
      { emoji: '⛪', nome: 'Festa de N. Sra. dos Prazeres', desc: 'Uma das maiores celebrações religiosas e culturais de Pernambuco, no Monte dos Guararapes.' },
      { emoji: '🌺', nome: 'Festa da Pitomba', desc: 'Celebração tradicional que reúne cultura e devoção popular.' },
      { emoji: '✝️', nome: 'Festa de Santo Amaro', desc: 'Homenagem ao padroeiro da cidade com muita fé e alegria.' },
      { emoji: '🥁', nome: 'Carnaval', desc: 'Folia pernambucana com frevo, maracatu e toda a energia do Nordeste.' },
      { emoji: '⭐', nome: 'São João', desc: 'Quadrilhas, forró e comidas típicas animam junho em Jaboatão.' },
      { emoji: '🎆', nome: 'Réveillon Pé na Areia', desc: 'Virada do ano na praia com shows e fogos inesquecíveis.' },
    ],
    tag: 'FESTAS',
  },
  {
    id: 'turismo-rural',
    emoji: '🌿',
    label: 'Turismo Rural',
    cor: '#00751D',
    corTexto: '#fff',
    titulo: 'TURISMO\nRURAL',
    subtitulo: 'Fortalecendo as nossas raízes',
    descricao:
      'Em meio a engenhos, trilhas e tradições, Jaboatão revela experiências autênticas que celebram a natureza, a cultura e a história local.',
    destaques: [
      { emoji: '🐟', nome: 'Sítio Recanto da Tilápia', desc: 'Cultivo de macaxeira e cará, pratos típicos e memorial da história agrícola local.' },
      { emoji: '🌿', nome: 'Chácara Xamânica', desc: 'Imersão cultural e espiritual com rituais xamânicos e cultivo de ervas medicinais.' },
      { emoji: '🏡', nome: 'Aconchego Família Rural', desc: 'No Engenho Penanduba: pesque-pague, comida caseira e casa de farinha.' },
      { emoji: '🎋', nome: 'Engenho Macujé', desc: 'Tradição açucareira e cotidiano do campo com trilhas e vivências da cana-de-açúcar.' },
      { emoji: '⛪', nome: 'Colônia Salesiana', desc: 'Basílica de N. Sra. Auxiliadora — a primeira do mundo em zona rural —, em Vila Rica.' },
      { emoji: '📞', nome: 'Informações Turísticas', desc: 'Central de Turismo Rural: (81) 99827-0398 | @turismoruraljaboatao' },
    ],
    tag: 'RURAL',
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
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x">
          {CATEGORIAS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setAtivo(cat.id)}
              className={`
                snap-start shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-2xl
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