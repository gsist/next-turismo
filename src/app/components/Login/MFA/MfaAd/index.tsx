// src/app/components/Login/MFA/MfaAd/index.tsx
import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  Shield, 
  RefreshCw, 
  AlertTriangle, 
  CheckCircle, 
  Clipboard, 
  QrCode, 
  Lock, 
  Smartphone, 
  Key 
} from 'lucide-react';
import axios from 'axios';

interface MFAProps {
  username: string;
  onVerified: () => void;
  onBack: () => void;
}

interface MFAStatus {
  requires2FA: boolean;
  is2FASetup: boolean;
  needs2FASetup?: boolean;
  needsRegistration?: boolean;
  username?: string;
  userId?: number;
  message?: string;
}

interface MFASetupResponse {
  message: string;
  secret: string;
  otpauth_url: string;
  qrCodeUrl: string;
  username: string;
}

interface MFAVerifyResponse {
  message: string;
  token?: string;
  username?: string;
}

export default function MFAComponent({ username, onVerified, onBack }: MFAProps) {
  const [step, setStep] = useState<'checking' | 'setup' | 'verify' | 'success'>('checking');
  const [code, setCode] = useState<string[]>(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [secret, setSecret] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const setupMFA = useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorMessage('');
      const res = await axios.post<MFASetupResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/ad/setup-2fa`,
        { username }
      );
      const data = res.data;
      setQrCodeUrl(data.qrCodeUrl);
      setSecret(data.secret);
      setStep('setup');
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  const checkMFAStatus = useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorMessage('');
      const res = await axios.post<MFAStatus>(
        `${process.env.NEXT_PUBLIC_API_URL}/ad/check-2fa-status`,
        { username }
      );
      const data = res.data;
      if (data.requires2FA && data.is2FASetup) {
        setStep('verify');
      } else if (data.needs2FASetup || !data.is2FASetup) {
        setStep('setup');
        await setupMFA();
      } else {
        setStep('verify');
      }
    } catch (error) {
      setErrorMessage('Erro ao verificar status do MFA');
    } finally {
      setIsLoading(false);
    }
  }, [username, setupMFA]);

  useEffect(() => {
    checkMFAStatus();
  }, [checkMFAStatus]);

  const verifyMFA = async () => {
    const fullCode = code.join('');
    if (fullCode.length !== 6) {
      setErrorMessage('Digite um código válido de 6 dígitos');
      return;
    }
    try {
      setIsLoading(true);
      setErrorMessage('');
      const res = await axios.post<{ message: string }>(
        `${process.env.NEXT_PUBLIC_API_URL}/ad/verify-2fa`,
        { username, code: fullCode },
        { withCredentials: true }
      );
      if (res.data.message === 'USUÁRIO LOGADO COM SUCESSO') {
        setStep('success');
        setTimeout(() => onVerified(), 1500);
      }
    } catch (error: any) {
      setErrorMessage(error.response?.data?.message || 'Código inválido. Tente novamente.');
      setCode(['', '', '', '', '', '']);
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCodeChange = (index: number, value: string) => {
    const numericValue = value.replace(/\D/g, '').slice(0, 1);
    const newCode = [...code];
    newCode[index] = numericValue;
    setCode(newCode);
    if (numericValue && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    } else if (e.key === 'Enter') {
      verifyMFA();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const newCode = ['', '', '', '', '', ''];
    for (let i = 0; i < pastedData.length && i < 6; i++) newCode[i] = pastedData[i];
    setCode(newCode);
    const lastFilledIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastFilledIndex]?.focus();
  };

  const copyToClipboard = () => {
    if (secret) {
      navigator.clipboard.writeText(secret).then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      }).catch(() => setErrorMessage('Erro ao copiar o código'));
    }
  };

  if (step === 'checking') {
    return (
      <div className="min-h-screen bg-linear-to-br from-[#0044CA] via-[#0037C1] to-[#002595] flex items-center justify-center p-4">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 max-w-md w-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#00BDFF] mx-auto mb-3"></div>
            <h3 className="text-md font-semibold text-gray-800">Verificando segurança...</h3>
            <p className="text-gray-600 mt-1 text-xs">Carregando configurações de autenticação</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-[#0044CA] via-[#0037C1] to-[#002595] flex items-center justify-center p-3 sm:p-4 md:p-5 relative overflow-hidden">
      {/* Bolhas animadas */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-64 sm:h-64 bg-[#FDC300] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-10 w-32 h-32 sm:w-64 sm:h-64 bg-[#00BDFF] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-4 left-20 w-32 h-32 sm:w-64 sm:h-64 bg-[#00DD4F] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Padrão de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40-40v40l-40-40h40z'/%3E%3C/g%3E%3C/svg%3E")` }}></div>
      </div>

      {/* Container com altura igual para os dois cards */}
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-4 md:gap-5 items-stretch justify-center relative z-10">
        {/* Card principal - mesmo estilo do LoginAD */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 w-full lg:flex-1 lg:max-w-md flex flex-col">
          {/* Header com gradiente amarelo */}
          <div className="bg-linear-to-r from-[#FDC300] to-[#FF8500] px-5 py-4 rounded-t-3xl">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#0037C1]" />
              <div>
                <h2 className="text-base sm:text-lg font-bold text-[#0037C1]">
                  {step === 'setup' ? 'Configurar MFA' : step === 'verify' ? 'Verificação 2FA' : 'Autenticação'}
                </h2>
                <p className="text-[#0044CA]/80 text-xs">
                  {step === 'setup' ? 'Proteja sua conta com dois fatores' : 'Digite o código do seu aplicativo'}
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 flex-1">
            {step === 'setup' && qrCodeUrl && (
              <div className="space-y-4">
                <div className="text-center">
                  {/* QR Code tamanho equilibrado */}
                  <div className="bg-white p-2 rounded-xl border border-gray-200 inline-block shadow-sm">
                    <div 
                      className="w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 mx-auto bg-cover bg-center rounded-lg"
                      style={{ backgroundImage: `url(${qrCodeUrl})` }}
                      role="img"
                      aria-label="QR Code para autenticação"
                    />
                  </div>
                  
                  {secret && (
                    <div className="mt-3 p-2 bg-gray-50 rounded-lg border border-gray-200">
                      <p className="text-xs text-gray-700 mb-1 font-medium">Código manual:</p>
                      <div className="flex flex-col sm:flex-row items-stretch gap-1.5">
                        <div className="flex-1 min-w-0">
                          <p className="text-[11px] font-mono break-all bg-white p-2 rounded border border-gray-300 text-gray-800">{secret}</p>
                        </div>
                        <button onClick={copyToClipboard} disabled={isLoading} className="text-xs bg-[#0044CA] hover:bg-[#0037C1] text-white font-medium flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg transition-all whitespace-nowrap">
                          <Clipboard className="w-3 h-3" />
                          {copySuccess ? 'Copiado!' : 'Copiar'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Código de verificação</label>
                  <div className="flex justify-center gap-2 sm:gap-2.5" onPaste={handlePaste}>
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <input
                        key={index}
                        ref={(el) => { inputRefs.current[index] = el; }}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={code[index]}
                        onChange={(e) => handleCodeChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        disabled={isLoading}
                        maxLength={1}
                        className="w-11 h-11 sm:w-12 sm:h-12 text-center text-xl sm:text-2xl font-bold border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00BDFF]/30 focus:border-[#00BDFF] transition-all disabled:opacity-50 text-black"
                        autoFocus={index === 0}
                      />
                    ))}
                  </div>
                </div>

                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-2 animate-shake">
                    <div className="flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-600" />
                      <p className="text-red-700 text-xs">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <button
                  onClick={verifyMFA}
                  disabled={isLoading || code.join('').length !== 6}
                  className="w-full bg-linear-to-r from-[#0044CA] to-[#00BDFF] hover:from-[#0037C1] hover:to-[#0099CC] text-white py-2.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Ativando...</span>
                    </div>
                  ) : (
                    'Ativar Autenticação'
                  )}
                </button>

                <button onClick={onBack} className="w-full text-gray-500 hover:text-gray-700 py-2 rounded-lg font-medium text-sm border border-gray-200 hover:bg-gray-50 transition-colors">
                  Voltar ao login
                </button>
              </div>
            )}

            {step === 'verify' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Código de verificação</label>
                  <div className="flex justify-center gap-2 sm:gap-2.5" onPaste={handlePaste}>
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <input
                        key={index}
                        ref={(el) => { inputRefs.current[index] = el; }}
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        value={code[index]}
                        onChange={(e) => handleCodeChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        disabled={isLoading}
                        maxLength={1}
                        className="w-11 h-11 sm:w-12 sm:h-12 text-center text-xl sm:text-2xl font-bold border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00BDFF]/30 focus:border-[#00BDFF] transition-all disabled:opacity-50 text-black"
                        autoFocus={index === 0}
                      />
                    ))}
                  </div>
                </div>

                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-2 animate-shake">
                    <p className="text-red-700 text-xs">{errorMessage}</p>
                  </div>
                )}

                <button
                  onClick={verifyMFA}
                  disabled={isLoading || code.join('').length !== 6}
                  className="w-full bg-linear-to-r from-[#0044CA] to-[#00BDFF] hover:from-[#0037C1] hover:to-[#0099CC] text-white py-2.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Verificando...</span>
                    </div>
                  ) : (
                    'Verificar Código'
                  )}
                </button>

                <button onClick={onBack} className="w-full text-gray-500 hover:text-gray-700 py-2 rounded-lg font-medium text-sm border border-gray-200 hover:bg-gray-50 transition-colors">
                  Voltar ao login
                </button>
              </div>
            )}

            {step === 'success' && (
              <div className="text-center space-y-3 py-6">
                <div className="flex justify-center">
                  <div className="bg-[#00DD4F]/10 p-3 rounded-full">
                    <CheckCircle className="w-12 h-12 text-[#00DD4F]" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800">Verificação Concluída!</h3>
                <p className="text-gray-500 text-sm">Redirecionando...</p>
                <div className="flex justify-center">
                  <div className="w-6 h-6 border-3 border-[#00BDFF] border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Guia de Segurança - mesma altura, fonte maior e mais conteúdo para ocupar espaço */}
        <div className="hidden lg:flex bg-white/10 backdrop-blur-lg rounded-2xl p-5 md:p-6 border border-white/30 shadow-xl flex-col w-full max-w-sm">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-[#FDC300]/20 p-2 rounded-xl">
              <Lock className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white">Guia de Segurança</h2>
          </div>

          <div className="space-y-5 md:space-y-6 flex-1">
            {/* Item 1 */}
            <div className="flex gap-3">
              <div className="shrink-0">
                <div className="bg-white/30 backdrop-blur-sm text-white rounded-xl w-9 h-9 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white text-base md:text-lg mb-1">1. Baixe o app</h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  Instale o <strong>Google Authenticator</strong> na Play Store (Android) ou App Store (iPhone).
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-3">
              <div className="shrink-0">
                <div className="bg-white/30 backdrop-blur-sm text-white rounded-xl w-9 h-9 flex items-center justify-center">
                  <QrCode className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white text-base md:text-lg mb-1">2. Escaneie o QR Code</h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  Toque em <strong>"+"</strong> no app, escolha <strong>"Escanear código QR"</strong> e aponte para o código ao lado.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-3">
              <div className="shrink-0">
                <div className="bg-white/30 backdrop-blur-sm text-white rounded-xl w-9 h-9 flex items-center justify-center">
                  <Key className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-white text-base md:text-lg mb-1">3. Insira o código de 6 dígitos</h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  O código numérico muda a cada 30 segundos. Digite-o no campo ao lado para ativar a proteção.
                </p>
              </div>
            </div>

            {/* Dica extra */}
            <div className="mt-2 pt-2 border-t border-white/20">
              <p className="text-white/80 text-xs md:text-sm italic">
                💡 O código é único por usuário e garante que apenas você tenha acesso.
              </p>
            </div>
          </div>
        </div>

        {/* Versão mobile do guia - também mais robusta */}
        <div className="lg:hidden bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/30 w-full">
          <div className="flex items-center gap-2 mb-3">
            <Lock className="w-4 h-4 text-white" />
            <h2 className="text-base font-bold text-white">Guia de Segurança</h2>
          </div>
          <div className="space-y-2 text-white/90 text-sm">
            <p><strong>1.</strong> Baixe o Google Authenticator</p>
            <p><strong>2.</strong> Escaneie o QR Code acima</p>
            <p><strong>3.</strong> Digite o código de 6 dígitos</p>
            <p className="text-xs text-white/70 mt-1 italic">O código muda a cada 30 segundos.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-shake { animation: shake 0.4s ease-in-out; }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse { animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
      `}</style>
    </div>
  );
}