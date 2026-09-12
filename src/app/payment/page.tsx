"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/modals/CartDrawer";
import { AuthModal } from "@/components/modals/AuthModal";
import { PageBanner } from "@/components/layout/PageBanner";

export default function PaymentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <PageBanner
          title="Informasi Pembayaran"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Bantuan" },
            { name: "Pembayaran" },
          ]}
        />

        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="prose prose-neutral max-w-none">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Metode Pembayaran</h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              KayuNusa menyediakan berbagai kemudahan bertransaksi untuk memberikan pengalaman belanja furnitur terbaik. Seluruh transaksi yang dilakukan di platform kami dilindungi oleh sistem keamanan berstandar tinggi.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">1. Transfer Bank (Virtual Account)</h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Pembayaran dapat dilakukan melalui Virtual Account dari bank terkemuka di Indonesia. Transaksi menggunakan Virtual Account akan diverifikasi secara otomatis oleh sistem kami tanpa perlu konfirmasi manual.
              Bank yang didukung: <strong>BCA, Bank Mandiri, BNI, BRI, dan Permata Bank.</strong>
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">2. Kartu Kredit / Debit</h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Kami menerima pembayaran menggunakan Kartu Kredit dan Debit berlogo Visa, MasterCard, dan JCB. 
              Nikmati fasilitas cicilan 0% hingga 12 bulan khusus untuk pemegang kartu kredit bank mitra kami (syarat dan ketentuan berlaku).
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">3. E-Wallet & QRIS</h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Untuk transaksi yang lebih cepat dan praktis, Anda bisa menggunakan dompet digital favorit Anda. Kami mendukung pembayaran melalui <strong>GoPay, OVO, ShopeePay, Dana, serta Scan QRIS</strong> dari aplikasi perbankan apa pun.
            </p>

            <div className="bg-amber-50 border-l-4 border-[#B88E2F] p-6 mt-10 rounded-r-lg">
              <h4 className="font-bold text-neutral-900 mb-2">Keamanan Transaksi Anda Terjamin</h4>
              <p className="text-sm text-neutral-700 leading-relaxed">
                KayuNusa bekerja sama dengan Payment Gateway terpercaya (berlisensi Bank Indonesia) untuk memproses semua transaksi pembayaran. Kami tidak pernah menyimpan detail informasi kartu kredit Anda di server kami.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CartDrawer />
      <AuthModal />
    </div>
  );
}
