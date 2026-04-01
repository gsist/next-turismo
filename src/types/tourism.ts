export type MenuItem = {
  label: string;
  href: string;
};

export type Experience = {
  id: string;
  title: string;
  description: string;
  image: string;
  tag?: string;
};

export type Attraction = {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
};

export type ItineraryStop = {
  order: number;
  place: string;
};

export type Itinerary = {
  id: string;
  title: string;
  estimatedTime: string;
  tips: string[];
  stops: ItineraryStop[];
};

export type Curiosity = {
  id: string;
  title: string;
  content: string;
};

export type HistoryPeriod = {
  id: string;
  period: string;
  title: string;
  description: string;
};
