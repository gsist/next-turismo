import type {
  Attraction,
  Curiosity,
  Experience,
  HistoryPeriod,
  Itinerary,
  MenuItem,
} from "@/types/tourism";

export const menuItems: MenuItem[] = [
  { label: "O que conhecer", href: "/o-que-conhecer" },
  { label: "História", href: "/historia" },
  { label: "Destaques", href: "/destaques" },
];

export const experiences: Experience[] = [
  {
    id: "praias-litoral",
    title: "Praias do litoral de Jaboatão",
    description:
      "Orla com belas paisagens, barracas e clima perfeito para aproveitar o dia com família e amigos.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    tag: "Sol e mar",
  },
  {
    id: "turismo-rural",
    title: "Turismo rural e natureza",
    description:
      "Sítios, áreas verdes e trilhas leves que conectam visitantes à cultura local e à vida no campo.",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=80",
    tag: "Natureza",
  },
  {
    id: "igrejas-historicas",
    title: "Igrejas e patrimônio histórico",
    description:
      "Roteiro cultural com construções religiosas e espaços que contam momentos marcantes da região.",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1400&q=80",
    tag: "Cultura",
  },
];

export const attractions: Attraction[] = [
  {
    id: "praia-candeias",
    title: "Praia de Candeias",
    description:
      "Trecho movimentado do litoral, ideal para caminhada no calçadão e experiências gastronômicas.",
    image:
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1200&q=80",
    category: "Praias",
  },
  {
    id: "piscinas-naturais",
    title: "Piscinas naturais",
    description:
      "Passeios com jangada em maré baixa revelam águas calmas e cenários inesquecíveis.",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80",
    category: "Experiência",
  },
  {
    id: "rota-rural",
    title: "Rota do turismo rural",
    description:
      "Experiência no interior do município com paisagens verdes, produção local e tranquilidade.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    category: "Turismo rural",
  },
  {
    id: "igrejas-coloniais",
    title: "Igrejas históricas",
    description:
      "Arquitetura colonial e tradição religiosa em um passeio que une fé, história e arte.",
    image:
      "https://images.unsplash.com/photo-1526749837599-b4eba9fd855e?auto=format&fit=crop&w=1200&q=80",
    category: "História e fé",
  },
];

export const itineraries: Itinerary[] = [
  {
    id: "jaboatao-um-dia",
    title: "Jaboatão em um dia",
    estimatedTime: "8 horas",
    stops: [
      { order: 1, place: "Orla de Candeias" },
      { order: 2, place: "Piscinas naturais" },
      { order: 3, place: "Centro histórico" },
      { order: 4, place: "Polo gastronômico local" },
    ],
    tips: [
      "Saia cedo para aproveitar maré baixa.",
      "Use protetor solar e água para hidratação.",
      "Prefira deslocamentos curtos por aplicativo no centro.",
    ],
  },
  {
    id: "fim-semana-jaboatao",
    title: "Fim de semana em Jaboatão",
    estimatedTime: "2 dias",
    stops: [
      { order: 1, place: "Dia 1: praias e jangada" },
      { order: 2, place: "Dia 1: pôr do sol no litoral" },
      { order: 3, place: "Dia 2: turismo rural" },
      { order: 4, place: "Dia 2: igreja histórica e feira local" },
    ],
    tips: [
      "Reserve hospedagem próxima à orla.",
      "Combine experiências de praia com turismo cultural.",
      "Verifique previsão do tempo antes dos passeios.",
    ],
  },
  {
    id: "passeio-da-fe",
    title: "Passeio da Fé",
    estimatedTime: "5 horas",
    stops: [
      { order: 1, place: "Igreja histórica local" },
      { order: 2, place: "Praça central e memorial" },
      { order: 3, place: "Capela tradicional" },
      { order: 4, place: "Almoço regional" },
    ],
    tips: [
      "Use roupas confortáveis para caminhada.",
      "Respeite horários de visitação e celebrações.",
      "Aproveite para conhecer a culinária regional.",
    ],
  },
];

export const curiosities: Curiosity[] = [
  {
    id: "nome-cidade",
    title: "Origem do nome Jaboatão",
    content:
      "O nome do município tem raízes indígenas e revela a forte presença histórica dos povos originários na região.",
  },
  {
    id: "cultura-pernambucana",
    title: "Cultura pernambucana viva",
    content:
      "A cidade participa de tradições marcantes do estado, com música, dança e gastronomia ricas em identidade local.",
  },
  {
    id: "litoral-campo",
    title: "Litoral e campo no mesmo roteiro",
    content:
      "Jaboatão combina experiências de praia com turismo rural, oferecendo variedade em distâncias curtas.",
  },
];

export const historyTimeline: HistoryPeriod[] = [
  {
    id: "periodo-colonial",
    period: "Séculos XVI e XVII",
    title: "Formação dos primeiros núcleos",
    description:
      "A região cresceu com engenhos e atividades ligadas à economia colonial, consolidando caminhos importantes no estado.",
  },
  {
    id: "expansao-urbana",
    period: "Século XX",
    title: "Expansão urbana e integração",
    description:
      "Com a modernização da região metropolitana, Jaboatão ganhou novos bairros e importância econômica crescente.",
  },
  {
    id: "atualidade",
    period: "Atualidade",
    title: "Cidade diversa e turística",
    description:
      "Hoje o município reúne patrimônio histórico, turismo de praia, turismo rural e manifestações culturais de Pernambuco.",
  },
];
