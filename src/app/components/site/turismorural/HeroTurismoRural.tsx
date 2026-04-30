'use client';

export default function HeroTurismoRural() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex" style={{ backgroundColor: '#f8eedeff' }}>
      {/* Faixa vertical verde escura na esquerda */}
      <div 
        className="absolute left-0 top-0 w-16 lg:w-24 h-full z-20 flex items-center justify-center"
        style={{ backgroundColor: '#1B4332' }}
      >
        <span 
          className="text-white text-xs lg:text-sm font-medium tracking-widest uppercase whitespace-nowrap"
          style={{ 
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
            letterSpacing: '0.2em'
          }}
        >
          JABOATÃO DOS GUARARAPES 81 9 9866.5939
        </span>
      </div>

      {/* Faixa verde diagonal na direita */}
      <div 
        className="absolute right-0 top-0 w-24 lg:w-40 h-full z-0"
        style={{ 
          backgroundColor: '#2D6A4F',
          clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)',
          opacity: 0.9
        }}
      />

      {/* Conteúdo principal */}
      <div className="relative z-10 flex-1 flex flex-col pl-20 lg:pl-32 pr-8 lg:pr-16">
        
        {/* Header */}
        <header className="pt-6 lg:pt-8 pb-4 flex justify-between items-start">
          <div className="max-w-xs">
            <p className="text-xs font-semibold tracking-wider uppercase leading-relaxed" style={{ color: '#1B4332' }}>
              PROGRAMA FAZENDA RURAL<br />
              DA PREFEITURA DO<br />
              JABOATÃO DOS GUARARAPES
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2D6A4F' }}>
              <span className="text-white text-xs font-bold">J</span>
            </div>
            <span className="text-sm font-semibold tracking-widest" style={{ color: '#1B4332' }}>JABOATÃO</span>
          </div>
        </header>

        {/* Conteúdo central */}
        <div className="flex-1 flex items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.3em] uppercase mb-2" style={{ color: '#C75B3A' }}>TURISMO</p>

            <h1 className="leading-[0.95] mb-6">
              <span className="block font-serif text-5xl lg:text-7xl" style={{ color: '#1B4332', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 600 }}>Turismo</span>
              <span className="block font-serif text-5xl lg:text-7xl italic" style={{ color: '#1B4332', fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 500 }}>Rural</span>
            </h1>

            <div className="w-full h-px mb-4" style={{ backgroundColor: '#C75B3A' }} />

            <p className="text-xs font-semibold tracking-[0.25em] uppercase mb-6" style={{ color: '#C75B3A' }}>JABOATÃO DOS GUARARAPES</p>

            <p className="text-base lg:text-lg leading-relaxed italic mb-8 max-w-lg" style={{ color: '#1B4332', fontFamily: "'Lato', sans-serif" }}>
              Venha percorrer trilhas rurais, conhecer a cultura, trabalhar a terra e aprender com os verdadeiros turistas do campo — os agricultores de Jaboatão.
            </p>

          </div>
        </div>

        {/* Hexágono decorativo */}
        <div className="absolute right-32 lg:right-48 top-1/2 -translate-y-1/2 w-64 lg:w-80 h-64 lg:h-80 opacity-10" style={{ backgroundColor: '#2D6A4F', clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
      </div>
    </section>
  );
}
