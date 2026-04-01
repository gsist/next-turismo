import Image from "next/image";
import type { Attraction } from "@/types/tourism";

type AttractionCardProps = {
  attraction: Attraction;
  variant?: "green" | "blue" | "yellow";
};

const pillStyles = {
  green: "bg-imune-green text-white",
  blue: "bg-imune-blue text-white",
  yellow: "bg-imune-yellow text-imune-navy",
} as const;

export function AttractionCard({
  attraction,
  variant = "blue",
}: AttractionCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-lg shadow-imune-navy/5 ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-xl">
      <div className="relative h-44 w-full sm:h-48">
        <Image
          src={attraction.image}
          alt={attraction.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <span
          className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide shadow-sm ${pillStyles[variant]}`}
        >
          {attraction.category}
        </span>
        <h3 className="mt-3 text-lg font-bold text-imune-navy">{attraction.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {attraction.description}
        </p>
      </div>
    </article>
  );
}
