'use client';
import Image from "next/image";

export default function HeroColoniaSalesiana() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: '#33691E' }}>
      {/* Imagem no topo esquerdo */}
      <div className="absolute top-0 left-0 w-[50%] h-[55%] z-0">
        <Image src="/images/Lugares/gastronomia.png" alt="Colônia Salesiana" fill className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, #33691E 100%)' }} />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-block px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-sm mb-6" style={{ backgroundColor: '#AED581', color: '#33691E' }}>
            FÉ · HISTÓRIA · CONTEMPLAÇÃO
          </span>

          {/* Título */}
          <h1 className="leading-[0.9] mb-4">
            <span className="block text-5xl lg:text-8xl font-black tracking-tight text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>COLÔNIA</span>
            <span className="block text-4xl lg:text-7xl font-black tracking-tight text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>SALESIANA</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-sm font-bold tracking-widest uppercase mb-8" style={{ color: '#AED581' }}>A PRIMEIRA BASÍLICA RURAL DE PERNAMBUCO</p>

          {/* Descrição */}
          <p className="text-lg leading-relaxed mb-4 text-white/90 max-w-xl">
            No bairro Vila Rica, abriga a primeira Basílica construída em zona rural no estado.
          </p>
          <p className="text-base leading-relaxed text-white/70 max-w-lg">
            Basílica de N. Sra. Auxiliadora, Gruta de Lourdes, réplica da casa de São João Bosco, eventos e retiros.
          </p>

          {/* Info */}
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="px-4 py-2 text-sm border rounded text-white/80" style={{ borderColor: '#AED58140' }}>📍 Rua Cônego dos Padres, 431</span>
            <span className="px-4 py-2 text-sm border rounded text-white/80" style={{ borderColor: '#AED58140' }}>📞 81 3368 4218</span>
            <span className="px-4 py-2 text-sm border rounded" style={{ borderColor: '#AED58140', color: '#AED581' }}>@coloniasalesiana</span>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="absolute bottom-0 left-0 right-0 py-4 px-8" style={{ backgroundColor: '#AED58120', borderTop: '3px solid #AED581' }}>
        <span className="text-xs font-bold tracking-widest uppercase text-white/60">06 / 06 — COLÔNIA SALESIANA</span>
      </div>
    </section>
  );
}
