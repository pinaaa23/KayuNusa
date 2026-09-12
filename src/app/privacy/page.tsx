"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/modals/CartDrawer";
import { AuthModal } from "@/components/modals/AuthModal";
import { PageBanner } from "@/components/layout/PageBanner";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <PageBanner
          title="Kebijakan Privasi"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Bantuan" },
            { name: "Privasi" },
          ]}
        />

        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="prose prose-neutral max-w-none">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Kebijakan Privasi (Privacy Policy)</h2>
            <p className="text-neutral-500 mb-8 text-sm">Terakhir Diperbarui: 12 September 2026</p>

            <p className="text-neutral-600 mb-6 leading-relaxed">
              Di <strong>KayuNusa</strong>, kami sangat menghargai dan melindungi privasi serta informasi pribadi pelanggan kami. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi pribadi yang Anda berikan saat menggunakan website dan layanan kami.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">1. Informasi yang Kami Kumpulkan</h3>
            <p className="text-neutral-600 mb-4 leading-relaxed">Kami hanya mengumpulkan informasi yang diperlukan untuk melayani transaksi dan memberikan pengalaman belanja yang lebih baik:</p>
            <ul className="list-disc pl-5 text-neutral-600 space-y-2 mb-6">
              <li><strong>Data Identitas:</strong> Nama lengkap, alamat email, nomor telepon genggam.</li>
              <li><strong>Data Pengiriman:</strong> Alamat lengkap untuk keperluan pengiriman barang furnitur Anda.</li>
              <li><strong>Data Transaksi:</strong> Rincian pesanan dan histori belanja (kami <strong>tidak pernah</strong> menyimpan nomor CVV kartu kredit atau PIN Anda).</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">2. Bagaimana Kami Menggunakan Informasi Anda</h3>
            <ul className="list-disc pl-5 text-neutral-600 space-y-2 mb-6">
              <li>Untuk memproses pesanan dan memastikan pengiriman barang sampai di tujuan dengan selamat.</li>
              <li>Untuk memberikan *customer support* terkait keluhan, retur barang, atau pertanyaan produk.</li>
              <li>Untuk mengirimkan pemberitahuan status pesanan dan resi pengiriman via email/WhatsApp.</li>
              <li>(Hanya jika Anda berlangganan *newsletter*) Mengirimkan penawaran spesial, diskon eksklusif, dan katalog terbaru. Anda bisa melakukan *unsubscribe* kapan saja.</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">3. Perlindungan & Pembagian Data</h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              KayuNusa menggunakan teknologi enkripsi yang kokoh untuk melindungi data di *server* kami. Kami <strong>tidak pernah menjual, menyewakan, atau mendistribusikan</strong> informasi pribadi pelanggan kami ke pihak ketiga yang tidak berkepentingan untuk tujuan komersial mereka. Data Anda hanya diteruskan kepada pihak-pihak tepercaya (seperti jasa ekspedisi cargo dan *payment gateway* resmi) semata-mata untuk memproses pesanan Anda.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">4. Persetujuan</h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Dengan menggunakan website KayuNusa, melakukan transaksi, atau memberikan informasi pribadi melalui form registrasi maupun form kontak, Anda setuju dengan pengumpulan dan penggunaan informasi Anda sebagaimana dijelaskan dalam Kebijakan Privasi ini.
            </p>
          </div>
        </section>
      </main>

      <Footer />
      <CartDrawer />
      <AuthModal />
    </div>
  );
}
