// front-ciptea/src/app/components/SistemaAdmin/DashboardLayout/Sidebar/admin.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiUser } from "react-icons/fi";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

interface MenuItem {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}) {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  const bgClass = isDark ? "bg-[#1E2939]" : "bg-[#ffffff]";
  const textClass = isDark ? "text-gray-200" : "text-gray-700";
  const hoverBgClass = isDark ? "hover:bg-gray-600" : "hover:bg-gray-200";
  const hoverTextClass = isDark ? "hover:text-white" : "hover:text-blue-800";
  const activeClass = isDark
    ? "bg-white text-blue-900 font-bold"
    : "bg-[#DBEAFE] text-blue-800 font-bold";
  const dividerClass = "border-t border-gray-300 dark:border-gray-600 my-4 mx-4";

  const logoSrc = sidebarOpen
    ? isDark ? "/images/Logo/logo-longa-fundo.png" : "/images/Logo/logo-longa-fundo.png"
    : isDark ? "/images/Logo/logo-longa-fundo.png" : "/images/Logo/logo-longa-fundo.png";

  const menuItems: MenuItem[] = [
    { href: "/sistema-admin/criar-eventos", icon: <FiUser size={20} />, label: "Criar Eventos" },
    { href: "/sistema-admin/eventos", icon: <FiUser size={20} />, label: " Eventos" },

  ];

  const MenuItem = ({ href, icon, label }: MenuItem) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg duration-200 ${
          isActive ? activeClass : `${textClass} ${hoverBgClass} ${hoverTextClass}`
        }`}
      >
        {icon}
        {sidebarOpen && <span className="text-sm font-medium">{label}</span>}
      </Link>
    );
  };

  return (
    <>
      <aside
        className={`flex flex-col min-h-screen shadow-md duration-300 z-50 ${
          sidebarOpen ? "w-64" : "w-16"
        } fixed inset-y-0 left-0 md:static ${bgClass}`}
      >
        <div className="flex flex-col items-center px-4 py-6">
          <Image
            src={logoSrc}
            alt="Logo"
            width={sidebarOpen ? 180 : 40}
            height={sidebarOpen ? 100 : 40}
            className="duration-200"
          />
          <div className={dividerClass} />
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`self-start cursor-pointer ${isDark ? "text-gray-300" : "text-gray-600"}`}
            aria-label={sidebarOpen ? "Fechar menu" : "Abrir menu"}
          >
            <FiMenu size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 px-2">
          {menuItems.map((item, index) => (
            <MenuItem
              key={`${item.href}-${index}`}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </nav>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-[#00000092] bg-opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}