// src/app/components/Login/LoginAD/index.tsx
'use client';

import { useState, FormEvent, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import MFAComponent from '../MFA/MfaAd';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaShieldAlt } from 'react-icons/fa';

interface LoginResponse {
  message?: string;
  name?: string;
  requires2FA?: boolean;
  needs2FASetup?: boolean;
  needsRegistration?: boolean;
  username?: string;
}

export default function CipteaAdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showMFA, setShowMFA] = useState(false);
  const [mfaUsername, setMfaUsername] = useState('');
  const router = useRouter();

  const handleSubmit = async (e?: FormEvent) => {
    if (e) {
      e.preventDefault();
    }

    if (!username || !password) {
      setErrorMessage('Por favor, preencha todos os campos');
      setSuccessMessage('');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/ad/login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({ username, password })
        }
      );

      const data: LoginResponse = await res.json();

      if (data.requires2FA || data.needs2FASetup) {
        setMfaUsername(username);
        setShowMFA(true);
      } else if (data.message && data.message.includes('SUCESSO')) {
        handleLoginSuccess(data.name || username.split('.')[0]);
      } else {
        setErrorMessage('Resposta inesperada do servidor.');
      }
    } catch (err) {
      setErrorMessage('Erro ao fazer login. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSuccess = (userName: string) => {
    setSuccessMessage('Acesso autorizado! Redirecionando para o painel...');
    localStorage.setItem('admin_name', userName);
    localStorage.setItem('ciptea_admin', 'true');
    
    setTimeout(() => {
      router.push('/sistema-admin/beneficiarios');
    }, 1500);
  };

  const handleMFASuccess = () => {
    handleLoginSuccess(mfaUsername.split('.')[0]);
  };

  const handleMFABack = () => {
    setShowMFA(false);
    setMfaUsername('');
  };

  if (showMFA) {
    return (
      <MFAComponent 
        username={mfaUsername}
        onVerified={handleMFASuccess}
        onBack={handleMFABack}
      />
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0044CA] via-[#0037C1] to-[#002595] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects - Igual ao segundo código */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 sm:top-20 sm:left-20 sm:w-72 sm:h-72 bg-[#FDC300] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-10 w-32 h-32 sm:top-40 sm:right-20 sm:w-72 sm:h-72 bg-[#00BDFF] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-4 left-20 w-32 h-32 sm:-bottom-8 sm:left-40 sm:w-72 sm:h-72 bg-[#00DD4F] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Padrão de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40-40v40l-40-40h40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Card de Login - Estilo do segundo código */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden transform transition-all duration-500 hover:shadow-3xl">
          {/* Header com gradiente amarelo - Cores institucionais */}
          <div className="bg-linear-to-r from-[#FDC300] to-[#FF8500] px-6 py-5 lg:px-8 lg:py-6">
            <div className="flex items-center gap-3">
              <FaShieldAlt className="w-6 h-6 text-[#0037C1]" />
              <div>
                <h2 className="text-xl font-bold text-[#0037C1]">
                  Portal do Administrador
                </h2>
                <p className="text-[#0044CA]/80 text-sm">
                  Acesso restrito aos gestores do programa
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 lg:p-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Campo Usuário */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Usuário</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaUser className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      disabled={isLoading}
                      className="block w-full pl-12 pr-4 py-3 md:py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-3 focus:ring-[#00BDFF]/30 focus:border-[#00BDFF] transition-all duration-300 bg-gray-50/50 focus:bg-white text-gray-800 placeholder-gray-400 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Digite seu usuário"
                    />
                  </div>
                </div>

                {/* Campo Senha */}
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Senha</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <FaLock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isLoading}
                      className="block w-full pl-12 pr-14 py-3 md:py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-3 focus:ring-[#00BDFF]/30 focus:border-[#00BDFF] transition-all duration-300 bg-gray-50/50 focus:bg-white text-gray-800 placeholder-gray-400 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Digite sua senha"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={isLoading}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center hover:bg-gray-100 rounded-r-2xl transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed disabled:hover:bg-transparent"
                    >
                      {showPassword ? (
                        <FaEyeSlash className="h-5 w-5 text-gray-500 hover:text-[#00BDFF]" />
                      ) : (
                        <FaEye className="h-5 w-5 text-gray-500 hover:text-[#00BDFF]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Mensagens de erro/sucesso */}
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 animate-shake">
                    <p className="text-red-700 text-sm font-medium">{errorMessage}</p>
                  </div>
                )}

                {successMessage && (
                  <div className="bg-[#00DD4F]/10 border border-[#00DD4F]/30 rounded-xl p-4">
                    <p className="text-[#00751D] text-sm font-medium">{successMessage}</p>
                  </div>
                )}

                {/* Botão de submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 px-4 md:py-4 md:px-6 rounded-2xl font-bold text-base md:text-lg shadow-xl focus:outline-none focus:ring-4 focus:ring-[#00BDFF]/30 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                    isLoading
                      ? "bg-gray-400 cursor-not-allowed opacity-70"
                      : "bg-linear-to-r from-[#0044CA] to-[#00BDFF] hover:from-[#0037C1] hover:to-[#0099CC] text-white cursor-pointer hover:shadow-2xl"
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm md:text-base">Verificando credenciais...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <FaShieldAlt className="w-4 h-4 md:w-5 md:h-5" />
                      <span className="text-sm md:text-base">Acessar Sistema</span>
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Animações CSS */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}