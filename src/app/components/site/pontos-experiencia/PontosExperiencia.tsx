'use client';

import React from 'react';

const PONTOS_TURISTICOS = {
  'jaboatao-em-um-dia': {
    titulo: 'Jaboatão em um Dia',
    duracao: '1 dia',
    cor: '#00751D',
    pontos: [
      {
        id: 1,
        nome: 'Praia de Piedade',
        descricao: 'Uma das praias mais bonitas da região, com águas claras e coqueirais. Ideal para banho e relaxamento.',
        horario: '6:00 - 18:00',
        duracao_visita: '2 horas',
        dica: 'Leve protetor solar e água. O melhor horário é pela manhã.',
        como_chegar: 'Seguir pela PE-60 em direção à Praia de Piedade',
        atividades: ['Natação', 'Caminhada na orla', 'Fotografia']
      },
      {
        id: 2,
        nome: 'Mercado de Jaboatão',
        descricao: 'Centro comercial tradicional onde você encontra produtos locais, artesanato e comidas típicas.',
        horario: '8:00 - 18:00',
        duracao_visita: '1 hora',
        dica: 'Barganhar os preços é bem aceito. Experimente os frutos do mar.',
        como_chegar: 'Centro de Jaboatão, próximo à praça principal',
        atividades: ['Compras', 'Gastronomia', 'Cultura local']
      },
      {
        id: 3,
        nome: 'Igreja Matriz de Nossa Senhora do Rosário',
        descricao: 'Construção histórica do século XIX, importante patrimônio cultural e religioso da cidade.',
        horario: '7:00 - 19:00',
        duracao_visita: '30 minutos',
        dica: 'Visite durante a missa para experiência cultural mais completa.',
        como_chegar: 'Centro histórico de Jaboatão',
        atividades: ['Visitação histórica', 'Fotografia', 'Contemplação']
      },
      {
        id: 4,
        nome: 'Praia do Barra de Jangada',
        descricao: 'Praia de águas tranquilas perfeita para famílias e prática de esportes aquáticos.',
        horario: '6:00 - 18:00',
        duracao_visita: '3 horas',
        dica: 'Alugue uma jangada para passear pelo rio. Ótimo para pescaria.',
        como_chegar: 'Seguir pela BR-101 em direção ao Porto de Galinhas',
        atividades: ['Natação', 'Pesca', 'Passeio de jangada']
      }
    ]
  },
  'fim-de-semana': {
    titulo: 'Fim de Semana',
    duracao: '2 dias',
    cor: '#F9BC00',
    pontos: [
      {
        id: 1,
        nome: 'Praia de Candeias',
        descricao: 'Praia urbana com boa infraestrutura, bares, restaurantes e calçadão para caminhadas.',
        horario: '6:00 - 20:00',
        duracao_visita: '4 horas',
        dica: 'Visite no final de tarde para ver o pôr do sol espetacular.',
        como_chegar: 'Avenida Beira-Mar, Candeias',
        atividades: ['Banho de mar', 'Caminhada', 'Gastronomia']
      },
      {
        id: 2,
        nome: 'Parque Urbano de Jaboatão',
        descricao: 'Área verde com lagos, trilhas, playground e espaço para picnics e atividades ao ar livre.',
        horario: '6:00 - 18:00',
        duracao_visita: '2 horas',
        dica: 'Legue lanche e faça um piquenique. Tem área para crianças.',
        como_chegar: 'Rua das Palmeiras, Jaboatão dos Guararapes',
        atividades: ['Caminhada', 'Piquenique', 'Ciclismo']
      },
      {
        id: 3,
        nome: 'Museu do Homem do Nordeste',
        descricao: 'Acervo sobre a cultura e história do povo nordestino, com exposições interativas.',
        horario: '9:00 - 17:00 (Terça a Domingo)',
        duracao_visita: '2 horas',
        dica: 'Contrate um guia para explicar melhor as exposições.',
        como_chegar: 'Avenida 17 de Agosto, Recife (próximo a Jaboatão)',
        atividades: ['Visitação cultural', 'Educação', 'Fotografia']
      },
      {
        id: 4,
        nome: 'Praia de Gaibu',
        descricao: 'Praia com ondas fortes, muito procurada para surf e com belas formações rochosas.',
        horario: '6:00 - 18:00',
        duracao_visita: '3 horas',
        dica: 'Cuidado com as correntezas. Ideal para surfistas.',
        como_chegar: 'PE-28, direção sul',
        atividades: ['Surf', 'Fotografia', 'Observação marinha']
      },
      {
        id: 5,
        nome: 'Restaurante Beira Mar',
        descricao: 'Especializado em frutos do mar frescos, com vista privilegiada para o mar.',
        horario: '11:00 - 23:00',
        duracao_visita: '2 horas',
        dica: 'Peça a moqueca de peixe. Faça reserva nos fins de semana.',
        como_chegar: 'Avenida Beira-Mar, Piedade',
        atividades: ['Gastronomia', 'Romance', 'Fotografia']
      },
      {
        id: 6,
        nome: 'Ponte Maurício de Nassau',
        descricao: 'Construção histórica que conecta Recife e Olinda, ponto turístico icônico.',
        horario: 'Acesso 24h',
        duracao_visita: '1 hora',
        dica: 'Melhor vista ao amanhecer ou anoitecer.',
        como_chegar: 'Acesso pela BR-101',
        atividades: ['Fotografia', 'Contemplação', 'História']
      }
    ]
  },
  'passeio-da-fe': {
    titulo: 'Passeio da Fé',
    duracao: '1 dia',
    cor: '#0044CA',
    pontos: [
      {
        id: 1,
        nome: 'Convento de São Francisco',
        descricao: 'Construção colonial do século XVI, importante monumento religioso e arquitetônico.',
        horario: '8:00 - 12:00 / 14:00 - 17:00',
        duracao_visita: '1 hora',
        dica: 'Vista roupas adequadas para local religioso. Silêncio respeitoso.',
        como_chegar: 'Centro histórico de Olinda',
        atividades: ['Visitação histórica', 'Oração', 'Fotografia']
      },
      {
        id: 2,
        nome: 'Basílica da Penha',
        descricao: 'Igreja no alto de uma colina com vista panorâmica da cidade, local de peregrinação.',
        horario: '6:00 - 19:00',
        duracao_visita: '1 hora',
        dica: 'Suba a pé para experiência completa. Leve água.',
        como_chegar: 'Morro da Penha, Recife',
        atividades: ['Peregrinação', 'Fotografia', 'Contemplação']
      },
      {
        id: 3,
        nome: 'Igreja de Nossa Senhora do Carmo',
        descricao: 'Joia barroca com altar folheado a ouro, um dos mais belos templos da região.',
        horario: '8:00 - 12:00 / 14:00 - 18:00',
        duracao_visita: '45 minutos',
        dica: 'Participe da missa das 10h aos domingos para experiência completa.',
        como_chegar: 'Rua do Carmo, Olinda',
        atividades: ['Missa', 'Visitação artística', 'Meditação']
      },
      {
        id: 4,
        nome: 'Cruz do Carmo',
        descricao: 'Monumento religioso no ponto mais alto da cidade, tradicional local de procissões.',
        horario: 'Acesso livre',
        duracao_visita: '30 minutos',
        dica: 'Local ideal para oração e contemplação. Vista panorâmica.',
        como_chegar: 'Alto da Sé, Olinda',
        atividades: ['Oração', 'Fotografia', 'Procissões']
      },
      {
        id: 5,
        nome: 'Mosteiro de São Bento',
        descricao: 'Mosteiro beneditino em funcionamento, com belíssimo interior e coro gregoriano.',
        horario: '8:00 - 11:30 / 14:30 - 17:30',
        duracao_visita: '1 hora',
        dica: 'Não perca os cantos gregorianos aos domingos (10h).',
        como_chegar: 'Rua São Bento, Recife',
        atividades: ['Canto gregoriano', 'Visitação', 'Meditação']
      }
    ]
  }
};

