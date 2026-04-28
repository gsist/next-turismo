// src/app/layouts/SistemaLayoutAdm.tsx
"use client";

import "../globals.css";
import { ThemeProvider } from "next-themes";
import HeaderSistema from "@/app/components/SistemaAdmin/DashboardLayout/HeaderSistema"; 
import Sidebar from "@/app/components/SistemaAdmin/DashboardLayout/Sidebar/admin";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function SistemaLayoutAdm({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <DashboardLayout>{children}</DashboardLayout>
    </ThemeProvider>
  );
}

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`flex flex-col h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <HeaderSistema />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        
        <main
          className={`flex-1 p-6 overflow-auto transition-all duration-300 ${
            sidebarOpen ? "ml-14" : "ml-16"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}