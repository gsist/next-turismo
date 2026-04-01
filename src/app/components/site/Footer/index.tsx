import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { href: "https://x.com/jaboataoonline", icon: FaXTwitter, label: "X" },
  {
    href: "https://www.facebook.com/PrefeituradoJaboatao",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/prefjaboatao/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/user/prefeiturajaboatao/videos",
    icon: FaYoutube,
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <div className="relative w-full">
      <div className="flex items-center justify-center">
        <Image
          src="/images/Rodape/topo-rodape.png"
          alt="Topo do rodapé"
          width={1500}
          height={50}
          className="h-auto w-full"
          priority
        />
      </div>

      <div className="w-full bg-[#002D9E] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="border-l-2 border-dotted border-white pl-8 text-left">
              <h2 className="text-lg font-bold">MAPA DO SITE</h2>
              <div className="mb-2 mr-80 border-b border-white" />
              <ul className="text-[14px] font-normal leading-6">
                <li>
                  <Link
                    href="https://jaboatao.pe.gov.br/mapa-da-estrategia/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MAPA DA ESTRATÉGIA
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://portaldatransparencia.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PORTAL DA TRANSPARÊNCIA
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://portaldatransparencia.jaboatao.pe.gov.br/estrutura-organizacional/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ESTRUTURA ORGANIZACIONAL
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://jaboatao.pe.gov.br/galeria-de-elogios/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GALERIA DE ELOGIOS
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://jaboatao.pe.gov.br/servicos-para-o-cidadao/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CIDADÃO
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://jaboatao.pe.gov.br/carta-de-servicos/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CARTAS DE SERVIÇO
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://jaboatao.pe.gov.br/servicos-para-a-empresa/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    EMPRESA
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://servidor.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SERVIDOR
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://jaboatao.pe.gov.br/servicos-para-o-turista/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TURISTA
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://jaboatao.pe.gov.br/ppp-saude/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PPP-SAUDE
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://jaboatao.pe.gov.br/mapa-das-escolas/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MAPA DAS ESCOLAS MUNICIPAIS
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://jaboatao.pe.gov.br/mapas-das-unidades-de-saude-por-regional/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MAPA DAS UNIDADES DE SAÚDE POR REGIONAIS
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://jaboatao.pe.gov.br/mapa-dos-bares-e-restaurantes/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MAPA DOS BARES E RESTAURANTES
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://jaboatao.pe.gov.br/mapa-mercados-publicos/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MAPA DOS MERCADOS PÚBLICOS
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://jaboatao.pe.gov.br/mapa-das-unidades-do-cras-e-creas-municipais/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MAPA DAS UNIDADES DO CRAS E CREAS MUNICIPAIS
                  </Link>
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-dotted border-white pl-8 text-left">
              <h2 className="text-lg font-bold">SITES RELACIONADOS</h2>
              <div className="mb-2 mr-80 border-b border-white" />
              <ul className="text-[14px] font-normal leading-6">
                <li>
                  <Link
                    href="https://amorpor.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    AMOR JABOATÃO
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://bemestaranimal.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    BEM ESTAR ANIMAL
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://conselhodeusuarios.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CONSELHO DE USUÁRIOS
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://deolhonaconsulta.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DE OLHO NA CONSULTA
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://diariooficial.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    DIÁRIO OFICIAL
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://educacao.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    EDUCAÇÃO
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://economiacriativa.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ECONOMIA CRIATIVA
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://emlume.com.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    EMLUME
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://estacaobemestar.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ESTAÇÃO BEM ESTAR
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://jaboataoemacao.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    JABOATÃO EM AÇÃO
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://backendjaboataoprev.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    JABOATAOPREV
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://semam.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    MEIO AMBIENTE
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    OFICIAL
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://ouvidoria.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    OUVIDORIA
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.tinus.com.br/csp/JABOATAO/portal/index.csp"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PORTAL DO CONTRIBUINTE
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://portaldatransparencia.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PORTAL DA TRANSPARÊNCIA
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://procon.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PROCON
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://servidor.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SERVIDOR
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://trabalho.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    TRABALHO
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://viver.jaboatao.pe.gov.br/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIVER
                  </Link>
                </li>
              </ul>
            </div>

            <div className="border-l-2 border-dotted border-white pl-8 text-left">
              <div>
                <h2 className="text-lg font-bold">OUVIDORIA</h2>
                <div className="mb-2 mr-80 border-b border-white" />
                <p className="mb-4 text-[14px] font-normal leading-6">
                  OUVIDORIA GERAL: 0800 081 8999 / (81) 9.9422-5177
                  <br /> ATENDIMENTO DE SEGUNDA A SEXTA-FEIRA, DAS 8H ÀS 14H
                  <br /> E-MAIL: ouvidoria@jaboatao.pe.gov.br
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold">ACESSIBILIDADE</h2>
                <p className="mb-4 text-[14px] font-normal leading-6">
                  <Link
                    href="https://portaldatransparencia.jaboatao.pe.gov.br/informacoes-de-acessibilidade/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    INFORMAÇÕES
                  </Link>
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold">NAVEGABILIDADE</h2>
                <p className="mb-4 text-[14px] font-normal leading-6">
                  <Link
                    href="https://jaboatao.pe.gov.br/glossario/"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GLOSSÁRIO
                  </Link>
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold">ACOMPANHE-NOS</h2>
                <div className="flex gap-4">
                  {socialLinks.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="text-2xl text-white transition hover:text-yellow-300"
                    >
                      <s.icon />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white text-[#003476]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex items-center justify-center">
              <Image
                src="/images/Logo/logotop.png"
                alt="Logotipo"
                width={120}
                height={100}
                className="h-auto w-auto md:block"
              />
            </div>

            <div className="text-center">
              <p className="mb-4 text-sm font-medium italic">
                <strong>Palácio da Batalha</strong> <br />
                Av. Barreto de Menezes, 1648 – Prazeres <br />
                Jaboatão dos Guararapes – PE, CEP 54.310-310
              </p>
            </div>

            <div className="text-center text-sm font-medium italic md:text-right">
              <p>
                <strong>Complexo Administrativo</strong> <br />
                Estr. da Batalha, 1200 – Jardim Jordão <br />
                Jaboatão dos Guararapes – PE, CEP 54315-570
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-black py-2 text-white">
        <p className="text-center text-sm">
          Desenvolvido por: Secretaria Executiva de Governo Digital e Processos
          Estratégicos | SEGOP
        </p>
      </div>
    </div>
  );
}
