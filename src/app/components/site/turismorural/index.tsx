// src/app/components/site/turismorural/index.tsx
'use client';

import React from 'react';

/* ─────────────────────────────────────────────
   COMPONENTE
───────────────────────────────────────────── */

export default function TurismoRuralPage() {

  return (
    <main className="w-full bg-linear-to-br from-[#2D5A3D] via-[#1B4332] to-[#081C15] font-sans overflow-x-hidden min-h-screen">

      {/* ══════════════════════════════════════
          HERO — Nature Theme
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen w-full flex flex-col overflow-hidden">

        {/* Fundo orgânico */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute top-0 left-0 w-full h-full opacity-20"
            style={{
              background: 'radial-gradient(circle at 20% 80%, #4ADE80 0%, transparent 50%), radial-gradient(circle at 80% 20%, #22C55E 0%, transparent 50%), radial-gradient(circle at 40% 40%, #16A34A 0%, transparent 50%)',
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[70%] h-[60%] opacity-30"
            style={{
              background: 'linear-gradient(135deg, #65A30D 0%, #4D7C0F 50%, #365314 100%)',
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 60% 20%, 20% 80%)',
            }}
          />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-5 sm:px-8 py-20">

          {/* Elementos flutuantes */}
          <div className="absolute top-20 left-10 animate-bounce delay-100">
            <span className="text-4xl">🌿</span>
          </div>
          <div className="absolute top-32 right-16 animate-bounce delay-300">
            <span className="text-3xl">🌾</span>
          </div>
          <div className="absolute bottom-32 left-20 animate-bounce delay-500">
            <span className="text-5xl">🌳</span>
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce delay-700">
            <span className="text-4xl">🍃</span>
          </div>

          {/* Conteúdo central */}
          <div className="text-center max-w-4xl mx-auto">

            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-[#F9BC00]/20 backdrop-blur-sm rounded-full border border-[#F9BC00]/30 mb-4">
                <span className="text-[#F9BC00] font-black text-sm uppercase tracking-widest">Turismo Rural</span>
              </span>
            </div>

            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black text-white leading-[0.8] tracking-tighter uppercase italic mb-8 drop-shadow-2xl">
              <span className="text-[#F9BC00]">RURAL</span>
              <br />
              <span className="text-[#4ADE80]">EXPERIÊNCIAS</span>
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl">
                <span className="text-6xl mb-4 block">🌾</span>
                <p className="text-white font-bold text-lg">
                  Natureza pura e autêntica
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl">
                <span className="text-5xl mb-4 block">🏞️</span>
                <p className="text-white font-bold text-lg">
                  Trilhas e aventuras
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl">
                <span className="text-4xl mb-4 block">🎨</span>
                <p className="text-white font-bold text-lg">
                  Cultura tradicional
                </p>
              </div>
            </div>

            <p className="text-white/90 font-bold text-xl sm:text-2xl leading-relaxed max-w-3xl mx-auto mb-12">
              Mergulhe no coração rural de Jaboatão. Descubra fazendas centenárias, trilhas ecológicas e tradições que conectam passado e presente.
            </p>

            <div className="bg-[#F9BC00]/20 backdrop-blur-md p-8 rounded-4xl border-2 border-[#F9BC00]/40 shadow-2xl max-w-2xl mx-auto">
              <blockquote className="text-white font-black text-lg sm:text-xl italic leading-relaxed">
                "No turismo rural, cada caminho conta uma história, cada semente carrega uma tradição, e cada encontro revela a alma da terra."
              </blockquote>
            </div>

          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════
          JORNADA RURAL — Layout Orgânico
      ══════════════════════════════════════ */}
      <section className="relative w-full bg-linear-to-b from-[#1B4332] to-[#0F172A] py-20 sm:py-32 overflow-hidden">

        {/* Elementos decorativos */}
        <div className="absolute top-10 left-10 opacity-10">
          <span className="text-8xl">🌱</span>
        </div>
        <div className="absolute bottom-10 right-10 opacity-10">
          <span className="text-7xl">🌿</span>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#F9BC00] leading-[0.85] tracking-tighter uppercase italic mb-4">
              JORNADA <br />
              <span className="text-white">RURAL</span>
            </h2>
            <p className="text-white/80 font-bold text-lg sm:text-xl max-w-2xl mx-auto">
              Explore os caminhos que conectam natureza, cultura e sustentabilidade em Jaboatão
            </p>
          </div>

          {/* Layout em zigue-zague */}
          <div className="space-y-16">

            {/* Card 1 - Esquerda */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="bg-linear-to-br from-[#4ADE80]/20 to-[#22C55E]/10 backdrop-blur-md p-8 rounded-4xl border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl">🌾</span>
                    <h3 className="text-3xl font-black text-[#F9BC00] uppercase italic">Fazendas Históricas</h3>
                  </div>
                  <p className="text-white/90 font-bold text-lg leading-relaxed mb-6">
                    Visite engenhos seculares que preservam técnicas agrícolas tradicionais. Conheça a história da cana-de-açúcar e do desenvolvimento rural de Jaboatão.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#F9BC00]/20 rounded-full text-[#F9BC00] font-bold text-sm">História</span>
                    <span className="px-3 py-1 bg-[#4ADE80]/20 rounded-full text-[#4ADE80] font-bold text-sm">Agricultura</span>
                    <span className="px-3 py-1 bg-[#22C55E]/20 rounded-full text-[#22C55E] font-bold text-sm">Tradição</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#F9BC00]/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#4ADE80]/20 rounded-full blur-xl"></div>
                  <span className="text-9xl lg:text-[12rem] block text-[#F9BC00]/30">🏛️</span>
                </div>
              </div>
            </div>

            {/* Card 2 - Direita */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#22C55E]/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#16A34A]/20 rounded-full blur-xl"></div>
                  <span className="text-9xl lg:text-[12rem] block text-[#4ADE80]/30">🌿</span>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-linear-to-br from-[#22C55E]/20 to-[#16A34A]/10 backdrop-blur-md p-8 rounded-4xl border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl">🌿</span>
                    <h3 className="text-3xl font-black text-[#4ADE80] uppercase italic">Trilhas Ecológicas</h3>
                  </div>
                  <p className="text-white/90 font-bold text-lg leading-relaxed mb-6">
                    Caminhe por trilhas naturais que revelam a biodiversidade local. Observe aves, plantas nativas e desfrute de vistas panorâmicas deslumbrantes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#4ADE80]/20 rounded-full text-[#4ADE80] font-bold text-sm">Natureza</span>
                    <span className="px-3 py-1 bg-[#22C55E]/20 rounded-full text-[#22C55E] font-bold text-sm">Ecologia</span>
                    <span className="px-3 py-1 bg-[#16A34A]/20 rounded-full text-[#16A34A] font-bold text-sm">Aventura</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Esquerda */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="lg:w-1/2 order-2 lg:order-1">
                <div className="bg-linear-to-br from-[#F97316]/20 to-[#EA580C]/10 backdrop-blur-md p-8 rounded-4xl border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl">🎨</span>
                    <h3 className="text-3xl font-black text-[#F97316] uppercase italic">Artesanato Local</h3>
                  </div>
                  <p className="text-white/90 font-bold text-lg leading-relaxed mb-6">
                    Conheça artesãos que mantêm vivas técnicas ancestrais. Aprenda sobre cerâmica, tecelagem e outras formas de expressão cultural tradicional.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#F97316]/20 rounded-full text-[#F97316] font-bold text-sm">Artesanato</span>
                    <span className="px-3 py-1 bg-[#EA580C]/20 rounded-full text-[#EA580C] font-bold text-sm">Cultura</span>
                    <span className="px-3 py-1 bg-[#DC2626]/20 rounded-full text-[#DC2626] font-bold text-sm">Tradição</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#F97316]/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#EA580C]/20 rounded-full blur-xl"></div>
                  <span className="text-9xl lg:text-[12rem] block text-[#F97316]/30">🎨</span>
                </div>
              </div>
            </div>

            {/* Card 4 - Direita */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#8B5CF6]/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#7C3AED]/20 rounded-full blur-xl"></div>
                  <span className="text-9xl lg:text-[12rem] block text-[#8B5CF6]/30">🏞️</span>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-linear-to-br from-[#8B5CF6]/20 to-[#7C3AED]/10 backdrop-blur-md p-8 rounded-4xl border border-white/10 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl">🏞️</span>
                    <h3 className="text-3xl font-black text-[#8B5CF6] uppercase italic">Cachoeiras & Rios</h3>
                  </div>
                  <p className="text-white/90 font-bold text-lg leading-relaxed mb-6">
                    Refresque-se nas águas cristalinas dos rios e cachoeiras de Jaboatão. Locais perfeitos para banhos, contemplação e conexão com a natureza.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#8B5CF6]/20 rounded-full text-[#8B5CF6] font-bold text-sm">Água</span>
                    <span className="px-3 py-1 bg-[#7C3AED]/20 rounded-full text-[#7C3AED] font-bold text-sm">Natureza</span>
                    <span className="px-3 py-1 bg-[#6D28D9]/20 rounded-full text-[#6D28D9] font-bold text-sm">Relaxamento</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>



    </main>
  );
}