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

interface ErrorResponse {
  message?: string;
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

      const res = await axios.post<MFAVerifyResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}/ad/verify-2fa`,
        { username, code: fullCode },
        { withCredentials: true }
      );

      const data = res.data;

      if (data.message === 'USUÁRIO LOGADO COM SUCESSO') {
        setStep('success');
        setTimeout(() => {
          onVerified();
        }, 1500);
      }
    } catch (error: any) {
      if (error.response?.data) {
        const errorData = error.response.data;
        setErrorMessage(errorData?.message || 'Código inválido. Tente novamente.');
      } else {
        setErrorMessage('Código inválido. Tente novamente.');
      }
      setCode(['', '', '', '', '', '']);
      setTimeout(() => {
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
        }
      }, 100);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCodeChange = (index: number, value: string) => {
    const numericValue = value.replace(/\D/g, '').slice(0, 1);
    
    const newCode = [...code];
    newCode[index] = numericValue;
    setCode(newCode);

    if (numericValue && index < 5) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = inputRefs.current[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      const prevInput = inputRefs.current[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    } else if (e.key === 'ArrowRight' && index < 5) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    } else if (e.key === 'Enter') {
      verifyMFA();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    
    const newCode = ['', '', '', '', '', ''];
    for (let i = 0; i < pastedData.length && i < 6; i++) {
      newCode[i] = pastedData[i];
    }
    
    setCode(newCode);
    
    const lastFilledIndex = Math.min(pastedData.length, 5);
    const targetInput = inputRefs.current[lastFilledIndex];
    if (targetInput) {
      targetInput.focus();
    }
  };

  const copyToClipboard = () => {
    if (secret) {
      navigator.clipboard.writeText(secret).then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      }).catch(() => {
        setErrorMessage('Erro ao copiar o código');
      });
    }
  };

  if (step === 'checking') {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8 max-w-md w-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-800">Verificando segurança...</h3>
            <p className="text-gray-600 mt-2 text-sm">Carregando configurações de autenticação</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-64 sm:h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-20 right-10 w-32 h-32 sm:w-64 sm:h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-4 left-20 w-32 h-32 sm:w-64 sm:h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40-40v40l-40-40h40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-4 lg:gap-6 items-start justify-center relative z-10">
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-4 sm:p-6 w-full lg:max-w-lg">
          <div className="text-center mb-5">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Shield className="w-7 h-7 text-emerald-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                {step === 'setup' ? 'Configurar MFA' : 'Verificação 2FA'}
              </h2>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm">
              {step === 'setup' ? 'Escaneie o QR Code com seu app autenticador' : 
              step === 'success' ? 'Verificação concluída!' : 
              'Digite o código do seu aplicativo'}
            </p>
          </div>

          {step === 'setup' && qrCodeUrl && (
            <div className="space-y-4">
              <div className="text-center">
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-gray-200 inline-block shadow-md max-w-full">
                  <div 
                    className="w-48 h-48 sm:w-56 sm:h-56 mx-auto bg-cover bg-center rounded-lg"
                    style={{ backgroundImage: `url(${qrCodeUrl})` }}
                    role="img"
                    aria-label="QR Code para autenticação"
                  />
                </div>
                {secret && (
                  <div className="mt-4 p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-200 max-w-full">
                    <p className="text-xs sm:text-sm text-gray-700 mb-2 font-medium">
                      Código manual (use se não puder escanear o QR Code):
                    </p>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-mono break-all bg-white p-3 rounded-lg border border-gray-300 text-gray-800 overflow-x-auto whitespace-nowrap">
                          {secret}
                        </p>
                      </div>
                      <button
                        onClick={copyToClipboard}
                        disabled={isLoading}
                        className="text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-700 text-white font-medium flex items-center justify-center gap-1 px-3 sm:px-4 py-2.5 rounded-lg cursor-pointer transition-all shadow-sm whitespace-nowrap"
                        title="Copiar"
                      >
                        <Clipboard className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        {copySuccess ? 'Copiado!' : 'Copiar Código'}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Cole este código no seu app de autenticação se preferir configurar manualmente
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Código de verificação
                </label>
                <div 
                  className="flex justify-center gap-2 sm:gap-3"
                  onPaste={handlePaste}
                >
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        inputRefs.current[index] = el;
                      }}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={code[index]}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      disabled={isLoading}
                      maxLength={1}
                      className="w-12 h-12 sm:w-14 sm:h-14 text-center text-2xl sm:text-3xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all disabled:opacity-50 text-black"
                      autoFocus={index === 0}
                      aria-label={`Dígito ${index + 1} do código de verificação`}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Cole o código completo ou digite dígito por dígito
                </p>
              </div>

              {errorMessage && (
                <div className="bg-red-50 border border-red-300 rounded-lg p-3 animate-shake">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-800 text-xs sm:text-sm font-medium">{errorMessage}</p>
                      <p className="text-red-600 text-xs mt-1">
                        Escaneie o QR Code primeiro
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <button
                onClick={verifyMFA}
                disabled={isLoading || code.join('').length !== 6}
                className="w-full bg-linear-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white py-3 px-4 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Ativando...</span>
                  </div>
                ) : (
                  'Ativar Autenticação'
                )}
              </button>

              <button
                onClick={onBack}
                className="w-full text-gray-600 hover:text-gray-800 py-2.5 px-4 rounded-lg font-medium transition-colors border border-gray-300 hover:border-gray-400 hover:bg-gray-50 cursor-pointer text-sm"
              >
                Voltar ao login
              </button>
            </div>
          )}

          {step === 'verify' && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Código de verificação
                </label>
                <div 
                  className="flex justify-center gap-2 sm:gap-3"
                  onPaste={handlePaste}
                >
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <input
                      key={index}
                      ref={(el) => {
                        inputRefs.current[index] = el;
                      }}
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={code[index]}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      disabled={isLoading}
                      maxLength={1}
                      className="w-12 h-12 sm:w-14 sm:h-14 text-center text-2xl sm:text-3xl font-bold border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all disabled:opacity-50 text-black"
                      autoFocus={index === 0}
                      aria-label={`Dígito ${index + 1} do código de verificação`}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  Cole o código completo ou digite dígito por dígito
                </p>
              </div>

              {errorMessage && (
                <div className="bg-red-50 border border-red-300 rounded-lg p-3 animate-shake">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                    <p className="text-red-800 text-xs sm:text-sm font-medium">{errorMessage}</p>
                  </div>
                </div>
              )}

              <button
                onClick={verifyMFA}
                disabled={isLoading || code.join('').length !== 6}
                className="w-full bg-linear-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white py-3 px-4 rounded-lg font-semibold text-sm shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Verificando...</span>
                  </div>
                ) : (
                  'Verificar Código'
                )}
              </button>

              <button
                onClick={onBack}
                className="w-full text-gray-600 hover:text-gray-800 py-2.5 px-4 rounded-lg font-medium transition-colors border border-gray-300 hover:border-gray-400 hover:bg-gray-50 cursor-pointer text-sm"
              >
                Voltar ao login
              </button>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="bg-green-100 p-4 rounded-full">
                  <CheckCircle className="w-14 h-14 text-green-600" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                Verificação Concluída!
              </h3>
              <p className="text-gray-600 text-sm">
                Redirecionando...
              </p>
              <div className="flex justify-center">
                <div className="w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          )}
        </div>

        <div className="hidden lg:block bg-white/10 backdrop-blur-lg rounded-3xl p-6 lg:p-8 border border-white/30 shadow-2xl flex-1 max-w-lg">
          <div className="flex items-center gap-4 mb-6 lg:mb-8">
            <div className="bg-white/20 p-3 rounded-xl">
              <Lock className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white">
              Guia de Segurança
            </h2>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="bg-white/30 backdrop-blur-sm text-white rounded-xl w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center shadow-lg">
                  <Smartphone className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-lg lg:text-xl mb-2 lg:mb-3">
                  1. Instale o Google Authenticator
                </h3>
                <p className="text-white/90 text-sm lg:text-base leading-relaxed">
                  Baixe o aplicativo no seu smartphone:
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="bg-white/30 backdrop-blur-sm text-white rounded-xl w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center shadow-lg">
                  <QrCode className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-lg lg:text-xl mb-2 lg:mb-3">
                  2. Escaneie o Código QR
                </h3>
                <p className="text-white/90 text-sm lg:text-base leading-relaxed">
                  Abra o Google Authenticator, toque no <strong>+</strong> e selecione 
                  <strong> &quot;Escanear código QR&quot;</strong>. Aponte a câmera para o código que aparecerá no formulário ao lado.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0">
                <div className="bg-white/30 backdrop-blur-sm text-white rounded-xl w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center shadow-lg">
                  <Key className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-lg lg:text-xl mb-2 lg:mb-3">
                  3. Use o Código de 6 Dígitos
                </h3>
                <p className="text-white/90 text-sm lg:text-base leading-relaxed">
                  Digite o código de 6 dígitos que aparece no app. O código muda a cada 30 segundos 
                  para garantir sua segurança.
                </p>
                <div className="mt-3 flex gap-2 justify-center">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div
                      key={num}
                      className="w-8 h-8 bg-white/20 border border-white/30 rounded-md flex items-center justify-center text-white font-bold text-sm"
                    >
                      {num}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden bg-white/10 backdrop-blur-lg rounded-3xl p-4 sm:p-6 border border-white/30 shadow-2xl w-full mt-4">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Guia de Segurança
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <div className="flex gap-3">
              <div className="shrink-0">
                <div className="bg-white/30 backdrop-blur-sm text-white rounded-xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-lg">
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-xs sm:text-sm mb-1">
                  1. Instale o Google Authenticator
                </h3>
                <p className="text-white/90 text-xs leading-relaxed mb-1">
                  Baixe o aplicativo no seu smartphone:
                </p>
                <div className="space-y-1 text-xs text-white/90 bg-white/10 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span><strong className="text-white">Android:</strong> Play Store</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span><strong className="text-white">iPhone:</strong> App Store</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="shrink-0">
                <div className="bg-white/30 backdrop-blur-sm text-white rounded-xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-lg">
                  <QrCode className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-xs sm:text-sm mb-1">
                  2. Escaneie o Código QR
                </h3>
                <p className="text-white/90 text-xs leading-relaxed">
                  Abra o app e escaneie o código QR acima ou use o código manual.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="shrink-0">
                <div className="bg-white/30 backdrop-blur-sm text-white rounded-xl w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-lg">
                  <Key className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-xs sm:text-sm mb-1">
                  3. Use o Código de 6 Dígitos
                </h3>
                <p className="text-white/90 text-xs leading-relaxed">
                  Digite o código que aparece no app a cada 30 segundos.
                </p>
              </div>
            </div>

            <div className="bg-white/20 border border-white/30 rounded-xl p-2 sm:p-3 backdrop-blur-sm">
              <p className="text-white text-xs text-center font-semibold">
                🔒 Sua segurança é nossa prioridade!
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}