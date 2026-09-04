"use client";

import React, { useState } from "react";
import { X, Lock, Mail, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, closeAuthModal, authMode, loginMock } = useAuth();
  const [mode, setMode] = useState<"login" | "register">(authMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    loginMock(email);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={closeAuthModal}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      />

      {/* Modal Box */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 sm:p-8 z-10 border border-neutral-100 animate-in zoom-in-95 duration-200">
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-12 h-12 bg-[#F9F1E7] text-[#B88E2F] rounded-xl flex items-center justify-center mx-auto font-bold text-xl">
            KN
          </div>
          <h2 className="text-2xl font-bold text-neutral-900">
            {mode === "login" ? "Selamat Datang Kembali" : "Buat Akun KayuNusa"}
          </h2>
          <p className="text-xs text-neutral-500">
            {mode === "login"
              ? "Masuk untuk melanjutkan belanja furniture idamanmu"
              : "Daftar untuk menikmati pengalaman belanja mudah & terpercaya"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div>
              <label className="block text-xs font-semibold text-neutral-700 mb-1">
                Nama Lengkap
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Budi Santoso"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-sm pl-9 pr-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F]"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                placeholder="nama@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-sm pl-9 pr-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-700 mb-1">
              Kata Sandi
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-sm pl-9 pr-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F]"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#B88E2F] hover:bg-[#9E7824] text-white font-bold py-3.5 rounded-lg transition-colors shadow-md text-sm tracking-wide mt-2"
          >
            {mode === "login" ? "MASUK AKUN" : "DAFTAR AKUN"}
          </button>
        </form>

        {/* Toggle Mode */}
        <div className="mt-6 text-center text-xs text-neutral-500 pt-4 border-t border-neutral-100">
          {mode === "login" ? (
            <p>
              Belum punya akun?{" "}
              <button
                onClick={() => setMode("register")}
                className="text-[#B88E2F] font-bold hover:underline"
              >
                Daftar Sekarang
              </button>
            </p>
          ) : (
            <p>
              Sudah punya akun?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-[#B88E2F] font-bold hover:underline"
              >
                Masuk di Sini
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
