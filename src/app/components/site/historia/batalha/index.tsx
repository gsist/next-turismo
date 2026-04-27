// src/app/historia/page.tsx (ou components/site/historia/HistoriaPage.tsx)
'use client';

import React, { useState, useRef } from 'react';

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
        </div>

        <div className="relative z-20 grow mx-auto max-w-7xl px-5 sm:px-8 flex items-center w-full min-h-screen">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-center w-full py-32 lg:py-0">

            {/* Esquerda */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                <span className="w-10 h-1.5 bg-[#F9BC00] rounded-full" />
                <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-600">Nossa Origem</span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#0044CA] leading-[0.85] tracking-tighter uppercase italic">
                AS BATALHAS DOS <br />
                <span className="text-[#F9BC00] drop-shadow-[4px_4px_0px_#00751D]">GUARARAPES</span>
              </h1>

              <p className="mt-8 text-lg sm:text-2xl font-bold text-slate-700 leading-tight max-w-lg mx-auto lg:mx-0">
                Onde o Brasil nasceu como nação. Uma epopeia de resistência, coragem e união entre povos.
              </p>

              <div className="mt-10 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <blockquote className="text-black font-bold text-base sm:text-lg italic leading-relaxed">
                  "Foi nos montes de Jaboatão que o Brasil aprendeu a ser Brasil. Uma história escrita com bravura, sangue e orgulho."
                </blockquote>
              </div>
            </div>

            {/* Direita */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="text-center">
                <span className="text-8xl lg:text-9xl mb-6 block">⚔️</span>
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-4xl shadow-2xl border-4 border-[#F9BC00]">
                  <h3 className="font-black text-[#0044CA] uppercase italic text-lg mb-2">1648 - 1649</h3>
                  <p className="text-slate-700 font-bold text-lg leading-relaxed">
                    Duas batalhas que mudaram a história do Brasil, expulsando os invasores holandeses e forjando nossa identidade nacional.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTEÚDO DETALHADO
      ══════════════════════════════════════ */}
      <section className="relative w-full bg-white py-20 sm:py-28 overflow-hidden">

        <div className="max-w-4xl mx-auto px-5 sm:px-8">

          {/* Header */}
          <div className="mb-12 sm:mb-16 text-center">
            <div className="flex items-center gap-3 mb-3 justify-center">
              <span className="w-10 h-1.5 bg-[#F9BC00] rounded-full" />
              <span className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-400">a história completa</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0044CA] leading-[0.85] tracking-tighter uppercase italic">
              AS BATALHAS DOS <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px #0044CA' }}>
                GUARARAPES
              </span>
            </h2>
          </div>

          {/* Conteúdo */}
          <div className="space-y-8 text-slate-700 font-bold text-base sm:text-lg leading-relaxed">

            <p>
              Em 1630, a Companhia das Índias Ocidentais, empresa holandesa, invadiu o Nordeste brasileiro, conquistando Recife e Olinda. Durante 24 anos, os holandeses dominaram a região, impondo seu controle sobre a população local.
            </p>

            <p>
              A resistência começou em 1645, quando colonos luso-brasileiros, indígenas e africanos se uniram espontaneamente contra o domínio estrangeiro. Liderados por figuras como João Fernandes Vieira, André Vidal de Negreiros e Henrique Dias, os insurgentes organizaram uma força de resistência que culminou nas Batalhas dos Guararapes.
            </p>

            <div className="bg-[#e3e7ef] p-6 rounded-2xl border-l-4 border-[#0044CA]">
              <h3 className="font-black text-[#0044CA] uppercase italic text-xl mb-4">1ª Batalha dos Guararapes - 19 de abril de 1648</h3>
              <p>
                No Monte dos Guararapes, em Jaboatão, as forças brasileiras enfrentaram os holandeses pela primeira vez. Sob o comando de Henrique Dias, Felipe Camarão e André Vidal de Negreiros, os resistentes venceram a batalha, infligindo pesadas perdas ao inimigo.
              </p>
            </div>

            <div className="bg-[#e3e7ef] p-6 rounded-2xl border-l-4 border-[#F9BC00]">
              <h3 className="font-black text-[#0044CA] uppercase italic text-xl mb-4">2ª Batalha dos Guararapes - 19 de fevereiro de 1649</h3>
              <p>
                Meses depois, no mesmo local, ocorreu a segunda batalha. Os holandeses, determinados a vingar a derrota, atacaram novamente. A resistência brasileira, reforçada, conseguiu uma vitória decisiva, consolidando a expulsão dos invasores.
              </p>
            </div>

            <p>
              As vitórias nas Batalhas dos Guararapes marcaram o início do fim da ocupação holandesa no Brasil. Em 1654, os holandeses assinaram a capitulação, deixando definitivamente o território brasileiro. Esse evento é considerado o nascimento do sentimento nacional brasileiro, forjando pela primeira vez uma identidade coletiva entre luso-brasileiros, indígenas e africanos.
            </p>

            <p>
              O Monte dos Guararapes, palco dessas batalhas, é hoje um Patrimônio Histórico Nacional e símbolo da resistência e unidade do povo brasileiro.
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
            CONHEÇA A <br />
            <span className="text-[#F9BC00]">HISTÓRIA</span>
          </h2>
          <p className="text-white/80 font-bold text-base sm:text-lg max-w-md mx-auto leading-snug mb-10">
            As Batalhas dos Guararapes marcaram o nascimento do Brasil como nação. Uma epopeia de coragem e união.
          </p>
        </div>
      </section>

    </main>
  );
}