'use client';
import Image from "next/image";

export default function HeroChacaraXamanica() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: '#0D47A1' }}>
      {/* Imagem à direita */}
      <div className="absolute top-0 right-0 w-[45%] h-full z-0">
        <Image src="/images/Lugares/gastronomia.png" alt="Chácara Xamânica" fill className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0D47A1 0%, transparent 60%)' }} />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 h-full flex items-center p-8 lg:p-16">
        <div className="max-w-2xl">
          {/* Badge */}
          <span className="inline-block px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-sm mb-6" style={{ backgroundColor: '#145028', color: '#d8f8e0' }}>
            UMA JORNADA COM CONEXÃO COM ORIGENS INDÍGENAS
          </span>

          {/* Título */}
          <h1 className="leading-[0.9] mb-4">
            <span className="block text-6xl lg:text-9xl font-black italic tracking-tight text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>CHÁCARA</span>
            <span className="block text-5xl lg:text-8xl font-black italic tracking-tight text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>XAMÂNICA</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-sm font-bold tracking-widest uppercase mb-8" style={{ color: '#4FC3F7' }}>ESPIRITUALIDADE E CULTURA INDÍGENA</p>

          {/* Descrição */}
          <p className="text-lg leading-relaxed mb-4 text-white/90 max-w-xl">
            Um espaço único criado por descendente indígena para resgatar raízes e promover vivência cultural autêntica.
          </p>
          <p className="text-base leading-relaxed text-white/70 max-w-lg">
            Rituais xamânicos, cultivo de ervas medicinais e práticas de sustentabilidade.
          </p>

          {/* Info */}
          <div className="mt-8 flex flex-wrap gap-4">
            <span className="px-4 py-2 text-sm border rounded text-white/80" style={{ borderColor: '#4FC3F740' }}>📍 Engenho Penanduíba, 103</span>
            <span className="px-4 py-2 text-sm border rounded text-white/80" style={{ borderColor: '#4FC3F740' }}>📞 81 99888 5773</span>
            <span className="px-4 py-2 text-sm border rounded" style={{ borderColor: '#4FC3F740', color: '#4FC3F7' }}>@chacara.xamanica</span>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="absolute bottom-0 left-0 right-0 py-4 px-8" style={{ backgroundColor: '#4FC3F720', borderTop: '3px solid #4FC3F7' }}>
        <span className="text-xs font-bold tracking-widest uppercase text-white/60">03 / 06 — CHÁCARA XAMÂNICA</span>
      </div>
    </section>
  );
}
