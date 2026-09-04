"use client";

import React, { useState } from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Terima kasih telah berlangganan newsletter KayuNusa! (${email})`);
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
                <a href="#pembayaran" className="hover:text-[#B88E2F] transition-colors">
                  Pembayaran
                </a>
              </li>
              <li>
                <a href="#pengembalian" className="hover:text-[#B88E2F] transition-colors">
                  Pengembalian
                </a>
              </li>
              <li>
                <a href="#kebijakan-privasi" className="hover:text-[#B88E2F] transition-colors">
                  Kebijakan Privasi
                </a>
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
    </footer>
  );
};
