'use client';
import { useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400&family=Oswald:wght@400;500;600;700&family=Montserrat:ital,wght@0,400;0,700;0,800;0,900;1,700&display=swap";

// Interfaces para tipagem
interface TitleLine {
  text: string;
  size: string;
  weight: number;
  color: string;
  font: string;
  spacing: string;
  italic?: boolean;
}

interface Badge {
  text: string;
  bg: string;
  fg: string;
}

interface Card {
  id: string;
  layout: string;
  bg: string;
  titleLines: TitleLine[];
  subtitle: string;
  subtitleColor: string;
  badge: Badge;
  callout?: string;
  calloutColor?: string;
  phone?: string;
  description: string;
  details: string;
  textColor: string;
  mutedColor: string;
  divider: string;
  imagePath: string;
  imageStyle: string;
  peekBg: string;
  peekAccent: string;
  handle?: string;
  address?: string;
  bannerBg?: string;
}

// ─── identidade visual extraída pixel a pixel do PDF ──────────────────────────
const cardSets: Card[][] = [
  [
    {
      id: "turismo-rural",
      // PDF: fundo CREME (#f0dcb4), texto escuro, logo institucional verde+marrom
      // Título: "TURISMO" pequeno + "RURAL" gigante, verde escuro, Oswald/condensed
      // Layout: logo no canto superior direito, texto à esquerda, "AGENDE SUA VISITA" bold destaque
      layout: "logo-right",
      bg: "#f2e4c4",
      titleLines: [
        { text: "TURISMO",   size: "clamp(2.5rem,6vw,5.5rem)",  weight: 700, color: "#1a3d0a", font: "'Oswald', sans-serif", spacing: "0.12em" },
        { text: "RURAL",     size: "clamp(5rem,13vw,12rem)",     weight: 700, color: "#1a3d0a", font: "'Oswald', sans-serif", spacing: "0.04em" },
      ],
      subtitle: "JABOATÃO DOS GUARARAPES",
      subtitleColor: "#3a6020",
      badge: { text: "Prefeitura × Sebrae Pernambuco", bg: "#1a3d0a", fg: "#f2e4c4" },
      callout: "AGENDE SUA VISITA",
      calloutColor: "#1a3d0a",
      phone: "81 99806 5939",
      description: "O Programa Turismo Rural da Prefeitura do Jaboatão dos Guararapes e o Sebrae Pernambuco prepararam um roteiro especial e esperam por você.",
      details: "Conectando cultura, fé e autenticidade da vida no campo — descubra o passado colonial, saboreie a gastronomia rural e mergulhe nas tradições que fazem dessa região um verdadeiro tesouro turístico.",
      textColor: "#1c1c0e",
      mutedColor: "#4a4a30",
      divider: "#1a3d0a",
      // Imagem: logo/brasão institucional no canto — use caminho relativo
      imagePath: "/images/Lugares/bg-hotel.jpg",
      imageStyle: "cover-right", // imagem cobre metade direita
      peekBg: "#d8cab0",
      peekAccent: "#1a3d0a",
    },
    {
      id: "sitio-tilapia",
      // PDF: fundo VERDE ESCURO (#145014), título branco enorme rotacionado
      // Foto colorida no topo esquerdo (casinhas coloridas), texto vertical à direita
      layout: "photo-top-left",
      bg: "#145014",
      titleLines: [
        { text: "SÍTIO RECANTO",  size: "clamp(2.8rem,7vw,6.5rem)",  weight: 900, color: "#ffffff", font: "'Bebas Neue', sans-serif", spacing: "0.05em" },
        { text: "DA TILÁPIA",     size: "clamp(3.5rem,9.5vw,9rem)",   weight: 900, color: "#ffffff", font: "'Bebas Neue', sans-serif", spacing: "0.02em" },
      ],
      subtitle: "UMA IMERSÃO NA CULTURA RURAL",
      subtitleColor: "#90e070",
      badge: { text: "UMA IMERSÃO NA CULTURA RURAL", bg: "#90e070", fg: "#0a2a0a" },
      handle: "@sitio_recanto_da_tilapia",
      address: "Engenho Penanduíba, 54",
      description: "No Engenho Penanduíba, o Sítio Recanto da Tilápia é um refúgio de tranquilidade e tradição.",
      details: "Os visitantes acompanham o plantio e a colheita de macaxeira e cana, provam pratos típicos feitos com ingredientes da terra e visitam um memorial cultural que preserva objetos centenários.",
      textColor: "#d8f0c8",
      mutedColor: "#90b878",
      divider: "#90e070",
      imagePath: "/images/Lugares/bg-ondeir.jpg",
      imageStyle: "cover-top-left",
      peekBg: "#0a2a0a",
      peekAccent: "#90e070",
    },
    {
      id: "chacara-xamanica",
      // PDF: AZUL ROYAL (#142850) como fundo dominante + tira verde escuro
      // Foto à direita (cavalo/pessoa), título branco italic grande
      layout: "photo-right",
      bg: "#142850",
      titleLines: [
        { text: "CHÁCARA",    size: "clamp(3.5rem,9vw,8.5rem)",  weight: 900, color: "#ffffff", font: "'Montserrat', sans-serif", spacing: "-0.02em", italic: true },
        { text: "XAMÂNICA",   size: "clamp(2.8rem,7.5vw,7rem)",  weight: 900, color: "#ffffff", font: "'Montserrat', sans-serif", spacing: "-0.01em", italic: true },
      ],
      subtitle: "Uma jornada de conexão com origens indígenas",
      subtitleColor: "#90d8e0",
      badge: { text: "UMA JORNADA COM CONEXÃO COM ORIGENS INDÍGENAS", bg: "#145028", fg: "#d8f8e0" },
      handle: "@chacara.xamanica",
      phone: "81 99888 5773",
      address: "Engenho Penanduíba, 103",
      description: "A Chácara Xamânica é um espaço único criado por um descendente indígena para resgatar suas raízes e promover uma vivência cultural e espiritual autêntica.",
      details: "Localizada em meio à natureza, com rituais xamânicos, cultivo de ervas medicinais e práticas de sustentabilidade.",
      textColor: "#d0e8f8",
      mutedColor: "#80a8c8",
      divider: "#ffffff",
      imagePath: "/images/Lugares/gastronomia.png",
      imageStyle: "cover-right",
      peekBg: "#0a1830",
      peekAccent: "#90d8e0",
    },
  ],
  [
    {
      id: "aconchego-familia",
      // PDF: fundo BEGE com foto de campo/lago, FAIXA AZUL ESCURO (#142850) sobre a foto com título branco
      layout: "photo-bg-banner",
      bg: "#e8d8b0",
      titleLines: [
        { text: "ACONCHEGO",       size: "clamp(3rem,7.5vw,7rem)",   weight: 900, color: "#ffffff", font: "'Bebas Neue', sans-serif", spacing: "0.05em" },
        { text: "FAMÍLIA RURAL",   size: "clamp(2.2rem,5.5vw,5.2rem)", weight: 900, color: "#ffffff", font: "'Bebas Neue', sans-serif", spacing: "0.03em" },
      ],
      bannerBg: "#142850",  // faixa azul escura sobre a foto
      subtitle: "SABORES E TRADIÇÃO DO CAMPO",
      subtitleColor: "#90d0f8",
      badge: { text: "SABORES E TRADIÇÃO DO CAMPO", bg: "#90d0f8", fg: "#0a1830" },
      handle: "@aconchegofamiliarural",
      phone: "81 99210 4169",
      address: "Engenho Penanduíba, 103",
      description: "No Engenho Penanduíba, o Aconchego Família Rural encanta com seu pesque-pague e restaurante de comida caseira, onde o peixe fresco vai do lago direto para a mesa.",
      details: "A experiência também passa pela casa de farinha, com o aroma do beiju e da tapioca preparados artesanalmente pelas raízes nordestinas.",
      textColor: "#0a1020",
      mutedColor: "#304060",
      divider: "#142850",
      imagePath: "/images/Lugares/bg-hotel.jpg",
      imageStyle: "cover-bg",
      peekBg: "#c0b090",
      peekAccent: "#142850",
    },
    {
      id: "engenho-macuje",
      // PDF: foto LARANJA/TERRACOTA (casarão colonial), faixa MARROM ESCURO (#3c1400) com título branco grande
      layout: "photo-bg-banner",
      bg: "#3c1400",
      titleLines: [
        { text: "ENGENHO",  size: "clamp(3rem,8vw,7.5rem)",   weight: 900, color: "#ffffff", font: "'Bebas Neue', sans-serif", spacing: "0.04em" },
        { text: "MACUJÉ",   size: "clamp(4rem,10.5vw,9.5rem)", weight: 900, color: "#ffffff", font: "'Bebas Neue', sans-serif", spacing: "-0.01em" },
      ],
      bannerBg: "#3c1400",
      subtitle: "UMA VIAGEM INESQUECÍVEL E ENVOLVENTE NO TEMPO",
      subtitleColor: "#f0c090",
      badge: { text: "UMA VIAGEM INESQUECÍVEL NO TEMPO", bg: "#f0c090", fg: "#3c1400" },
      handle: "@engenhomacuje",
      address: "Engenho Macujé, S/N",
      description: "O Engenho Macujé resgata séculos de tradição açucareira, proporcionando uma viagem ao passado colonial de Pernambuco.",
      details: "Entre trilhas históricas e espaços de memória, os visitantes vivenciam o cotidiano rural e apreciam a fusão entre preservação ambiental e memória cultural.",
      textColor: "#f8e8d0",
      mutedColor: "#c09060",
      divider: "#f0c090",
      imagePath: "/images/Lugares/bg-ondeir.jpg",
      imageStyle: "cover-bg",
      peekBg: "#280e00",
      peekAccent: "#f0c090",
    },
    {
      id: "colonia-salesiana",
      // PDF: fundo VERDE MILITAR ESCURO (#283c14), foto de basílica/natureza,
      // título BRANCO enorme "COLÔNIA SALESIANA"
      layout: "photo-top-left",
      bg: "#283c14",
      titleLines: [
        { text: "COLÔNIA",    size: "clamp(3rem,8vw,7.5rem)",   weight: 900, color: "#ffffff", font: "'Bebas Neue', sans-serif", spacing: "0.06em" },
        { text: "SALESIANA",  size: "clamp(2.5rem,6.5vw,6rem)", weight: 900, color: "#ffffff", font: "'Bebas Neue', sans-serif", spacing: "0.04em" },
      ],
      subtitle: "FÉ E HISTÓRIA E CONTEMPLAÇÃO",
      subtitleColor: "#b8e090",
      badge: { text: "FÉ · HISTÓRIA · CONTEMPLAÇÃO", bg: "#b8e090", fg: "#142808" },
      handle: "@coloniasalesiana",
      phone: "81 3368 4218",
      address: "Rua Cônego dos Padres, 431",
      description: "No bairro Vila Rica, a Colônia Salesiana de Pernambuco abriga a primeira Basílica construída em zona rural no estado.",
      details: "Basílica de N. Sra. Auxiliadora, Gruta de Nossa Senhora de Lourdes, réplica da casa de São João Bosco, eventos e retiros — cenário deslumbrante para contemplação.",
      textColor: "#d8f0c0",
      mutedColor: "#88b060",
      divider: "#b8e090",
      imagePath: "/images/Lugares/gastronomia.png",
      imageStyle: "cover-top-left",
      peekBg: "#182408",
      peekAccent: "#b8e090",
    },
  ],
];

interface HeroStackProps {
  items: Card[];
  sectionLabel: string;
}

interface InfoChipProps {
  text: string;
  textColor: string;
  accent: string;
  highlight?: boolean;
}

interface NavBtnProps {
  label: string;
  primary: boolean;
  card: Card;
  onClick: (e: React.MouseEvent) => void;
}

const PEEK_H = 36;

// Slide horizontal com sobreposição — o novo card entra por cima vindo da direita
const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", zIndex: 25 }),
  center: { x: 0, zIndex: 25 },
  exit: (dir: number) => ({ x: dir > 0 ? "-18%" : "18%", zIndex: 15, scale: 0.97, opacity: 0.7 }),
};

