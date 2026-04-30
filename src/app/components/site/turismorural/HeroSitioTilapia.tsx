'use client';
import Image from "next/image";

export default function HeroSitioTilapia() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: '#1B5E20' }}>
      {/* Imagem no topo esquerdo */}
      <div className="absolute top-0 left-0 w-[50%] h-[55%] z-0">
        <Image src="/images/Lugares/bg-ondeir.jpg" alt="Sítio Recanto da Tilápia" fill className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, #1B5E20 100%)' }} />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-block px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-sm mb-6" style={{ backgroundColor: '#81C784', color: '#1B5E20' }}>
            UMA IMERSÃO NA CULTURA RURAL
          </span>

          {/* Título */}
          <h1 className="leading-[0.9] mb-4">
            <span className="block text-5xl lg:text-8xl font-black tracking-tight text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>SÍTIO RECANTO</span>
            <span className="block text-6xl lg:text-9xl font-black tracking-tight text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>DA TILÁPIA</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-sm font-bold tracking-widest uppercase mb-8" style={{ color: '#81C784' }}>CULTURA & TRADIÇÃO DO CAMPO</p>

          {/* Descrição */}
          <p className="text-lg leading-relaxed mb-4 text-white/90 max-w-xl">
            No Engenho Penanduíba, um refúgio de tranquilidade onde visitantes acompanham o plantio e colheita.
          </p>
          <p className="text-base leading-relaxed text-white/70 max-w-lg">
            Macaxeira, cana, pratos típicos e um memorial cultural com objetos centenários.
          </p>

          {/* Info */}
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="px-4 py-2 text-sm border rounded" style={{ borderColor: '#81C78440', color: '#81C784' }}>📍 Engenho Penanduíba, 54</span>
            <span className="px-4 py-2 text-sm border rounded" style={{ borderColor: '#81C78440', color: '#81C784' }}>@sitio_recanto_da_tilapia</span>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="absolute bottom-0 left-0 right-0 py-4 px-8" style={{ backgroundColor: '#81C78420', borderTop: '3px solid #81C784' }}>
        <span className="text-xs font-bold tracking-widest uppercase text-white/60">02 / 06 — SÍTIO RECANTO DA TILÁPIA</span>
      </div>
    </section>
  );
}
