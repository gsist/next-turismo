// front-ciptea/src/app/components/Precadastro/index.tsx
"use client";

import React, { useEffect, useState } from "react";
import {
  FiPlus,
  FiSearch,
  FiUsers,
  FiAlertTriangle,
  FiRefreshCw,
  FiPower,
} from "react-icons/fi";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL ;

type Cargo = {
  id: number;
  cargo: string;
};

type Usuario = {
  id: number;
  username: string;
  cargo: string;
  ch_ativo: number;
};

type ModalState = {
  open: boolean;
  username: string;
  cargoId: number | null;
  error: string | null;
  saving: boolean;
};

type ErrorResponse = {
  message?: string;
};

const PreCadastroUsuariosPage: React.FC = () => {
  const [cargos, setCargos] = useState<Cargo[]>([]);
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const [modal, setModal] = useState<ModalState>({
    open: false,
    username: "",
    cargoId: null,
    error: null,
    saving: false,
  });

  const fetchCargos = async () => {
    try {
      const response = await axios.get<{ cargos: Cargo[] }>(`${baseURL}/precadastro/cargos`); 
      setCargos(response.data.cargos);
      return response.data.cargos;
    } catch (err) {
      console.error("Erro ao buscar cargos:", err);
      setError("Não foi possível carregar os cargos.");
      return [];
    }
  };

  const fetchUsuarios = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get<{ usuarios: Usuario[] }>(`${baseURL}/precadastro/usuarios`);
      setUsuarios(response.data.usuarios);
    } catch (err) {
      console.error("Erro ao buscar usuários:", err);
      setError("Não foi possível carregar os usuários.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const initializeData = async () => {
      const cargosData = await fetchCargos();
      await fetchUsuarios();
      
      if (cargosData.length > 0) {
        setModal(prev => ({ ...prev, cargoId: cargosData[0].id }));
      }
    };
    
    initializeData();
  }, []);

  const openModal = () => {
    const defaultCargo = cargos[0]?.id ?? null;
    setModal({
      open: true,
      username: "",
      cargoId: defaultCargo,
      error: null,
      saving: false,
    });
  };

  const closeModal = () => setModal((prev) => ({ ...prev, open: false }));

  const handleCreate = async () => {
    if (!modal.cargoId) {
      setModal((prev) => ({ ...prev, error: "Selecione um cargo válido." }));
      return;
    }

    const trimmedUsername = modal.username.trim();
    if (!trimmedUsername) {
      setModal((prev) => ({ ...prev, error: "Informe o username do AD." }));
      return;
    }

    try {
      setModal((prev) => ({ ...prev, saving: true, error: null }));

      await axios.post(`${baseURL}/precadastro/usuario`, {
        username: trimmedUsername,
        cargo: modal.cargoId,
      });

      closeModal();
      await fetchUsuarios();
    } catch (err) {
      console.error("Erro ao cadastrar usuário:", err);
      const errorMsg = (err as { response?: { data?: ErrorResponse } })?.response?.data?.message || "Não foi possível salvar.";
      setModal((prev) => ({ ...prev, error: errorMsg }));
    } finally {
      setModal((prev) => ({ ...prev, saving: false }));
    }
  };

  const handleToggleStatus = async (usuarioId: number, statusAtual: number) => {
    try {
      const novoStatus = statusAtual === 1 ? 0 : 1;
      await axios.put(`${baseURL}/precadastro/usuario/${usuarioId}`, {
        ch_ativo: novoStatus,
      });
      await fetchUsuarios();
    } catch (err) {
      console.error("Erro ao alterar status:", err);
      alert("Não foi possível alterar o status do usuário.");
    }
  };

  const handleUpdateCargo = async (usuarioId: number, novoCargoId: number) => {
    try {
      await axios.put(`${baseURL}/precadastro/usuario/${usuarioId}`, {
        cargo: novoCargoId,
      });
      await fetchUsuarios();
    } catch (err) {
      console.error("Erro ao atualizar cargo:", err);
      alert("Não foi possível atualizar o cargo do usuário.");
    }
  };

  const usuariosFiltrados = (usuarios ?? []).filter((u) =>
    (u.username ?? "").toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-linear-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="flex items-center gap-3 rounded-2xl bg-slate-800/50 backdrop-blur px-6 py-4 shadow-2xl border border-slate-700/50">
          <FiRefreshCw className="h-5 w-5 animate-spin text-cyan-400" />
          <span className="text-sm font-medium text-slate-300">Carregando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br p-4 md:p-6 lg:p-8 mt-16">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-col gap-4 rounded-2xl bg-linear-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-700/50 p-6 shadow-2xl lg:flex-row lg:items-center lg:justify-between hover:border-slate-600/75 transition-colors">
          <div>
            <h1 className="flex items-center gap-3 text-3xl font-bold bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 text-white shadow-lg">
                <FiUsers className="h-6 w-6" />
              </span>
              Pré-cadastro de Usuários
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              Sistema Telefonia • Cadastre usuários do AD antes do primeiro login
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-72">
              <FiSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar username ou nome..."
                className="w-full rounded-xl border border-slate-600/50 bg-slate-800/50 backdrop-blur py-2.5 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-500 outline-none transition focus:border-cyan-500 focus:bg-slate-800 focus:ring-2 focus:ring-cyan-500/30"
              />
            </div>
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition hover:scale-105"
            >
              <FiPlus className="h-4 w-4" /> Novo usuário
            </button>
          </div>
        </header>

        {error && (
          <div className="rounded-xl border border-red-500/50 bg-red-500/10 backdrop-blur p-4 text-sm text-red-300 flex items-center gap-3">
            <FiAlertTriangle className="h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <section className="rounded-2xl bg-linear-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-xl border border-slate-700/50 p-6 shadow-2xl hover:border-slate-600/75 transition-colors">
          <div className="flex items-center justify-between pb-6 border-b border-slate-700/50">
            <h2 className="text-lg font-semibold text-slate-100">Usuários Cadastrados</h2>
            <span className="text-xs font-medium text-slate-400 bg-slate-700/50 px-3 py-1 rounded-full">
              {usuariosFiltrados.length} registro{usuariosFiltrados.length === 1 ? "" : "s"}
            </span>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-700/50 mt-6">
            <table className="min-w-full divide-y divide-slate-700/50 text-sm">
              <thead className="bg-slate-900/50 text-xs uppercase tracking-wider text-slate-400 font-semibold">
                <tr>
                  <th className="px-4 py-4 text-left">Username (AD)</th>
                  <th className="px-4 py-4 text-left">Cargo</th>
                  <th className="px-4 py-4 text-left">Status</th>
                  <th className="px-4 py-4 text-center">Ações</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-700/30">
                {usuariosFiltrados.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-4 py-12 text-center text-sm text-slate-500">
                      Nenhum usuário encontrado.
                    </td>
                  </tr>
                ) : (
                  usuariosFiltrados.map((usuario) => (
                    <tr key={usuario.id} className="hover:bg-slate-700/30 transition-colors">
                      <td className="px-4 py-4 font-semibold text-slate-200">
                        {usuario.username}
                      </td>

                      <td className="px-4 py-4 text-slate-300">
                        <select
                          value={cargos.find(c => c.cargo === usuario.cargo)?.id || ""}
                          onChange={(e) =>
                            handleUpdateCargo(usuario.id, Number(e.target.value))
                          }
                          className="w-full rounded-lg border border-slate-600/50 bg-slate-800/50 px-3 py-2 text-sm text-slate-200 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30"
                        >
                          <option value="" disabled className="bg-slate-900">
                            Selecione um cargo
                          </option>
                          {cargos.map((cargo) => (
                            <option key={cargo.id} value={cargo.id} className="bg-slate-900">
                              {cargo.cargo}
                            </option>
                          ))}
                        </select>
                      </td>

                      <td className="px-4 py-4">
                        {usuario.ch_ativo === 1 ? (
                          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/50">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            Ativo
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-300 border border-red-500/50">
                            <span className="w-2 h-2 rounded-full bg-red-400"></span>
                            Inativo
                          </span>
                        )}
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex items-center justify-center">
                          <button
                            onClick={() => handleToggleStatus(usuario.id, usuario.ch_ativo)}
                            className={`rounded-lg p-2.5 transition-all ${usuario.ch_ativo === 1
                                ? "bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/50"
                                : "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 border border-emerald-500/50"
                              }`}
                            title={usuario.ch_ativo === 1 ? "Desativar" : "Ativar"}
                          >
                            <FiPower className="h-4 w-4" />
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
          <div className="w-full max-w-md rounded-2xl bg-linear-to-br from-slate-800 to-slate-900 p-6 shadow-2xl border border-slate-700/50 animate-in fade-in zoom-in-95">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 p-2.5 text-white shadow-lg">
                <FiUsers className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-bold text-slate-100">Novo usuário</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Username (AD)
                </label>
                <input
                  value={modal.username}
                  onChange={(e) =>
                    setModal((prev) => ({
                      ...prev,
                      username: e.target.value,
                      error: null,
                    }))
                  }
                  placeholder="ex: joao.silva"
                  className="w-full rounded-lg border border-slate-600/50 bg-slate-800/50 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 outline-none transition focus:border-cyan-500 focus:bg-slate-800 focus:ring-2 focus:ring-cyan-500/30"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-400">
                  Cargo
                </label>
                <select
                  value={modal.cargoId ?? ""}
                  onChange={(e) =>
                    setModal((prev) => ({
                      ...prev,
                      cargoId: Number(e.target.value),
                      error: null,
                    }))
                  }
                  className="w-full rounded-lg border border-slate-600/50 bg-slate-800/50 px-4 py-2.5 text-sm text-slate-200 outline-none transition focus:border-cyan-500 focus:bg-slate-800 focus:ring-2 focus:ring-cyan-500/30"
                >
                  <option value="" disabled className="bg-slate-900">
                    Selecione um cargo
                  </option>
                  {cargos.map((cargo) => (
                    <option key={cargo.id} value={cargo.id} className="bg-slate-900">
                      {cargo.cargo}
                    </option>
                  ))}
                </select>
              </div>

              {modal.error && (
                <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-3 text-xs text-red-300 flex items-center gap-2">
                  <FiAlertTriangle className="h-4 w-4 shrink-0" />
                  {modal.error}
                </div>
              )}
            </div>

            <div className="mt-6 flex items-center justify-end gap-3 pt-6 border-t border-slate-700/50">
              <button
                onClick={closeModal}
                disabled={modal.saving}
                className="rounded-lg border border-slate-600/50 px-4 py-2 text-sm font-semibold text-slate-300 transition hover:bg-slate-700/50 disabled:opacity-50"
              >
                Cancelar
              </button>
              <button
                onClick={handleCreate}
                disabled={modal.saving}
                className="inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition hover:scale-105 disabled:opacity-60 disabled:scale-100"
              >
                {modal.saving ? (
                  <FiRefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  <FiPlus size={16} />
                )}
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreCadastroUsuariosPage;