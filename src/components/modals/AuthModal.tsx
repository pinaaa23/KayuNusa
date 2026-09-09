"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, authMode, loginMock } = useAuth();
  const [mode, setMode] = useState<"login" | "register">(authMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    setMode(authMode);
  }, [authMode]);

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    loginMock(email);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        onClick={closeAuthModal}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8 sm:p-12 z-10 border border-neutral-100 animate-in zoom-in-95 duration-200">
        <button
          onClick={closeAuthModal}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-full transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <div className="text-center mb-10">
          <div className="w-12 h-12 bg-[#F9F1E7] text-[#B88E2F] rounded-xl flex items-center justify-center mx-auto font-bold text-xl mb-4">
            KN
          </div>
          <h2 className="text-3xl font-bold text-neutral-900">
            {mode === "login" ? "Masuk ke KayuNusa" : "Buat Akun KayuNusa"}
          </h2>
        </div>

        {/* Form and Social Login Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-stretch max-w-3xl mx-auto">
          
          {/* Left Column: Email/Password Form */}
          <div className="flex flex-col justify-center w-full">
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "register" && (
                <div>
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-base px-4 py-4 bg-[#f4f4f4] focus:bg-[#eeeeee] focus:outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors"
                    required
                  />
                </div>
              )}
              
              <div>
                <input
                  type="email"
                  placeholder="Alamat Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-base px-4 py-4 bg-[#f4f4f4] focus:bg-[#eeeeee] focus:outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors"
                  required
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Kata Sandi"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-base px-4 py-4 bg-transparent border-b border-neutral-200 focus:border-[#B88E2F] focus:outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#B88E2F] hover:bg-[#9E7824] text-white font-bold py-3.5 rounded-xl transition-colors shadow-md text-sm uppercase tracking-wider"
                >
                  {mode === "login" ? "MASUK" : "DAFTAR"}
                </button>
              </div>
            </form>
          </div>

          {/* Divider */}
          <div className="relative flex md:flex-col items-center justify-center py-6 md:py-0 hidden md:flex">
            <div className="w-full md:w-[1px] h-[1px] md:h-full bg-neutral-200"></div>
            <span className="absolute bg-white px-3 py-1 text-xs font-bold text-neutral-400">ATAU</span>
          </div>
          
          <div className="relative flex items-center justify-center py-6 md:hidden">
            <div className="w-full h-[1px] bg-neutral-200"></div>
            <span className="absolute bg-white px-3 py-1 text-xs font-bold text-neutral-400">ATAU</span>
          </div>

          {/* Right Column: Social Logins */}
          <div className="flex flex-col justify-center space-y-3 w-full">
            <button className="flex items-center justify-center gap-3 w-full border border-neutral-200 hover:bg-neutral-50 p-4 rounded-xl transition-colors font-semibold text-sm text-neutral-700">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Lanjutkan dengan Google
            </button>
            
            <button className="flex items-center justify-center gap-3 w-full border border-neutral-200 hover:bg-neutral-50 p-4 rounded-xl transition-colors font-semibold text-sm text-neutral-700">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.8 3.59-.72 1.58.11 2.86.72 3.69 1.94-3.14 1.83-2.65 6.07.41 7.28-.73 1.58-1.58 3.12-2.77 3.67zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.35 2.37-1.85 4.34-3.74 4.25z"/>
              </svg>
              Lanjutkan dengan Apple
            </button>
            
            <button className="flex items-center justify-center gap-3 w-full border border-neutral-200 hover:bg-neutral-50 p-4 rounded-xl transition-colors font-semibold text-sm text-neutral-700">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z"/>
              </svg>
              Lanjutkan dengan Facebook
            </button>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-12 text-center text-sm font-semibold text-neutral-600">
          {mode === "login" ? (
            <p>
              Belum punya akun?{" "}
              <button
                onClick={() => setMode("register")}
                className="text-[#B88E2F] hover:underline"
              >
                Daftar
              </button>
            </p>
          ) : (
            <p>
              Sudah punya akun?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-[#B88E2F] hover:underline"
              >
                Masuk
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
