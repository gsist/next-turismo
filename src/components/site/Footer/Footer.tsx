import Link from "next/link";
import { menuItems } from "@/data/tourismData";

export function Footer() {
  return (
    <footer className="mt-auto bg-imune-navy text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <p className="text-base font-bold leading-snug">
              Prefeitura Municipal de Jaboatão dos Guararapes
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Portal de Turismo — informações sobre destinos, história e cultura
              local.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-imune-blue-light">
              Navegação
            </p>
            <ul className="mt-4 space-y-2 text-sm font-semibold">
              <li>
                <Link
                  href="/"
                  className="text-white/90 transition hover:text-white hover:underline"
                >
                  Início
                </Link>
              </li>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/90 transition hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-imune-yellow">
              Sobre o portal
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Conteúdo de caráter informativo. Para dados oficiais e serviços
              municipais, utilize os canais da administração pública.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-white py-5 text-imune-navy">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-4 text-center text-xs sm:flex-row sm:justify-between sm:text-left sm:px-6 lg:px-8">
          <span className="font-semibold text-imune-navy">
            Jaboatão dos Guararapes · Pernambuco
          </span>
          <span className="text-imune-navy/70">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