function HeroStack({ items, sectionLabel }: HeroStackProps) {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const goTo = useCallback((idx: number) => {
    setDir(idx >= active ? 1 : -1);
    setActive(idx);
  }, [active]);

  const goNext = useCallback(() => goTo((active + 1) % items.length), [active, items.length, goTo]);
  const goPrev = useCallback(() => goTo((active - 1 + items.length) % items.length), [active, items.length, goTo]);

  const card = items[active];

  return (
    <section style={{ position: "relative", width: "100%", height: "100vh", minHeight: 580, overflow: "hidden" }}>

      {/* ── Abas de cards atrás, visíveis no fundo ── */}
      {items.map((c: Card, i: number) => {
        const offset = (i - active + items.length) % items.length;
        if (offset === 0) return null;
        return (
          <div
            key={c.id}
            onClick={goNext}
            style={{
              position: "absolute", left: 0, right: 0,
              top: `calc(100% - ${PEEK_H * offset}px)`, bottom: 0,
              background: c.peekBg,
              zIndex: offset === 1 ? 14 : 8,
              cursor: "pointer",
              borderTop: `3px solid ${c.peekAccent}`,
              transition: "top 0.45s cubic-bezier(0.32,0.72,0,1)",
            }}
          >
            <div style={{
              position: "absolute", top: 9, left: 44, right: 44,
              display: "flex", justifyContent: "space-between", alignItems: "center",
            }}>
              <span style={{
                fontFamily: c.titleLines[0]?.font,
                fontSize: 11, fontWeight: 700, letterSpacing: "0.22em",
                textTransform: "uppercase", color: c.peekAccent, opacity: 0.9,
              }}>
                {c.titleLines.map((l: TitleLine) => l.text).join(" ")}
              </span>
              <span style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: 9, letterSpacing: "0.18em",
                textTransform: "uppercase", color: c.peekAccent, opacity: 0.5,
              }}>
                {c.badge.text}
              </span>
            </div>
          </div>
        );
      })}

      {/* ── Card ativo com slide lateral ── */}
      <AnimatePresence initial={false} custom={dir} mode="popLayout">
        <motion.div
          key={card.id}
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.52, ease: [0.32, 0.72, 0, 1] }}
          drag="x"
          dragConstraints={{ left: -1, right: 1 }}
          dragElastic={0.04}
          onDragEnd={(_: any, info: { offset: { x: number } }) => {
            if (info.offset.x < -80) goNext();
            if (info.offset.x > 80) goPrev();
          }}
          style={{
            position: "absolute", inset: 0,
            background: card.bg,
            display: "flex", flexDirection: "column",
            overflow: "hidden", cursor: "grab", userSelect: "none",
          }}
        >
          {/* Imagem de fundo ou parcial */}
          {card.imagePath && (
            <div style={{
              position: "absolute",
              ...(card.imageStyle === "cover-right" ? { top: 0, right: 0, width: "45%", bottom: 0 } :
                  card.imageStyle === "cover-top-left" ? { top: 0, left: 0, width: "48%", height: "55%" } :
                  card.imageStyle === "cover-bg" ? { inset: 0, opacity: 0.35 } :
                  { top: 0, right: 0, width: "42%", bottom: 0 }),
              backgroundImage: `url(${card.imagePath})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 1,
            }} />
          )}

          {/* Gradiente de leitura sobre imagem de fundo */}
          {card.imageStyle === "cover-bg" && (
            <div style={{
              position: "absolute", inset: 0, zIndex: 2,
              background: `linear-gradient(105deg, ${card.bg} 40%, ${card.bg}cc 65%, ${card.bg}55 100%)`,
            }} />
          )}
          {card.imageStyle === "cover-right" && (
            <div style={{
              position: "absolute", top: 0, right: 0, width: "48%", bottom: 0, zIndex: 2,
              background: `linear-gradient(to right, ${card.bg} 0%, transparent 40%)`,
            }} />
          )}
          {card.imageStyle === "cover-top-left" && (
            <div style={{
              position: "absolute", top: 0, left: 0, width: "50%", height: "58%", zIndex: 2,
              background: `linear-gradient(to bottom, transparent 40%, ${card.bg} 100%)`,
            }} />
          )}

          {/* Listra superior de cor */}
          <div style={{ height: 5, background: card.divider, flexShrink: 0, position: "relative", zIndex: 10 }} />

          {/* Grid principal */}
          <div style={{
            flex: 1, display: "grid",
            gridTemplateColumns: "1fr 1fr",
            position: "relative", zIndex: 5, minHeight: 0,
          }}>
            {/* COL ESQUERDA */}
            <div style={{
              display: "flex", flexDirection: "column", justifyContent: "center",
              padding: "clamp(1.6rem,4vw,4rem) clamp(2rem,4.5vw,4.5rem)",
              borderRight: `1px solid ${card.divider}22`,
            }}>
              {/* Badge */}
              <div style={{ marginBottom: "clamp(0.8rem,2vw,1.6rem)" }}>
                <span style={{
                  background: card.badge.bg, color: card.badge.fg,
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "clamp(8px,0.75vw,10px)", fontWeight: 700,
                  letterSpacing: "0.16em", padding: "5px 12px",
                  borderRadius: 3, textTransform: "uppercase",
                  display: "inline-block", maxWidth: "100%",
                  whiteSpace: "normal", lineHeight: 1.4,
                }}>
                  {card.badge.text}
                </span>
              </div>

              {/* Título linha a linha */}
              <div style={{ lineHeight: 0.88 }}>
                {card.titleLines.map((line: TitleLine, li: number) => (
                  <div key={li} style={{
                    fontFamily: line.font,
                    fontSize: line.size,
                    fontWeight: line.weight,
                    color: line.color,
                    letterSpacing: line.spacing,
                    fontStyle: line.italic ? "italic" : "normal",
                    textTransform: "uppercase",
                    display: "block",
                    lineHeight: 0.92,
                    marginBottom: "0.04em",
                  }}>
                    {line.text}
                  </div>
                ))}
              </div>

              {/* Subtítulo */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: "clamp(0.7rem,1.8vw,1.5rem)" }}>
                <div style={{ width: 28, height: 2, background: card.divider, flexShrink: 0 }} />
                <p style={{
                  fontFamily: "'Lato', sans-serif",
                  fontSize: "clamp(8px,0.8vw,10px)", fontWeight: 700,
                  letterSpacing: "0.22em", textTransform: "uppercase",
                  color: card.subtitleColor, margin: 0,
                }}>
                  {card.subtitle}
                </p>
              </div>

              {/* Callout se houver */}
              {card.callout && (
                <div style={{ marginTop: "clamp(1rem,2.5vw,2rem)" }}>
                  <p style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "clamp(1rem,2.2vw,1.8rem)", fontWeight: 700,
                    color: card.calloutColor, textTransform: "uppercase",
                    letterSpacing: "0.1em", margin: "0 0 4px",
                  }}>
                    {card.callout}
                  </p>
                  {card.phone && (
                    <p style={{
                      fontFamily: "'Lato', sans-serif",
                      fontSize: "clamp(0.85rem,1.5vw,1.2rem)", fontWeight: 700,
                      color: card.calloutColor, margin: 0,
                    }}>
                      {card.phone}
                    </p>
                  )}
                </div>
              )}

              {/* Dot nav */}
              <div style={{ display: "flex", gap: 8, marginTop: "clamp(1.2rem,3vw,2.8rem)" }}>
                {items.map((_: Card, i: number) => (
                  <button key={i}
                    onClick={(e: React.MouseEvent) => { e.stopPropagation(); goTo(i); }}
                    style={{
                      width: i === active ? 28 : 8, height: 8,
                      borderRadius: 100, border: "none",
                      background: i === active ? card.divider : `${card.divider}40`,
                      cursor: "pointer", transition: "all 0.3s ease", padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* COL DIREITA */}
            <div style={{
              display: "flex", flexDirection: "column", justifyContent: "center",
              padding: "clamp(1.6rem,4vw,4rem) clamp(2rem,4.5vw,4.5rem)",
            }}>
              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "clamp(9px,0.75vw,10px)", fontWeight: 700,
                letterSpacing: "0.35em", textTransform: "uppercase",
                color: card.mutedColor, margin: "0 0 clamp(0.8rem,2vw,1.6rem)",
              }}>
                {sectionLabel}
              </p>

              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "clamp(0.95rem,1.6vw,1.25rem)",
                lineHeight: 1.8, fontWeight: 300,
                color: card.textColor,
                margin: "0 0 clamp(0.6rem,1.4vw,1.1rem)",
              }}>
                {card.description}
              </p>

              <p style={{
                fontFamily: "'Lato', sans-serif",
                fontSize: "clamp(0.8rem,1.15vw,0.95rem)",
                lineHeight: 1.7,
                color: card.mutedColor,
                margin: "0 0 clamp(0.9rem,2.2vw,1.8rem)",
              }}>
                {card.details}
              </p>

              {/* Infos */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {card.phone && !card.callout && (
                  <InfoChip text={`📞 ${card.phone}`} textColor={card.textColor} accent={card.divider} />
                )}
                {card.address && (
                  <InfoChip text={`📍 ${card.address}`} textColor={card.textColor} accent={card.divider} />
                )}
                {card.handle && (
                  <InfoChip text={card.handle} textColor={card.subtitleColor} accent={card.divider} highlight />
                )}
              </div>
            </div>
          </div>

          {/* Barra inferior de navegação */}
          <div style={{
            flexShrink: 0, position: "relative", zIndex: 10,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "clamp(0.6rem,1.3vw,0.9rem) clamp(2rem,4.5vw,4.5rem)",
            borderTop: `1px solid ${card.divider}20`,
            background: card.imageStyle === "cover-bg" ? `${card.bg}e0` : card.bg,
          }}>
            <span style={{
              fontFamily: "'Lato', sans-serif",
              fontSize: 10, letterSpacing: "0.3em",
              textTransform: "uppercase", color: card.mutedColor,
            }}>
              {active + 1} / {items.length}
            </span>
            <div style={{ display: "flex", gap: 10 }}>
              <NavBtn label="← Anterior" primary={false} card={card} onClick={(e: React.MouseEvent) => { e.stopPropagation(); goPrev(); }} />
              <NavBtn label="Próximo →" primary={true} card={card} onClick={(e: React.MouseEvent) => { e.stopPropagation(); goNext(); }} />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function InfoChip({ text, textColor, accent, highlight = false }: InfoChipProps) {
  return (
    <span style={{
      fontFamily: "'Lato', sans-serif",
      fontSize: 11,
      color: highlight ? textColor : textColor,
      border: `1px solid ${accent}35`,
      borderRadius: 4,
      padding: "5px 10px",
      background: `${accent}12`,
    }}>
      {text}
    </span>
  );
}

function NavBtn({ label, primary, card, onClick }: NavBtnProps) {
  return (
    <button onClick={onClick} style={{
      fontFamily: "'Lato', sans-serif",
      fontSize: 11, fontWeight: 700,
      letterSpacing: "0.1em", textTransform: "uppercase",
      padding: "8px 22px", borderRadius: 100,
      border: `1.5px solid ${card.divider}`,
      background: primary ? card.divider : "transparent",
      color: primary ? card.badge.fg : card.divider,
      cursor: "pointer",
    }}>
      {label}
    </button>
  );
}

export default function TurismoRuralPage() {
  return (
    <>
      <link href={FONT_URL} rel="stylesheet" />
      <main style={{ width: "100%", overflowX: "hidden" }}>
        <HeroStack items={cardSets[0]} sectionLabel="Destinos Rurais" />
        <HeroStack items={cardSets[1]} sectionLabel="Cultura & Experiências" />
      </main>
    </>
  );
}