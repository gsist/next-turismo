"use client";

import React, { useEffect, useState } from "react";
import {
  FiPlus,
  FiSearch,
  FiCalendar,
  FiAlertTriangle,
  FiRefreshCw,
  FiEdit2,
  FiTrash2,
  FiClock,
} from "react-icons/fi";
import { useTheme } from "next-themes";

// Mock de dados - será substituído pela API depois
type Evento = {
  id: number;
  titulo: string;
  data_inicio_evento: string;
  data_fim_evento: string;
  criado_em: string;
};

const mockEventos: Evento[] = [
  {
    id: 1,
    titulo: "Festival de Inverno 2025",
    data_inicio_evento: "2025-07-15",
    data_fim_evento: "2025-07-20",
    criado_em: "2025-01-10 08:30:00",
  },
  {
    id: 2,
    titulo: "Congresso de Turismo Regional",
    data_inicio_evento: "2025-08-05",
    data_fim_evento: "2025-08-07",
    criado_em: "2025-01-12 14:15:00",
  },
  {
    id: 3,
    titulo: "Feira Gastronômica",
    data_inicio_evento: "2025-09-10",
    data_fim_evento: "2025-09-15",
    criado_em: "2025-01-15 09:45:00",
  },
];

type ModalState = {
  open: boolean;
  isEdit: boolean;
  eventoId: number | null;
  titulo: string;
  dataInicio: string;
  dataFim: string;
  error: string | null;
  saving: boolean;
};

