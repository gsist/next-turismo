type SectionTone = "green" | "blue" | "yellow" | "navy";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
  tone?: SectionTone;
};

function SectionIcon({ tone }: { tone: SectionTone }) {
  const cls =
    tone === "green"
      ? "text-imune-green"
      : tone === "blue"
        ? "text-imune-blue"
        : tone === "yellow"
          ? "text-imune-yellow-dark"
          : "text-imune-navy";

  return (
    <span
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md ring-1 ring-black/5 ${cls}`}
      aria-hidden
    >
      {tone === "green" ? (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
        </svg>
      ) : tone === "blue" ? (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h10v2H4v-2z" />
        </svg>
      ) : tone === "yellow" ? (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.8 5.7 21l2.3-7-6-4.6h7.6L12 2z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )}
    </span>
  );
}

export function SectionHeading({
  title,
  subtitle,
  as: Tag = "h2",
  tone = "green",
}: SectionHeadingProps) {
  const titleColor =
    tone === "green"
      ? "text-imune-green"
      : tone === "blue"
        ? "text-imune-blue"
        : tone === "yellow"
          ? "text-imune-yellow-dark"
          : "text-imune-navy";

  return (
    <div className="mb-10 max-w-3xl">
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <SectionIcon tone={tone} />
        <div className="min-w-0">
          <Tag
            className={`font-bold uppercase tracking-wide ${titleColor} ${
              Tag === "h1"
                ? "text-xl sm:text-2xl md:text-3xl"
                : "text-lg sm:text-xl"
            }`}
          >
            {title}
          </Tag>
          {subtitle ? (
            <p className="mt-2 max-w-2xl text-base font-normal normal-case leading-relaxed text-slate-600">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
