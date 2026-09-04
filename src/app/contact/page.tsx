"use client";

import React, { useState } from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeaturesBanner } from "@/components/layout/FeaturesBanner";
import { PageBanner } from "@/components/layout/PageBanner";
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

      <main className="flex-1">
        <PageBanner
          title="Contact"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Contact" },
          ]}
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Text */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <h2 className="font-bold text-3xl sm:text-4xl text-neutral-900">
                Hubungi Kami
              </h2>
              <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
                Untuk informasi lebih lanjut mengenai produk & layanan kami, jangan ragu untuk mengirimkan email kepada kami. Staf kami selalu siap membantu Anda. Jangan ragu!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Contact Info Cards */}
              <div className="lg:col-span-5 space-y-8 pr-4">
                <div className="flex items-start gap-5">
                  <div className="p-2.5 text-neutral-900 mt-1">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-neutral-900">Alamat</h3>
                    <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
                      Jl. Raya Janti, Wonocatur, Bantul,<br />
                      Daerah Istimewa Yogyakarta
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-2.5 text-neutral-900 mt-1">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-neutral-900">Phone</h3>
                    <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
                      Mobile 1: +(62) 8512-345-66<br />
                      Mobile 2: +(62) 456-678-47
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-2.5 text-neutral-900 mt-1">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-neutral-900">Jam Kerja</h3>
                    <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
                      Senin - Jum'at: 09.00 - 21.00<br />
                      Sabtu - Minggu: 09.00 - 17.00
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Contact Form */}
              <div className="lg:col-span-7 bg-white">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      Nama
                    </label>
                    <input
                      type="text"
                      placeholder="Abc"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full text-sm p-4 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B88E2F]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Abc@def.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full text-sm p-4 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B88E2F]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      Subjek
                    </label>
                    <input
                      type="text"
                      placeholder="This is an optional"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full text-sm p-4 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B88E2F]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-800 mb-2">
                      Pesan
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Hai! Aku mau memberikan....."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      className="w-full text-sm p-4 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B88E2F]"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="bg-[#B88E2F] hover:bg-[#9E7824] text-white font-bold text-sm px-14 py-4 rounded-lg shadow-md transition-all"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <FeaturesBanner />
      </main>

      <Footer />
      <CartDrawer />
      <AuthModal />
    </div>
  );
}