const formatarData = (dataString: string) => {
  const data = new Date(dataString + "T00:00:00");
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const CriarEventosPage: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const [modal, setModal] = useState<ModalState>({
    open: false,
    isEdit: false,
    eventoId: null,
    titulo: "",
    dataInicio: "",
    dataFim: "",
    error: null,
    saving: false,
  });

  const fetchEventos = async () => {
    try {
      setLoading(true);
      setError(null);
      // Simula delay de API
      await new Promise((resolve) => setTimeout(resolve, 500));
      setEventos(mockEventos);
    } catch (err) {
      console.error("Erro ao buscar eventos:", err);
      setError("Não foi possível carregar os eventos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setMounted(true);
    fetchEventos();
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const openModal = (evento?: Evento) => {
    if (evento) {
      setModal({
        open: true,
        isEdit: true,
        eventoId: evento.id,
        titulo: evento.titulo,
        dataInicio: evento.data_inicio_evento,
        dataFim: evento.data_fim_evento,
        error: null,
        saving: false,
      });
    } else {
      setModal({
        open: true,
        isEdit: false,
        eventoId: null,
        titulo: "",
        dataInicio: "",
        dataFim: "",
        error: null,
        saving: false,
      });
    }
  };

  const closeModal = () => setModal((prev) => ({ ...prev, open: false }));

  const validateForm = () => {
    const trimmedTitulo = modal.titulo.trim();
    if (!trimmedTitulo) {
      setModal((prev) => ({ ...prev, error: "Informe o título do evento." }));
      return false;
    }
    if (!modal.dataInicio) {
      setModal((prev) => ({ ...prev, error: "Informe a data de início." }));
      return false;
    }
    if (!modal.dataFim) {
      setModal((prev) => ({ ...prev, error: "Informe a data de término." }));
      return false;
    }
    if (new Date(modal.dataFim) < new Date(modal.dataInicio)) {
      setModal((prev) => ({ ...prev, error: "Data de término não pode ser anterior à data de início." }));
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    try {
      setModal((prev) => ({ ...prev, saving: true, error: null }));

      // Simula chamada API
      await new Promise((resolve) => setTimeout(resolve, 800));

      if (modal.isEdit && modal.eventoId) {
        // Atualiza evento existente
        setEventos((prev) =>
          prev.map((e) =>
            e.id === modal.eventoId
              ? {
                  ...e,
                  titulo: modal.titulo.trim(),
                  data_inicio_evento: modal.dataInicio,
                  data_fim_evento: modal.dataFim,
                }
              : e
          )
        );
      } else {
        // Cria novo evento
        const novoEvento: Evento = {
          id: Math.max(...eventos.map((e) => e.id), 0) + 1,
          titulo: modal.titulo.trim(),
          data_inicio_evento: modal.dataInicio,
          data_fim_evento: modal.dataFim,
          criado_em: new Date().toISOString().slice(0, 19).replace("T", " "),
        };
        setEventos((prev) => [...prev, novoEvento]);
      }

      closeModal();
    } catch (err) {
      console.error("Erro ao salvar evento:", err);
      setModal((prev) => ({ ...prev, error: "Não foi possível salvar o evento." }));
    } finally {
      setModal((prev) => ({ ...prev, saving: false }));
    }
  };

  const handleDelete = async (eventoId: number) => {
    if (!confirm("Tem certeza que deseja excluir este evento?")) return;

    try {
      // Simula chamada API
      await new Promise((resolve) => setTimeout(resolve, 500));
      setEventos((prev) => prev.filter((e) => e.id !== eventoId));
    } catch (err) {
      console.error("Erro ao excluir evento:", err);
      alert("Não foi possível excluir o evento.");
    }
  };

  const eventosFiltrados = eventos.filter((e) =>
    e.titulo.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className={`flex h-screen items-center justify-center transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-gray-100"
      }`}>
        <div className={`flex items-center gap-3 rounded-2xl backdrop-blur px-6 py-4 shadow-2xl border transition-colors duration-300 ${
          isDark 
            ? "bg-gray-800/50 border-gray-700/50" 
            : "bg-white/50 border-gray-200/50"
        }`}>
          <FiRefreshCw className={`h-5 w-5 animate-spin ${isDark ? "text-blue-400" : "text-blue-600"}`} />
          <span className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}>Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen p-4 md:p-6 lg:p-8 mt-16 transition-colors duration-300 ${
      isDark ? "bg-gray-900" : "bg-gray-100"
    }`}>
      <div className="mx-auto max-w-6xl space-y-6">
        <header className={`flex flex-col gap-4 rounded-2xl backdrop-blur-xl border p-6 shadow-2xl lg:flex-row lg:items-center lg:justify-between transition-all duration-300 ${
          isDark 
            ? "bg-gray-800/80 border-gray-700/50 hover:border-gray-600/75" 
            : "bg-white/80 border-gray-200/50 hover:border-gray-300/75"
        }`}>
          <div>
            <h1 className={`flex items-center gap-3 text-3xl font-bold ${
              isDark 
                ? "bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" 
                : "text-gray-800"
            }`}>
              <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-lg ${
                isDark 
                  ? "bg-linear-to-br from-blue-500 to-cyan-600 text-white" 
                  : "bg-blue-600 text-white"
              }`}>
                <FiCalendar className="h-6 w-6" />
              </span>
              Gerenciamento de Eventos
            </h1>
            <p className={`mt-2 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
              Sistema Turismo • Crie e gerencie eventos turísticos
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-72">
              <FiSearch className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${isDark ? "text-gray-500" : "text-gray-400"}`} />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar evento..."
                className={`w-full rounded-xl border backdrop-blur py-2.5 pl-10 pr-4 text-sm outline-none transition focus:ring-2 ${
                  isDark 
                    ? "border-gray-600/50 bg-gray-800/50 text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:bg-gray-800 focus:ring-blue-500/30" 
                    : "border-gray-300/50 bg-white/50 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:ring-blue-500/30"
                }`}
              />
            </div>
            <button
              onClick={() => openModal()}
              className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-105 ${
                isDark 
                  ? "bg-linear-to-r from-blue-500 to-cyan-600 hover:shadow-blue-500/50" 
                  : "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/30"
              }`}
            >
              <FiPlus className="h-4 w-4" /> Novo evento
            </button>
          </div>
        </header>

        {error && (
          <div className={`rounded-xl border backdrop-blur p-4 text-sm flex items-center gap-3 ${
            isDark 
              ? "border-red-500/50 bg-red-500/10 text-red-300" 
              : "border-red-400/50 bg-red-50 text-red-600"
          }`}>
            <FiAlertTriangle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <section className={`rounded-2xl backdrop-blur-xl border p-6 shadow-2xl transition-all duration-300 ${
          isDark 
            ? "bg-gray-800/80 border-gray-700/50 hover:border-gray-600/75" 
            : "bg-white/80 border-gray-200/50 hover:border-gray-300/75"
        }`}>
          <div className={`flex items-center justify-between pb-6 border-b ${
            isDark ? "border-gray-700/50" : "border-gray-200/50"
          }`}>
            <h2 className={`text-lg font-semibold ${isDark ? "text-gray-100" : "text-gray-800"}`}>Eventos Cadastrados</h2>
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${
              isDark ? "text-gray-400 bg-gray-700/50" : "text-gray-500 bg-gray-100"
            }`}>
              {eventosFiltrados.length} registro{eventosFiltrados.length === 1 ? "" : "s"}
            </span>
          </div>

          <div className={`overflow-hidden rounded-xl border mt-6 ${
            isDark ? "border-gray-700/50" : "border-gray-200/50"
          }`}>
            <table className={`min-w-full divide-y text-sm ${
              isDark ? "divide-gray-700/50" : "divide-gray-200/50"
            }`}>
              <thead className={`text-xs uppercase tracking-wider font-semibold ${
                isDark ? "bg-gray-900/50 text-gray-400" : "bg-gray-50/50 text-gray-500"
              }`}>
                <tr>
                  <th className="px-4 py-4 text-left">Título</th>
                  <th className="px-4 py-4 text-left">Data Início</th>
                  <th className="px-4 py-4 text-left">Data Término</th>
                  <th className="px-4 py-4 text-left">Criado em</th>
                  <th className="px-4 py-4 text-center">Ações</th>
                </tr>
              </thead>

              <tbody className={`divide-y ${isDark ? "divide-gray-700/30" : "divide-gray-200/30"}`}>
                {eventosFiltrados.length === 0 ? (
                  <tr>
                    <td colSpan={5} className={`px-4 py-12 text-center text-sm ${
                      isDark ? "text-gray-500" : "text-gray-400"
                    }`}>
                      Nenhum evento encontrado.
                    </td>
                  </tr>
                ) : (
                  eventosFiltrados.map((evento) => (
                    <tr key={evento.id} className={`transition-colors ${
                      isDark ? "hover:bg-gray-700/30" : "hover:bg-gray-50/50"
                    }`}>
                      <td className={`px-4 py-4 font-semibold ${
                        isDark ? "text-gray-200" : "text-gray-700"
                      }`}>
                        {evento.titulo}
                      </td>
                      <td className={`px-4 py-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        <div className="flex items-center gap-2">
                          <FiClock className={`h-3.5 w-3.5 ${isDark ? "text-blue-400" : "text-blue-500"}`} />
                          {formatarData(evento.data_inicio_evento)}
                        </div>
                      </td>
                      <td className={`px-4 py-4 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
                        <div className="flex items-center gap-2">
                          <FiClock className={`h-3.5 w-3.5 ${isDark ? "text-blue-400" : "text-blue-500"}`} />
                          {formatarData(evento.data_fim_evento)}
                        </div>
                      </td>
                      <td className={`px-4 py-4 text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                        {new Date(evento.criado_em).toLocaleDateString("pt-BR")}
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => openModal(evento)}
                            className={`rounded-lg p-2.5 border transition-all ${
                              isDark 
                                ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 border-blue-500/50" 
                                : "bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-200"
                            }`}
                            title="Editar"
                          >
                            <FiEdit2 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(evento.id)}
                            className={`rounded-lg p-2.5 border transition-all ${
                              isDark 
                                ? "bg-red-500/20 text-red-400 hover:bg-red-500/30 border-red-500/50" 
                                : "bg-red-50 text-red-600 hover:bg-red-100 border-red-200"
                            }`}
                            title="Excluir"
                          >
                            <FiTrash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {modal.open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-md">
          <div className={`w-full max-w-md rounded-2xl p-6 shadow-2xl border animate-in fade-in zoom-in-95 ${
            isDark 
              ? "bg-gray-800 border-gray-700/50" 
              : "bg-white border-gray-200/50"
          }`}>
            <div className="mb-6 flex items-center gap-3">
              <div className={`rounded-xl p-2.5 text-white shadow-lg ${
                isDark 
                  ? "bg-linear-to-br from-blue-500 to-cyan-600" 
                  : "bg-blue-600"
              }`}>
                <FiCalendar className="h-5 w-5" />
              </div>
              <h2 className={`text-xl font-bold ${isDark ? "text-gray-100" : "text-gray-800"}`}>
                {modal.isEdit ? "Editar Evento" : "Novo Evento"}
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className={`mb-2 block text-xs font-bold uppercase tracking-wider ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}>
                  Título do Evento
                </label>
                <input
                  value={modal.titulo}
                  onChange={(e) =>
                    setModal((prev) => ({
                      ...prev,
                      titulo: e.target.value,
                      error: null,
                    }))
                  }
                  placeholder="ex: Festival de Inverno 2025"
                  maxLength={200}
                  className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2 ${
                    isDark 
                      ? "border-gray-600/50 bg-gray-800/50 text-gray-200 placeholder-gray-500 focus:border-blue-500 focus:bg-gray-800 focus:ring-blue-500/30" 
                      : "border-gray-300/50 bg-gray-50 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:ring-blue-500/30"
                  }`}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`mb-2 block text-xs font-bold uppercase tracking-wider ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}>
                    Data Início
                  </label>
                  <input
                    type="date"
                    value={modal.dataInicio}
                    onChange={(e) =>
                      setModal((prev) => ({
                        ...prev,
                        dataInicio: e.target.value,
                        error: null,
                      }))
                    }
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2 ${
                      isDark 
                        ? "border-gray-600/50 bg-gray-800/50 text-gray-200 focus:border-blue-500 focus:bg-gray-800 focus:ring-blue-500/30" 
                        : "border-gray-300/50 bg-gray-50 text-gray-700 focus:border-blue-500 focus:bg-white focus:ring-blue-500/30"
                    }`}
                  />
                </div>
                <div>
                  <label className={`mb-2 block text-xs font-bold uppercase tracking-wider ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}>
                    Data Término
                  </label>
                  <input
                    type="date"
                    value={modal.dataFim}
                    onChange={(e) =>
                      setModal((prev) => ({
                        ...prev,
                        dataFim: e.target.value,
                        error: null,
                      }))
                    }
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none transition focus:ring-2 ${
                      isDark 
                        ? "border-gray-600/50 bg-gray-800/50 text-gray-200 focus:border-blue-500 focus:bg-gray-800 focus:ring-blue-500/30" 
                        : "border-gray-300/50 bg-gray-50 text-gray-700 focus:border-blue-500 focus:bg-white focus:ring-blue-500/30"
                    }`}
                  />
                </div>
              </div>

              {modal.error && (
                <div className={`rounded-lg border p-3 text-xs flex items-center gap-2 ${
                  isDark 
                    ? "border-red-500/50 bg-red-500/10 text-red-300" 
                    : "border-red-400/50 bg-red-50 text-red-600"
                }`}>
                  <FiAlertTriangle className="h-4 w-4 shrink-0" />
                  {modal.error}
                </div>
              )}
            </div>

            <div className={`mt-6 flex items-center justify-end gap-3 pt-6 border-t ${
              isDark ? "border-gray-700/50" : "border-gray-200/50"
            }`}>
              <button
                onClick={closeModal}
                disabled={modal.saving}
                className={`rounded-lg border px-4 py-2 text-sm font-semibold transition disabled:opacity-50 ${
                  isDark 
                    ? "border-gray-600/50 text-gray-300 hover:bg-gray-700/50" 
                    : "border-gray-300/50 text-gray-600 hover:bg-gray-100"
                }`}
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                disabled={modal.saving}
                className={`inline-flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105 disabled:opacity-60 disabled:scale-100 ${
                  isDark 
                    ? "bg-linear-to-r from-blue-500 to-cyan-600 hover:shadow-blue-500/50" 
                    : "bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/30"
                }`}
              >
                {modal.saving ? (
                  <FiRefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  <FiPlus size={16} />
                )}
                {modal.isEdit ? "Salvar" : "Criar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CriarEventosPage;
