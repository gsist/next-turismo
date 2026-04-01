import { CuriosityCard } from "@/components/site/CuriosityCard";
import { ExperienceCard } from "@/components/site/ExperienceCard";
import { HeroSection } from "@/components/site/home/HeroSection/HeroSection";
import { ItineraryCard } from "@/components/site/ItineraryCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { curiosities, experiences, itineraries } from "@/data/tourismData";

export default function HomeContent() {
  return (
    <>
      <div className="px-4 pb-2 pt-6 sm:px-6 lg:px-8">
        <HeroSection
          title="Portal de Turismo de Jaboatão dos Guararapes"
          subtitle="Descubra experiências de praia, cultura, turismo rural e roteiros especiais em uma das cidades mais encantadoras de Pernambuco."
          imageUrl="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80"
        />
      </div>

      <section className="bg-imune-mint/80 py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tone="green"
            title="Destaques de experiências"
            subtitle="Selecione experiências para montar sua viagem com sol, cultura e natureza."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="roteiros"
        className="scroll-mt-24 bg-imune-sky/90 py-14 sm:py-16"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tone="blue"
            title="Roteiros turísticos"
            subtitle="Opções prontas para facilitar seu planejamento e otimizar o tempo."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {itineraries.map((itinerary, index) => (
              <ItineraryCard
                key={itinerary.id}
                itinerary={itinerary}
                listIndex={index + 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-imune-navy via-imune-navy-mid to-imune-blue px-8 py-10 text-center shadow-2xl shadow-imune-navy/25 sm:px-12 sm:py-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Destaque para turismo rural
          </h2>
          <p className="mx-auto mt-5 max-w-3xl border-t border-white/10 pt-5 text-base leading-relaxed text-white/90 sm:text-lg">
            Viva o lado verde de Jaboatão em propriedades rurais, trilhas leves
            e experiências de contato com a cultura local. Ideal para quem busca
            tranquilidade fora da orla.
          </p>
        </div>
      </section>

      <section className="bg-imune-lemon/95 py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tone="yellow"
            title="Curiosidades sobre Jaboatão"
            subtitle="Cultura local e vínculos com Pernambuco em fatos rápidos."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {curiosities.map((curiosity) => (
              <CuriosityCard key={curiosity.id} curiosity={curiosity} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
