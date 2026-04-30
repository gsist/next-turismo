'use client';

export default function HeroColoniaSalesiana() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Cormorant+Garamond:wght@300;400;600&family=Cinzel:wght@400;700&display=swap" rel="stylesheet"/>
      <style>{`
        .cs-hero {
          --gold:       #C9A84C;
          --gold-light: #E8C97A;
          --cream:      #F5EDD6;
          --dark-green: #1A2E1A;
          --forest:     #2D4A2D;
          --rust:       #8B3A2A;
          --white:      #FDFAF3;
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
          background: var(--dark-green);
          font-family: 'Cormorant Garamond', serif;
          color: var(--cream);
        }

        .cs-hero::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 60% 50% at 70% 60%, rgba(45,74,45,.55) 0%, transparent 70%),
            radial-gradient(ellipse 80% 80% at 20% 80%, rgba(26,46,26,.8) 0%, transparent 65%),
            linear-gradient(160deg, #1A2E1A 0%, #2D4A2D 40%, #1A2E1A 100%);
          z-index: 0;
        }

        .cs-hero::after {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.04'/%3E%3C/svg%3E");
          background-size: 200px;
          opacity: .5;
          pointer-events: none;
          z-index: 1;
        }

        .cs-deco-images {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
        }

        .cs-deco-circle {
          position: absolute;
          border-radius: 50%;
          border: 2px solid var(--gold);
          overflow: hidden;
          box-shadow: 0 0 0 6px rgba(201,168,76,.15), 0 20px 60px rgba(0,0,0,.5);
        }

        .cs-circle-river {
          width: clamp(180px, 20vw, 280px);
          height: clamp(180px, 20vw, 280px);
          bottom: 10%; left: 4%;
          animation: csfloatA 7s ease-in-out infinite;
        }

        .cs-circle-church {
          width: clamp(140px, 15vw, 220px);
          height: clamp(140px, 15vw, 220px);
          bottom: 16%; left: clamp(40%, 25%, 24%);
          animation: csfloatB 8s ease-in-out infinite;
        }

        @keyframes csfloatA {
          0%,100% { transform: translateY(0px) rotate(-1deg); }
          50%      { transform: translateY(-14px) rotate(1deg); }
        }
        @keyframes csfloatB {
          0%,100% { transform: translateY(0px) rotate(1deg); }
          50%      { transform: translateY(-10px) rotate(-1deg); }
        }

        .cs-hero-content {
          position: relative;
          z-index: 3;
          max-width: 1100px;
          margin: 0 auto;
          padding: clamp(40px, 6vw, 80px) clamp(24px, 4vw, 48px) clamp(160px, 20vw, 220px);
          width: 100%;
        }

        .cs-handle {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Cormorant Garamond', serif;
          font-size: .85rem;
          letter-spacing: .25em;
          text-transform: uppercase;
          color: var(--gold-light);
          margin-bottom: 24px;
          opacity: 0;
          animation: csfadeUp .7s .2s forwards;
        }

        .cs-handle::before {
          content: '';
          display: block;
          width: 36px; height: 1px;
          background: var(--gold);
        }

        .cs-title-colonia {
          display: block;
          font-family: 'Playfair Display', serif;
          font-size: clamp(3.5rem, 8vw, 7rem);
          font-weight: 900;
          line-height: .9;
          color: var(--cream);
          letter-spacing: -.02em;
          opacity: 0;
          animation: csfadeUp .8s .4s forwards;
        }

        .cs-title-salesiana {
          display: block;
          font-family: 'Cinzel', serif;
          font-size: clamp(2.5rem, 6vw, 5.2rem);
          font-weight: 700;
          line-height: 1;
          color: var(--gold);
          letter-spacing: .1em;
          text-shadow: 0 0 40px rgba(201,168,76,.3);
          opacity: 0;
          animation: csfadeUp .8s .55s forwards;
        }

        .cs-divider {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 20px 0 28px;
          opacity: 0;
          animation: csfadeUp .8s .7s forwards;
        }

        .cs-divider-line { flex: 1; max-width: 120px; height: 1px; background: var(--gold); }
        .cs-divider-diamond {
          width: 8px; height: 8px;
          background: var(--gold);
          transform: rotate(45deg);
        }

        .cs-description {
          max-width: 520px;
          background: rgba(201,168,76,.08);
          border: 1px solid rgba(201,168,76,.25);
          border-left: 3px solid var(--gold);
          padding: clamp(16px, 2vw, 22px) clamp(20px, 3vw, 26px);
          font-size: clamp(0.95rem, 1.2vw, 1.05rem);
          line-height: 1.7;
          color: var(--cream);
          border-radius: 0 6px 6px 0;
          opacity: 0;
          animation: csfadeUp .8s .85s forwards;
        }

        .cs-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 24px;
          opacity: 0;
          animation: csfadeUp .8s 1s forwards;
        }

        .cs-tag {
          font-family: 'Cinzel', serif;
          font-size: .72rem;
          letter-spacing: .15em;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid rgba(201,168,76,.4);
          padding: 6px 16px;
          border-radius: 2px;
          background: rgba(201,168,76,.06);
          cursor: default;
          transition: background .25s, color .25s;
        }

        .cs-tag:hover {
          background: var(--gold);
          color: var(--dark-green);
        }

        .cs-info-row {
          position: absolute;
          bottom: clamp(24px, 4vw, 48px);
          left: clamp(24px, 4vw, 48px);
          right: clamp(24px, 4vw, 48px);
          z-index: 4;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          opacity: 0;
          animation: csfadeUp .8s 1.2s forwards;
        }

        .cs-info-block {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .cs-info-icon { font-size: 1.3rem; color: var(--gold); margin-top: 2px; }
        .cs-info-text { font-size: .85rem; line-height: 1.5; color: var(--cream); }
        .cs-info-text strong {
          display: block;
          color: var(--gold-light);
          font-weight: 600;
          font-size: .75rem;
          letter-spacing: .1em;
          text-transform: uppercase;
        }

        .cs-badge {
          position: absolute;
          right: clamp(24px, 4vw, 48px);
          top: 50%;
          transform: translateY(-50%);
          z-index: 4;
          width: clamp(110px, 15vw, 140px);
          height: clamp(110px, 15vw, 140px);
          border-radius: 50%;
          border: 2px solid var(--gold);
          background: rgba(26,46,26,.85);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 16px;
          font-family: 'Cinzel', serif;
          font-size: clamp(0.55rem, 0.8vw, 0.68rem);
          letter-spacing: .1em;
          text-transform: uppercase;
          color: var(--gold);
          line-height: 1.5;
          box-shadow: 0 0 0 6px rgba(201,168,76,.1), 0 20px 50px rgba(0,0,0,.4);
          opacity: 0;
          animation: csfadeIn 1s 1.4s forwards;
        }

        .cs-badge::before {
          content: '✦';
          display: block;
          font-size: 1.4rem;
          margin-bottom: 4px;
        }

        @keyframes csfadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes csfadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @media (max-width: 860px) {
          .cs-info-row { flex-direction: column; align-items: flex-start; }
          .cs-badge { top: 24px; transform: none; }
          .cs-circle-church { left: 44%; }
        }
      `}</style>

      <section className="cs-hero">
        <div className="cs-deco-images">
          {/* Nature / river circle (illustrated) */}
          <div className="cs-deco-circle cs-circle-river">
            <svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bg-river" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2D5A27"/>
                  <stop offset="60%" stopColor="#3D7A35"/>
                  <stop offset="100%" stopColor="#1A3A1A"/>
                </linearGradient>
                <linearGradient id="water-g" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4A8FBF" stopOpacity=".9"/>
                  <stop offset="100%" stopColor="#1A5A80" stopOpacity=".95"/>
                </linearGradient>
              </defs>
              <rect width="280" height="280" fill="url(#bg-river)"/>
              {/* water */}
              <path d="M0 190 Q70 165 140 182 Q210 198 280 172 L280 280 L0 280Z" fill="url(#water-g)"/>
              <path d="M0 210 Q60 198 140 205 Q220 212 280 195 L280 280 L0 280Z" fill="#1A4A6A" opacity=".5"/>
              {/* trees left */}
              <ellipse cx="35" cy="120" rx="28" ry="45" fill="#1A4A1A"/>
              <rect x="31" y="155" width="8" height="30" fill="#2A1A0A"/>
              <ellipse cx="75" cy="105" rx="22" ry="38" fill="#1A5A1A"/>
              <rect x="71" y="135" width="8" height="45" fill="#2A1A0A"/>
              {/* trees right */}
              <ellipse cx="240" cy="115" rx="26" ry="42" fill="#1A4A1A"/>
              <rect x="236" y="148" width="8" height="32" fill="#2A1A0A"/>
              {/* sun reflection */}
              <ellipse cx="140" cy="185" rx="40" ry="8" fill="rgba(201,168,76,.25)"/>
              {/* caption */}
              <text x="140" y="258" textAnchor="middle" fill="rgba(245,237,214,.2)" fontSize="10" fontFamily="serif" letterSpacing="4">NATUREZA</text>
            </svg>
          </div>

          {/* Church circle (illustrated) */}
          <div className="cs-deco-circle cs-circle-church">
            <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sky-g" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6BA3C5"/>
                  <stop offset="100%" stopColor="#A8C8E0"/>
                </linearGradient>
                <linearGradient id="church-g" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#C8724A"/>
                  <stop offset="100%" stopColor="#8B3A2A"/>
                </linearGradient>
                <linearGradient id="ground-g" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2D5A27"/>
                  <stop offset="100%" stopColor="#1A3A1A"/>
                </linearGradient>
              </defs>
              <rect width="220" height="220" fill="url(#sky-g)"/>
              {/* clouds */}
              <ellipse cx="50" cy="40" rx="30" ry="12" fill="rgba(255,255,255,.4)"/>
              <ellipse cx="70" cy="35" rx="25" ry="10" fill="rgba(255,255,255,.35)"/>
              <ellipse cx="170" cy="50" rx="22" ry="9" fill="rgba(255,255,255,.3)"/>
              {/* ground */}
              <rect x="0" y="175" width="220" height="45" fill="url(#ground-g)"/>
              {/* church body */}
              <rect x="60" y="115" width="100" height="70" fill="url(#church-g)"/>
              {/* side wings */}
              <rect x="40" y="135" width="25" height="50" fill="#A05830"/>
              <rect x="155" y="135" width="25" height="50" fill="#A05830"/>
              {/* tower */}
              <rect x="88" y="65" width="44" height="58" fill="#C8724A"/>
              {/* tower top */}
              <polygon points="110,28 80,68 140,68" fill="#8B3A2A"/>
              {/* cross */}
              <rect x="107" y="20" width="6" height="22" fill="#F5EDD6"/>
              <rect x="99" y="27" width="22" height="5" fill="#F5EDD6"/>
              {/* windows */}
              <rect x="72" y="132" width="20" height="28" rx="10" fill="rgba(255,220,130,.55)"/>
              <rect x="128" y="132" width="20" height="28" rx="10" fill="rgba(255,220,130,.55)"/>
              {/* door */}
              <rect x="95" y="155" width="30" height="44" rx="15 15 0 0" fill="#5A1A0A"/>
              {/* trees */}
              <ellipse cx="32" cy="162" rx="16" ry="24" fill="#1A4A1A"/>
              <rect x="29" y="178" width="6" height="17" fill="#3A1A0A"/>
              <ellipse cx="188" cy="166" rx="14" ry="20" fill="#1A4A1A"/>
              <rect x="185" y="180" width="6" height="15" fill="#3A1A0A"/>
              {/* caption */}
              <text x="110" y="210" textAnchor="middle" fill="rgba(245,237,214,.2)" fontSize="9" fontFamily="serif" letterSpacing="3">BASÍLICA</text>
            </svg>
          </div>
        </div>

        <div className="cs-hero-content">
          <span className="cs-handle">@coloniasalesiana</span>

          <div className="cs-title-wrap">
            <span className="cs-title-colonia">Colônia</span>
            <span className="cs-title-salesiana">Salesiana</span>
          </div>

          <div className="cs-divider">
            <span className="cs-divider-line"></span>
            <span className="cs-divider-diamond"></span>
            <span className="cs-divider-line"></span>
          </div>

          <p className="cs-description">
            No bairro Vila Rica, a Colônia Salesiana de Pernambuco abriga a primeira Basílica do mundo construída em zona rural. Destacam-se a Basílica de Nossa Senhora Auxiliadora, a Gruta de Nossa Senhora de Lourdes e uma réplica da casa de São João Bosco.
          </p>

        </div>

        <div className="cs-badge">Fé, História<br/>&amp;<br/>Contemplação</div>

        <div className="cs-info-row">
          <div className="cs-info-block">
            <span className="cs-info-icon">📍</span>
            <div className="cs-info-text">
              <strong>Endereço</strong>
              Rua Colônia dos Padres, 431<br/>
              Jaboatão dos Guararapes – PE
            </div>
          </div>
          <div className="cs-info-block">
            <span className="cs-info-icon">🕐</span>
            <div className="cs-info-text">
              <strong>Visitação</strong>
              Sob agendamento<br/>com antecedência
            </div>
          </div>
          <div className="cs-info-block">
            <span className="cs-info-icon">📞</span>
            <div className="cs-info-text">
              <strong>Contato – Dayse</strong>
              81 98435 4218
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
