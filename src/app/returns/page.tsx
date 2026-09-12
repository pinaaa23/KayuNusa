"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/modals/CartDrawer";
import { AuthModal } from "@/components/modals/AuthModal";
import { PageBanner } from "@/components/layout/PageBanner";

export default function ReturnsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <PageBanner
          title="Kebijakan Pengembalian"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Bantuan" },
            { name: "Pengembalian" },
          ]}
        />

        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="prose prose-neutral max-w-none">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Kebijakan Pengembalian & Penukaran (Return & Refund)</h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              Kepuasan Anda adalah prioritas utama KayuNusa. Karena produk kami berupa furnitur dan perabot rumah, kami memiliki standar prosedur pengembalian yang jelas demi kenyamanan bersama.
            </p>

            <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Syarat Pengembalian Barang</h3>
            <ul className="list-disc pl-5 text-neutral-600 space-y-2 mb-6">
              <li>Komplain pengembalian harus diajukan selambat-lambatnya <strong>2x24 jam</strong> semenjak pesanan diterima (berdasarkan laporan resi pengiriman).</li>
              <li>Barang mengalami cacat produksi, patah/rusak parah akibat kelalaian kurir, atau pesanan yang dikirimkan salah/tidak sesuai deskripsi.</li>
              <li>Barang <strong>wajib</strong> masih dalam kondisi baru, kemasan orisinal, serta belum dirakit sepenuhnya atau belum pernah digunakan.</li>
              <li>Menyertakan <strong>Video Unboxing</strong> tanpa jeda (*no pause/edit*) sejak paket masih tersegel rapi hingga cacat pada produk terlihat jelas.</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Barang yang Tidak Bisa Dikembalikan</h3>
            <ul className="list-disc pl-5 text-neutral-600 space-y-2 mb-6">
              <li>Produk yang rusak karena kelalaian pembeli (kesalahan perakitan, terkena noda, atau terjatuh).</li>
              <li>Produk dengan status <em>Custom Order</em> / pesanan khusus.</li>
              <li>Perbedaan warna minor akibat pencahayaan layar monitor/handphone dengan warna asli material kayu (serat kayu alami pasti berbeda-beda).</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-900 mt-8 mb-4">Prosedur Pengembalian Dana (Refund)</h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Apabila retur disetujui, kami akan mengirimkan barang pengganti atau memproses pengembalian dana penuh (*full refund*).
              Dana akan dikembalikan ke metode pembayaran awal Anda selambat-lambatnya <strong>3-7 hari kerja</strong> setelah barang retur sampai di gudang KayuNusa dan selesai diinspeksi tim kami.
            </p>

            <div className="bg-neutral-100 border-l-4 border-neutral-800 p-6 mt-10 rounded-r-lg">
              <h4 className="font-bold text-neutral-900 mb-2">Butuh Bantuan Lebih Lanjut?</h4>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Silakan hubungi Customer Service kami di halaman <a href="/contact" className="text-[#B88E2F] font-semibold hover:underline">Kontak</a> atau email ke cs@kayunusa.com. Tim kami akan merespons maksimal dalam 1x24 jam kerja.
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
