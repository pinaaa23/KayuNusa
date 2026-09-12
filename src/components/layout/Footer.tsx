"use client";

import React, { useState } from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Show toast
    setShowToast(true);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
    
    setEmail("");
  };

  return (
    <footer className="bg-white border-t border-neutral-200 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-200">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-2xl tracking-tight text-neutral-900">
                KayuNusa
              </span>
            </Link>
            <p className="text-neutral-500 text-sm leading-relaxed pr-4">
              Jl. Raya Janti, Wonocatur, Bantul<br />
              Daerah Istimewa Yogyakarta
            </p>
          </div>

          {/* Nav Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-neutral-400">Link</h4>
            <ul className="space-y-3 font-semibold text-neutral-800 text-sm">
              <li>
                <Link href="/" className="hover:text-[#B88E2F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#B88E2F] transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#B88E2F] transition-colors">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#B88E2F] transition-colors">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-neutral-400">Bantuan</h4>
            <ul className="space-y-3 font-semibold text-neutral-800 text-sm">
              <li>
                <Link href="/payment" className="hover:text-[#B88E2F] transition-colors">
                  Pembayaran
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-[#B88E2F] transition-colors">
                  Pengembalian
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#B88E2F] transition-colors">
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-neutral-400">Pesan</h4>
            <form onSubmit={handleSubscribe} className="flex flex-wrap sm:flex-nowrap gap-2 items-center">
              <input
                type="email"
                placeholder="Masukkan Emailmu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-sm py-2 border-b border-neutral-900 focus:outline-none focus:border-[#B88E2F] text-neutral-800 placeholder:text-neutral-400 bg-transparent transition-colors"
                required
              />
              <button
                type="submit"
                className="text-xs font-bold text-neutral-900 hover:text-[#B88E2F] border-b border-neutral-900 hover:border-[#B88E2F] py-2 whitespace-nowrap transition-colors tracking-wider"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-neutral-800 text-sm font-medium">
          2026 kayunusa. All rights reserved
        </div>
      </div>

      {/* Subscription Success Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-neutral-900 text-white px-6 py-4 rounded-lg shadow-2xl border-l-4 border-[#B88E2F] flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#B88E2F]/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-[#B88E2F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm">Berhasil Berlangganan!</h4>
              <p className="text-xs text-neutral-300 mt-0.5">Terima kasih telah berlangganan newsletter KayuNusa.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
