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
import { menuItems } from "@/data/tourismData";

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
}

const navigation: NavItem[] = [
  { name: "Início", href: "/" },
  ...menuItems.map((item) => ({ name: item.label, href: item.href })),
];

const TopMenu = () => (
  <div
    style={{
      backgroundColor: "#0037C1",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "36px",
      zIndex: 9999,
    }}
  >
    <div className="flex h-full w-full flex-col items-center gap-2 px-5 py-2 text-sm text-white xl:flex-row xl:justify-between xl:px-14">
      <div className="flex justify-center gap-2">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-lg hover:text-yellow-300">{link.icon}</span>
          </Link>
        ))}
      </div>
      <div className="hidden gap-3 text-xs md:text-sm xl:flex">
        {institutionalLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://eouve.com.br/#/ouvidoria"
          target="_blank"
          rel="noopener noreferrer"
          className="icone-icon"
        >
          <Image
            src="/images/iconamarelo.svg"
            alt="Ícone amarelo"
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

  return (
    <nav className="hidden flex-1 justify-center text-center text-xs font-semibold uppercase sm:text-sm xl:flex xl:gap-6 xl:text-base">
      {navigation.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <div key={item.href}>
            <Link
              href={item.href}
              className={`relative inline-block rounded p-2 transition-all duration-300 ${
                isActive
                  ? "bg-[#0037C1] text-white"
                  : "text-[#0037C1] hover:bg-[#0037C1] hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          </div>
        );
      })}
    </nav>
  );
};

const Botaosiga = () => (
  <div className="hidden gap-3 text-lg text-white xl:flex xl:justify-end">
    <Link
      href="/o-que-conhecer"
      className="inline-block transform rounded-full border-2 border-white bg-[#0037C1] px-8 py-2 text-lg font-semibold text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:border-[#d1d5db] hover:bg-[#1300a8] hover:shadow-lg"
    >
      Explorar destinos
    </Link>
  </div>
);

const Logo = () => (
  <div className="shrink-0">
    <Link href="/">
      <Image
        src="/images/Logo/logo-longa.svg"
        alt="Prefeitura do Jaboatão dos Guararapes"
        width={210}
        height={60}
        className="h-auto w-auto max-w-[210px]"
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
        className="fixed inset-0 z-[10000] bg-black/60"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
      />
      <motion.div
        className="fixed right-0 top-9 z-[10001] flex h-[calc(100%-2.25rem)] w-full max-w-md flex-col overflow-hidden bg-yellow-400 shadow-lg"
        initial={{ x: "100%" }}
        animate={{ x: isClosing ? "100%" : 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-5">
          <Logo />
          <button
            type="button"
            onClick={handleClose}
            className="cursor-pointer p-2 text-2xl text-blue-800"
          >
            <FaTimes />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          <div className="flex flex-col items-center gap-4 pt-6">
            <Link
              href="/o-que-conhecer"
              onClick={handleClose}
              className="flex items-center justify-center rounded-full border-2 border-white bg-[#0037C1] px-8 py-2 text-lg font-semibold text-white transition duration-300 hover:bg-[#1300a8]"
            >
              Explorar destinos
            </Link>

            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleClose}
                className="text-lg font-semibold text-[#0037C1] hover:underline"
              >
                {item.name}
              </Link>
            ))}

            <div className="my-4 w-full border-t border-gray-300" />

            {institutionalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="block text-center text-base font-semibold text-[#0037C1] hover:underline"
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

      <div
        style={{
          backgroundColor: "#fdc300",
          position: "fixed",
          top: "36px",
          left: 0,
          width: "100%",
          zIndex: 9998,
        }}
      >
        <div className="w-full px-4 py-3 sm:px-6 xl:px-12 xl:py-4">
          <div className="flex items-center justify-between gap-3">
            <Logo />

            <DesktopMenu />

            <div className="flex shrink-0 items-center gap-4">
              <Botaosiga />

              <button
                type="button"
                onClick={toggleMenu}
                className="flex cursor-pointer items-center text-2xl text-[#0037C1] xl:hidden"
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
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
