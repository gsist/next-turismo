'use client';

export default function HeroAconchegoFamilia() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        .af-root {
          background: #e8dcc8;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          font-family: 'Nunito', sans-serif;
          overflow: hidden;
        }

        /* ── PHOTO AREA ── */
        .af-photos {
          position: relative;
          height: 55%;
          min-height: 250px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .af-photo-main {
          position: absolute;
          inset: 0;
        }
        .af-photo-main svg { width: 100%; height: 100%; display: block; object-fit: cover; }

        /* gradient overlay for title legibility */
        .af-photos::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 50%, transparent 80%),
            linear-gradient(to right, rgba(0,0,0,0.35) 0%, transparent 55%);
          pointer-events: none;
          z-index: 2;
        }

        /* round photo top-right */
        .af-photo-circle {
          position: absolute;
          top: 5%;
          right: 3%;
          width: clamp(120px, 15vw, 180px);
          aspect-ratio: 1;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #e8dcc8;
          box-shadow: 0 8px 24px rgba(0,0,0,0.28);
          z-index: 4;
        }
        .af-photo-circle svg { width: 100%; height: 100%; display: block; }

        /* badge */
        .af-badge {
          position: absolute;
          right: 4%;
          bottom: 15%;
          width: clamp(90px, 12vw, 130px);
          aspect-ratio: 1;
          border-radius: 50%;
          background: #c8960a;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 10px;
          z-index: 5;
          box-shadow: 0 6px 18px rgba(0,0,0,0.3);
        }
        .af-badge p {
          font-weight: 800;
          font-size: clamp(0.5rem, 0.8vw, 0.75rem);
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          line-height: 1.5;
        }

        /* title */
        .af-title-over {
          position: absolute;
          bottom: 8%;
          left: 5%;
          z-index: 3;
        }
        .af-title-over h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 7vw, 6.5rem);
          line-height: 0.9;
          color: #fff;
          letter-spacing: 0.03em;
          text-shadow: 2px 4px 15px rgba(0,0,0,0.6);
        }
        .af-title-over .af-ig {
          margin-top: 8px;
          font-size: clamp(0.8rem, 1.2vw, 1.1rem);
          font-weight: 700;
          color: rgba(255,255,255,0.85);
          font-style: italic;
          letter-spacing: 0.05em;
        }

        /* ── CONTENT ── */
        .af-content {
          padding: clamp(20px, 4vw, 40px) clamp(20px, 5vw, 60px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
        }

        .af-desc {
          font-size: clamp(0.9rem, 1.4vw, 1.2rem);
          line-height: 1.7;
          color: #3a2808;
          max-width: 900px;
        }

        /* info row */
        .af-info-row {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(16px, 3vw, 32px);
          margin-top: clamp(20px, 4vw, 36px);
          padding-top: clamp(16px, 3vw, 24px);
          border-top: 1px solid rgba(74,48,16,0.16);
        }

        .af-info-item {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 180px;
        }

        .af-info-icon { 
          font-size: clamp(1.2rem, 2vw, 1.8rem); 
          opacity: 0.75; 
          flex-shrink: 0; 
          background: rgba(122,74,26,0.1);
          width: clamp(40px, 4vw, 56px);
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }

        .af-info-text { display: flex; flex-direction: column; gap: 4px; }

        .af-info-label {
          font-size: clamp(0.6rem, 0.9vw, 0.85rem);
          font-weight: 800;
          color: #1a6a5a;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .af-info-val {
          font-size: clamp(0.8rem, 1.1vw, 1.1rem);
          font-weight: 700;
          color: #3a2808;
          line-height: 1.4;
        }
      `}</style>

      <div className="af-root">

        <div className="af-photos">
          <div className="af-photo-main">
            <svg viewBox="0 0 420 272" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a0d0ee"/>
                  <stop offset="50%" stopColor="#c0e890"/>
                  <stop offset="100%" stopColor="#58962e"/>
                </linearGradient>
                <linearGradient id="wG" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#52a8c4"/>
                  <stop offset="100%" stopColor="#357a9a"/>
                </linearGradient>
                <radialGradient id="sunG" cx="55%" cy="6%" r="55%">
                  <stop offset="0%" stopColor="rgba(255,252,190,0.6)"/>
                  <stop offset="100%" stopColor="transparent"/>
                </radialGradient>
              </defs>
              <rect width="420" height="272" fill="url(#skyG)"/>
              <rect width="420" height="272" fill="url(#sunG)"/>
              {/* sprinkler */}
              <path d="M215,0 Q245,65 264,94" stroke="rgba(180,225,255,0.5)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <path d="M215,0 Q186,60 167,88" stroke="rgba(180,225,255,0.4)" strokeWidth="2" fill="none" strokeLinecap="round"/>
              <path d="M215,0 Q265,50 284,70" stroke="rgba(180,225,255,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <path d="M215,0 Q157,48 142,66" stroke="rgba(180,225,255,0.3)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              {/* hills */}
              <ellipse cx="100" cy="168" rx="178" ry="76" fill="#588c36" opacity="0.48"/>
              <ellipse cx="340" cy="172" rx="158" ry="72" fill="#4a7c26" opacity="0.44"/>
              {/* water */}
              <path d="M0,200 Q105,182 210,194 Q315,204 420,186 L420,272 L0,272Z" fill="url(#wG)" opacity="0.80"/>
              <line x1="28" y1="218" x2="120" y2="213" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="235" y1="208" x2="355" y2="204" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" strokeLinecap="round"/>
              {/* dock */}
              <rect x="152" y="180" width="7" height="40" fill="#7a4a1a" opacity="0.88"/>
              <rect x="159" y="177" width="52" height="7" rx="2" fill="#8b5e2a" opacity="0.88"/>
              <rect x="204" y="180" width="7" height="36" fill="#7a4a1a" opacity="0.88"/>
              <line x1="152" y1="174" x2="211" y2="174" stroke="#5c3d1e" strokeWidth="2"/>
              <line x1="163" y1="174" x2="163" y2="182" stroke="#5c3d1e" strokeWidth="1.5"/>
              <line x1="176" y1="174" x2="176" y2="182" stroke="#5c3d1e" strokeWidth="1.5"/>
              <line x1="190" y1="174" x2="190" y2="182" stroke="#5c3d1e" strokeWidth="1.5"/>
              {/* palm left */}
              <line x1="40" y1="195" x2="40" y2="104" stroke="#5c3d1e" strokeWidth="4.5" strokeLinecap="round"/>
              <path d="M40,104 Q14,80 2,56" stroke="#3a6a1a" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <ellipse cx="0" cy="51" rx="20" ry="7" fill="#4aaa3a" transform="rotate(-22 0 51)"/>
              <path d="M40,104 Q64,77 78,52" stroke="#3a6a1a" strokeWidth="3" fill="none" strokeLinecap="round"/>
              <ellipse cx="81" cy="47" rx="20" ry="7" fill="#5abc44" transform="rotate(22 81 47)"/>
              <path d="M40,108 Q20,93 8,87" stroke="#3a6a1a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <ellipse cx="2" cy="85" rx="16" ry="6" fill="#4aaa3a" transform="rotate(-8 2 85)"/>
              {/* tree right */}
              <line x1="368" y1="193" x2="368" y2="122" stroke="#5c3d1e" strokeWidth="4" strokeLinecap="round"/>
              <ellipse cx="358" cy="110" rx="24" ry="17" fill="#4a7c2a"/>
              <ellipse cx="376" cy="118" rx="20" ry="14" fill="#5a8c3a"/>
            </svg>
          </div>

          <div className="af-photo-circle">
            <svg viewBox="0 0 126 126" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <rect width="126" height="126" fill="#b07840"/>
              <rect y="74" width="126" height="52" fill="#855520"/>
              <ellipse cx="63" cy="76" rx="50" ry="11" fill="#401800"/>
              <ellipse cx="63" cy="74" rx="40" ry="8" fill="#eedad8"/>
              {/* person */}
              <circle cx="63" cy="37" r="17" fill="#cc9966"/>
              <rect x="43" y="52" width="40" height="30" rx="6" fill="#3a5a7a"/>
              <path d="M43,60 Q26,70 22,83" stroke="#cc9966" strokeWidth="7" fill="none" strokeLinecap="round"/>
              <path d="M83,60 Q100,70 104,83" stroke="#cc9966" strokeWidth="7" fill="none" strokeLinecap="round"/>
              <circle cx="22" cy="85" r="5" fill="#cc9966"/>
              <circle cx="104" cy="85" r="5" fill="#cc9966"/>
              <ellipse cx="63" cy="25" rx="17" ry="9" fill="#1a0a00"/>
              <rect x="95" y="72" width="2.5" height="18" rx="1.2" fill="#7a4a1a" transform="rotate(-16 95 72)"/>
            </svg>
          </div>

          <div className="af-badge">
            <p>Sabores e<br/>tradição no<br/>coração do<br/>campo</p>
          </div>

          <div className="af-title-over">
            <h1>Aconchego<br/>Família Rural</h1>
            <p className="af-ig">@aconchegofamiliarural</p>
          </div>
        </div>

        <div className="af-content">
          <p className="af-desc">
            No Engenho Penanduba, o Aconchego Família Rural encanta com seu pesque-pague e restaurante de comida caseira, onde o peixe fresco vai do lago direto para a mesa. A experiência se completa na casa de farinha, onde o aroma do beiju e da tapioca preparados artesanalmente remete às raízes nordestinas.
          </p>

          <div className="af-info-row">
            <div className="af-info-item">
              <span className="af-info-icon">📍</span>
              <div className="af-info-text">
                <span className="af-info-label">Endereço</span>
                <span className="af-info-val">Engenho Penandubinha, 103<br/>Zona Rural — Jaboatão</span>
              </div>
            </div>
            <div className="af-info-item">
              <span className="af-info-icon">📅</span>
              <div className="af-info-text">
                <span className="af-info-label">Visitação</span>
                <span className="af-info-val">Sob Agendamento</span>
              </div>
            </div>
            <div className="af-info-item">
              <span className="af-info-icon">📞</span>
              <div className="af-info-text">
                <span className="af-info-label">Leonardo de Oliveira</span>
                <span className="af-info-val">81 99210 4169</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
