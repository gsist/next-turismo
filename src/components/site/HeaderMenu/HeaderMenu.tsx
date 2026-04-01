"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "@/data/tourismData";

export function HeaderMenu() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-imune-navy text-[11px] text-white sm:text-xs">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-2 sm:px-6 lg:px-8">
          <span className="font-semibold tracking-wide">
            Prefeitura Municipal de Jaboatão dos Guararapes
          </span>
          <span className="text-white/80">Pernambuco · Brasil</span>
        </div>
      </div>

      <div className="border-b border-slate-200/90 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-widest text-imune-blue">
              Secretaria de Turismo
            </span>
            <span className="text-lg font-bold leading-tight text-imune-navy group-hover:text-imune-blue">
              Portal de Turismo
            </span>
          </Link>

          <nav aria-label="Menu principal">
            <ul className="flex flex-wrap items-center gap-2 sm:gap-3">
              {menuItems.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`inline-flex rounded-full px-4 py-2 text-sm font-bold transition-all ${
                        active
                          ? "bg-imune-green text-white shadow-md shadow-imune-green/25"
                          : "text-imune-navy hover:bg-imune-mint hover:text-imune-green"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <div className="h-1.5 bg-gradient-to-r from-imune-green via-imune-blue to-imune-yellow" />
    </header>
  );
}
