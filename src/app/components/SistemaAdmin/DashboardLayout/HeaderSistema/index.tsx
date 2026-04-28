// src/app/components/HeaderSistema/index.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { FiSun, FiMoon, FiLogOut, FiChevronDown } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import axios from 'axios';

interface UserResponse {
  name: string;
}

const HeaderSistema: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [nameUser, setNameUser] = useState<string>('');
  const userMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const storedName = localStorage.getItem('userName');
        if (storedName) {
          setNameUser(storedName);
          return;
        }

        const response = await axios.post<UserResponse>(
          `${process.env.NEXT_PUBLIC_API_URL}/ad/checkUser/admin`,
          {},
          { withCredentials: true }
        );

        if (response.data.name) {
          setNameUser(response.data.name);
          localStorage.setItem('userName', response.data.name);
        } else {
          localStorage.removeItem('userName');
          router.push('/login-admin');
        }
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        localStorage.removeItem('userName');
        router.push('/login-admin');
      } finally {
        setMounted(true);
      }
    };

    fetchUser();

    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [router]);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const toggleDarkMode = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const toggleUserMenu = () => {
    setUserMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/ad/logout`,
        {},
        { withCredentials: true }
      );
      localStorage.removeItem('userName');
      setNameUser('');
      setUserMenuOpen(false);
      document.cookie = 'auth_admin=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;';
      router.push("/login-admin");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      localStorage.removeItem('userName');
      setNameUser('');
      setUserMenuOpen(false);
      document.cookie = 'auth_admin=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT;';
      router.push("/login-admin");
    }
  };

  const user = {
    tipo_usuario: "admin",
  };
  const formatarTipoUsuario = (tipo?: string) => {
    switch (tipo) {
      case "admin":
        return "Administrador";
      default:
        return "Administrador";
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b shadow-sm transition-colors ${
        isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-5">
        <div className="flex items-center">
          {/* Logo ou título do sistema */}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-md transition-colors hover:bg-gray-100 ${
              isDark
                ? "text-gray-300 hover:bg-gray-700"
                : "text-gray-400 hover:text-gray-500"
            }`}
            aria-label="Alternar tema"
          >
            {isDark ? (
              <FiSun className="h-5 w-5 cursor-pointer" />
            ) : (
              <FiMoon className="h-5 w-5 cursor-pointer" />
            )}
          </button>

          <div className="relative" ref={userMenuRef}>
            <button
              onClick={toggleUserMenu}
              className="flex items-center space-x-3 focus:outline-none group"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium group-hover:bg-blue-700 transition-all">
                {nameUser ? nameUser.charAt(0).toUpperCase() : 'A'}
              </div>
              <div className="text-left hidden sm:block cursor-pointer">
                <div
                  className={`text-sm font-medium transition-colors ${
                    isDark
                      ? "text-gray-200"
                      : "text-gray-700 group-hover:text-gray-900"
                  }`}
                >
                  Olá, {nameUser || 'Usuário'}
                </div>
                <div className="text-xs text-gray-400">
                  {formatarTipoUsuario(user.tipo_usuario)}
                </div>
              </div>
              <FiChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                  userMenuOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>

            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white hover:bg-gray-200 rounded-lg shadow-xl py-1 z-50 border border-gray-100 divide-y divide-gray-100">
                <button
                  onClick={handleLogout}
                  className="cursor-pointer w-full text-left px-4 py-2.5 text-sm text-gray-700 transition-all flex items-center"
                >
                  <div className="p-1 mr-2 rounded-lg">
                    <FiLogOut className="w-4 h-4 text-gray-500" />
                  </div>
                  Sair
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSistema;