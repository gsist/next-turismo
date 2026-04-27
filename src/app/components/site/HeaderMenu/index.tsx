"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/prefjaboatao/",
    icon: <FaInstagram />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/PrefeituradoJaboatao",
    icon: <FaFacebookF />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/prefeiturajaboatao",
    icon: <FaYoutube />,
  },
  {
    name: "Twitter",
    href: "https://x.com/jaboataoonline",
    icon: <FaXTwitter />,
  },
];

const institutionalLinks = [
  {
    href: "http://diariooficial.jaboatao.pe.gov.br/",
    label: "Diário Oficial",
  },
  { href: "http://jaboatao.pe.gov.br/", label: "Site Oficial" },
  {
    href: "https://portaldatransparencia.jaboatao.pe.gov.br/",
    label: "Portal da Transparência",
  },
  { href: "http://ouvidoria.jaboatao.pe.gov.br/", label: "Ouvidoria" },
  {
    href: "https://www.tinus.com.br/csp/JABOATAO/portal/index.csp",
    label: "Portal do Contribuinte",
  },
  {
    href: "https://servidor.jaboatao.pe.gov.br/",
    label: "Portal do Servidor",
  },
  {
    href: "https://jaboataoemacao.jaboatao.pe.gov.br/",
    label: "COVID-19",
  },
  {
    href: "https://radardatransparencia.atricon.org.br/radar-da-transparencia-publica.html",
    label: "Radar da Transparência",
  },
];

interface NavItem {
  name: string;
  href: string;
  submenu?: NavItem[];
}

const navigation: NavItem[] = [
  {
    name: "Histórias",
    href: "#",
    submenu: [
      { name: "História do município", href: "/historia" },
      { name: "Batalha dos guararapes", href: "/historia" },
    ],
  },
  { name: "O que fazer?", href: "/o-que-conhecer" },
  { name: "Hospedagem", href: "/hospedagem" },
  { name: "Gastronomia", href: "/gastronomia" },
  { name: "Calendario de Eventos", href: "/calendario" },
  { name: "Turismo Rural", href: "/turismo-rural" },
  { name: "Contato", href: "/#contato" },

];

