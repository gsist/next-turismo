'use client';
import { useState, useCallback } from "react";
import { motion } from "framer-motion";

// Importar os 6 componentes de Hero
import HeroTurismoRural from "./HeroTurismoRural";
import HeroSitioTilapia from "./HeroSitioTilapia";
import HeroChacaraXamanica from "./HeroChacaraXamanica";
import HeroAconchegoFamilia from "./HeroAconchegoFamilia";
import HeroEngenhoMacuje from "./HeroEngenhoMacuje";
import HeroColoniaSalesiana from "./HeroColoniaSalesiana";

// ─── DOIS GRUPOS DE 3 SLIDES CADA ──────────────────────────

const grupoSuperior = [
  { id: 0, component: HeroTurismoRural, name: "Turismo Rural" },
  { id: 1, component: HeroSitioTilapia, name: "Sítio Recanto da Tilápia" },
  { id: 2, component: HeroChacaraXamanica, name: "Chácara Xamânica" },
];

const grupoInferior = [
  { id: 0, component: HeroAconchegoFamilia, name: "Aconchego Família Rural" },
  { id: 1, component: HeroEngenhoMacuje, name: "Engenho Macujé" },
  { id: 2, component: HeroColoniaSalesiana, name: "Colônia Salesiana" },
];

// ─── COMPONENTE DE GRUPO DE SLIDES (CARROSSEL 3D) ───────────

interface SlideGroupProps {
  slides: typeof grupoSuperior;
}

function SlideGroup({ slides }: SlideGroupProps) {
  const [current, setCurrent] = useState(0);

  // Determinar a posição do slide baseado no índice atual
  const getPosition = (index: number) => {
    if (index === current) return "active";
    if (index === (current + 1) % slides.length) return "right";
    if (index === (current - 1 + slides.length) % slides.length) return "left";
    return "hidden";
  };

  const variants = {
    active: {
      x: 0,
      scale: 1,
      zIndex: 10,
      filter: "blur(0px)",
      opacity: 1,
    },
    right: {
      x: "55%",
      scale: 0.8,
      zIndex: 5,
      filter: "blur(6px)",
      opacity: 0.6,
    },
    left: {
      x: "-55%",
      scale: 0.8,
      zIndex: 5,
      filter: "blur(6px)",
      opacity: 0.6,
    }
  };

  return (
    <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden perspective-[1000px] mb-8">
      {slides.map((slide, index) => {
        const position = getPosition(index);
        const Component = slide.component;
        const isActive = position === "active";

        return (
          <motion.div
            key={slide.id}
            initial={false}
            animate={position}
            variants={variants}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
            className={`absolute w-[85vw] md:w-[75vw] lg:w-[65vw] h-[80vh] rounded-[2rem] overflow-hidden shadow-2xl ${
              !isActive ? "cursor-pointer" : ""
            }`}
            onClick={() => {
              if (!isActive) {
                setCurrent(index);
              }
            }}
          >
            {/* O componente Hero interno cortado perfeitamente dentro deste container arredondado */}
            <div className="w-full h-full relative pointer-events-none">
              <div className={isActive ? "pointer-events-auto w-full h-full" : "pointer-events-none w-full h-full"}>
                <Component />
              </div>
            </div>

            {/* Overlay para os slides embaçados não receberem interações e reforçar o clique */}
            {!isActive && (
              <div className="absolute inset-0 z-50 bg-black/5 hover:bg-black/0 transition-colors" />
            )}
          </motion.div>
        );
      })}

      {/* Controles de Navegação (Dots) Opcionais abaixo do carrossel */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-4">
        {slides.map((hero, index) => (
          <button
            key={`dot-${hero.id}`}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? 'bg-[#1B4332] scale-150' : 'bg-[#1B4332]/40 hover:bg-[#1B4332]/70'
            }`}
            title={hero.name}
          />
        ))}
      </div>
    </div>
  );
}

// ─── PÁGINA PRINCIPAL ──────────────────────────

export default function TurismoRuralPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:wght@300;400;700;900&family=Montserrat:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
        rel="stylesheet"
      />
      <main className="w-full flex flex-col bg-[#F5F0E8] overflow-x-hidden py-10">
        
        {/* Título da Página */}
        <div className="w-full text-center mb-10 px-4 mt-8">
          <h1 className="text-4xl md:text-6xl font-['Playfair_Display'] font-bold text-[#1B4332] mb-4">
            Turismo Rural
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-['Lato']">
            Descubra as riquezas do campo e viva experiências autênticas.
          </p>
        </div>

        {/* GRUPO SUPERIOR */}
        <SlideGroup slides={grupoSuperior} />

        {/* ESPAÇAMENTO ENTRE AS HEROS */}
        <div className="w-full py-16 px-6 md:px-12 flex flex-col items-center justify-center text-center bg-[#F5F0E8]">
          <h2 className="text-3xl md:text-5xl font-['Playfair_Display'] font-bold text-[#1B4332] mb-6">
            Mais Experiências
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl font-['Lato'] leading-relaxed">
            Continue explorando destinos que reservam momentos inesquecíveis, de engenhos históricos a refúgios familiares.
          </p>
        </div>

        {/* GRUPO INFERIOR */}
        <SlideGroup slides={grupoInferior} />
        
        {/* Espaço extra no final da página */}
        <div className="w-full py-16 bg-[#F5F0E8]" />

      </main>
    </>
  );
}
