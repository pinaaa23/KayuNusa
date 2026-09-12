"use client";

import React from "react";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[550px] lg:min-h-[640px] bg-neutral-100 flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-image-zoom scale-[1.1]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop')`,
        }}
      >
        {/* Soft gradient overlay for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent lg:hidden" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24 flex justify-end">
        {/* Floating Card */}
        <div className="w-full lg:max-w-xl bg-[#FFF9F3]/95 backdrop-blur-md p-8 sm:p-10 lg:p-12 rounded-2xl shadow-2xl border border-amber-100/50 space-y-5 animate-fade-right opacity-0 delay-200">
          <p className="text-sm font-semibold tracking-wider text-neutral-800 uppercase animate-fade-up opacity-0 delay-500">
            Produk Terbaru
          </p>

          <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#B88E2F] leading-tight sm:leading-tight lg:leading-tight animate-fade-up opacity-0 delay-700">
            Temukan Koleksi<br />Terbaru Kami
          </h1>

          <p className="text-neutral-600 text-sm sm:text-base leading-relaxed animate-fade-up opacity-0 delay-900">
            Furniture kayu pilihan dengan desain hangat untuk melengkapi ruang rumahmu.
          </p>

          <div className="pt-3 animate-fade-up opacity-0 delay-1000">
            <Link
              href="/shop"
              className="inline-block bg-[#B88E2F] hover:bg-[#9E7824] text-white font-bold text-sm sm:text-base px-10 py-4 sm:py-5 rounded-md shadow-lg shadow-[#B88E2F]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 tracking-wider uppercase"
            >
              Beli Sekarang!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
