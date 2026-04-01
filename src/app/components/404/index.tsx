import Link from "next/link";
import { useEffect } from "react";

export default function NotFoundPage() {
  useEffect(() => {
    // Define o título da página quando o componente montar
    const prev = document.title;
    document.title = "404 — Página não encontrada";
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-linear-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 p-6">
      <section
        className="relative max-w-5xl w-full bg-white/80 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-8 md:p-12 lg:p-16 overflow-hidden"
        aria-labelledby="page-404"
        role="article"
      >
        <svg
          className="pointer-events-none absolute -right-20 -top-16 opacity-20 mix-blend-screen dark:opacity-10 transform rotate-12 animate-[float_6s_ease-in-out_infinite]"
          width="420"
          height="420"
          viewBox="0 0 420 420"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <circle cx="70" cy="70" r="90" fill="#8b5cf6" />
          <circle cx="300" cy="260" r="120" fill="#06b6d4" />
        </svg>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: artwork / large 404 */}
          <div className="flex flex-col items-start gap-6">
            <h1
              id="page-404"
              className="text-6xl sm:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-[#FF8500] via-[#FDC300] to-[#FF8500] drop-shadow-lg"
            >
              404
            </h1>

            <p className="text-slate-700 dark:text-slate-300 text-lg sm:text-xl max-w-xl">
              Ooops! A página que você está procurando não existe, foi removida
              ou nunca existiu. Mas calma — vamos te levar de volta ao caminho
              certo.
            </p>

            <div className="flex gap-3 mt-2">
              <Link href="/"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 bg-linear-to-r from-[#0037C1] to-[#01aeec] text-white font-semibold shadow-lg hover:scale-[1.02] active:translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 transition-transform">
                  Voltar para a página inicial
              </Link>
            </div>
          </div>

          {/* Right: Illustration card */}
          <div className="relative flex items-center justify-center">
            <div className="w-full max-w-md p-6 rounded-2xl bg-linear-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg">
              <div className="flex items-center justify-center">
                {/* Cute robot/mascot illustration made with SVG for style + performance */}
                <svg
                  width="220"
                  height="220"
                  viewBox="0 0 220 220"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#a78bfa" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>

                  <rect
                    x="20"
                    y="40"
                    width="180"
                    height="140"
                    rx="20"
                    fill="url(#g1)"
                    opacity="0.95"
                  />

                  <circle cx="90" cy="95" r="10" fill="#fff" opacity="0.95" />
                  <circle cx="130" cy="95" r="10" fill="#fff" opacity="0.95" />

                  <rect
                    x="80"
                    y="120"
                    width="60"
                    height="12"
                    rx="6"
                    fill="#fff"
                    opacity="0.85"
                  />

                  <g transform="translate(30,126)">
                    <rect
                      x="0"
                      y="0"
                      width="160"
                      height="14"
                      rx="7"
                      fill="#ffffff22"
                    />
                  </g>

                  {/* little sparkles */}
                  <g opacity="0.9">
                    <circle cx="40" cy="30" r="4" fill="#fff" />
                    <circle cx="180" cy="180" r="3" fill="#fff" />
                    <rect
                      x="30"
                      y="170"
                      width="6"
                      height="6"
                      rx="1"
                      fill="#fff"
                      transform="rotate(20 33 173)"
                    />
                  </g>
                </svg>
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  Parece que nos perdemos...
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  Mas não se preocupe — temos mapas e café ☕
                </p>
              </div>
            </div>

            {/* subtle ring behind the card */}
            <div
              className="absolute -inset-6 rounded-3xl blur-3xl opacity-40 mix-blend-screen"
              aria-hidden
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(99,102,241,0.18), transparent 20%), radial-gradient(circle at 80% 80%, rgba(6,182,212,0.12), transparent 25%)",
              }}
            />
          </div>
        </div>

        {/* Small footer inside the card */}
        <footer className="mt-8 text-xs text-slate-400 dark:text-slate-500 flex items-center justify-between">
          <span>
            © {new Date().getFullYear()} Desenvolvido por: Secretaria Executiva de Governo Digital e Processos Estratégicos | SEGOP
          </span>
          <div className="flex items-center gap-3"></div>
        </footer>
      </section>
    </main>
  );
}