'use client';

const ROTEIROS = [
  { href: '/roteiros/jaboatao-em-um-dia', emoji: '☀️', label: 'Jaboatão em um Dia' },
  { href: '/roteiros/fim-de-semana',      emoji: '🌊', label: 'Fim de Semana em Jaboatão' },
  { href: '/roteiros/passeio-da-fe',      emoji: '⛪', label: 'Passeio da Fé' },
];

const STRIP = ['Praias & Natureza', 'História & Cultura', 'Gastronomia', 'Turismo Rural', 'Curiosidades'];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex flex-col"
      style={{ background: '#F9FAFB', fontFamily: '"Montserrat", "Trebuchet MS", sans-serif' }}
    >
      {/* ── Círculos decorativos ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{ width: 500, height: 500, background: '#E8641A', opacity: 0.1, top: -200, left: -100 }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: 300, height: 300, background: '#1e7e3e', opacity: 0.08, bottom: -80, left: '30%' }}
        />
      </div>

      {/* ── Grid principal ── */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">

        {/* ESQUERDA */}
        <div className="flex flex-col justify-center px-8 py-14 md:px-16 md:py-20">

          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7 w-fit text-xs font-black uppercase tracking-widest"
            style={{ background: '#1e7e3e', color: '#F5C518', letterSpacing: '0.15em' }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#F5C518' }} />
            Pernambuco · Brasil
          </div>

          {/* Título */}
          <h1
            className="font-black leading-none mb-3"
            style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', color: '#1e7e3e', letterSpacing: '-3px' }}
          >
            Vem pro<br />
            <span style={{ color: '#E8641A' }}>Jaboatão</span>
          </h1>

          {/* Subtítulo */}
          <p
            className="font-bold mb-9 max-w-md"
            style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', color: '#1a5c2e', lineHeight: 1.55, opacity: 0.85 }}
          >
            Frevo, fé, praias e história.<br />
            Tudo isso a 20 minutos do Recife.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="/o-que-conhecer"
              className="inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-black tracking-wide no-underline"
              style={{ background: '#1e7e3e', color: '#F5C518', letterSpacing: '0.02em', fontSize: 15 }}
            >
              Explorar agora
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#roteiros"
              className="inline-flex items-center gap-2.5 rounded-xl px-8 py-4 font-black no-underline"
              style={{ background: 'transparent', color: '#1e7e3e', border: '3px solid #1e7e3e', fontSize: 15 }}
            >
              Ver Roteiros
            </a>
          </div>

          {/* Cards de roteiros */}
          <div className="flex flex-col gap-3">
            {ROTEIROS.map(r => (
              <a
                key={r.href}
                href={r.href}
                className="flex items-center gap-3.5 rounded-xl no-underline"
                style={{
                  background: 'rgba(30,126,62,0.1)',
                  borderLeft: '4px solid #E8641A',
                  padding: '12px 18px',
                }}
              >
                <div
                  className="flex items-center justify-center rounded-xl text-lg shrink-0"
                  style={{ width: 38, height: 38, background: '#1e7e3e', fontSize: 18 }}
                >
                  {r.emoji}
                </div>
                <div>
                  <div
                    className="text-xs font-bold uppercase"
                    style={{ color: '#3b8f5a', letterSpacing: '0.08em' }}
                  >
                    Roteiro
                  </div>
                  <div className="text-sm font-extrabold" style={{ color: '#1a5c2e' }}>
                    {r.label}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* DIREITA */}
        <div className="relative flex items-center justify-center overflow-hidden">
          {/* Fundo laranja diagonal */}
          <div
            className="absolute inset-0"
            style={{ background: '#E8641A', clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          />

          <div className="relative z-10 w-full px-10 py-14 md:px-14 md:py-20" style={{ paddingLeft: 'clamp(48px, 7vw, 80px)' }}>
            <div className="grid grid-cols-2 gap-4">

              {/* Stat largo — 20km */}
              <div
                className="col-span-2 flex items-center gap-5 rounded-2xl p-5"
                style={{ background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.25)' }}
              >
                <span className="text-3xl">🏖️</span>
                <div>
                  <div className="font-black text-white leading-none" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)' }}>
                    20km
                  </div>
                  <div
                    className="text-xs font-bold uppercase mt-1 leading-snug"
                    style={{ color: 'rgba(255,255,255,0.75)', letterSpacing: '0.08em' }}
                  >
                    De orla litorânea com praias e piscinas naturais
                  </div>
                </div>
              </div>

              {/* Stat amarelo — 1654 */}
              <div
                className="flex flex-col gap-1 rounded-2xl p-5"
                style={{ background: '#F5C518' }}
              >
                <span className="text-2xl mb-1">🏛️</span>
                <div className="font-black leading-none" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: '#1e7e3e' }}>
                  1654
                </div>
                <div
                  className="text-xs font-bold uppercase mt-1 leading-snug"
                  style={{ color: '#1a5c2e', letterSpacing: '0.08em' }}
                >
                  Batalha dos Guararapes
                </div>
              </div>

              {/* Stat — 700mil */}
              <div
                className="flex flex-col gap-1 rounded-2xl p-5"
                style={{ background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.25)' }}
              >
                <span className="text-2xl mb-1">👥</span>
                <div className="font-black text-white leading-none" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)' }}>
                  700<span className="text-base">mil</span>
                </div>
                <div
                  className="text-xs font-bold uppercase mt-1 leading-snug"
                  style={{ color: 'rgba(255,255,255,0.75)', letterSpacing: '0.08em' }}
                >
                  2ª maior cidade de PE
                </div>
              </div>

              {/* Stat — Frevo */}
              <div
                className="col-span-2 rounded-2xl p-5"
                style={{ background: 'rgba(255,255,255,0.08)', border: '2px solid rgba(255,255,255,0.15)' }}
              >
                <span className="text-2xl block mb-2">🎭</span>
                <div
                  className="font-black text-white leading-snug"
                  style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}
                >
                  Frevo · Maracatu · Fé · Mar
                </div>
                <div
                  className="text-xs font-bold uppercase mt-1.5"
                  style={{ color: 'rgba(255,255,255,0.65)', letterSpacing: '0.08em' }}
                >
                  A alma de Pernambuco mora aqui
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Faixa inferior verde ── */}
      <div
        className="relative z-10 flex items-center justify-center flex-wrap gap-4 md:gap-12 px-8 py-3.5"
        style={{ background: '#1a5c2e' }}
      >
        {STRIP.map(s => (
          <div
            key={s}
            className="flex items-center gap-2 text-xs font-black uppercase"
            style={{ color: 'rgba(245,197,24,0.85)', letterSpacing: '0.1em' }}
          >
            <span
              className="rounded-full shrink-0"
              style={{ width: 5, height: 5, background: '#E8641A', display: 'inline-block' }}
            />
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}