"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeaturesBanner } from "@/components/layout/FeaturesBanner";
import { PageBanner } from "@/components/layout/PageBanner";
import { CartDrawer } from "@/components/modals/CartDrawer";
import { AuthModal } from "@/components/modals/AuthModal";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, summary, formatIDR, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<"bank" | "cod">("bank");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    clearCart();
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <PageBanner
          title="Checkout"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Checkout" },
          ]}
        />

        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isSubmitted ? (
              <div className="text-center py-20 max-w-lg mx-auto space-y-5 bg-[#FFF9F3] p-10 rounded-2xl border border-amber-100 shadow-md">
                <div className="w-16 h-16 bg-[#B88E2F] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                  ✓
                </div>
                <h2 className="font-extrabold text-3xl text-neutral-900">
                  Pesanan Berhasil Dibuat!
                </h2>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Terima kasih telah berbelanja di KayuNusa. Instruksi detail pembayaran dan nomor pesanan telah dikirimkan ke email kamu.
                </p>
                <div className="pt-2">
                  <Link
                    href="/"
                    className="inline-block bg-[#B88E2F] hover:bg-[#9E7824] text-white font-bold text-sm px-8 py-3.5 rounded-lg shadow-md transition-all"
                  >
                    Kembali ke Beranda
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Column: Billing Details Form */}
                <div className="lg:col-span-7 space-y-6">
                  <h2 className="font-extrabold text-2xl sm:text-3xl text-neutral-900 pb-2">
                    Detail Pembayaran
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-2">
                        Nama Depan
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full text-sm p-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B88E2F]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-2">
                        Nama Belakang
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full text-sm p-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B88E2F]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-2">
                      Nama Perusahaan (Opsional)
                    </label>
                    <input
                      type="text"
                      className="w-full text-sm p-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B88E2F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-2">
                      Negara/Wilayah
                    </label>
                    <select className="w-full text-sm p-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B88E2F] bg-white text-neutral-700">
                      <option value="ID">Indonesia</option>
                      <option value="SG">Singapore</option>
                      <option value="MY">Malaysia</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-2">
                      Alamat
                    </label>
                    <input
                      type="text"
                      placeholder="Alamat jalan dan nomor rumah"
                      required
                      className="w-full text-sm p-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B88E2F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-2">
                      Kota
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full text-sm p-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B88E2F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-2">
                      Provinsi
                    </label>
                    <select className="w-full text-sm p-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B88E2F] bg-white text-neutral-700">
                      <option value="DIY">DI Yogyakarta</option>
                      <option value="DKI">DKI Jakarta</option>
                      <option value="JABAR">Jawa Barat</option>
                      <option value="JATENG">Jawa Tengah</option>
                      <option value="JATIM">Jawa Timur</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-2">
                      Kode Pos
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full text-sm p-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B88E2F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-2">
                      Telepon
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full text-sm p-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B88E2F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-2">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full text-sm p-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B88E2F]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-2">
                      Informasi Tambahan
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Catatan mengenai pesanan Anda, misal: instruksi khusus pengiriman."
                      className="w-full text-sm p-3.5 rounded-xl border border-neutral-300 focus:outline-none focus:border-[#B88E2F]"
                    />
                  </div>
                </div>

                {/* Right Column: Order Summary & Payment */}
                <div className="lg:col-span-5 space-y-8 pt-4">
                  <div className="space-y-4 border-b border-neutral-200 pb-6">
                    <div className="flex justify-between items-center font-bold text-xl text-neutral-900 border-b border-neutral-100 pb-3">
                      <span>Produk</span>
                      <span>Total</span>
                    </div>

                    {cart.length === 0 ? (
                      <div className="flex justify-between items-center text-sm text-neutral-600">
                        <span>Asgaard sofa x 1</span>
                        <span>{formatIDR(250000)}</span>
                      </div>
                    ) : (
                      cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center text-sm text-neutral-600">
                          <span className="truncate pr-4">
                            {item.product.name} <span className="font-semibold text-neutral-800">x {item.quantity}</span>
                          </span>
                          <span className="font-semibold text-neutral-800">
                            {formatIDR(item.product.price * item.quantity)}
                          </span>
                        </div>
                      ))
                    )}

                    <div className="flex justify-between items-center text-sm text-neutral-700 pt-2">
                      <span>Subtotal</span>
                      <span className="font-semibold">
                        {formatIDR(summary.subtotal || 250000)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-base pt-2">
                      <span className="font-bold text-neutral-900">Total</span>
                      <span className="font-extrabold text-2xl text-[#B88E2F]">
                        {formatIDR(summary.total || 250000)}
                      </span>
                    </div>
                  </div>

                  {/* Payment Radio Options */}
                  <div className="space-y-4 pt-2">
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === "bank"}
                          onChange={() => setPaymentMethod("bank")}
                          className="w-4 h-4 accent-[#B88E2F]"
                        />
                        <span className="font-bold text-neutral-900 text-sm">
                          Transfer Bank Langsung
                        </span>
                      </label>
                      {paymentMethod === "bank" && (
                        <p className="text-xs text-neutral-500 pl-7 leading-relaxed bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                          Lakukan pembayaran Anda langsung ke rekening bank kami. Harap gunakan ID Pesanan Anda sebagai referensi pembayaran. Pesanan Anda tidak akan dikirim sampai dana telah masuk ke rekening kami.
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="payment"
                          checked={paymentMethod === "cod"}
                          onChange={() => setPaymentMethod("cod")}
                          className="w-4 h-4 accent-[#B88E2F]"
                        />
                        <span className="font-medium text-neutral-700 text-sm">
                          Pembayaran Tunai Saat Pengiriman (COD)
                        </span>
                      </label>
                    </div>

                    <p className="text-xs text-neutral-500 pt-3 leading-relaxed">
                      Data pribadi Anda akan digunakan untuk mendukung pengalaman Anda di seluruh situs web ini, untuk mengelola akses ke akun Anda, dan untuk tujuan lain yang dijelaskan dalam kebijakan privasi kami.
                    </p>

                    <div className="text-center pt-4">
                      <button
                        type="submit"
                        className="w-full border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 font-bold text-base py-4 rounded-2xl transition-all shadow-md"
                      >
                        Lakukan pemesanan
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}
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
