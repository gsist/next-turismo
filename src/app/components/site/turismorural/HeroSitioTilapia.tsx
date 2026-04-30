'use client';
import Image from "next/image";

export default function HeroSitioTilapia() {
  return (
    <section className="relative w-full h-full flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#1E3A25' }}>
      
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 h-full py-6 md:py-4">
        
        {/* === COLUNA ESQUERDA === */}
        <div className="w-full md:w-5/12 flex flex-col justify-center gap-4 relative h-full">
          
          {/* Imagem Circular */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-60 lg:h-60 rounded-full border-[6px] md:border-[8px] border-[#D4E0CD] overflow-hidden shadow-2xl flex-shrink-0 bg-white">
            <Image 
              src="/images/Lugares/bg-ondeir.jpg" 
              alt="Sítio Recanto da Tilápia" 
              fill 
              className="object-cover" 
            />
          </div>

          {/* Bloco de Informações */}
          <div className="flex flex-col gap-3 mt-2">
            
            {/* Instagram */}
            <div className="flex items-center gap-2 text-[#D4E0CD] font-semibold text-xs lg:text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              @sitio_recanto_da_tilapia
            </div>

            {/* Endereço */}
            <div className="flex flex-col gap-0.5">
              <p className="text-[#D4E0CD] text-xs lg:text-sm font-semibold flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[#D4E0CD]" />
                Engenho Penandubinha, 14
              </p>
              <p className="text-[#648866] text-[10px] lg:text-xs font-semibold ml-3">
                Jaboatão dos Guararapes
              </p>
            </div>

            {/* Badge de Visitação */}
            <div className="inline-block px-3 py-1.5 bg-[#E9E0A6] text-[#1E3A25] rounded-full text-[10px] font-bold tracking-widest uppercase w-max shadow-sm">
              VISITAÇÃO SÁB
            </div>

            {/* Contatos */}
            <div className="mt-1 text-xs lg:text-sm flex flex-col gap-1 relative w-max">
              <p className="font-semibold tracking-wide">
                <span className="text-[#E9E0A6]">Katia Siqueira</span> 
                <span className="text-[#8FB290] ml-2">81 99924.6685</span>
              </p>
              <p className="font-semibold tracking-wide">
                <span className="text-[#8FB290]">Oziel Lima</span> 
                <span className="text-[#8FB290] ml-3">81 99597.5338</span>
              </p>

              {/* Padrão de Pontinhos (Dotted Pattern) */}
              <div className="absolute top-1 -right-16 grid grid-cols-3 gap-1.5 opacity-30">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-[#8FB290]" />
                ))}
              </div>
            </div>

            {/* Botão Inferior (Badge Imersão) */}
            <div className="inline-block px-4 py-2 lg:px-5 lg:py-2.5 bg-[#E9E0A6] text-[#1E3A25] rounded-full text-[10px] lg:text-xs font-bold tracking-widest uppercase text-center w-max mt-2 leading-tight shadow-md hover:scale-105 transition-transform cursor-default">
              UMA IMERSÃO<br />NA CULTURA RURAL
            </div>
          </div>
        </div>


        {/* === COLUNA DIREITA === */}
        <div className="w-full md:w-6/12 flex flex-col items-start justify-center gap-2 h-full pb-6 md:pb-0">
          
          <span className="text-[#E9E0A6] text-[10px] lg:text-xs font-bold tracking-[0.4em] uppercase">
            SÍTIO RECANTO
          </span>

          {/* Título Principal Stacked */}
          <h1 className="flex flex-col font-['Playfair_Display'] leading-[1] -mt-1 gap-1">
            <span className="text-white font-bold text-4xl md:text-5xl lg:text-[4rem] tracking-tight">Sítio Recanto</span>
            <span className="text-[#E9E0A6] font-bold italic text-4xl md:text-5xl lg:text-[4rem] tracking-tight">da Tilápia</span>
          </h1>

          <h2 className="text-[#E9E0A6] font-['Playfair_Display'] italic text-lg md:text-xl lg:text-2xl font-bold mt-1">
            Engenho Penandubinha
          </h2>

          {/* Linha Vermelha */}
          <div className="w-10 lg:w-12 h-1 bg-[#DC5C38] my-2" />

          {/* Parágrafo Descritivo */}
          <p className="text-[#D4E0CD] italic font-['Playfair_Display'] text-sm md:text-base lg:text-lg leading-relaxed max-w-md">
            Um refúgio de tranquilidade e tradição. Acompanhe o plantio e a colheita, prove pratos típicos feitos com ingredientes da terra, conheça a cooperativa de mulheres e visite o memorial cultural da história agrícola local.
          </p>

          {/* Botão de Agendar */}
          <button className="mt-4 px-5 py-2 lg:px-6 lg:py-3 border border-[#487854] hover:bg-[#487854]/20 transition-all text-white text-[10px] lg:text-xs font-bold tracking-widest uppercase rounded-md shadow-sm">
            AGENDE SUA VISITA
          </button>
        </div>

      </div>
    </section>
  );
}
