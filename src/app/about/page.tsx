"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeaturesBanner } from "@/components/layout/FeaturesBanner";
import { PageBanner } from "@/components/layout/PageBanner";
import { CartDrawer } from "@/components/modals/CartDrawer";
import { AuthModal } from "@/components/modals/AuthModal";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <PageBanner
          title="Tentang KayuNusa"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Tentang" },
          ]}
        />

        {/* Brand Story Section */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <ScrollReveal className="lg:col-span-6 relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=1000&auto=format&fit=crop"
                  alt="KayuNusa Craftsmanship"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </ScrollReveal>

              <ScrollReveal className="lg:col-span-6 space-y-6 delay-200">
                <span className="text-xs font-bold uppercase tracking-widest text-[#B88E2F]">
                  Dedikasi & Keindahan Kayu Lokal
                </span>
                <h2 className="font-extrabold text-3xl sm:text-4xl text-neutral-900 leading-tight">
                  Menghadirkan Kehangatan Alam ke Dalam Setiap Ruang Hunian Anda
                </h2>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  KayuNusa lahir dari kecintaan terhadap keindahan kayu berkualitas khas Nusantara. Didirikan di Bantul, Yogyakarta, kami menggabungkan keahlian pengrajin lokal berbakat dengan standar desain modern kontemporer.
                </p>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                  Setiap potongan furniture KayuNusa dirancang tidak hanya untuk estetika visual yang menawan, tetapi juga fungsionalitas prima dan ketahanan jangka panjang yang dapat diwariskan antar generasi.
                </p>

                <div className="pt-4">
                  <Link
                    href="/shop"
                    className="inline-block bg-[#B88E2F] hover:bg-[#9E7824] text-white font-bold text-sm px-8 py-3.5 rounded-lg shadow-md transition-all"
                  >
                    Jelajahi Karya Kami
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Values Grid */}
        <section className="py-16 bg-[#FAF4EF] border-y border-amber-100/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-bold text-3xl text-neutral-900">
                Nilai Utama KayuNusa
              </h2>
              <p className="text-neutral-500 text-sm mt-2">
                Prinsip yang kami pegang teguh dalam setiap produk furniture yang kami ciptakan.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ScrollReveal className="delay-100 h-full">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 space-y-3 text-center h-full">
                  <div className="w-12 h-12 bg-amber-50 text-[#B88E2F] rounded-xl flex items-center justify-center mx-auto">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900">Kayu Pilihan Terbaik</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    Menggunakan kayu Jati dan Mahoni grade ekspor yang telah melalui oven kering tahan rayap.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal className="delay-200 h-full">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 space-y-3 text-center h-full">
                  <div className="w-12 h-12 bg-amber-50 text-[#B88E2F] rounded-xl flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900">Finishing Halus Precision</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    Sentuhan akhir dengan coating ramah lingkungan yang menonjolkan serat alami kayu.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal className="delay-300 h-full">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 space-y-3 text-center h-full">
                  <div className="w-12 h-12 bg-amber-50 text-[#B88E2F] rounded-xl flex items-center justify-center mx-auto">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900">Garansi Struktur 2 Tahun</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    Perlindungan garansi resmi untuk menjamin kualitas rangka dan kenyamanan produk.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal className="delay-400 h-full">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 space-y-3 text-center h-full">
                  <div className="w-12 h-12 bg-amber-50 text-[#B88E2F] rounded-xl flex items-center justify-center mx-auto">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-neutral-900">Layanan Berkelanjutan</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed">
                    Dukungan staf pelanggan 24/7 dan layanan purna jual yang selalu siap membantu.
                  </p>
                </div>
              </ScrollReveal>
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