export default function PontosExperiencia() {
  return (
    <div className="min-h-screen bg-white py-12 mt-32">
      
      {/* Header simples */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0044CA] uppercase tracking-tighter italic leading-none mb-4">
          VIVA A <br />
          <span style={{ color: '#F9BC00', textShadow: '5px 5px 0px #00751D' }}>
            EXPERIÊNCIA
          </span>
        </h1>
        <p className="text-lg md:text-xl font-bold text-slate-600">
          Todos os pontos turísticos e roteiros de Jaboatão
        </p>
      </div>

      {/* Conteúdo dos Roteiros */}
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        {Object.entries(PONTOS_TURISTICOS).map(([slug, roteiro]) => (
          <div key={slug}>
            
            {/* Cabeçalho do Roteiro */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-2xl"
                  style={{ backgroundColor: roteiro.cor }}
                >
                  {roteiro.duracao.split(' ')[0]}
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-black text-[#0044CA] uppercase tracking-tighter italic leading-none">
                    {roteiro.titulo}
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm font-bold text-slate-600">{roteiro.duracao}</span>
                    <div className="h-1 w-1 bg-slate-400 rounded-full"></div>
                    <span className="text-sm font-bold text-slate-600">{roteiro.pontos.length} pontos</span>
                  </div>
                </div>
              </div>
              <div className="h-1.5 w-24 rounded-full" style={{ backgroundColor: roteiro.cor }}></div>
            </div>

            {/* Grid de Pontos - Apenas os cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {roteiro.pontos.map((ponto, index) => (
                <div
                  key={ponto.id}
                  className="group bg-white/95 hover:bg-white p-6 rounded-4xl shadow-2xl transition-all duration-300 border-b-4 border-[#00751D] hover:-translate-y-1"
                >
                  
                  {/* Número e duração */}
                  <div className="flex items-center justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-md"
                      style={{ backgroundColor: roteiro.cor }}
                    >
                      {index + 1}
                    </div>
                    <span className="text-sm font-black text-[#00751D] uppercase tracking-tighter opacity-80">
                      {ponto.duracao_visita}
                    </span>
                  </div>

                  {/* Nome */}
                  <h3 className="text-lg font-black text-[#0044CA] uppercase tracking-tight leading-none mb-3">
                    {ponto.nome}
                  </h3>

                  {/* Descrição */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {ponto.descricao}
                  </p>

                  {/* Informações essenciais */}
                  <div className="space-y-3">
                    
                    {/* Horário */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-[#0044CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#00751D] uppercase tracking-tighter opacity-80">Horário</p>
                        <p className="text-sm text-slate-700 font-medium">{ponto.horario}</p>
                      </div>
                    </div>

                    {/* Como Chegar */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-[#0044CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#00751D] uppercase tracking-tighter opacity-80">Como Chegar</p>
                        <p className="text-sm text-slate-700 font-medium">{ponto.como_chegar}</p>
                      </div>
                    </div>

                    {/* Dica */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-[#0044CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#00751D] uppercase tracking-tighter opacity-80">Dica Especial</p>
                        <p className="text-sm text-slate-700 font-medium">{ponto.dica}</p>
                      </div>
                    </div>

                    {/* Atividades */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-[#0044CA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-black text-[#00751D] uppercase tracking-tighter opacity-80">Atividades</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {ponto.atividades.map((atividade, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-1 text-xs font-bold rounded-full bg-[#F9BC00] text-[#0044CA]"
                            >
                              {atividade}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
