import { ExperienceCard } from "@/components/site/ExperienceCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { experiences } from "@/data/tourismData";

export default function DestaquesView() {
  return (
    <section className="min-h-[50vh] bg-gradient-to-b from-white to-imune-sky/40 py-14 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          as="h1"
          tone="blue"
          title="Destaques"
          subtitle="Experiências turísticas populares para incluir no seu roteiro."
        />

        <div className="mt-2 rounded-2xl border-2 border-imune-yellow/50 bg-white p-6 shadow-lg ring-4 ring-imune-lemon/90">
          <p className="text-sm font-bold uppercase tracking-wide text-imune-yellow-dark">
            Alerta de segurança — passeio de jangada
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
            Realize o passeio apenas com condutores autorizados e em condições
            seguras de maré e clima. Use colete salva-vidas durante todo o trajeto.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
