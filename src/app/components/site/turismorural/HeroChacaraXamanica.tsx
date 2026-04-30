'use client';

export default function HeroChacaraXamanica() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Cinzel+Decorative:wght@700&family=Libre+Baskerville:ital,wght@0,400;1,400&display=swap" rel="stylesheet" />
      <style>{`
        .hero-xam-root {
          --teal-deep: #1a4a45;
          --teal-mid: #2d6b63;
          --teal-light: #3d8c82;
          --earth: #8b5e3c;
          --sand: #d4a96a;
          --cream: #f5ede0;
          --green-accent: #4a7c59;
          --white: #ffffff;
          background: var(--teal-deep);
          font-family: 'Libre Baskerville', Georgia, serif;
          position: relative;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
        }

        .hero-xam-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 20% 50%, rgba(45,107,99,0.55) 0%, transparent 70%),
            radial-gradient(ellipse 60% 80% at 80% 30%, rgba(74,124,89,0.3) 0%, transparent 65%),
            radial-gradient(ellipse 50% 50% at 50% 80%, rgba(139,94,60,0.2) 0%, transparent 60%);
          z-index: 0;
        }

        .hero-xam-root::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          pointer-events: none;
          z-index: 0;
        }

        .xam-left {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px 30px 40px 50px;
        }

        .xam-insta {
          font-family: 'Libre Baskerville', serif;
          font-style: italic;
          font-size: 0.75rem;
          color: var(--sand);
          letter-spacing: 0.08em;
          margin-bottom: 20px;
          opacity: 0;
          animation: fadeUpXamanica 0.8s 0.2s forwards;
        }

        .xam-title {
          font-family: 'Cinzel Decorative', serif;
          font-size: clamp(2.5rem, 4vw, 4rem);
          font-weight: 700;
          line-height: 1.0;
          color: var(--cream);
          text-shadow: 0 4px 32px rgba(0,0,0,0.4);
          margin-bottom: 24px;
          opacity: 0;
          animation: fadeUpXamanica 0.9s 0.4s forwards;
        }

        .xam-title span {
          display: block;
          color: var(--sand);
        }

        .xam-divider {
          width: 50px;
          height: 3px;
          background: linear-gradient(90deg, var(--sand), transparent);
          border-radius: 2px;
          margin-bottom: 24px;
          opacity: 0;
          animation: fadeUpXamanica 0.9s 0.6s forwards;
        }

        .xam-desc {
          font-size: 0.85rem;
          line-height: 1.6;
          color: rgba(245,237,224,0.85);
          max-width: 380px;
          margin-bottom: 36px;
          opacity: 0;
          animation: fadeUpXamanica 0.9s 0.8s forwards;
        }

        .xam-cta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          opacity: 0;
          animation: fadeUpXamanica 0.9s 1.0s forwards;
        }

        .xam-btn-primary {
          padding: 12px 24px;
          background: var(--sand);
          color: var(--teal-deep);
          font-family: 'Cinzel Decorative', serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .xam-btn-primary:hover {
          background: var(--cream);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }

        .xam-btn-secondary {
          padding: 12px 24px;
          background: transparent;
          color: var(--cream);
          font-family: 'Cinzel Decorative', serif;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          border: 1px solid rgba(245,237,224,0.4);
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }

        .xam-btn-secondary:hover {
          border-color: var(--sand);
          color: var(--sand);
          transform: translateY(-2px);
        }

        .xam-info-strip {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 40px;
          padding-top: 30px;
          border-top: 1px solid rgba(245,237,224,0.15);
          opacity: 0;
          animation: fadeUpXamanica 0.9s 1.2s forwards;
        }

        .xam-info-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(245,237,224,0.75);
          font-size: 0.75rem;
          letter-spacing: 0.03em;
        }

        .xam-info-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(212,169,106,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          flex-shrink: 0;
        }

        .xam-right {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-rows: 1fr 1fr;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          padding: 40px 50px 40px 20px;
          align-items: center;
        }

        .xam-badge {
          position: absolute;
          top: 30px;
          right: 50px;
          width: 100px;
          height: 100px;
          z-index: 10;
          opacity: 0;
          animation: spinInXamanica 1s 1.4s forwards;
        }

        .xam-badge-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: var(--sand);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          animation: rotateSlowXamanica 20s linear infinite;
        }

        .xam-badge-text {
          font-family: 'Cinzel Decorative', serif;
          font-size: 0.4rem;
          font-weight: 700;
          color: var(--teal-deep);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          line-height: 1.4;
        }

        .xam-photo-card {
          border-radius: 80px 8px 8px 8px;
          overflow: hidden;
          position: relative;
          opacity: 0;
          transform: scale(0.92) translateY(20px);
        }

        .xam-photo-card:nth-child(2) { border-radius: 8px 80px 8px 8px; animation: cardInXamanica 0.8s 0.6s forwards; }
        .xam-photo-card:nth-child(3) { border-radius: 8px 8px 8px 80px; animation: cardInXamanica 0.8s 0.8s forwards; }
        .xam-photo-card:nth-child(4) { border-radius: 8px 8px 80px 8px; animation: cardInXamanica 0.8s 1.0s forwards; }

        .xam-photo-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(26,74,69,0.3) 0%, transparent 60%);
        }

        .xam-photo-card .xam-img-fill {
          width: 100%;
          height: 100%;
          min-height: 140px;
          object-fit: cover;
          display: block;
        }

        .xam-photo-main {
          grid-column: 1 / 3;
          border-radius: 12px 12px 8px 8px;
          opacity: 0;
          transform: scale(0.95);
          animation: cardInXamanica 1s 0.5s forwards;
          position: relative;
          overflow: hidden;
        }

        .xam-photo-main .xam-img-fill {
          min-height: 200px;
          width: 100%;
          height: 100%;
          display: block;
        }

        .xam-botanical {
          position: absolute;
          pointer-events: none;
          z-index: 1;
        }

        .xam-bot-left {
          bottom: -20px;
          left: -20px;
          width: 160px;
          opacity: 0.2;
          transform: rotate(-15deg);
        }

        .xam-bot-right {
          top: -15px;
          right: -15px;
          width: 140px;
          opacity: 0.15;
          transform: rotate(40deg) scaleX(-1);
        }

        @keyframes fadeUpXamanica {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes cardInXamanica {
          from { opacity: 0; transform: scale(0.92) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        @keyframes spinInXamanica {
          from { opacity: 0; transform: scale(0.5) rotate(-90deg); }
          to   { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        @keyframes rotateSlowXamanica {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @media (max-width: 900px) {
          .hero-xam-root {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            overflow-y: auto;
          }
          .xam-left { padding: 40px 24px 20px; }
          .xam-right { padding: 20px 24px 40px; grid-template-columns: 1fr 1fr; }
          .xam-badge { top: auto; bottom: 20px; right: 24px; }
        }
      `}</style>

      <section className="hero-xam-root">
        {/* botanical SVG decorations */}
        <svg className="xam-botanical xam-bot-left" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 300 Q60 200 20 100 Q80 120 100 200 Q120 120 180 100 Q140 200 100 300Z" fill="#d4a96a"/>
          <path d="M100 260 Q70 180 40 120 Q90 140 100 200 Q110 140 160 120 Q130 180 100 260Z" fill="#4a7c59"/>
          <path d="M100 0 Q100 100 100 200" stroke="#d4a96a" strokeWidth="3"/>
        </svg>

        <svg className="xam-botanical xam-bot-right" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 300 Q60 200 20 100 Q80 120 100 200 Q120 120 180 100 Q140 200 100 300Z" fill="#4a7c59"/>
          <path d="M100 0 Q100 100 100 200" stroke="#4a7c59" strokeWidth="3"/>
        </svg>

        {/* LEFT */}
        <div className="xam-left">
          <p className="xam-insta">@chacara.xamanica</p>

          <h1 className="xam-title">
            Chácara<span>Xamânica</span>
          </h1>

          <div className="xam-divider"></div>

          <p className="xam-desc">
            Um espaço único criado por um descendente indígena para resgatar suas raízes e promover uma vivência cultural e espiritual autêntica. Ritualística, cultivo de ervas medicinais e práticas de sustentabilidade em meio à natureza.
          </p>

          <div className="xam-cta">
            <a href="#" className="xam-btn-primary">Agendar Visita</a>
            <a href="#" className="xam-btn-secondary">Saiba Mais</a>
          </div>

          <div className="xam-info-strip">
            <div className="xam-info-item">
              <div className="xam-info-icon">📍</div>
              <span>Engenho Penandubinha, 103 — Zona Rural</span>
            </div>
            <div className="xam-info-item">
              <div className="xam-info-icon">📅</div>
              <span>Visitação somente com agendamento prévio</span>
            </div>
            <div className="xam-info-item">
              <div className="xam-info-icon">📞</div>
              <span>Irapuam Chaves · 81 99678 5721</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="xam-right">

          {/* Decorative badge */}
          <div className="xam-badge">
            <div className="xam-badge-circle">
              <p className="xam-badge-text">Uma jornada de conexão com as origens indígenas</p>
            </div>
          </div>

          {/* Photo cards with SVG illustrated placeholders */}
          <div className="xam-photo-main">
            <svg className="xam-img-fill" viewBox="0 0 600 280" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#87CEEB"/>
                  <stop offset="100%" stopColor="#d4e8c2"/>
                </linearGradient>
              </defs>
              <rect width="600" height="280" fill="url(#sky)"/>
              {/* earth */}
              <ellipse cx="300" cy="310" rx="400" ry="120" fill="#8b5e3c"/>
              {/* hut */}
              <polygon points="240,200 360,200 330,120 270,120" fill="#5c3d1e"/>
              <polygon points="255,120 345,120 300,60" fill="#7a4f28"/>
              {/* thatch texture */}
              <line x1="270" y1="120" x2="255" y2="200" stroke="#3d2810" strokeWidth="1.5" opacity="0.4"/>
              <line x1="285" y1="115" x2="258" y2="200" stroke="#3d2810" strokeWidth="1.5" opacity="0.4"/>
              <line x1="300" y1="110" x2="262" y2="200" stroke="#3d2810" strokeWidth="1.5" opacity="0.4"/>
              <line x1="315" y1="115" x2="335" y2="200" stroke="#3d2810" strokeWidth="1.5" opacity="0.4"/>
              <line x1="330" y1="120" x2="342" y2="200" stroke="#3d2810" strokeWidth="1.5" opacity="0.4"/>
              {/* door */}
              <rect x="285" y="162" width="30" height="38" rx="15" fill="#2d1b0a"/>
              {/* plants */}
              <ellipse cx="200" cy="200" rx="40" ry="25" fill="#2d6b2a"/>
              <ellipse cx="400" cy="200" rx="35" ry="22" fill="#3a7a35"/>
              <ellipse cx="160" cy="210" rx="25" ry="16" fill="#4a8a42"/>
              {/* people silhouettes */}
              <circle cx="300" cy="175" r="7" fill="#1a0a00"/>
              <rect x="295" y="182" width="10" height="18" rx="3" fill="#1a0a00"/>
              <circle cx="275" cy="180" r="6" fill="#1a0a00"/>
              <rect x="271" y="186" width="8" height="15" rx="2" fill="#1a0a00"/>
              <circle cx="325" cy="178" r="6" fill="#1a0a00"/>
              <rect x="321" y="184" width="8" height="15" rx="2" fill="#1a0a00"/>
              {/* overlay teal tint */}
              <rect width="600" height="280" fill="#1a4a45" opacity="0.25"/>
              {/* label */}
              <text x="30" y="250" fontFamily="Georgia" fontSize="13" fill="rgba(245,237,224,0.7)" letterSpacing="2">CHÁCARA XAMÂNICA</text>
            </svg>
          </div>

          {/* card 2 */}
          <div className="xam-photo-card">
            <svg className="xam-img-fill" viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="260" height="200" fill="#2d4a1e"/>
              <circle cx="130" cy="60" r="40" fill="#d4a96a" opacity="0.3"/>
              {/* herb leaves */}
              <ellipse cx="110" cy="110" rx="30" ry="50" fill="#4a7c35" transform="rotate(-20 110 110)"/>
              <ellipse cx="150" cy="105" rx="28" ry="45" fill="#3a6b28" transform="rotate(15 150 105)"/>
              <ellipse cx="130" cy="130" rx="25" ry="40" fill="#5a8c42" transform="rotate(-5 130 130)"/>
              {/* stem */}
              <line x1="130" y1="200" x2="130" y2="140" stroke="#2d4a1e" strokeWidth="4"/>
              <line x1="110" y1="180" x2="110" y2="110" stroke="#2d4a1e" strokeWidth="3"/>
              <line x1="150" y1="175" x2="150" y2="105" stroke="#2d4a1e" strokeWidth="3"/>
              <rect width="260" height="200" fill="#1a4a45" opacity="0.3"/>
            </svg>
          </div>

          {/* card 3 */}
          <div className="xam-photo-card">
            <svg className="xam-img-fill" viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg">
              <rect width="260" height="200" fill="#4a2c10"/>
              {/* ritual fire */}
              <ellipse cx="130" cy="175" rx="50" ry="12" fill="#2d1800" opacity="0.7"/>
              <polygon points="130,80 100,175 160,175" fill="#ff6b35" opacity="0.8"/>
              <polygon points="130,95 108,170 152,170" fill="#ffaa35" opacity="0.9"/>
              <polygon points="130,110 115,165 145,165" fill="#fff3a0" opacity="0.95"/>
              {/* smoke wisps */}
              <path d="M125,80 Q115,60 125,40" stroke="#aaa" strokeWidth="2" fill="none" opacity="0.4"/>
              <path d="M135,85 Q148,62 138,38" stroke="#aaa" strokeWidth="2" fill="none" opacity="0.3"/>
              {/* people around fire */}
              <circle cx="80" cy="145" r="8" fill="#1a0a00"/>
              <rect x="75" y="153" width="10" height="20" rx="3" fill="#1a0a00"/>
              <circle cx="180" cy="148" r="8" fill="#1a0a00"/>
              <rect x="175" y="156" width="10" height="20" rx="3" fill="#1a0a00"/>
              <rect width="260" height="200" fill="#1a4a45" opacity="0.2"/>
            </svg>
          </div>

        </div>

      </section>
    </>
  );
}
