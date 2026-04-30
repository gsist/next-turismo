'use client';
import Image from "next/image";

export default function HeroAconchegoFamilia() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: '#E8DCC4' }}>
      {/* Imagem de fundo com overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/Lugares/bg-hotel.jpg" alt="Aconchego Família Rural" fill className="object-cover opacity-40" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #E8DCC4ee 0%, #E8DCC499 50%, #E8DCC466 100%)' }} />
      </div>

      {/* Faixa azul escura no topo com título */}
      <div className="absolute top-[20%] left-0 right-0 z-10 py-6 px-8 lg:px-16" style={{ backgroundColor: '#142850' }}>
        <h1 className="leading-[0.9]">
          <span className="block text-4xl lg:text-6xl font-black tracking-tight text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>ACONCHEGO</span>
          <span className="block text-3xl lg:text-5xl font-black tracking-tight text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>FAMÍLIA RURAL</span>
        </h1>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8 lg:p-16 pt-48">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-block px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-sm mb-6" style={{ backgroundColor: '#3949AB', color: '#E8DCC4' }}>
            SABORES E TRADIÇÃO DO CAMPO
          </span>

          {/* Subtítulo */}
          <p className="text-sm font-bold tracking-widest uppercase mb-6" style={{ color: '#3949AB' }}>GASTRONOMIA RURAL AUTÊNTICA</p>

          {/* Descrição */}
          <p className="text-lg leading-relaxed mb-4 max-w-xl" style={{ color: '#142850' }}>
            Pesque-pague e restaurante de comida caseira no Engenho Penanduíba.
          </p>
          <p className="text-base leading-relaxed opacity-80 max-w-lg" style={{ color: '#142850' }}>
            Peixe fresco do lago para a mesa, casa de farinha, beiju e tapioca artesanais.
          </p>

          {/* Info */}
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="px-4 py-2 text-sm border rounded" style={{ borderColor: '#3949AB40', color: '#142850' }}>📍 Engenho Penanduíba, 103</span>
            <span className="px-4 py-2 text-sm border rounded" style={{ borderColor: '#3949AB40', color: '#142850' }}>📞 81 99210 4169</span>
            <span className="px-4 py-2 text-sm border rounded" style={{ borderColor: '#3949AB40', color: '#3949AB' }}>@aconchegofamiliarural</span>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="absolute bottom-0 left-0 right-0 py-4 px-8" style={{ backgroundColor: '#3949AB20', borderTop: '3px solid #3949AB' }}>
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#142850' }}>04 / 06 — ACONCHEGO FAMÍLIA RURAL</span>
      </div>
    </section>
  );
}
