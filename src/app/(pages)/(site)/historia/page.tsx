import { SectionHeading } from "@/components/site/SectionHeading";
import { historyTimeline } from "@/data/tourismData";

export default function HistoriaPage() {
  return (
    <section className="min-h-[50vh] bg-imune-sky/60 py-14 sm:py-16">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          as="h1"
          tone="navy"
          title="História"
          subtitle="Jaboatão dos Guararapes reúne heranças do período colonial, crescimento urbano e uma identidade cultural forte no contexto pernambucano."
        />

        <div className="mt-4 space-y-5 border-l-4 border-imune-blue/40 pl-6 sm:pl-8">
          {historyTimeline.map((event, i) => (
            <article
              key={event.id}
              className="relative rounded-2xl border border-white/90 bg-white p-6 shadow-lg ring-1 ring-black/5"
            >
              <span
                className={`absolute -left-[39px] top-7 flex h-4 w-4 rounded-full border-[3px] border-white shadow sm:-left-[43px] ${
                  i % 3 === 0
                    ? "bg-imune-green"
                    : i % 3 === 1
                      ? "bg-imune-blue"
                      : "bg-imune-yellow"
                }`}
              />
              <p className="text-xs font-bold uppercase tracking-wider text-imune-blue">
                {event.period}
              </p>
              <h2 className="mt-2 text-xl font-bold text-imune-navy">{event.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {event.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
