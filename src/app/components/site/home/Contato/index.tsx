"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Aqui você deve configurar o endpoint real que enviará o email
    // Exemplo usando uma API route do Next.js
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ nome: "", email: "", mensagem: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const location = {
    name: "Complexo Administrativo da Prefeitura do Jaboatão Dos Guararapes",
    address: "Jaboatão dos Guararapes - PE",
    lat: -8.1126,
    lng: -35.0148
  };

  return (
    <section id="contato" className="relative min-h-screen lg:h-screen w-full flex items-center bg-[#e3e7ef] overflow-hidden py-20 lg:py-0">
      
      {/* ── FUNDO DECORATIVO ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0044CA]/5 -skew-x-12 translate-x-20" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#F9BC00]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* COLUNA ESQUERDA: MAPA E INFORMAÇÕES */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <div className="inline-block px-4 py-2 bg-[#F9BC00]/20 rounded-lg mb-6">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#00751D]">Onde Estamos</span>
              </div>
              
              <h2 className="text-5xl lg:text-7xl font-black text-[#0044CA] leading-[0.85] tracking-tighter uppercase italic mb-8">
                NOSSA <br />
                <span className="text-[#F9BC00] drop-shadow-[4px_4px_0px_#00751D]">LOCALIZAÇÃO</span>
              </h2>
            </div>

            {/* Mapa */}
            <div className="bg-white rounded-[2.5rem] overflow-hidden border-2 border-slate-100 shadow-xl">
              <iframe
                src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa da Prefeitura de Jaboatão dos Guararapes"
                className="w-full"
              />
              <div className="p-6">
                <p className="text-lg font-black text-[#0044CA]">
                  📍 {location.name}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Complexo Administrativo da Prefeitura do Jaboatão Dos Guararapes
                </p>
              </div>
            </div>

            {/* Informação adicional */}
            <div className="bg-[#0044CA]/10 rounded-2xl p-6 border border-[#0044CA]/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F9BC00] flex items-center justify-center text-2xl">
                  🏛️
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-wider text-[#00751D]">Instituto de Previdência</p>
                  <p className="text-sm font-bold text-[#0044CA]">IPSM - Jaboatão dos Guararapes</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA: FORMULÁRIO */}
          <div className="bg-white rounded-[2.5rem] p-8 lg:p-10 border-2 border-slate-100 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-block px-4 py-2 bg-[#F9BC00]/20 rounded-lg mb-4">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[#00751D]">Fale Conosco</span>
              </div>
              <h3 className="text-3xl font-black text-[#0044CA] uppercase italic">
                Envie sua <span className="text-[#F9BC00] drop-shadow-[2px_2px_0px_#00751D]">mensagem</span>
              </h3>
              <p className="text-gray-600 mt-2 text-sm">
                Responderemos o mais breve possível
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nome" className="block text-xs font-black uppercase tracking-wider text-[#00751D] mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl font-medium text-[#0044CA] placeholder:text-gray-400 focus:outline-none focus:border-[#F9BC00] transition-colors"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-black uppercase tracking-wider text-[#00751D] mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl font-medium text-[#0044CA] placeholder:text-gray-400 focus:outline-none focus:border-[#F9BC00] transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block text-xs font-black uppercase tracking-wider text-[#00751D] mb-2">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-200 rounded-2xl font-medium text-[#0044CA] placeholder:text-gray-400 focus:outline-none focus:border-[#F9BC00] transition-colors resize-none"
                  placeholder="Digite sua mensagem aqui..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-3 bg-[#00751D] text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-[8px_8px_0px_#F9BC00] hover:shadow-none hover:translate-x-1 hover:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="text-2xl">✉️</span>
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </button>

              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-100 border-2 border-green-500 rounded-2xl text-green-700 text-center font-bold">
                  ✅ Mensagem enviada com sucesso!
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-100 border-2 border-red-500 rounded-2xl text-red-700 text-center font-bold">
                  ❌ Erro ao enviar. Tente novamente.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}