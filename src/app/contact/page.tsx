"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/modals/CartDrawer";
import { AuthModal } from "@/components/modals/AuthModal";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "Pesan Baru dari Website KayuNusa",
          message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        alert(`Terima kasih ${formData.name}! Pesan kamu telah terkirim ke email kami.`);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Maaf, terjadi kesalahan. Pesan gagal terkirim.");
      }
    } catch (error) {
      alert("Terjadi kesalahan jaringan. Silakan coba lagi.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 bg-neutral-100 flex items-center justify-center pt-6 pb-12 lg:pt-10 lg:pb-20 px-4 sm:px-6 lg:px-8 relative z-0">
        
        {/* Abstract Background split like the reference (light gray top, dark gray bottom) */}
        <div className="absolute inset-0 z-[-1] flex flex-col">
          <div className="flex-1 bg-[#ececec]"></div>
          <div className="flex-1 bg-[#222222]"></div>
        </div>

        {/* Main Card with thick border (frame) */}
        <ScrollReveal className="max-w-[1300px] w-full mx-auto relative shadow-2xl overflow-hidden flex flex-col lg:flex-row bg-white border-4 sm:border-8 border-[#444444] rounded-xl lg:rounded-2xl min-h-[400px]">
          
          {/* Left Content (Wider) */}
          <div className="w-full lg:w-[75%] p-6 sm:p-10 lg:p-12 xl:p-16 flex flex-col justify-center">
            
            {/* Title Row - Spans full width of left container */}
            <ScrollReveal className="mb-6 lg:mb-10 delay-100">
              <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] font-black text-neutral-900 tracking-tighter uppercase leading-none">
                CONTACT
              </h1>
            </ScrollReveal>

            {/* Split Below Title: Desc left, Form right */}
            <div className="flex flex-col md:flex-row gap-8 xl:gap-12">
              
              {/* Description */}
              <ScrollReveal className="md:w-4/12 delay-200">
                <p className="text-neutral-700 text-sm sm:text-base font-medium leading-relaxed pr-2">
                  Untuk pertanyaan, atau sekadar menyapa, jangan ragu untuk menghubungi kami.
                </p>
              </ScrollReveal>

              {/* Form Grid */}
              <ScrollReveal className="md:w-8/12 delay-300">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                  
                  <div className="sm:col-span-1">
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full text-sm py-1.5 bg-transparent border-b border-neutral-300 focus:outline-none focus:border-[#B88E2F] text-neutral-900 transition-colors"
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
                      className="w-full text-sm py-1.5 bg-transparent border-b border-neutral-300 focus:outline-none focus:border-[#B88E2F] text-neutral-900 transition-colors"
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
                      className="w-full text-sm py-1.5 bg-transparent border-b border-neutral-300 focus:outline-none focus:border-[#B88E2F] text-neutral-900 transition-colors"
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
                      className="w-full text-sm py-1.5 bg-transparent border-b border-neutral-300 focus:outline-none focus:border-[#B88E2F] text-neutral-900 transition-colors resize-none"
                    />
                  </div>

                  <div className="sm:col-span-2 mt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex justify-center items-center bg-[#B88E2F] hover:bg-[#9E7824] text-white font-bold text-[11px] px-8 py-3 shadow-md transition-all uppercase tracking-widest disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                    </button>
                  </div>

                </form>
              </ScrollReveal>

            </div>
          </div>

          {/* Right Image (Smaller Space) */}
          <ScrollReveal className="w-full lg:w-[25%] relative min-h-[250px] lg:min-h-full border-t-4 sm:border-t-8 lg:border-t-0 lg:border-l-4 sm:lg:border-l-8 border-[#444444] delay-400">
            <Image
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop"
              alt="Interior Contact"
              fill
              className="object-cover"
            />
          </ScrollReveal>

        </ScrollReveal>
      </main>

      <Footer />
      <CartDrawer />
      <AuthModal />
    </div>
  );
}
