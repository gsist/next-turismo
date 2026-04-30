'use client';
import Image from "next/image";

export default function HeroEngenhoMacuje() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: '#BF360C' }}>
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/Lugares/bg-ondeir.jpg" alt="Engenho Macujé" fill className="object-cover opacity-35" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #BF360Cee 0%, #BF360C99 50%, #BF360C66 100%)' }} />
      </div>

      {/* Faixa marrom escura no topo com título */}
      <div className="absolute top-[20%] left-0 right-0 z-10 py-6 px-8 lg:px-16" style={{ backgroundColor: '#3E2723' }}>
        <h1 className="leading-[0.9]">
          <span className="block text-4xl lg:text-6xl font-black tracking-tight text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>ENGENHO</span>
          <span className="block text-5xl lg:text-7xl font-black tracking-tight text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>MACUJÉ</span>
        </h1>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-16 pt-48">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-block px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-sm mb-6" style={{ backgroundColor: '#FFAB91', color: '#3E2723' }}>
            UMA VIAGEM INESQUECÍVEL NO TEMPO
          </span>

          {/* Subtítulo */}
          <p className="text-sm font-bold tracking-widest uppercase mb-6" style={{ color: '#FFAB91' }}>HISTÓRIA E MEMÓRIA CULTURAL</p>

          {/* Descrição */}
          <p className="text-lg leading-relaxed mb-4 text-white/90 max-w-xl">
            Séculos de tradição açucareira e uma viagem ao passado colonial de Pernambuco.
          </p>
          <p className="text-base leading-relaxed text-white/70 max-w-lg">
            Trilhas históricas, espaços de memória e a fusão entre preservação ambiental e cultura.
          </p>

          {/* Info */}
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="px-4 py-2 text-sm border rounded text-white/80" style={{ borderColor: '#FFAB9140' }}>📍 Engenho Macujé, S/N</span>
            <span className="px-4 py-2 text-sm border rounded" style={{ borderColor: '#FFAB9140', color: '#FFAB91' }}>@engenhomacuje</span>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="absolute bottom-0 left-0 right-0 py-4 px-8" style={{ backgroundColor: '#FFAB9120', borderTop: '3px solid #FFAB91' }}>
        <span className="text-xs font-bold tracking-widest uppercase text-white/60">05 / 06 — ENGENHO MACUJÉ</span>
      </div>
    </section>
  );
}
