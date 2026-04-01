import type { Curiosity } from "@/types/tourism";

type CuriosityCardProps = {
  curiosity: Curiosity;
};

export function CuriosityCard({ curiosity }: CuriosityCardProps) {
  return (
    <article className="rounded-2xl border border-white/80 bg-white p-6 shadow-lg shadow-imune-navy/5 ring-1 ring-black/5 transition hover:shadow-xl">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-imune-yellow text-sm font-bold text-imune-navy shadow-md"
          aria-hidden
        >
          !
        </span>
        <h3 className="text-base font-bold text-imune-navy">{curiosity.title}</h3>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">
        {curiosity.content}
      </p>
    </article>
  );
}
