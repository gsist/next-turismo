'use client';

export default function HeroEngenhoMacuje() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        .em-root {
          background: #1a1008;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          font-family: 'Nunito', sans-serif;
          overflow: hidden;
        }

        .em-top-block {
          background: #1c1208;
          padding: clamp(20px, 4vw, 40px) clamp(20px, 5vw, 60px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
        }

        .em-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3.4rem, 7vw, 6rem);
          line-height: 0.9;
          letter-spacing: 0.03em;
          color: #fff;
          margin-bottom: 6px;
        }

        .em-title .em-macuje { color: #e8b84b; }

        .em-instagram {
          font-size: clamp(0.72rem, 1vw, 1rem);
          font-weight: 700;
          color: rgba(255,255,255,0.55);
          font-style: italic;
          letter-spacing: 0.05em;
          margin-bottom: 14px;
          display: block;
        }

        .em-desc {
          font-size: clamp(0.8rem, 1.3vw, 1.1rem);
          line-height: 1.7;
          color: rgba(255,255,255,0.82);
          max-width: 900px;
        }

        .em-info-row {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(10px, 2vw, 24px);
          margin-top: clamp(16px, 3vw, 32px);
          padding-top: clamp(14px, 2vw, 24px);
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .em-info-item {
          display: flex;
          align-items: center;
          gap: 8px;
          flex: 1;
          min-width: 160px;
        }

        .em-info-icon { font-size: clamp(1rem, 1.5vw, 1.5rem); opacity: 0.65; flex-shrink: 0; }
        
        .em-info-text { display: flex; flex-direction: column; gap: 2px; }

        .em-info-label {
          font-size: clamp(0.56rem, 0.8vw, 0.8rem);
          font-weight: 800;
          color: #e8b84b;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }
        .em-info-val {
          font-size: clamp(0.67rem, 1vw, 1rem);
          font-weight: 600;
          color: rgba(255,255,255,0.75);
          line-height: 1.3;
        }

        .em-photos {
          position: relative;
          height: 50%;
          min-height: 250px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .em-photos svg { width: 100%; height: 100%; display: block; object-fit: cover; }

        .em-badge {
          position: absolute;
          left: clamp(14px, 3vw, 40px);
          bottom: clamp(14px, 3vw, 40px);
          background: #c0392b;
          border-radius: 12px;
          padding: clamp(10px, 2vw, 18px) clamp(14px, 2.5vw, 24px);
          z-index: 4;
          max-width: clamp(130px, 20vw, 200px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.5);
        }

        .em-badge p {
          font-weight: 800;
          font-size: clamp(0.58rem, 0.9vw, 0.85rem);
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          line-height: 1.55;
          font-style: italic;
        }
      `}</style>
      
      <div className="em-root">
        {/* TOP DARK BLOCK */}
        <div className="em-top-block">
          <h1 className="em-title">ENGENHO <span className="em-macuje">MACUJÉ</span></h1>
          <span className="em-instagram">@engenhomacuje</span>
          <p className="em-desc">
            O Engenho Macujé resgata séculos de tradição açucareira, proporcionando uma viagem ao passado colonial de Pernambuco. Entre trilhas históricas e plantações de cana-de-açúcar, os visitantes vivenciam o cotidiano rural e apreciam a fusão entre preservação ambiental e memória cultural.
          </p>

          <div className="em-info-row">
            <div className="em-info-item">
              <span className="em-info-icon">📍</span>
              <div className="em-info-text">
                <span className="em-info-label">Endereço</span>
                <span className="em-info-val">Engenho Macujé, S/N<br/>Zona Rural — Jaboatão</span>
              </div>
            </div>
            <div className="em-info-item">
              <span className="em-info-icon">📅</span>
              <div className="em-info-text">
                <span className="em-info-label">Visitação</span>
                <span className="em-info-val">Sob Agendamento</span>
              </div>
            </div>
            <div className="em-info-item">
              <span className="em-info-icon">📞</span>
              <div className="em-info-text">
                <span className="em-info-label">Fernando Salomão</span>
                <span className="em-info-val">81 98831 7871</span>
              </div>
            </div>
            <div className="em-info-item">
              <span className="em-info-icon">📞</span>
              <div className="em-info-text">
                <span className="em-info-label">Jaqueline Maranhão</span>
                <span className="em-info-val">81 99763 4766</span>
              </div>
            </div>
          </div>
        </div>

        {/* PHOTO */}
        <div className="em-photos">
          <svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#87ceeb"/>
                <stop offset="100%" stopColor="#c8e0a0"/>
              </linearGradient>
              <linearGradient id="groundG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c8a060"/>
                <stop offset="100%" stopColor="#8b6030"/>
              </linearGradient>
            </defs>

            {/* sky */}
            <rect width="420" height="240" fill="url(#skyG)"/>
            {/* ground */}
            <rect y="175" width="420" height="65" fill="url(#groundG)"/>
            {/* dirt path */}
            <path d="M160,240 Q190,200 200,175 Q210,200 240,240Z" fill="#a07840" opacity="0.5"/>

            {/* trees / greenery left */}
            <ellipse cx="30" cy="130" rx="32" ry="40" fill="#3a7a1a"/>
            <ellipse cx="15" cy="148" rx="22" ry="30" fill="#4a8a28"/>
            <rect x="27" y="165" width="7" height="20" fill="#5c3d1e"/>
            <ellipse cx="70" cy="140" rx="24" ry="30" fill="#3a6a1a"/>
            <rect x="67" y="165" width="6" height="18" fill="#5c3d1e"/>

            {/* trees right */}
            <ellipse cx="390" cy="128" rx="30" ry="38" fill="#3a7a1a"/>
            <ellipse cx="408" cy="145" rx="20" ry="28" fill="#4a8a28"/>
            <rect x="387" y="162" width="7" height="20" fill="#5c3d1e"/>

            {/* COLONIAL BUILDING — orange/terracotta */}
            {/* main body */}
            <rect x="88" y="95" width="244" height="90" fill="#d4582a"/>
            {/* facade detail: lighter band top */}
            <rect x="88" y="95" width="244" height="18" fill="#e06030"/>
            {/* roof / gable */}
            <rect x="80" y="78" width="260" height="22" rx="3" fill="#c04820"/>
            <polygon points="80,78 210,50 340,78" fill="#a83c18"/>
            {/* roof tiles hint */}
            <line x1="100" y1="78" x2="100" y2="65" stroke="#8a3010" strokeWidth="1.5" opacity="0.5"/>
            <line x1="120" y1="78" x2="118" y2="62" stroke="#8a3010" strokeWidth="1.5" opacity="0.5"/>
            <line x1="140" y1="78" x2="136" y2="57" stroke="#8a3010" strokeWidth="1.5" opacity="0.5"/>
            <line x1="160" y1="78" x2="155" y2="53" stroke="#8a3010" strokeWidth="1.5" opacity="0.5"/>
            <line x1="180" y1="78" x2="176" y2="51" stroke="#8a3010" strokeWidth="1.5" opacity="0.5"/>
            <line x1="200" y1="78" x2="197" y2="50" stroke="#8a3010" strokeWidth="1.5" opacity="0.5"/>
            <line x1="220" y1="78" x2="218" y2="51" stroke="#8a3010" strokeWidth="1.5" opacity="0.5"/>
            <line x1="240" y1="78" x2="239" y2="53" stroke="#8a3010" strokeWidth="1.5" opacity="0.5"/>
            <line x1="260" y1="78" x2="260" y2="57" stroke="#8a3010" strokeWidth="1.5" opacity="0.5"/>
            <line x1="280" y1="78" x2="282" y2="62" stroke="#8a3010" strokeWidth="1.5" opacity="0.5"/>
            <line x1="300" y1="78" x2="303" y2="67" stroke="#8a3010" strokeWidth="1.5" opacity="0.5"/>
            <line x1="318" y1="78" x2="320" y2="74" stroke="#8a3010" strokeWidth="1.5" opacity="0.5"/>

            {/* windows row */}
            {/* win 1 */}
            <rect x="100" y="108" width="32" height="42" rx="14" fill="#1a4060" opacity="0.9"/>
            <rect x="103" y="111" width="26" height="36" rx="12" fill="#2a6090" opacity="0.7"/>
            <line x1="116" y1="111" x2="116" y2="147" stroke="#fff" strokeWidth="1" opacity="0.3"/>
            <line x1="100" y1="128" x2="132" y2="128" stroke="#fff" strokeWidth="1" opacity="0.3"/>
            {/* win 2 */}
            <rect x="148" y="108" width="32" height="42" rx="14" fill="#1a4060" opacity="0.9"/>
            <rect x="151" y="111" width="26" height="36" rx="12" fill="#2a6090" opacity="0.7"/>
            <line x1="164" y1="111" x2="164" y2="147" stroke="#fff" strokeWidth="1" opacity="0.3"/>
            <line x1="148" y1="128" x2="180" y2="128" stroke="#fff" strokeWidth="1" opacity="0.3"/>
            {/* win 3 */}
            <rect x="240" y="108" width="32" height="42" rx="14" fill="#1a4060" opacity="0.9"/>
            <rect x="243" y="111" width="26" height="36" rx="12" fill="#2a6090" opacity="0.7"/>
            <line x1="256" y1="111" x2="256" y2="147" stroke="#fff" strokeWidth="1" opacity="0.3"/>
            <line x1="240" y1="128" x2="272" y2="128" stroke="#fff" strokeWidth="1" opacity="0.3"/>
            {/* win 4 */}
            <rect x="288" y="108" width="32" height="42" rx="14" fill="#1a4060" opacity="0.9"/>
            <rect x="291" y="111" width="26" height="36" rx="12" fill="#2a6090" opacity="0.7"/>
            <line x1="304" y1="111" x2="304" y2="147" stroke="#fff" strokeWidth="1" opacity="0.3"/>
            <line x1="288" y1="128" x2="320" y2="128" stroke="#fff" strokeWidth="1" opacity="0.3"/>

            {/* central door */}
            <rect x="188" y="118" width="44" height="67" rx="20" fill="#2a1a08"/>
            <rect x="192" y="122" width="36" height="60" rx="17" fill="#3a2810"/>
            {/* door knob */}
            <circle cx="224" cy="154" r="3" fill="#e8b84b"/>

            {/* porch columns */}
            <rect x="186" y="115" width="6" height="65" rx="3" fill="#e06030"/>
            <rect x="228" y="115" width="6" height="65" rx="3" fill="#e06030"/>

            {/* trim / base */}
            <rect x="88" y="182" width="244" height="8" fill="#c04820"/>

            {/* person in front */}
            <circle cx="200" cy="178" r="8" fill="#f0d0a0"/>
            <rect x="194" y="186" width="12" height="16" rx="4" fill="#fff" opacity="0.9"/>
            {/* dress skirt */}
            <path d="M194,198 Q200,208 206,198Z" fill="#fff" opacity="0.85"/>

            {/* sugarcane left side */}
            <line x1="105" y1="185" x2="108" y2="148" stroke="#4a8a20" strokeWidth="2.5" strokeLinecap="round"/>
            <ellipse cx="108" cy="145" rx="6" ry="10" fill="#5a9a28" transform="rotate(-10 108 145)"/>
            <line x1="118" y1="185" x2="122" y2="142" stroke="#4a8a20" strokeWidth="2.5" strokeLinecap="round"/>
            <ellipse cx="122" cy="139" rx="6" ry="10" fill="#4a8a20" transform="rotate(8 122 139)"/>

            {/* sugarcane right side */}
            <line x1="295" y1="185" x2="292" y2="148" stroke="#4a8a20" strokeWidth="2.5" strokeLinecap="round"/>
            <ellipse cx="292" cy="145" rx="6" ry="10" fill="#5a9a28" transform="rotate(10 292 145)"/>
            <line x1="307" y1="185" x2="305" y2="143" stroke="#4a8a20" strokeWidth="2.5" strokeLinecap="round"/>
            <ellipse cx="305" cy="140" rx="6" ry="10" fill="#4a8a20" transform="rotate(-8 305 140)"/>

            {/* warm overlay */}
            <rect width="420" height="240" fill="rgba(180,80,10,0.06)"/>
          </svg>

          {/* badge */}
          <div className="em-badge">
            <p>Uma viagem<br/>inesquecível e<br/>emocionante<br/>no tempo</p>
          </div>
        </div>

      </div>
    </>
  );
}
