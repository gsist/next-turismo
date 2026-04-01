import type { Itinerary } from "@/types/tourism";

type ItineraryCardProps = {
  itinerary: Itinerary;
  listIndex?: number;
};

const stopBarClass = (i: number) => {
  const m = i % 3;
  if (m === 0) return "bg-imune-green text-white";
  if (m === 1) return "bg-imune-blue text-white";
  return "bg-imune-yellow text-imune-navy";
};

export function ItineraryCard({ itinerary, listIndex = 1 }: ItineraryCardProps) {
  return (
    <article className="rounded-2xl border border-white/80 bg-white p-6 shadow-lg shadow-imune-navy/5 ring-1 ring-black/5">
      <div className="flex items-start gap-3 border-b border-slate-100 pb-5">
        <span
          className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-imune-blue text-base font-black text-white shadow-md"
          aria-hidden
        >
          {listIndex}
        </span>
        <div>
          <h3 className="text-lg font-bold text-imune-navy">{itinerary.title}</h3>
          <p className="mt-1 text-sm font-semibold text-imune-blue">
            Tempo estimado: {itinerary.estimatedTime}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Ordem de visita
        </h4>
        <ul className="mt-3 space-y-2">
          {itinerary.stops.map((stop, i) => (
            <li
              key={stop.order}
              className={`flex items-center justify-between gap-3 rounded-full px-4 py-3 text-sm font-semibold shadow-md transition hover:opacity-95 ${stopBarClass(i)}`}
            >
              <span>
                {stop.order}. {stop.place}
              </span>
              <span className="opacity-90" aria-hidden>
                ▼
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 rounded-2xl bg-imune-sky/60 p-4 ring-1 ring-imune-blue/10">
        <h4 className="text-xs font-bold uppercase tracking-wider text-imune-blue">
          Dicas para turistas
        </h4>
        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700">
          {itinerary.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
