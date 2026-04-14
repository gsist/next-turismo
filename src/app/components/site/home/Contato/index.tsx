"use client";

import React from "react";

const contact = [
  {
    icon: "📞",
    label: "Telefone",
    value: "(81) 99821-0398",
  },
  {
    icon: "📍",
    label: "Centro de Informações",
    value: "Complexo Administrativo da Prefeitura do Jaboatão Dos Guararapes",
  },
  {
    icon: "🕐",
    label: "Horário Turístico",
    value: "Segunda a Sexta, 08h às 14h",
  },
];

export default function ContactSection() {
  const whatsappNumber = "5581998210398";
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de planejar meu roteiro em Jaboatão.");

  const handleClick = (phone: string, e: React.MouseEvent) => {
  e.preventDefault();

  const isMobile = window.matchMedia('(pointer: coarse)').matches;

  if (isMobile) {
    const cleanNumber = phone.replace(/\D/g, '');
    window.open(`tel:${cleanNumber}`);
    }
  };



  return (
    <section id="contato" className="relative min-h-screen lg:h-screen w-full flex items-center bg-[#e3e7ef] overflow-hidden py-20 lg:py-0">
      
      {/* ── FUNDO DECORATIVO ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0044CA]/5 -skew-x-12 translate-x-20" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F9BC00]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* COLUNA ESQUERDA: TEXTO */}
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-[#F9BC00]/20 rounded-lg mb-6">
               <span className="text-xs font-black uppercase tracking-[0.3em] text-[#00751D]">Fale com a Gente</span>
            </div>
            
            <h2 className="text-5xl lg:text-8xl font-black text-[#0044CA] leading-[0.85] tracking-tighter uppercase italic mb-8">
              PREPARE SUA <br />
              <span className="text-[#F9BC00] drop-shadow-[4px_4px_0px_#00751D]">VIAGEM</span>
            </h2>

            <p className="text-lg lg:text-xl font-bold text-slate-600 mb-10 max-w-md mx-auto lg:mx-0 leading-tight">
              Dúvidas sobre roteiros, pontos históricos ou eventos? Nossa equipe de turismo está pronta para te ajudar.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-[#00751D] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-[8px_8px_0px_#F9BC00] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
              <span className="text-2xl">💬</span>
              WhatsApp Turismo
            </a>
          </div>

          {/* COLUNA DIREITA: CARDS */}
          <div className="flex flex-col gap-4">
            {contact.map((c) => (
              <div 
                key={c.label} 
                className="group bg-white p-6 lg:p-8 rounded-[2.5rem] border-2 border-slate-100 hover:border-[#0044CA] transition-all shadow-xl hover:shadow-2xl flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-3xl group-hover:bg-[#F9BC00] transition-colors">
                  {c.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#00751D] mb-1">
                    {c.label}
                  </span>
                    {c.label === 'Centro de Informações' ? (
                    <a 
                      href={`https://www.google.com/maps?q=${encodeURIComponent(c.value)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg lg:text-xl font-black text-[#0044CA] hover:text-[#F9BC00] transition-colors leading-tight"
                      style={{ cursor: "pointer" }}
                    >
                      {c.value}
                    </a>
                    ) : c.label === 'Telefone' ? (
                    <a 
                      className="text-lg lg:text-xl font-black text-[#0044CA] hover:text-[#F9BC00] transition-colors leading-tight"
                      onClick={(e) => handleClick(c.value, e)}
                      >
                        {c.value}
                    </a>
                    ) : (
                      <span className="text-lg lg:text-xl font-black text-[#0044CA] hover:text-[#F9BC00] transition-colors leading-tight">{c.value}</span>
                    )}
                </div>
              </div>
            ))}

            {/* CARD EXTRA: SOCIAL/INSTA */}
            <div className="mt-4 p-8 bg-[#0044CA] rounded-[2.5rem] text-white flex justify-between items-center overflow-hidden relative">
               <div className="relative z-10">
                 <p className="font-black italic uppercase tracking-tighter text-2xl">Siga o Turismo De Jaboatão</p>
                 <p className="text-[#F9BC00] font-bold text-sm">@turismoruraljaboatao</p>
               </div>
               <div className="text-6xl opacity-20 -rotate-12">📸</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}