'use client';
import React from 'react';

export default function HeroTurismoRural() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700;9..144,900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <style>{`
        .hero-tr-root {
          --cream:      #f5efd8;
          --cream-dark: #ede3c5;
          --brown:      #7a4a1a;
          --brown-dark: #4a2a08;
          --teal:       #1a6a5a;
          --teal-light: #2a9a80;
          --orange:     #d46a18;
          --gold:       #c8960a;
          --sky:        #4a8ab0;
          --green:      #3a6a2a;
          --red-path:   #8b3a2a;
          background: var(--cream);
          font-family: 'DM Sans', sans-serif;
          position: relative;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .hero-tr-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='400' height='400' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E");
          background-size: 400px 400px;
          pointer-events: none;
          z-index: 0;
        }

        .hero-tr-root::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 100% 100% at 50% 0%, rgba(200,150,10,0.07) 0%, transparent 70%),
                      radial-gradient(ellipse 80% 50% at 0% 100%, rgba(122,74,26,0.08) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        .tr-top-strip {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: center;
          padding: 24px 30px 0;
        }

        .tr-partner-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(26,106,90,0.1);
          border: 1px solid rgba(26,106,90,0.25);
          border-radius: 30px;
          padding: 6px 18px;
          font-size: 0.65rem;
          font-weight: 600;
          color: var(--teal);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          opacity: 0;
          animation: fadeDownTR 0.6s 0.2s forwards;
        }

        .tr-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--teal-light); }

        .tr-body {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 0;
          flex: 1;
          padding: 24px 48px;
          align-items: center;
        }

        .tr-left {
          padding-right: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .tr-eyebrow {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--orange);
          text-transform: uppercase;
          margin-bottom: 12px;
          opacity: 0;
          animation: fadeUpTR 0.6s 0.3s forwards;
        }

        .tr-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(3rem, 4.5vw, 5rem);
          font-weight: 900;
          line-height: 0.92;
          color: var(--teal);
          margin-bottom: 6px;
          opacity: 0;
          animation: popInTR 0.7s 0.5s cubic-bezier(0.34,1.4,0.64,1) forwards;
        }

        .tr-title .tr-rural {
          color: var(--brown);
          display: block;
        }

        .tr-location-line {
          display: flex;
          align-items: center;
          gap: 8px;
          margin: 12px 0 20px;
          opacity: 0;
          animation: fadeUpTR 0.6s 0.7s forwards;
        }

        .tr-location-dot {
          width: 24px;
          height: 3px;
          background: var(--orange);
          border-radius: 2px;
        }

        .tr-location-text {
          font-family: 'Fraunces', serif;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--brown);
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .tr-divider-ornament {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          opacity: 0;
          animation: fadeUpTR 0.6s 0.8s forwards;
        }

        .tr-div-line { flex: 1; height: 1px; background: rgba(122,74,26,0.25); }
        .tr-div-diamond {
          width: 6px; height: 6px;
          background: var(--orange);
          transform: rotate(45deg);
          flex-shrink: 0;
        }

        .tr-desc {
          font-size: 0.8rem;
          line-height: 1.6;
          color: var(--brown-dark);
          max-width: 360px;
          margin-bottom: 16px;
          opacity: 0;
          animation: fadeUpTR 0.6s 0.9s forwards;
        }

        .tr-desc strong { color: var(--teal); }

        .tr-desc-2 {
          font-size: 0.75rem;
          line-height: 1.6;
          color: rgba(74,42,8,0.75);
          max-width: 360px;
          margin-bottom: 26px;
          font-style: italic;
          opacity: 0;
          animation: fadeUpTR 0.6s 1.0s forwards;
        }

        .tr-cta-group {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeUpTR 0.6s 1.1s forwards;
        }

        .tr-btn-main {
          padding: 10px 26px;
          background: var(--teal);
          color: var(--cream);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 4px 16px rgba(26,106,90,0.3);
        }

        .tr-btn-main:hover {
          background: var(--brown);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(26,106,90,0.35);
        }

        .tr-btn-outline {
          padding: 10px 26px;
          background: transparent;
          color: var(--brown);
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1.5px solid rgba(122,74,26,0.4);
          border-radius: 4px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .tr-btn-outline:hover {
          border-color: var(--teal);
          color: var(--teal);
          transform: translateY(-2px);
        }

        .tr-right {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 350px;
        }

        .tr-map-illustration {
          width: 100%;
          max-height: 95%;
          opacity: 0;
          animation: fadeInTR 1.2s 0.6s forwards;
          filter: drop-shadow(0 15px 35px rgba(122,74,26,0.15));
        }

        .tr-stop-dot {
          animation: stopPopTR 0.5s var(--delay, 0s) cubic-bezier(0.34,1.6,0.64,1) both;
          opacity: 0;
        }

        @keyframes fadeUpTR   { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeDownTR { from { opacity:0; transform:translateY(-12px); } to { opacity:1; transform:translateY(0); } }
        @keyframes fadeInTR   { from { opacity:0; } to { opacity:1; } }
        @keyframes popInTR    { from { opacity:0; transform:scale(0.8); } to { opacity:1; transform:scale(1); } }
        @keyframes stopPopTR  { from { opacity:0; transform:scale(0); } to { opacity:1; transform:scale(1); } }
        @keyframes pathDraw   { from { stroke-dashoffset: 1000; } to { stroke-dashoffset: 0; } }

        @media (max-width: 860px) {
          .tr-body { grid-template-columns: 1fr; padding: 16px 20px; overflow-y: auto; }
          .tr-left { padding-right: 0; margin-bottom: 24px; }
          .tr-right { height: 280px; min-height: 280px; }
        }
      `}</style>

      <section className="hero-tr-root">
        {/* BODY */}
        <div className="tr-body">

          {/* LEFT */}
          <div className="tr-left">
            <p className="tr-eyebrow">Programa Oficial · Pernambuco</p>

            <h1 className="tr-title">
              Turismo
              <span className="tr-rural">Rural</span>
            </h1>

            <div className="tr-location-line">
              <div className="tr-location-dot"></div>
              <span className="tr-location-text">Jaboatão dos Guararapes</span>
            </div>

            <div className="tr-divider-ornament">
              <div className="tr-div-line"></div>
              <div className="tr-div-diamond"></div>
              <div className="tr-div-line"></div>
            </div>

            <p className="tr-desc">
              Conectando <strong>cultura, fé e autenticidade</strong> na vida no campo. Cinco destinos encantadores que revelam o passado colonial, a gastronomia rural e as tradições que fazem desta região um verdadeiro tesouro turístico.
            </p>

            <p className="tr-desc-2">
              Venha percorrer essa rota única — onde cada parada revela um novo pedaço da história e cultura do Jaboatão dos Guararapes.
            </p>

          </div>

          {/* RIGHT — MAP ILLUSTRATION */}
          <div className="tr-right">
            <svg className="tr-map-illustration" viewBox="0 0 480 520" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgba(122,74,26,0.15)"/>
                </filter>
                <linearGradient id="sky-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#bfe0f0"/>
                  <stop offset="100%" stopColor="#dff0d8"/>
                </linearGradient>
                <linearGradient id="earth-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c8a060"/>
                  <stop offset="100%" stopColor="#8b5e3c"/>
                </linearGradient>
                <marker id="arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
                  <polygon points="0 0, 8 3, 0 6" fill="#8b3a2a" opacity="0.7"/>
                </marker>
              </defs>

              {/* card background */}
              <rect x="10" y="10" width="460" height="500" rx="20" fill="#f5efd8" filter="url(#soft-shadow)"/>
              <rect x="10" y="10" width="460" height="500" rx="20" fill="none" stroke="rgba(122,74,26,0.15)" strokeWidth="1.5"/>

              {/* map background landscape */}
              {/* sky area */}
              <rect x="10" y="10" width="460" height="200" rx="20" fill="url(#sky-grad)" opacity="0.4"/>

              {/* hills */}
              <ellipse cx="80" cy="220" rx="100" ry="60" fill="#5a8c3a" opacity="0.35"/>
              <ellipse cx="300" cy="210" rx="140" ry="70" fill="#4a7c2a" opacity="0.3"/>
              <ellipse cx="420" cy="230" rx="90" ry="55" fill="#6aaa48" opacity="0.25"/>

              {/* ground */}
              <rect x="10" y="280" width="460" height="230" rx="0" fill="rgba(200,160,96,0.15)"/>

              {/* fields pattern */}
              <rect x="30" y="300" width="80" height="50" rx="4" fill="rgba(90,140,58,0.2)" stroke="rgba(90,140,58,0.3)" strokeWidth="1"/>
              <rect x="120" y="310" width="70" height="40" rx="4" fill="rgba(140,180,80,0.2)" stroke="rgba(90,140,58,0.3)" strokeWidth="1"/>
              <rect x="300" y="295" width="90" height="55" rx="4" fill="rgba(90,140,58,0.18)" stroke="rgba(90,140,58,0.3)" strokeWidth="1"/>
              <rect x="380" y="320" width="70" height="40" rx="4" fill="rgba(140,180,80,0.18)" stroke="rgba(90,140,58,0.3)" strokeWidth="1"/>

              {/* field rows */}
              <line x1="30" y1="315" x2="110" y2="315" stroke="rgba(90,140,58,0.4)" strokeWidth="1"/>
              <line x1="30" y1="325" x2="110" y2="325" stroke="rgba(90,140,58,0.4)" strokeWidth="1"/>
              <line x1="30" y1="335" x2="110" y2="335" stroke="rgba(90,140,58,0.4)" strokeWidth="1"/>

              {/* ROUTE PATH */}
              <path d="M 120,440 Q 160,380 200,330 Q 240,280 270,240 Q 300,200 330,170 Q 355,145 370,120"
                    fill="none"
                    stroke="#8b3a2a"
                    strokeWidth="4"
                    strokeDasharray="1000"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.7"
                    markerEnd="url(#arrow)"
                    style={{ animation: 'pathDraw 2s 0.8s ease-in-out both', strokeDashoffset: 1000, animationFillMode: 'forwards' }}>
                <animate attributeName="stroke-dashoffset" from="1000" to="0" dur="2s" begin="0.8s" fill="freeze"/>
              </path>

              {/* road alongside */}
              <path d="M 90,460 Q 140,390 185,335 Q 225,285 258,248 Q 288,212 318,182 Q 342,158 356,135"
                    fill="none"
                    stroke="#c8a060"
                    strokeWidth="8"
                    strokeLinecap="round"
                    opacity="0.35"/>

              {/* STOP 1 — Chácara Xamânica */}
              <g className="tr-stop-dot" style={{ '--delay': '1.0s' } as React.CSSProperties}>
                <circle cx="120" cy="445" r="22" fill="#1a6a5a" opacity="0.15"/>
                <circle cx="120" cy="445" r="14" fill="#1a6a5a"/>
                <circle cx="120" cy="445" r="6" fill="#f5efd8"/>
                {/* tiny icon: leaf */}
                <path d="M117,443 Q120,438 123,443 Q120,448 117,443Z" fill="#f5efd8" opacity="0.8"/>
              </g>
              {/* label 1 */}
              <rect x="20" y="455" width="82" height="28" rx="6" fill="#1a6a5a"/>
              <text x="61" y="467" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fontWeight="700" fill="#f5efd8" letterSpacing="0.5">CHÁCARA</text>
              <text x="61" y="477" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fontWeight="700" fill="#f5efd8" letterSpacing="0.5">XAMÂNICA</text>

              {/* STOP 2 — Sítio Recanto */}
              <g className="tr-stop-dot" style={{ '--delay': '1.3s' } as React.CSSProperties}>
                <circle cx="200" cy="335" r="20" fill="#c8960a" opacity="0.15"/>
                <circle cx="200" cy="335" r="13" fill="#c8960a"/>
                <circle cx="200" cy="335" r="5" fill="#f5efd8"/>
              </g>
              <rect x="215" y="322" width="80" height="28" rx="6" fill="#c8960a"/>
              <text x="255" y="334" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fontWeight="700" fill="#f5efd8" letterSpacing="0.5">SÍTIO RECANTO</text>
              <text x="255" y="344" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fontWeight="700" fill="#f5efd8" letterSpacing="0.5">DA TILÁPIA</text>

              {/* STOP 3 */}
              <g className="tr-stop-dot" style={{ '--delay': '1.6s' } as React.CSSProperties}>
                <circle cx="290" cy="245" r="20" fill="#8b3a2a" opacity="0.15"/>
                <circle cx="290" cy="245" r="13" fill="#8b3a2a"/>
                <circle cx="290" cy="245" r="5" fill="#f5efd8"/>
              </g>
              <rect x="196" y="232" width="80" height="28" rx="6" fill="#8b3a2a"/>
              <text x="236" y="244" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fontWeight="700" fill="#f5efd8" letterSpacing="0.5">DESTINO</text>
              <text x="236" y="254" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fontWeight="700" fill="#f5efd8" letterSpacing="0.5">COLONIAL</text>

              {/* STOP 4 */}
              <g className="tr-stop-dot" style={{ '--delay': '1.9s' } as React.CSSProperties}>
                <circle cx="345" cy="175" r="20" fill="#3a6a2a" opacity="0.15"/>
                <circle cx="345" cy="175" r="13" fill="#3a6a2a"/>
                <circle cx="345" cy="175" r="5" fill="#f5efd8"/>
              </g>
              <rect x="358" y="162" width="80" height="28" rx="6" fill="#3a6a2a"/>
              <text x="398" y="174" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fontWeight="700" fill="#f5efd8" letterSpacing="0.5">GASTRONOMIA</text>
              <text x="398" y="184" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fontWeight="700" fill="#f5efd8" letterSpacing="0.5">RURAL</text>

              {/* STOP 5 */}
              <g className="tr-stop-dot" style={{ '--delay': '2.2s' } as React.CSSProperties}>
                <circle cx="368" cy="122" r="20" fill="#4a8ab0" opacity="0.15"/>
                <circle cx="368" cy="122" r="13" fill="#4a8ab0"/>
                <circle cx="368" cy="122" r="5" fill="#f5efd8"/>
                {/* star icon */}
                <polygon points="368,118 369.5,121 373,121 370.5,123 371.5,126 368,124 364.5,126 365.5,123 363,121 366.5,121"
                         fill="#f5efd8" opacity="0.9"/>
              </g>
              <rect x="283" y="110" width="72" height="28" rx="6" fill="#4a8ab0"/>
              <text x="319" y="122" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fontWeight="700" fill="#f5efd8" letterSpacing="0.5">TRADIÇÕES</text>
              <text x="319" y="132" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="7" fontWeight="700" fill="#f5efd8" letterSpacing="0.5">E CULTURA</text>

              {/* decorative trees along route */}
              {/* tree set 1 */}
              <ellipse cx="155" cy="395" rx="12" ry="15" fill="#4a7c2a" opacity="0.7"/>
              <rect x="153" y="405" width="4" height="10" fill="#7a4a1a" opacity="0.6"/>
              <ellipse cx="168" cy="398" rx="10" ry="12" fill="#5a8c3a" opacity="0.7"/>
              <rect x="166" y="406" width="4" height="9" fill="#7a4a1a" opacity="0.6"/>

              {/* tree set 2 */}
              <ellipse cx="245" cy="305" rx="11" ry="14" fill="#3a6a2a" opacity="0.65"/>
              <rect x="243" y="314" width="4" height="9" fill="#7a4a1a" opacity="0.6"/>
              <ellipse cx="258" cy="308" rx="9" ry="12" fill="#4a7c2a" opacity="0.65"/>

              {/* church/building top right */}
              <rect x="380" y="55" width="40" height="50" rx="3" fill="#d4c0a0" opacity="0.8"/>
              <polygon points="378,55 420,55 399,35" fill="#8b5e3c" opacity="0.8"/>
              <rect x="394" y="70" width="10" height="15" rx="2" fill="#7a4a1a" opacity="0.7"/>
              {/* cross */}
              <line x1="399" y1="35" x2="399" y2="22" stroke="#7a4a1a" strokeWidth="2" opacity="0.7"/>
              <line x1="394" y1="28" x2="404" y2="28" stroke="#7a4a1a" strokeWidth="2" opacity="0.7"/>

              {/* farmhouse bottom left */}
              <rect x="28" y="360" width="50" height="35" rx="3" fill="#d4c0a0" opacity="0.7"/>
              <polygon points="24,360 82,360 55,340" fill="#8b5e3c" opacity="0.7"/>
              <rect x="45" y="375" width="12" height="20" rx="2" fill="#7a4a1a" opacity="0.6"/>
              {/* chimney */}
              <rect x="64" y="348" width="7" height="13" fill="#a07040" opacity="0.7"/>

              {/* compass rose */}
              <g transform="translate(430, 460)">
                <circle r="18" fill="rgba(245,239,216,0.9)" stroke="rgba(122,74,26,0.3)" strokeWidth="1.5"/>
                <polygon points="0,-14 3,-4 0,-7 -3,-4" fill="#8b3a2a"/>
                <polygon points="0,14 3,4 0,7 -3,4" fill="rgba(122,74,26,0.4)"/>
                <polygon points="-14,0 -4,-3 -7,0 -4,3" fill="rgba(122,74,26,0.4)"/>
                <polygon points="14,0 4,-3 7,0 4,3" fill="rgba(122,74,26,0.4)"/>
                <circle r="3" fill="#1a6a5a"/>
                <text y="-18" textAnchor="middle" fontFamily="DM Sans,sans-serif" fontSize="8" fontWeight="700" fill="#8b3a2a">N</text>
              </g>

              {/* title on map */}
              <text x="240" y="48" textAnchor="middle" fontFamily="Fraunces,serif" fontSize="15" fontWeight="900" fill="#1a6a5a" letterSpacing="1" opacity="0.6">ROTA TURISMO RURAL</text>
              <line x1="120" y1="55" x2="360" y2="55" stroke="rgba(26,106,90,0.2)" strokeWidth="1"/>
              <line x1="120" y1="58" x2="360" y2="58" stroke="rgba(26,106,90,0.1)" strokeWidth="0.5"/>
            </svg>
          </div>

        </div>

      </section>
    </>
  );
}
