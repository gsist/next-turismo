import Image from "next/image";
import type { Experience } from "@/types/tourism";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/80 bg-white shadow-lg shadow-imune-navy/5 ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 w-full sm:h-52">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
      </div>
      <div className="border-t-4 border-imune-green p-5 sm:p-6">
        {experience.tag ? (
          <span className="inline-block rounded-full bg-imune-mint px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-imune-green ring-1 ring-imune-green/20">
            {experience.tag}
          </span>
        ) : null}
        <h3 className="mt-3 text-lg font-bold text-imune-navy">{experience.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          {experience.description}
        </p>
      </div>
    </article>
  );
}
