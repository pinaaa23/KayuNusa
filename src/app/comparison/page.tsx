"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronDown } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeaturesBanner } from "@/components/layout/FeaturesBanner";
import { PageBanner } from "@/components/layout/PageBanner";
import { CartDrawer } from "@/components/modals/CartDrawer";
import { AuthModal } from "@/components/modals/AuthModal";
import { mockProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ComparisonPage() {
  const { addToCart, formatIDR } = useCart();

  const [prod1, setProd1] = useState(mockProducts[8] || mockProducts[0]); // Asgaard Sofa
  const [prod2, setProd2] = useState(mockProducts[2]); // Lolito / Outdoor Sofa Set

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <PageBanner
          title="Perbandingan Produk"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Perbandingan" },
          ]}
        />

        <section className="py-12 sm:py-16 bg-white overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-[900px]">
            {/* Top Product Cards Row */}
            <div className="grid grid-cols-4 gap-8 pb-10 border-b border-neutral-200 items-start">
              {/* Col 1: Intro Text */}
              <div className="space-y-4 pr-4">
                <h2 className="font-bold text-2xl text-neutral-900 leading-snug">
                  Kunjungi halaman produk untuk informasi lebih lanjut
                </h2>
                <Link
                  href="/shop"
                  className="inline-block text-neutral-500 hover:text-[#B88E2F] underline font-semibold text-sm"
                >
                  Lihat Semua
                </Link>
              </div>

              {/* Col 2: Product 1 Card */}
              <div className="space-y-3">
                <div className="relative w-full h-48 bg-[#F9F1E7] rounded-2xl overflow-hidden">
                  <Image
                    src={prod1.mainImage}
                    alt={prod1.name}
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-neutral-900">{prod1.name}</h3>
                <p className="font-bold text-neutral-900 text-sm">
                  {formatIDR(prod1.price)}
                </p>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="font-bold text-neutral-800">{prod1.rating}</span>
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span>| {prod1.reviewCount} Review</span>
                </div>
              </div>

              {/* Col 3: Product 2 Card */}
              <div className="space-y-3">
                <div className="relative w-full h-48 bg-[#F9F1E7] rounded-2xl overflow-hidden">
                  <Image
                    src={prod2.mainImage}
                    alt={prod2.name}
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-lg text-neutral-900">{prod2.name}</h3>
                <p className="font-bold text-neutral-900 text-sm">
                  {formatIDR(prod2.price)}
                </p>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="font-bold text-neutral-800">{prod2.rating}</span>
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span>| {prod2.reviewCount} Review</span>
                </div>
              </div>

              {/* Col 4: Add Product Selector */}
              <div className="space-y-3 pt-6">
                <h4 className="font-bold text-lg text-neutral-900">
                  Tambahkan Produk
                </h4>
                <div className="relative">
                  <select
                    onChange={(e) => {
                      const selected = mockProducts.find((p) => p.id === e.target.value);
                      if (selected) setProd2(selected);
                    }}
                    className="w-full bg-[#B88E2F] text-white font-bold text-sm py-3 px-4 rounded-lg appearance-none cursor-pointer focus:outline-none pr-10 shadow-md"
                  >
                    <option value="">Pilih Produk</option>
                    {mockProducts.map((p) => (
                      <option key={p.id} value={p.id} className="bg-white text-neutral-900">
                        {p.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-5 h-5 text-white absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Spec Matrix Rows */}
            <div className="divide-y divide-neutral-100 text-sm">
              {/* Section 1: Umum */}
              <div className="py-8 space-y-4">
                <h3 className="font-extrabold text-xl text-neutral-900">Umum</h3>
                <div className="grid grid-cols-4 gap-8 py-2 text-neutral-700">
                  <div className="font-medium text-neutral-900">Paket Penjualan</div>
                  <div>1 sofa sectional</div>
                  <div>1 sofa tiga dudukan, 2 sofa satu dudukan</div>
                  <div>-</div>
                </div>
                <div className="grid grid-cols-4 gap-8 py-2 text-neutral-700">
                  <div className="font-medium text-neutral-900">Nomor Model</div>
                  <div>TFCBLIGRBL6SRHS</div>
                  <div>DTUBLIGRBL568</div>
                  <div>-</div>
                </div>
                <div className="grid grid-cols-4 gap-8 py-2 text-neutral-700">
                  <div className="font-medium text-neutral-900">Material Sekunder</div>
                  <div>Kayu solid</div>
                  <div>Kayu solid</div>
                  <div>-</div>
                </div>
                <div className="grid grid-cols-4 gap-8 py-2 text-neutral-700">
                  <div className="font-medium text-neutral-900">Konfigurasi</div>
                  <div>Bentuk L</div>
                  <div>Bentuk L</div>
                  <div>-</div>
                </div>
                <div className="grid grid-cols-4 gap-8 py-2 text-neutral-700">
                  <div className="font-medium text-neutral-900">Bahan Pelapis</div>
                  <div>Kain + Katun</div>
                  <div>Kain + Katun</div>
                  <div>-</div>
                </div>
                <div className="grid grid-cols-4 gap-8 py-2 text-neutral-700">
                  <div className="font-medium text-neutral-900">Warna Pelapis</div>
                  <div>Abu abu terang</div>
                  <div>Abu abu terang</div>
                  <div>-</div>
                </div>
              </div>

              {/* Section 2: Produk */}
              <div className="py-8 space-y-4">
                <h3 className="font-extrabold text-xl text-neutral-900">Produk</h3>
                <div className="grid grid-cols-4 gap-8 py-2 text-neutral-700">
                  <div className="font-medium text-neutral-900">Material Isi</div>
                  <div>Foam</div>
                  <div>Matte</div>
                  <div>-</div>
                </div>
                <div className="grid grid-cols-4 gap-8 py-2 text-neutral-700">
                  <div className="font-medium text-neutral-900">Jenis Finishing</div>
                  <div>Abu-abu Terang</div>
                  <div>Abu-abu Terang</div>
                  <div>-</div>
                </div>
                <div className="grid grid-cols-4 gap-8 py-2 text-neutral-700">
                  <div className="font-medium text-neutral-900">Sandaran Kepala Dapat Disesuaikan</div>
                  <div>Tidak</div>
                  <div>Ya</div>
                  <div>-</div>
                </div>
                <div className="grid grid-cols-4 gap-8 py-2 text-neutral-700">
                  <div className="font-medium text-neutral-900">Kapasitas Beban Maksimum</div>
                  <div>280 KG</div>
                  <div>300 KG</div>
                  <div>-</div>
                </div>
              </div>

              {/* Section 3: Ukuran */}
              <div className="py-8 space-y-4">
                <h3 className="font-extrabold text-xl text-neutral-900">Ukuran</h3>
                <div className="grid grid-cols-4 gap-8 py-2 text-neutral-700">
                  <div className="font-medium text-neutral-900">Lebar</div>
                  <div>265.32 cm</div>
                  <div>265.32 cm</div>
                  <div>-</div>
                </div>
                <div className="grid grid-cols-4 gap-8 py-2 text-neutral-700">
                  <div className="font-medium text-neutral-900">Tinggi</div>
                  <div>76 cm</div>
                  <div>76 cm</div>
                  <div>-</div>
                </div>
                <div className="grid grid-cols-4 gap-8 py-2 text-neutral-700">
                  <div className="font-medium text-neutral-900">Depth</div>
                  <div>167.76 cm</div>
                  <div>167.76 cm</div>
                  <div>-</div>
                </div>
              </div>

              {/* Section 4: Garansi & Add to Cart */}
              <div className="py-8 space-y-6">
                <h3 className="font-extrabold text-xl text-neutral-900">Garansi</h3>
                <div className="grid grid-cols-4 gap-8 py-2 text-neutral-700">
                  <div className="font-medium text-neutral-900">Ringkasan Garansi</div>
                  <div>Garansi pabrik 1 tahun</div>
                  <div>Garansi pabrik 1 tahun 2 bulan</div>
                  <div>-</div>
                </div>

                {/* Add to Cart Actions */}
                <div className="grid grid-cols-4 gap-8 pt-6">
                  <div></div>
                  <div>
                    <button
                      onClick={() => addToCart(prod1, 1)}
                      className="w-full bg-[#B88E2F] hover:bg-[#9E7824] text-white font-bold text-sm py-3.5 rounded-lg shadow-md transition-colors"
                    >
                      Tambahkan ke Keranjang
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => addToCart(prod2, 1)}
                      className="w-full bg-[#B88E2F] hover:bg-[#9E7824] text-white font-bold text-sm py-3.5 rounded-lg shadow-md transition-colors"
                    >
                      Tambahkan ke Keranjang
                    </button>
                  </div>
                  <div></div>
                </div>
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
