import Image from "next/image";
import Link from "next/link";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
};

const heroActions = [
  {
    href: "/o-que-conhecer",
    label: "O que conhecer",
    className:
      "bg-imune-green text-white shadow-imune-green/30 hover:bg-imune-green-light",
  },
  {
    href: "/historia",
    label: "História",
    className:
      "bg-imune-blue text-white shadow-imune-blue/30 hover:bg-imune-blue-light",
  },
  {
    href: "/destaques",
    label: "Destaques",
    className:
      "bg-imune-yellow text-imune-navy shadow-imune-yellow/40 hover:bg-imune-yellow-dark hover:text-white",
  },
  {
    href: "/#roteiros",
    label: "Roteiros",
    className:
      "bg-imune-green text-white shadow-imune-green/30 hover:bg-imune-green-light",
  },
] as const;

export function HeroSection({ title, subtitle, imageUrl }: HeroSectionProps) {
  return (
    <section className="imune-hero-dots relative overflow-hidden">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-imune-green/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-imune-yellow/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex justify-center lg:order-1 lg:justify-start">
            <div className="relative h-64 w-64 shrink-0 sm:h-72 sm:w-72">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-imune-green via-imune-blue to-imune-yellow opacity-25 blur-xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-[6px] border-white shadow-2xl shadow-imune-navy/15 ring-4 ring-imune-blue/20">
                <Image
                  src={imageUrl}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 288px, 320px"
                />
              </div>
            </div>
          </div>

          <div className="text-center lg:order-2 lg:text-left">
            <p className="mb-3 inline-flex rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-imune-blue shadow-sm ring-1 ring-imune-blue/15">
              Jaboatão dos Guararapes · PE
            </p>
            <h1 className="text-balance text-3xl font-bold leading-tight text-imune-navy sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0 lg:max-w-2xl">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {heroActions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold shadow-lg transition-all hover:shadow-xl ${action.className}`}
                >
                  <span
                    className="inline-block h-2 w-2 shrink-0 rounded-full bg-white/90"
                    aria-hidden
                  />
                  {action.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
