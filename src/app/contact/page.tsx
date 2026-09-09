"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/modals/CartDrawer";
import { AuthModal } from "@/components/modals/AuthModal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Terima kasih ${formData.name}! Pesan kamu telah terkirim.`);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 bg-neutral-100 flex items-center justify-center py-10 lg:py-16 px-4 sm:px-6 lg:px-8 relative z-0">
        
        {/* Abstract Background split like the reference (light gray top, dark gray bottom) */}
        <div className="absolute inset-0 z-[-1] flex flex-col">
          <div className="flex-1 bg-[#ececec]"></div>
          <div className="flex-1 bg-[#222222]"></div>
        </div>

        {/* Main Card with thick border (frame) */}
        <div className="max-w-[1300px] w-full mx-auto relative shadow-2xl overflow-hidden flex flex-col lg:flex-row bg-white border-4 sm:border-8 border-[#222222] rounded-xl lg:rounded-2xl min-h-[500px]">
          
          {/* Left Content (Wider) */}
          <div className="w-full lg:w-[75%] p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-center">
            
            {/* Title Row - Spans full width of left container */}
            <div className="mb-10 lg:mb-16">
              <h1 className="text-6xl sm:text-[5.5rem] lg:text-[7rem] font-black text-neutral-900 tracking-tighter uppercase leading-none">
                CONTACT
              </h1>
            </div>

            {/* Split Below Title: Desc left, Form right */}
            <div className="flex flex-col md:flex-row gap-10 xl:gap-14">
              
              {/* Description */}
              <div className="md:w-5/12">
                <p className="text-neutral-700 text-base sm:text-lg font-medium leading-relaxed pr-4">
                  Untuk pertanyaan, atau sekadar menyapa, jangan ragu untuk menghubungi kami.
                </p>
              </div>

              {/* Form Grid */}
              <div className="md:w-7/12">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                  
                  <div className="sm:col-span-1">
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full text-sm py-2 bg-transparent border-b border-neutral-300 focus:outline-none focus:border-[#B88E2F] text-neutral-900 transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-1">
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full text-sm py-2 bg-transparent border-b border-neutral-300 focus:outline-none focus:border-[#B88E2F] text-neutral-900 transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">
                      Subjek
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full text-sm py-2 bg-transparent border-b border-neutral-300 focus:outline-none focus:border-[#B88E2F] text-neutral-900 transition-colors"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">
                      Pesan
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full text-sm py-2 bg-transparent border-b border-neutral-300 focus:outline-none focus:border-[#B88E2F] text-neutral-900 transition-colors resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2 mt-2">
                    <button
                      type="submit"
                      className="inline-flex justify-center items-center bg-[#B88E2F] hover:bg-[#9E7824] text-white font-bold text-[11px] px-8 py-3.5 shadow-md transition-all uppercase tracking-widest"
                    >
                      Kirim Pesan
                    </button>
                  </div>

                </form>
              </div>

            </div>
          </div>

          {/* Right Image (Smaller Space) */}
          <div className="w-full lg:w-[25%] relative min-h-[250px] lg:min-h-full border-t-4 lg:border-t-0 lg:border-l-4 border-[#222222]">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop"
              alt="Interior Contact"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </main>

      <Footer />
      <CartDrawer />
      <AuthModal />
    </div>
  );
}
