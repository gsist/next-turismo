'use client';

const ROTEIROS = [
  {
    slug: 'jaboatao-em-um-dia',
    emoji: '☀️',
    titulo: 'Jaboatão em um Dia',
    duracao: '1 dia',
    nivel: 'Fácil',
    descricao:
      'Do centro histórico às piscinas naturais de Piedade. Um dia completo para sentir o melhor da cidade sem pressa.',
    paradas: ['Centro Histórico', 'Praça da Batalha', 'Praia de Piedade', 'Mercado Municipal'],
    cor: '#1e7e3e',
    corClara: '#e8f7ee',
    tag: 'Mais popular',
  },
  {
    slug: 'fim-de-semana',
    emoji: '🌊',
    titulo: 'Fim de Semana em Jaboatão',
    duracao: '2 dias',
    nivel: 'Moderado',
    descricao:
      'Dois dias explorando praias, culinária pernambucana e o interior verde do município com muito frevo e cultura.',
    paradas: ['Candeias', 'Barra de Jangada', 'Turismo Rural', 'Gastronomia Local'],
    cor: '#E8641A',
    corClara: '#fef3ec',
    tag: 'Para famílias',
  },
  {
    slug: 'passeio-da-fe',
    emoji: '⛪',
    titulo: 'Passeio da Fé',
    duracao: '1 dia',
    nivel: 'Fácil',
    descricao:
      'Rota pelas igrejas históricas e o Parque Nacional dos Guararapes, berço da identidade brasileira.',
    paradas: ['Igreja do Rosário', 'Monte Guararapes', 'Parque Histórico Nacional', 'Santuário'],
    cor: '#003B7A',
    corClara: '#e8f0fb',
    tag: 'Histórico & Cultural',
  },
];

export default function RoteirosSection() {
  return (
    <section
      id="roteiros"
      className="relative overflow-hidden py-20 px-4"
      style={{
        background: 'linear-gradient(180deg, #f0faf4 0%, #e8f7f0 100%)',
        fontFamily: '"Montserrat", "Trebuchet MS", sans-serif',
      }}
    >
      {/* Círculos decorativos de fundo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{ width: 400, height: 400, background: '#F5C518', opacity: 0.08, top: -120, right: -80 }}
        />
        <div
          className="absolute rounded-full"
          style={{ width: 300, height: 300, background: '#1e7e3e', opacity: 0.06, bottom: -60, left: -60 }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── CABEÇALHO ── */}
        <div className="text-center mb-14"> 

          <h2
            className="font-black leading-none mb-4"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              color: '#1e7e3e',
              letterSpacing: '-1.5px',
            }}
          >
            Roteiros <span style={{ color: '#E8641A' }}>prontos pra você</span>
          </h2>

          {/* Linha decorativa */}
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-0.5 w-14 rounded-full" style={{ background: 'rgba(30,126,62,0.25)' }} />
            <div
              className="rounded-full"
              style={{ width: 10, height: 10, background: '#F5C518', border: '2px solid #1e7e3e' }}
            />
            <div className="h-0.5 w-14 rounded-full" style={{ background: 'rgba(30,126,62,0.25)' }} />
          </div>

          <p
            className="max-w-xl mx-auto font-semibold"
            style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', color: '#2d6a4f', lineHeight: 1.7, opacity: 0.85 }}
          >
            Escolha seu roteiro e venha descobrir o melhor de Jaboatão dos Guararapes.
            Cada percurso foi pensado para você aproveitar ao máximo.
          </p>
        </div>

        {/* ── CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {ROTEIROS.map((r) => (
            <div
              key={r.slug}
              className="relative flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: '#fff',
                border: `2px solid ${r.cor}22`,
                boxShadow: `0 4px 24px ${r.cor}18`,
              }}
            >
              {/* Faixa colorida no topo */}
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ background: r.cor }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center rounded-xl text-xl"
                    style={{ width: 44, height: 44, background: 'rgba(255,255,255,0.2)', fontSize: 22 }}
                  >
                    {r.emoji}
                  </div>
                  <div>
                    <div
                      className="text-xs font-black uppercase"
                      style={{ color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em' }}
                    >
                      Roteiro
                    </div>
                    <div className="text-sm font-black text-white leading-tight">
                      {r.titulo}
                    </div>
                  </div>
                </div>

                {/* Badge tag */}
                <div
                  className="rounded-full px-3 py-1 text-xs font-black whitespace-nowrap"
                  style={{ background: '#F5C518', color: r.cor, fontSize: 10, letterSpacing: '0.06em' }}
                >
                  {r.tag}
                </div>
              </div>

              {/* Corpo */}
              <div className="flex flex-col flex-1 p-5 gap-4">

                {/* Badges duração / nível */}
                <div className="flex gap-2">
                  <span
                    className="rounded-full px-3 py-1 text-xs font-black"
                    style={{ background: r.corClara, color: r.cor, letterSpacing: '0.06em' }}
                  >
                    ⏱ {r.duracao}
                  </span>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-black"
                    style={{ background: r.corClara, color: r.cor, letterSpacing: '0.06em' }}
                  >
                    🥾 {r.nivel}
                  </span>
                </div>

                {/* Descrição */}
                <p
                  className="font-semibold leading-relaxed flex-1"
                  style={{ fontSize: 13.5, color: '#2d4a38' }}
                >
                  {r.descricao}
                </p>

                {/* Paradas */}
                <div>
                  <div
                    className="text-xs font-black uppercase mb-2"
                    style={{ color: r.cor, letterSpacing: '0.1em' }}
                  >
                    Paradas principais
                  </div>
                  <div className="flex flex-col gap-1.5">
                    {r.paradas.map((p, i) => (
                      <div key={p} className="flex items-center gap-2">
                        <span
                          className="rounded-full font-black text-white flex items-center justify-center shrink-0"
                          style={{
                            width: 20,
                            height: 20,
                            background: r.cor,
                            fontSize: 10,
                          }}
                        >
                          {i + 1}
                        </span>
                        <span className="text-xs font-bold" style={{ color: '#2d4a38' }}>
                          {p}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Botão */}
                <a
                  href={`/roteiros/${r.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-xl py-3 font-black text-sm no-underline mt-auto transition-opacity hover:opacity-90"
                  style={{ background: r.cor, color: '#fff', letterSpacing: '0.02em' }}
                >
                  Ver roteiro completo
                  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA CENTRAL ── */}
        <div className="text-center">
          <a
            href="/roteiros"
            className="inline-flex items-center gap-3 rounded-full px-10 py-4 font-black no-underline text-sm transition-opacity hover:opacity-90"
            style={{ background: '#1e7e3e', color: '#F5C518', fontSize: 15, letterSpacing: '0.03em' }}
          >
            Ver todos os roteiros
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}