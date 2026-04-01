import { AttractionCard } from "@/components/site/AttractionCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { attractions } from "@/data/tourismData";

const variants = ["green", "blue", "yellow"] as const;

export default function OQueConhecerPage() {
  return (
    <section className="min-h-[50vh] bg-imune-mint/50 py-14 sm:py-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          as="h1"
          tone="green"
          title="O que conhecer"
          subtitle="Explore atrações que combinam litoral, turismo rural, patrimônio histórico e experiências culturais em Jaboatão dos Guararapes."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {attractions.map((attraction, i) => (
            <AttractionCard
              key={attraction.id}
              attraction={attraction}
              variant={variants[i % variants.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