const TopMenu = () => (
  <div style={{ backgroundColor: "#0037C1", position: "fixed", top: 0, left: 0, width: "100%", height: "36px", zIndex: 9999 }}>
    <div className="w-full h-full text-white text-sm py-2 px-5 xl:px-14 flex flex-col xl:flex-row xl:justify-between items-center gap-2">
      <div className="flex gap-2 justify-center">
        {socialLinks.map((link) => (
          <Link key={link.name} href={link.href} target="_blank">
            <span className="hover:text-yellow-300 text-lg">{link.icon}</span>
          </Link>
        ))}
      </div>
      <div className="hidden xl:flex gap-3 text-xs md:text-sm">
        {institutionalLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            className="hover:underline"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://eouve.com.br/#/ouvidoria"
          target="_blank"
          className="icone-icon"
        >
          <Image
            src="/images/iconamarelo.png"
            alt="ícone amarelo"
            width={20}
            height={20}
          />
        </a>
      </div>
    </div>
  </div>
);

const DesktopMenu = () => {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <nav className="hidden xl:flex flex-row gap-4 xl:gap-6 text-xs sm:text-sm xl:text-base font-semibold uppercase text-center">
      {navigation.map((item) => {
        const hasSubmenu = item.submenu && item.submenu.length > 0;
        const isActive = !hasSubmenu && pathname === item.href;

        if (hasSubmenu) {
          return (
            <div 
              key={item.name}
              className="relative"
              onMouseEnter={() => setOpenSubmenu(item.name)}
              onMouseLeave={() => setOpenSubmenu(null)}
            >
              <Link
                href={item.href}
                className={`
                  relative p-2 rounded transition-all duration-300 inline-block font-semibold
                  ${openSubmenu === item.name 
                    ? "bg-[#0037C1] text-white" 
                    : "text-[#0037C1] hover:text-white hover:bg-[#0037C1]"
                  }
                `}
              >
                {item.name} ▼
              </Link>
              
              {openSubmenu === item.name && (
                <div 
                  className="absolute top-full left-0 bg-[#0037C1] shadow-lg w-56 border border-slate-300 z-50 flex flex-col rounded-md overflow-hidden"
                  onMouseEnter={() => setOpenSubmenu(item.name)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  {item.submenu!.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="px-4 py-1.5 text-base flex items-start hover:bg-[#fdfdfd] hover:text-[#0037C1] text-white font-normal transition-colors text-left"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return (
          <div key={item.href}>
            <Link
              href={item.href}
              className={`
                relative p-2 rounded transition-all duration-300 inline-block font-semibold
                ${isActive 
                  ? "bg-[#0037C1] text-white" 
                  : "text-[#0037C1] hover:text-white hover:bg-[#0037C1]"
                }
              `}
            >
              {item.name}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};


const Logo = () => (
  <div className="shrink-0">
    <Link href="/">
      <Image
        src="/images/Logo/logo.png"
        alt="Prefeitura do Jaboatão dos Guararapes"
        width={210}
        height={60}
        className="w-auto h-auto"
        priority
      />
    </Link>
  </div>
);

interface MobileMenuProps {
  closeMenu: () => void;
  isMenuOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu, isMenuOpen }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      closeMenu();
    }, 500);
  };

  if (!isMenuOpen) return null;

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/60 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
      />
      <motion.div
        className="fixed top-9 right-0 w-full h-[calc(100%-2.25rem)] bg-yellow-400 shadow-lg flex flex-col overflow-hidden z-50"
        initial={{ x: "100%" }}
        animate={{ x: isClosing ? "100%" : 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="py-5 px-5 flex justify-between items-center border-b border-gray-200">
          <Logo />
          <button
            onClick={handleClose}
            className="p-2 text-blue-800 text-2xl cursor-pointer"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          <div className="flex flex-col items-center gap-4 pt-10">
            <a
              href="/login-cidadao"
              onClick={handleClose}
              className="flex items-center justify-center bg-[#0037C1] text-white font-semibold text-lg px-8 py-2 rounded-full border-2 border-white hover:bg-[#1300a8] transition duration-300"
            >
              Minha Carteira
            </a>

            {navigation.map((item) => {
              const hasSubmenu = item.submenu && item.submenu.length > 0;

              if (hasSubmenu) {
                return (
                  <div key={item.name} className="w-full text-center">
                    <button
                      onClick={() => setOpenMobileSubmenu(openMobileSubmenu === item.name ? null : item.name)}
                      className="text-[#0037C1] font-semibold text-lg hover:underline inline-flex items-center gap-2"
                    >
                      {item.name} <span className="text-sm">{openMobileSubmenu === item.name ? "▲" : "▼"}</span>
                    </button>

                    {openMobileSubmenu === item.name && (
                      <div className="flex flex-col items-center gap-2 mt-2">
                        {item.submenu!.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={handleClose}
                            className="text-[#0037C1] font-semibold text-base hover:underline"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleClose}
                  className="text-[#0037C1] font-semibold text-lg hover:underline"
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="w-full border-t border-gray-300 my-4"></div>

            {institutionalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="block text-[#0037C1] font-semibold text-base hover:underline text-center"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default function HeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <TopMenu />
      
      {/* Header principal com fundo amarelo */}
      <div style={{ backgroundColor: "#fdc300", position: "fixed", top: "36px", left: 0, width: "100%", zIndex: 9998 }}>
        <div className="w-full px-4 sm:px-6 xl:px-12 py-3 xl:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Menu Desktop */}
            <DesktopMenu />

            {/* Botões */}
            <div className="flex items-center gap-4">
              
              {/* Botão mobile */}
              <button
                onClick={toggleMenu}
                className="xl:hidden flex items-center text-[#0037C1] text-2xl cursor-pointer"
              >
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <MobileMenu
        isMenuOpen={isMenuOpen}
        closeMenu={() => setIsMenuOpen(false)}
      />
    </>
  );
}