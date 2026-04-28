'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Search, Plus, Filter, Edit, Eye, ChevronLeft, ChevronRight, X, ChevronsLeft, ChevronsRight, RefreshCw, ChevronDown } from 'lucide-react';
import Modal from './Modal/modal';
import { Beneficiario } from '@/app/components/SistemaAdmin/TelaAdmin/types/types';
import { STATUS_CIDADAO, STATUS_COLORS, STATUS_ICONS, STATUS_CARD_COLORS, STATUS_BADGE_ICONS, STATUS_SELECAO, STATUS_PERMITE_EDICAO, STATUS_FINAIS } from '@/app/components/SistemaAdmin/TelaAdmin/types/status';
import api from '@/services/api';
import { useTheme } from 'next-themes';

const BeneficiariosList: React.FC = () => {
  const [beneficiarios, setBeneficiarios] = useState<Beneficiario[]>([]);
  const [statusData, setStatusData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [loadingTable, setLoadingTable] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedBeneficiario, setSelectedBeneficiario] = useState<Beneficiario | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'view' | 'edit' | 'create'>('view');
  const [successMessage, setSuccessMessage] = useState('');
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalBeneficiarios, setTotalBeneficiarios] = useState(0);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [updatingStatusId, setUpdatingStatusId] = useState<number | null>(null);
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const itemsPerPage = 20;

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  const fetchStatusData = useCallback(async () => {
    try {
      const response = await api.get('/adminRoutes/completos');
      const data = Array.isArray(response.data) ? response.data : [];

      const counts = {
        todos: data.length,
        [STATUS_CIDADAO.HABILITADO]: data.filter((b: Beneficiario) => b?.status_cidadao === STATUS_CIDADAO.HABILITADO).length,
        [STATUS_CIDADAO.NAO_HABILITADO]: data.filter((b: Beneficiario) => b?.status_cidadao === STATUS_CIDADAO.NAO_HABILITADO).length,
        [STATUS_CIDADAO.EM_PRODUCAO]: data.filter((b: Beneficiario) => b?.status_cidadao === STATUS_CIDADAO.EM_PRODUCAO).length,
        [STATUS_CIDADAO.AGUARDANDO_ANALISE]: data.filter((b: Beneficiario) => b?.status_cidadao === STATUS_CIDADAO.AGUARDANDO_ANALISE).length,
      };

      setStatusData({ counts, allData: data });
    } catch (error: any) {
      try {
        const fallbackResponse = await api.get('/adminRoutes', { params: { page: 1, limit: 1000 } });
        const fallbackData = Array.isArray(fallbackResponse.data?.data) ? fallbackResponse.data.data : [];

        const counts = {
          todos: fallbackData.length,
          [STATUS_CIDADAO.HABILITADO]: fallbackData.filter((b: Beneficiario) => b?.status_cidadao === STATUS_CIDADAO.HABILITADO).length,
          [STATUS_CIDADAO.NAO_HABILITADO]: fallbackData.filter((b: Beneficiario) => b?.status_cidadao === STATUS_CIDADAO.NAO_HABILITADO).length,
          [STATUS_CIDADAO.EM_PRODUCAO]: fallbackData.filter((b: Beneficiario) => b?.status_cidadao === STATUS_CIDADAO.EM_PRODUCAO).length,
          [STATUS_CIDADAO.AGUARDANDO_ANALISE]: fallbackData.filter((b: Beneficiario) => b?.status_cidadao === STATUS_CIDADAO.AGUARDANDO_ANALISE).length,
        };

        setStatusData({ counts, allData: fallbackData });
      } catch {
        setStatusData({ counts: { todos: 0, [STATUS_CIDADAO.HABILITADO]: 0, [STATUS_CIDADAO.NAO_HABILITADO]: 0, [STATUS_CIDADAO.EM_PRODUCAO]: 0, [STATUS_CIDADAO.AGUARDANDO_ANALISE]: 0 }, allData: [] });
      }
    }
  }, []);

  const fetchPaginatedData = useCallback(async (page: number, filters: any = {}) => {
    setLoadingTable(true);
    try {
      const params: any = { page, limit: itemsPerPage };
      if (filters.status && filters.status !== 'all') params.status = filters.status;
      if (filters.search && filters.search.trim() !== '') params.search = filters.search;

      const response = await api.get('/adminRoutes', { params });
      const data = Array.isArray(response.data?.data) ? response.data.data : [];
      const pagination = response.data?.pagination || {};

      setBeneficiarios(data);
      setTotalBeneficiarios(pagination.total || 0);
      setTotalPages(pagination.pages || 1);
    } catch (error: any) {
      setBeneficiarios([]);
      setTotalBeneficiarios(0);
      setTotalPages(1);
    } finally {
      setLoadingTable(false);
    }
  }, [itemsPerPage]);

  const handleRefresh = () => {
    setRefreshTrigger(prev => prev + 1);
    setSuccessMessage('Dados atualizados com sucesso!');
    setTimeout(() => setSuccessMessage(''), 2000);
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await fetchStatusData();
      await fetchPaginatedData(1, { status: statusFilter, search: searchTerm });
      setLoading(false);
    };
    loadData();
  }, [fetchStatusData, fetchPaginatedData, refreshTrigger]);

  useEffect(() => {
    setCurrentPage(1);
    fetchPaginatedData(1, { status: statusFilter, search: searchTerm });
  }, [statusFilter, searchTerm, fetchPaginatedData, refreshTrigger]);

  useEffect(() => {
    if (currentPage > 1) {
      fetchPaginatedData(currentPage, { status: statusFilter, search: searchTerm });
    }
  }, [currentPage, fetchPaginatedData, refreshTrigger]);

  const openModal = (beneficiario: Beneficiario | null, mode: 'view' | 'edit' | 'create') => {
    setSelectedBeneficiario(beneficiario);
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBeneficiario(null);
  };

  const handleSave = async (data: any) => {
    try {
      if (modalMode === 'create') {
        // Para criação, envie a estrutura completa
        await api.post('/adminRoutes', data);
        setSuccessMessage('Beneficiário criado com sucesso!');
      } else if (modalMode === 'edit' && selectedBeneficiario) {
        // Para edição, precisamos processar separadamente:
        
        // 1. Atualizar dados do beneficiário
        if (data.beneficiario) {
          await api.put(`/adminRoutes/${selectedBeneficiario.id_benef}`, data.beneficiario);
        } else {
          // Se não vier estruturado, usar dados diretos
          await api.put(`/adminRoutes/${selectedBeneficiario.id_benef}`, data);
        }

        // 2. Atualizar endereço do beneficiário
        if (data.endereco) {
          try {
            await api.put(`/adminRoutes/${selectedBeneficiario.id_benef}/endereco`, data.endereco);
          } catch (enderecoError) {
            console.error('Erro ao atualizar endereço:', enderecoError);
          }
        }

        // 3. Processar responsáveis
        if (data.responsaveis) {
          try {
            // Para cada responsável
            for (const responsavel of data.responsaveis) {
              if (responsavel.id_resp) {
                // Atualizar responsável existente
                await api.put(`/adminRoutes/responsaveis/${responsavel.id_resp}`, {
                  nome: responsavel.nome,
                  cpf: responsavel.cpf,
                  rg: responsavel.rg,
                  telefone: responsavel.telefone,
                  email: responsavel.email
                });
              } else if (responsavel.nome || responsavel.cpf) {
                // Criar novo responsável
                const responsavelData: any = {
                  nome: responsavel.nome,
                  cpf: responsavel.cpf,
                  rg: responsavel.rg,
                  telefone: responsavel.telefone,
                  email: responsavel.email
                };
                
                // Se tem endereço próprio, incluir
                if (responsavel.endereco && !responsavel.mora_com_beneficiario) {
                  responsavelData.endereco = responsavel.endereco;
                }
                
                await api.post(`/adminRoutes/${selectedBeneficiario.id_benef}/responsaveis`, responsavelData);
              }
            }
          } catch (responsaveisError) {
            console.error('Erro ao atualizar responsáveis:', responsaveisError);
          }
        }

        setSuccessMessage('Beneficiário atualizado com sucesso!');
      }

      handleRefresh();
      closeModal();
    } catch (error: any) {
      console.error('Erro completo no save:', error.response?.data || error.message);
      setSuccessMessage(`Erro ao salvar beneficiário: ${error.response?.data?.error || error.message}`);
      setTimeout(() => setSuccessMessage(''), 5000);
      throw error;
    }
  };

  const handleChangeStatus = async (id: number, novoStatus: string) => {
    try {
      setUpdatingStatusId(id);
      setOpenDropdownId(null);

      const beneficiario = beneficiarios.find(b => b.id_benef === id);
      if (!beneficiario) return;

      if (beneficiario.status_cidadao === novoStatus) {
        setUpdatingStatusId(null);
        return;
      }

      console.log(`Mudando status do beneficiário ${id} de ${beneficiario.status_cidadao} para ${novoStatus}`);

      // Usar a rota específica para status
      const response = await api.patch(`/adminRoutes/${id}/status`, {
        status_cidadao: novoStatus
      });

      // Atualizar localmente
      setBeneficiarios(prev => prev.map(b =>
        b.id_benef === id ? { ...b, status_cidadao: novoStatus } : b
      ));

      // Atualizar contadores
      setStatusData((prev: any) => {
        const newCounts = { ...prev.counts };
        // Decrementar status antigo
        if (beneficiario.status_cidadao && newCounts[beneficiario.status_cidadao] > 0) {
          newCounts[beneficiario.status_cidadao]--;
        }
        // Incrementar novo status
        if (!newCounts[novoStatus]) newCounts[novoStatus] = 0;
        newCounts[novoStatus]++;
        
        return { ...prev, counts: newCounts };
      });

      // Mensagem de sucesso simples
      setSuccessMessage(`Status alterado para ${novoStatus}`);
      setTimeout(() => setSuccessMessage(''), 2000);

      // Atualizar a lista após sucesso
      setTimeout(() => {
        setUpdatingStatusId(null);
        // Atualizar apenas se necessário
        if (statusFilter !== 'all' || searchTerm !== '') {
          handleRefresh();
        }
      }, 500);

    } catch (error: any) {
      console.error('Erro ao alterar status:', error);

      const errorData = error.response?.data;
      const errorMsg = errorData?.error || errorData?.message || error.message;

      // Mensagem de erro simples
      setSuccessMessage(`Erro: ${errorMsg || 'Falha ao alterar status'}`);
      setTimeout(() => setSuccessMessage(''), 3000);

      setUpdatingStatusId(null);
    }
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    setStatusFilter('all');
    setCurrentPage(1);
  };

  const handleFirstPage = () => setCurrentPage(1);
  const handlePrevPage = () => setCurrentPage(prev => Math.max(1, prev - 1));
  const handleNextPage = () => setCurrentPage(prev => Math.min(totalPages, prev + 1));
  const handleLastPage = () => setCurrentPage(totalPages);

  const statusCounts = statusData.counts || { 
    todos: 0, 
    [STATUS_CIDADAO.HABILITADO]: 0, 
    [STATUS_CIDADAO.NAO_HABILITADO]: 0, 
    [STATUS_CIDADAO.EM_PRODUCAO]: 0,
    [STATUS_CIDADAO.AGUARDANDO_ANALISE]: 0 
  };

  if (!mounted) return null;

  const renderPageButtons = () => {
    const buttons = [];
    const maxVisibleButtons = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

    if (endPage - startPage + 1 < maxVisibleButtons) {
      startPage = Math.max(1, endPage - maxVisibleButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border transition-all duration-200 ${currentPage === i
            ? 'bg-blue-600 border-blue-600 text-white shadow-md'
            : `${isDark
              ? 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
            }`
            }`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const getStatusColor = (status: string) => {
    const statusConfig = STATUS_COLORS[status as keyof typeof STATUS_COLORS];
    if (statusConfig) {
      return isDark ? statusConfig.dark : statusConfig.light;
    }
    return isDark ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getStatusIcon = (status: string) => {
    return STATUS_BADGE_ICONS[status as keyof typeof STATUS_BADGE_ICONS] || '?';
  };

  return (
    <div className={`min-h-screen mt-20 ${isDark ? "bg-gray-900" : "bg-gray-50"} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {successMessage && (
          <div className={`mb-4 p-3 rounded-lg ${successMessage.includes("Erro") ? "bg-red-100 border-red-400 text-red-700" : "bg-green-100 border-green-400 text-green-700"} border`}>
            <p className="text-sm font-medium">{successMessage}</p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
          <div>
            <h1 className={`text-2xl sm:text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-2`}>
              Beneficiários
            </h1>
            <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              Gerencie todos os beneficiários do sistema
            </p>
          </div>

          <button
            onClick={handleRefresh}
            disabled={loadingTable}
            className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg transition-all ${loadingTable
              ? 'bg-gray-400 cursor-not-allowed'
              : isDark
                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            title="Atualizar lista"
          >
            <RefreshCw className={`w-5 h-5 ${loadingTable ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Atualizar</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {Object.entries(statusCounts).map(([status, count]) => {
            const getCardStatusColor = (status: string) => {
              return STATUS_CARD_COLORS[status as keyof typeof STATUS_CARD_COLORS] || 'bg-gray-500';
            };

            const getCardStatusIcon = (status: string) => {
              return STATUS_ICONS[status as keyof typeof STATUS_ICONS] || '👥';
            };

            return (
              <div key={status} className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-xl border ${isDark ? "border-gray-700" : "border-gray-200"} p-4 shadow-sm`}>
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-3 ${getCardStatusColor(status)}`}>
                    <span className="text-base font-bold">{getCardStatusIcon(status)}</span>
                  </div>
                  <div>
                    <p className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
                      {count as React.ReactNode}
                    </p>
                    <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                      {status === 'todos' ? 'Total' : status}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {statusCounts.todos > 0 && (
          <div className={`mb-4 text-sm ${isDark ? "text-gray-500" : "text-gray-600"}`}>
            <span className="font-medium">Total no sistema:</span> {statusCounts.todos} beneficiários
          </div>
        )}

        <div className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-xl border ${isDark ? "border-gray-700" : "border-gray-200"} p-4 mb-6`}>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-500"}`} />
                <input
                  type="text"
                  placeholder="Nome, CPF, RG ou número da carteira..."
                  className={`w-full pl-10 pr-10 py-2.5 rounded-lg border ${isDark ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400" : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500"} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm('')} className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDark ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`}>
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            <div className="flex-1">
              <div className="relative">
                <Filter className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDark ? "text-gray-400" : "text-gray-500"}`} />
                <select
                  className={`w-full pl-10 pr-8 py-2.5 rounded-lg border ${isDark ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-50 border-gray-300 text-gray-900"} focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none`}
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="all">Todos os status</option>
                  <option value={STATUS_CIDADAO.AGUARDANDO_ANALISE}>Aguardando Análise</option>
                  <option value={STATUS_CIDADAO.EM_PRODUCAO}>Em Produção</option>
                  <option value={STATUS_CIDADAO.HABILITADO}>Habilitados</option>
                  <option value={STATUS_CIDADAO.NAO_HABILITADO}>Não Habilitados</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => openModal(null, 'create')}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-colors flex-1"
              >
                <Plus className="w-5 h-5" />
                <span className="hidden sm:inline">Novo Beneficiário</span>
                <span className="sm:hidden">Novo</span>
              </button>
            </div>
          </div>
        </div>

        <div className={`mb-4 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          {loadingTable ? 'Carregando beneficiários...' :
            `Mostrando ${beneficiarios.length} beneficiários na página ${currentPage} de ${totalPages} (Total: ${totalBeneficiarios})`}
        </div>

        <div className={`${isDark ? "bg-gray-800" : "bg-white"} rounded-xl border ${isDark ? "border-gray-700" : "border-gray-200"} overflow-hidden`}>
          <div className="overflow-x-auto">
            {loadingTable ? (
              <div className="p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className={`mt-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>Carregando beneficiários...</p>
              </div>
            ) : beneficiarios.length === 0 ? (
              <div className="text-center py-8">
                <p className={isDark ? "text-gray-400" : "text-gray-500"}>
                  {searchTerm || statusFilter !== 'all' ? 'Nenhum beneficiário encontrado' : 'Nenhum beneficiário cadastrado'}
                </p>
                {(searchTerm || statusFilter !== 'all') && (
                  <button onClick={handleClearSearch} className={`mt-2 px-4 py-2 ${isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-800"}`}>
                    Limpar filtros
                  </button>
                )}
              </div>
            ) : (
              <>
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className={isDark ? "bg-gray-800" : "bg-gray-50"}>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Beneficiário</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Documentos</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Telefone</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Carteira</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider hidden sm:table-cell">Tipo Sanguíneo</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">Ações</th>
                    </tr>
                  </thead>
                  <tbody className={`${isDark ? "bg-gray-800" : "bg-white"} divide-y ${isDark ? "divide-gray-700" : "divide-gray-200"}`}>
                    {beneficiarios.map((benef) => (
                      <tr key={benef.id_benef} className={`${isDark ? "hover:bg-gray-750" : "hover:bg-gray-50"} transition-colors`}>
                        <td className="px-4 py-3">
                          <div className="flex items-center">
                            <div className="shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                              {benef.nome?.split(" ").map((n) => n[0]).slice(0, 2).join("") || "??"}
                            </div>
                            <div className="ml-3">
                              <div className={`text-sm font-medium ${isDark ? "text-white" : "text-gray-900"}`}>
                                {benef.nome || 'Não informado'}
                              </div>
                              <div className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                                Nasc: {benef.data_nascimento || 'Não informado'}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="space-y-1">
                            <div className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                              CPF: <span className="font-mono">{benef.cpf || 'Não informado'}</span>
                            </div>
                            <div className={`text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                              RG: <span className="font-mono">{benef.rg || 'Não informado'}</span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                            {benef.telefone || 'Não informado'}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                            {benef.num_carteira || 'Não informado'}
                          </div>
                        </td>
                        <td className="px-4 py-3 hidden sm:table-cell">
                          <div className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                            {benef.tipo_sanguineo_nome || benef.tipo_sanguineo || 'Não informado'}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="relative">
                            <button
                              onClick={() => setOpenDropdownId(openDropdownId === benef.id_benef ? null : benef.id_benef!)}
                              disabled={updatingStatusId === benef.id_benef}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all flex items-center justify-between w-40 ${getStatusColor(benef.status_cidadao || '')
                                } ${updatingStatusId === benef.id_benef ? 'opacity-70 cursor-wait' : 'hover:opacity-90'}`}
                              title="Clique para alterar status"
                            >
                              <div className="flex items-center gap-2">
                                {updatingStatusId === benef.id_benef ? (
                                  <div className="animate-spin h-3 w-3 border border-current border-t-transparent rounded-full"></div>
                                ) : (
                                  <>
                                    <span className="text-xs">{getStatusIcon(benef.status_cidadao || '')}</span>
                                    <span>{benef.status_cidadao || 'Sem status'}</span>
                                  </>
                                )}
                              </div>
                              <ChevronDown className={`w-3 h-3 transition-transform ${openDropdownId === benef.id_benef ? 'rotate-180' : ''}`} />
                            </button>

                            {openDropdownId === benef.id_benef && (
                              <div className={`absolute z-10 mt-1 w-40 rounded-lg border shadow-lg ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                                <div className="py-1">
                                  {STATUS_SELECAO.map((statusOption) => {
                                    const isCurrentStatus = statusOption === benef.status_cidadao;

                                    return (
                                      <button
                                        key={statusOption}
                                        onClick={() => handleChangeStatus(benef.id_benef!, statusOption)}
                                        className={`w-full text-left px-3 py-2 text-xs flex items-center gap-2 ${isCurrentStatus
                                          ? isDark ? 'bg-gray-700' : 'bg-gray-100'
                                          : isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                                          }`}
                                      >
                                        <span className="text-xs">{getStatusIcon(statusOption)}</span>
                                        <span>{statusOption}</span>
                                        {isCurrentStatus && (
                                          <span className="ml-auto text-xs">✓</span>
                                        )}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => openModal(benef, 'view')}
                              className={`p-1.5 rounded ${isDark ? "text-blue-400 hover:text-blue-300 hover:bg-gray-700" : "text-blue-600 hover:text-blue-800 hover:bg-gray-100"}`}
                              title="Visualizar"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => {
                                if (benef.status_cidadao && STATUS_FINAIS.includes(benef.status_cidadao as any)) {
                                  setSuccessMessage('Para editar beneficiário com status final, contate o administrador');
                                  setTimeout(() => setSuccessMessage(''), 3000);
                                } else {
                                  openModal(benef, 'edit');
                                }
                              }}
                              className={`p-1.5 rounded ${benef.status_cidadao && STATUS_FINAIS.includes(benef.status_cidadao as any)
                                ? `${isDark ? "text-gray-500 cursor-not-allowed" : "text-gray-400 cursor-not-allowed"}`
                                : `${isDark ? "text-green-400 hover:text-green-300 hover:bg-gray-700" : "text-green-600 hover:text-green-800 hover:bg-gray-100"}`
                                }`}
                              title={benef.status_cidadao && STATUS_FINAIS.includes(benef.status_cidadao as any) ? 'Não é possível editar beneficiário com status final' : 'Editar'}
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>

          {!loadingTable && totalPages > 1 && (
            <div className={`px-4 py-4 border-t ${isDark ? "border-gray-700" : "border-gray-200"}`}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  Página {currentPage} de {totalPages}
                </div>

                <div className="flex items-center space-x-1">
                  <button
                    onClick={handleFirstPage}
                    disabled={currentPage === 1}
                    className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border transition-all ${currentPage === 1
                      ? `cursor-not-allowed ${isDark ? "bg-gray-800 border-gray-700 text-gray-600" : "bg-gray-100 border-gray-300 text-gray-400"}`
                      : `hover:scale-105 ${isDark ? "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"}`
                      }`}
                    title="Primeira página"
                  >
                    <ChevronsLeft className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border transition-all ${currentPage === 1
                      ? `cursor-not-allowed ${isDark ? "bg-gray-800 border-gray-700 text-gray-600" : "bg-gray-100 border-gray-300 text-gray-400"}`
                      : `hover:scale-105 ${isDark ? "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"}`
                      }`}
                    title="Página anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  {renderPageButtons()}

                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border transition-all ${currentPage === totalPages
                      ? `cursor-not-allowed ${isDark ? "bg-gray-800 border-gray-700 text-gray-600" : "bg-gray-100 border-gray-300 text-gray-400"}`
                      : `hover:scale-105 ${isDark ? "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"}`
                      }`}
                    title="Próxima página"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleLastPage}
                    disabled={currentPage === totalPages}
                    className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border transition-all ${currentPage === totalPages
                      ? `cursor-not-allowed ${isDark ? "bg-gray-800 border-gray-700 text-gray-600" : "bg-gray-100 border-gray-300 text-gray-400"}`
                      : `hover:scale-105 ${isDark ? "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"}`
                      }`}
                    title="Última página"
                  >
                    <ChevronsRight className="w-4 h-4" />
                  </button>
                </div>

                <div className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {totalBeneficiarios} itens no total
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <Modal
          beneficiario={selectedBeneficiario}
          mode={modalMode}
          onClose={closeModal}
          onSave={handleSave}
        />
      )}

      {openDropdownId !== null && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => setOpenDropdownId(null)}
        />
      )}
    </div>
  );
};

export default BeneficiariosList;