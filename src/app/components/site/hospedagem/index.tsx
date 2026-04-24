'use client';

import React, { useState } from 'react';

const HOTEIS = [
  {
    nome: 'Caesar Towers Hotel',
    endereco: 'Avenida Bernardo Vieira de Melo, 1701, Piedade',
    telefone: '8121234567',
    sites: ['https://www.letsatlantica.com.br/hotel/costa-mar-recife-hotel-by-atlantica']
  },
  {
    nome: 'Hotel Anahi',
    endereco: 'Rua Álvaro Pinto Carvalheira, 305',
    telefone: '8130932300',
    sites: ['https://www.anahihotel.com.br/', 'https://www.instagram.com/hotelanahi/']
  },
  {
    nome: 'Hotel Barramares',
    endereco: 'Avenida Senador Sérgio Guerra, 544, Piedade, 54400-003',
    telefone: '8133126100',
    sites: ['https://hotelbarramares.com.br/', 'https://www.instagram.com/hotelbarramares/']
  },
  {
    nome: 'Hotel Dan Inn',
    endereco: 'Avenida Bernardo Vieira de Melo, 694, Piedade, 54400-000',
    telefone: '8121231700',
    sites: ['https://www.nacionalinn.com.br/', 'https://www.instagram.com/hoteldaninnrecife/']
  },
  {
    nome: 'Hotel Ibis Budget',
    endereco: 'Rua Coronel Francisco Galvão, 159, Piedade, 54400-190',
    telefone: '8137879777',
    sites: ['https://www.ibisbudget.com.br/', 'https://www.instagram.com/ibis__budgetrecife/']
  },
  {
    nome: 'Hotel Scenarium',
    endereco: 'Avenida Barreto de Menezes, 200, Piedade',
    telefone: '8130941633',
    sites: ['https://www.instagram.com/scenariumhotel/']
  }
];

const POUSADAS = [
  {
    nome: 'Hotel América Praia',
    endereco: 'Rua Roosevelt de Albuquerque, 21, Piedade',
    telefone: '81985000666',
    sites: ['https://www.instagram.com/hotelamericapraia']
  },
  {
    nome: 'Pousada Apoena',
    endereco: 'Rua Juiz S Pereira, 51',
    telefone: '8132039830',
    sites: ['https://www.instagram.com/casa.apoena/']
  },
  {
    nome: 'Pousada das Palmeiras',
    endereco: 'Rua Marechal Hemes da Fonseca, 378',
    telefone: '8132036535',
    sites: ['https://www.instagram.com/pousada_daspalmeiras/']
  },
  {
    nome: 'Pousada Elo Inn',
    endereco: 'Rua Coronel Dário Ferraz de Sá, 4896, Candeias, 54430-090',
    telefone: '8130640890',
    sites: ['https://pousadaeloinn.com.br/', 'https://www.instagram.com/hotelpousadaeloinn']
  },
  {
    nome: 'Pousada Nordestina',
    endereco: 'Rua José Nunes da Cunha, 296, Piedade',
    telefone: '81996102992',
    sites: ['https://www.instagram.com/pousada.nordestina']
  },
  {
    nome: 'Pousada Palmeira Imperial',
    endereco: 'Rua Alexandre Baracho, 906, Candeias, 54440-400',
    telefone: '81993039139',
    sites: ['https://www.instagram.com/pousadapalmeiraimperial/']
  }
];

const formatPhone = (phone: string) => {
  if (phone.length === 11) {
    return `(${phone.slice(0, 2)}) ${phone.slice(2, 7)}-${phone.slice(7)}`;
  }
  return `(${phone.slice(0, 2)}) ${phone.slice(2, 6)}-${phone.slice(6)}`;
};

const IconPin = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconPhone = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const IconLink = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

type Lugar = { nome: string; endereco: string; telefone: string; sites: string[] };

function AccordionCard({ item, index, accentColor }: { item: Lugar; index: number; accentColor: string; }) {
  const [open, setOpen] = useState(false);
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className="group border-t-2 border-[#0044CA]/15 last:border-b-2 transition-all duration-300"
      style={{ background: open ? 'white' : 'transparent' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 py-5 px-2 text-left focus:outline-none"
      >
        {/* Número */}
        <span
          className="text-3xl font-black italic shrink-0 tabular-nums leading-none transition-colors duration-300"
          style={{ color: open ? accentColor : '#0044CA20', minWidth: '2.5rem' }}
        >
          {num}
        </span>

        {/* Nome */}
        <span className="flex-1 text-base font-black text-[#0044CA] uppercase tracking-tight leading-tight">
          {item.nome}
        </span>

        {/* Seta */}
        <span
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
          style={{ background: open ? accentColor : '#0044CA10', color: open ? '#0044CA' : '#0044CA' }}
        >
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
            className="transition-transform duration-300"
            style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      {/* Conteúdo expansível */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '300px' : '0px' }}
      >
        <div className="pb-5 px-2 pl-14 flex flex-col gap-3">
          {/* Linha colorida */}
          <div className="h-0.5 w-12 rounded-full mb-1" style={{ background: accentColor }} />

          <div className="flex items-start gap-2 text-slate-600">
            <span className="mt-0.5 text-[#0044CA] shrink-0"><IconPin /></span>
            <span className="text-sm font-medium">{item.endereco}</span>
          </div>

          <div className="flex items-center gap-2 text-slate-600">
            <span className="text-[#0044CA] shrink-0"><IconPhone /></span>
            <a
              href={`tel:+55${item.telefone}`}
              className="text-sm font-medium hover:text-[#0044CA] transition-colors"
            >
              {formatPhone(item.telefone)}
            </a>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[#0044CA] shrink-0"><IconLink /></span>
            {item.sites.map((site, idx) => {
              const isInsta = site.includes('instagram');
              return (
                <a
                  key={idx}
                  href={site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold px-3 py-1 rounded-full border-2 transition-all duration-200 hover:scale-105"
                  style={{
                    borderColor: accentColor,
                    color: '#0044CA',
                    background: 'transparent',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = accentColor;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                  }}
                >
                  {isInsta ? '📸 Instagram' : '🌐 Site'}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hospedagem() {
  return (
    <div className="min-h-screen pt-42 pb-20" style={{ background: '#e8e8e8' }}>

      {/* ── HEADER ───────────────────────────────────────────── */}
      <header className="max-w-7xl mx-auto px-6 mb-16">
        <div className="relative">
          {/* Background text decorativo */}
          <p
            className="absolute -top-6 left-0 text-[7rem] font-black uppercase leading-none select-none pointer-events-none"
            style={{ color: '#0044CA08', letterSpacing: '-0.05em' }}
          >
            STAY
          </p>

          <div className="relative z-10">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#00751D] mb-3">
              ▸ Guia de hospedagem
            </p>
            <h1
              className="font-black uppercase leading-[0.9] mb-4"
              style={{
                fontSize: 'clamp(3rem, 9vw, 6rem)',
                color: '#0044CA',
                letterSpacing: '-0.04em',
              }}
            >
              HOSPE&shy;DA&shy;GENS
              <br />
              <span
                style={{
                  color: '#F9BC00',
                  WebkitTextStroke: '2px #00751D',
                  display: 'inline-block',
                  transform: 'skewX(-3deg)',
                }}
              >
                EM JABOATÃO
              </span>
            </h1>
            <p className="text-base font-semibold text-slate-500 max-w-md">
              Encontre o lugar ideal para sua estadia em Jaboatão dos Guararapes
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

        {/* ── HOTÉIS ─────────────────────────────────────────── */}
        <section>
          {/* Título da seção */}
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#0044CA' }}>
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h2
                className="font-black uppercase italic leading-none"
                style={{ fontSize: 'clamp(1.6rem, 4vw, 2.25rem)', color: '#0044CA', letterSpacing: '-0.03em' }}
              >
                Hotéis
              </h2>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                {HOTEIS.length} opções disponíveis
              </p>
            </div>
          </div>

          {/* Linha decorativa */}
          <div className="flex gap-1 mb-6">
            <div className="h-1 flex-1 rounded-full" style={{ background: '#0044CA' }} />
            <div className="h-1 w-6 rounded-full" style={{ background: '#F9BC00' }} />
            <div className="h-1 w-3 rounded-full" style={{ background: '#00751D' }} />
          </div>

          {/* Painel accordion */}
          <div className="rounded-2xl overflow-hidden" style={{ background: '#f5f5f5', padding: '0 1.25rem' }}>
            {HOTEIS.map((hotel, i) => (
              <AccordionCard key={i} item={hotel} index={i} accentColor="#F9BC00" />
            ))}
          </div>
        </section>

        {/* ── POUSADAS ──────────────────────────────────────── */}
        <section>
          {/* Título da seção */}
          <div className="flex items-center gap-4 mb-2">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#00751D' }}>
              <svg width="20" height="20" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
              </svg>
            </div>
            <div>
              <h2
                className="font-black uppercase italic leading-none"
                style={{ fontSize: 'clamp(1.6rem, 4vw, 2.25rem)', color: '#0044CA', letterSpacing: '-0.03em' }}
              >
                Pousadas
              </h2>
              <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                {POUSADAS.length} opções disponíveis
              </p>
            </div>
          </div>

          {/* Linha decorativa */}
          <div className="flex gap-1 mb-6">
            <div className="h-1 flex-1 rounded-full" style={{ background: '#00751D' }} />
            <div className="h-1 w-6 rounded-full" style={{ background: '#F9BC00' }} />
            <div className="h-1 w-3 rounded-full" style={{ background: '#0044CA' }} />
          </div>

          {/* Painel accordion */}
          <div className="rounded-2xl overflow-hidden" style={{ background: '#f5f5f5', padding: '0 1.25rem' }}>
            {POUSADAS.map((pousada, i) => (
              <AccordionCard key={i} item={pousada} index={i} accentColor="#00751D" />
            ))}
          </div>
        </section>

      </div>

      {/* ── RODAPÉ DECORATIVO ──────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 mt-16">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1" style={{ background: '#0044CA20' }} />
          <span className="text-xs font-black uppercase tracking-[0.3em] text-[#0044CA40]">
            Jaboatão dos Guararapes
          </span>
          <div className="h-px flex-1" style={{ background: '#0044CA20' }} />
        </div>
      </div>
    </div>
  );
}