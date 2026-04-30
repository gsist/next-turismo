'use client';
import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

// Variantes de animação - slide sobrescrevendo (cover effect)
const slideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? "100%" : "-100%",
    zIndex: 10,
  }),
  center: {
    y: 0,
    zIndex: 10,
  },
  exit: (direction: number) => ({
    y: direction > 0 ? "-100%" : "100%",
    zIndex: 5,
    opacity: 0.7,
  }),
};

// ─── COMPONENTE DE GRUPO DE SLIDES ──────────────────────────

interface SlideGroupProps {
  slides: typeof grupoSuperior;
  current: number;
  direction: number;
  position: 'top' | 'bottom';
}

function SlideGroup({ slides, current, direction, position }: SlideGroupProps) {
  const CurrentSlide = slides[current].component;

  return (
    <div className={`relative w-full h-1/2 overflow-hidden ${position === 'top' ? 'top-0' : 'bottom-0'}`}>
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          <CurrentSlide />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── PÁGINA PRINCIPAL ──────────────────────────

export default function TurismoRuralPage() {
  // Estados para cada grupo (independentes)
  const [currentSup, setCurrentSup] = useState(0);
  const [currentInf, setCurrentInf] = useState(0);
  const [direction, setDirection] = useState(0);

  // Navegação Grupo Superior
  const paginateSup = useCallback((newDirection: number) => {
    const newIndex = currentSup + newDirection;
    if (newIndex >= 0 && newIndex < grupoSuperior.length) {
      setDirection(newDirection);
      setCurrentSup(newIndex);
    }
  }, [currentSup]);

  const goToSup = useCallback((index: number) => {
    setDirection(index > currentSup ? 1 : -1);
    setCurrentSup(index);
  }, [currentSup]);

  // Navegação Grupo Inferior
  const paginateInf = useCallback((newDirection: number) => {
    const newIndex = currentInf + newDirection;
    if (newIndex >= 0 && newIndex < grupoInferior.length) {
      setDirection(newDirection);
      setCurrentInf(newIndex);
    }
  }, [currentInf]);

  const goToInf = useCallback((index: number) => {
    setDirection(index > currentInf ? 1 : -1);
    setCurrentInf(index);
  }, [currentInf]);

  // Cores dos slides atuais
  const supColors = ['#F5F0E8', '#1B5E20', '#0D47A1'];
  const infColors = ['#E8DCC4', '#BF360C', '#33691E'];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:wght@300;400;700;900&family=Montserrat:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
        rel="stylesheet"
      />
      <main className="relative w-full h-screen overflow-hidden flex flex-col">
        {/* ─── GRUPO SUPERIOR (3 slides) ─── */}
        <SlideGroup slides={grupoSuperior} current={currentSup} direction={direction} position="top" />

        {/* ─── GRUPO INFERIOR (3 slides) ─── */}
        <SlideGroup slides={grupoInferior} current={currentInf} direction={direction} position="bottom" />

        {/* ─── CONTROLES DE NAVEGAÇÃO ─── */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
          {/* Dots Grupo Superior */}
          <div className="flex flex-col gap-2">
            {grupoSuperior.map((hero, index) => (
              <button
                key={`sup-${hero.id}`}
                onClick={() => goToSup(index)}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: currentSup === index ? supColors[currentSup] : `${supColors[index]}66`,
                  transform: currentSup === index ? 'scale(1.3)' : 'scale(1)',
                  border: currentSup === index ? `2px solid ${supColors[currentSup]}` : '2px solid transparent',
                }}
                title={hero.name}
              />
            ))}
          </div>

          {/* Separador */}
          <div className="w-px h-4 bg-white/30 mx-auto" />

          {/* Dots Grupo Inferior */}
          <div className="flex flex-col gap-2">
            {grupoInferior.map((hero, index) => (
              <button
                key={`inf-${hero.id}`}
                onClick={() => goToInf(index)}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: currentInf === index ? infColors[currentInf] : `${infColors[index]}66`,
                  transform: currentInf === index ? 'scale(1.3)' : 'scale(1)',
                  border: currentInf === index ? `2px solid ${infColors[currentInf]}` : '2px solid transparent',
                }}
                title={hero.name}
              />
            ))}
          </div>
        </div>

        {/* Botões de navegação */}
        <div className="absolute bottom-6 right-6 z-50 flex flex-col gap-3">
          {/* Controles Grupo Superior */}
          <div className="flex gap-2">
            <button
              onClick={() => paginateSup(-1)}
              disabled={currentSup === 0}
              className="px-4 py-2 text-xs font-bold tracking-wider uppercase rounded transition-all disabled:opacity-30"
              style={{
                backgroundColor: `${supColors[currentSup]}40`,
                color: supColors[currentSup] === '#F5F0E8' ? '#1B4332' : '#fff',
                border: `1px solid ${supColors[currentSup]}60`,
              }}
            >
              ↑ {grupoSuperior[currentSup].name}
            </button>
            <button
              onClick={() => paginateSup(1)}
              disabled={currentSup === grupoSuperior.length - 1}
              className="px-4 py-2 text-xs font-bold tracking-wider uppercase rounded transition-all disabled:opacity-30"
              style={{
                backgroundColor: supColors[currentSup],
                color: supColors[currentSup] === '#F5F0E8' ? '#1B4332' : '#fff',
              }}
            >
              Próximo ↑
            </button>
          </div>

          {/* Controles Grupo Inferior */}
          <div className="flex gap-2">
            <button
              onClick={() => paginateInf(-1)}
              disabled={currentInf === 0}
              className="px-4 py-2 text-xs font-bold tracking-wider uppercase rounded transition-all disabled:opacity-30"
              style={{
                backgroundColor: `${infColors[currentInf]}40`,
                color: infColors[currentInf] === '#E8DCC4' ? '#1B4332' : '#fff',
                border: `1px solid ${infColors[currentInf]}60`,
              }}
            >
              ↓ {grupoInferior[currentInf].name}
            </button>
            <button
              onClick={() => paginateInf(1)}
              disabled={currentInf === grupoInferior.length - 1}
              className="px-4 py-2 text-xs font-bold tracking-wider uppercase rounded transition-all disabled:opacity-30"
              style={{
                backgroundColor: infColors[currentInf],
                color: infColors[currentInf] === '#E8DCC4' ? '#1B4332' : '#fff',
              }}
            >
              Próximo ↓
            </button>
          </div>
        </div>

        {/* Indicadores de progresso */}
        <div className="absolute bottom-6 left-6 z-50 flex flex-col gap-2">
          <p className="text-xs font-bold tracking-widest uppercase" style={{ color: supColors[currentSup] === '#F5F0E8' ? '#1B4332' : '#fff' }}>
            SUPERIOR: {String(currentSup + 1).padStart(2, '0')} / {String(grupoSuperior.length).padStart(2, '0')}
          </p>
          <p className="text-xs font-bold tracking-widest uppercase" style={{ color: infColors[currentInf] === '#E8DCC4' ? '#1B4332' : '#fff' }}>
            INFERIOR: {String(currentInf + 1).padStart(2, '0')} / {String(grupoInferior.length).padStart(2, '0')}
          </p>
        </div>
      </main>
    </>
  );
}
