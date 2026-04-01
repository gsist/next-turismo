import Image from "next/image";
import Link from "next/link";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

const heroActions = [
  { href: "/o-que-conhecer", label: "O que conhecer", variant: "primary" as const },
  { href: "/historia", label: "História", variant: "ghost" as const },
  { href: "/destaques", label: "Destaques", variant: "ghost" as const },
  { href: "/#roteiros", label: "Roteiros", variant: "accent" as const },
];

export function HeroSection({ title, subtitle, imageUrl }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl shadow-2xl ring-1 ring-black/5">
      <div className="relative min-h-[min(78vh,720px)] w-full sm:min-h-[min(82vh,800px)]">
        <Image
          src={imageUrl}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div
          className="absolute inset-0 bg-gradient-to-br from-[#0037C1]/95 via-[#002D9E]/80 to-[#fdc300]/45"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2),transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/35 to-transparent"
          aria-hidden
        />

        <div className="relative z-10 flex min-h-[min(78vh,720px)] flex-col justify-end px-6 pb-12 pt-8 sm:min-h-[min(82vh,800px)] sm:px-10 sm:pb-10 lg:px-0 lg:pb-16">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#fdc300] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0037C1] shadow-md shadow-black/10">
                <span className="h-2 w-2 rounded-full bg-[#0037C1]" aria-hidden />
                Jaboatão dos Guararapes · PE
              </p>

              <h1 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)] sm:text-4xl md:text-5xl lg:text-6xl">
                {title}
              </h1>

              <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/95 sm:text-lg">
                {subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:items-stretch xl:flex-row">
              {heroActions.map((action) => {
                const base =
                  "inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold shadow-lg transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";
                const styles =
                  action.variant === "primary"
                    ? "bg-[#fdc300] text-[#0037C1] hover:bg-white hover:shadow-xl"
                    : action.variant === "accent"
                      ? "border-2 border-white/90 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-[#0037C1]"
                      : "border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20";

                return (
                  <Link
                    key={action.href}
                    href={action.href}
                    className={`${base} ${styles}`}
                  >
                    {action.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute -bottom-px left-0 right-0 h-6 bg-gradient-to-t from-[#f4f8fb] to-transparent"
        aria-hidden
      />
    </section>
  );
}
