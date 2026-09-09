"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/modals/CartDrawer";
import { AuthModal } from "@/components/modals/AuthModal";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Trash2, ShieldCheck, Lock, ArrowLeft, ArrowRight, Truck } from "lucide-react";

export default function CheckoutPage() {
  const { cart, summary, formatIDR, clearCart, updateQuantity, removeFromCart } = useCart();
  const { openAuthModal } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "ewallet" | "bank">("card");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    clearCart();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9fafb]">
      <Header />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isSubmitted ? (
            <div className="text-center py-20 max-w-lg mx-auto space-y-5 bg-white p-10 rounded-2xl border border-neutral-200 shadow-sm">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h2 className="font-extrabold text-3xl text-neutral-900">
                Pesanan Berhasil Dibuat!
              </h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Terima kasih telah berbelanja di KayuNusa. Detail pembayaran dan nomor pesanan telah dikirimkan ke email kamu.
              </p>
              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-[#B88E2F] hover:bg-[#9E7824] text-white font-bold text-sm px-8 py-3.5 rounded-lg shadow-md transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Form Details */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 1. Guest Checkout / Account */}
                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-xl text-neutral-900">
                      Kontak
                    </h2>
                    <button type="button" onClick={() => openAuthModal("login")} className="text-sm font-semibold text-[#B88E2F] hover:underline px-4 py-1.5 border border-neutral-200 rounded-md">
                      Sign In
                    </button>
                  </div>
                  <p className="text-sm text-neutral-500 mb-4">
                    Masukkan email untuk menerima konfirmasi pesanan dan informasi pengiriman.
                  </p>
                  <div>
                    <input
                      type="email"
                      placeholder="Alamat Email"
                      required
                      className="w-full text-base px-4 py-4 bg-[#f4f4f4] focus:bg-[#eeeeee] focus:outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors"
                    />
                  </div>
                </div>

                {/* 2. Shipping Information */}
                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                  <h2 className="font-bold text-xl text-neutral-900 mb-6">
                    Informasi Pengiriman
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Nama Depan</label>
                      <input
                        type="text"
                        placeholder="John"
                        required
                        className="w-full text-sm p-3.5 bg-[#f4f4f4] focus:bg-[#eeeeee] focus:outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Nama Belakang</label>
                      <input
                        type="text"
                        placeholder="Doe"
                        required
                        className="w-full text-sm p-3.5 bg-[#f4f4f4] focus:bg-[#eeeeee] focus:outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors rounded-xl"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Alamat Lengkap</label>
                      <input
                        type="text"
                        placeholder="Jl. Jend. Sudirman No. 123"
                        required
                        className="w-full text-sm p-3.5 bg-[#f4f4f4] focus:bg-[#eeeeee] focus:outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Kota</label>
                      <input
                        type="text"
                        placeholder="Jakarta Selatan"
                        required
                        className="w-full text-sm p-3.5 bg-[#f4f4f4] focus:bg-[#eeeeee] focus:outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Kode Pos</label>
                      <input
                        type="text"
                        placeholder="12345"
                        required
                        className="w-full text-sm p-3.5 bg-[#f4f4f4] focus:bg-[#eeeeee] focus:outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Provinsi</label>
                      <select className="w-full text-sm p-3.5 bg-[#f4f4f4] focus:bg-[#eeeeee] focus:outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors rounded-xl">
                        <option value="DKI">DKI Jakarta</option>
                        <option value="JABAR">Jawa Barat</option>
                        <option value="JATENG">Jawa Tengah</option>
                        <option value="JATIM">Jawa Timur</option>
                        <option value="DIY">DI Yogyakarta</option>
                        <option value="BANTEN">Banten</option>
                        <option value="BALI">Bali</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Negara</label>
                      <select className="w-full text-sm p-3.5 bg-[#f4f4f4] focus:bg-[#eeeeee] focus:outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors rounded-xl">
                        <option value="ID">Indonesia</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">Nomor Telepon</label>
                      <input
                        type="tel"
                        placeholder="+62 812 3456 7890"
                        required
                        className="w-full text-sm p-3.5 bg-[#f4f4f4] focus:bg-[#eeeeee] focus:outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-5">
                    <input
                      type="checkbox"
                      id="saveInfo"
                      className="w-4 h-4 rounded border-neutral-300 text-[#B88E2F] focus:ring-[#B88E2F]"
                    />
                    <label htmlFor="saveInfo" className="text-sm font-medium text-neutral-700 cursor-pointer">
                      Simpan informasi ini untuk checkout selanjutnya
                    </label>
                  </div>
                </div>

                {/* 3. Payment Method */}
                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                  <h2 className="font-bold text-xl text-neutral-900 mb-6">
                    Metode Pembayaran
                  </h2>

                  <div className="space-y-3">
                    {/* Kartu Kredit / Debit */}
                    <label className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-colors ${paymentMethod === 'card' ? 'border-[#B88E2F] bg-orange-50/30' : 'border-neutral-200 hover:border-neutral-300'}`}>
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "card"}
                        onChange={() => setPaymentMethod("card")}
                        className="w-4 h-4 accent-[#B88E2F]"
                      />
                      <span className="font-semibold text-neutral-800 text-sm flex-1">
                        Kartu Kredit/Debit
                      </span>
                    </label>

                    {paymentMethod === "card" && (
                      <div className="pl-8 pr-4 py-4 space-y-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Nomor Kartu"
                            className="w-full text-sm p-3.5 bg-[#f4f4f4] focus:bg-[#eeeeee] focus:outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors rounded-xl"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full text-sm p-3.5 bg-[#f4f4f4] focus:bg-[#eeeeee] focus:outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors rounded-xl"
                          />
                          <input
                            type="text"
                            placeholder="CVV"
                            className="w-full text-sm p-3.5 bg-[#f4f4f4] focus:bg-[#eeeeee] focus:outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors rounded-xl"
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="Nama Pemilik Kartu"
                            className="w-full text-sm p-3.5 bg-[#f4f4f4] focus:bg-[#eeeeee] focus:outline-none text-neutral-900 placeholder:text-neutral-400 transition-colors rounded-xl"
                          />
                        </div>
                      </div>
                    )}

                    {/* GoPay / OVO */}
                    <label className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-colors ${paymentMethod === 'ewallet' ? 'border-[#B88E2F] bg-orange-50/30' : 'border-neutral-200 hover:border-neutral-300'}`}>
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "ewallet"}
                        onChange={() => setPaymentMethod("ewallet")}
                        className="w-4 h-4 accent-[#B88E2F]"
                      />
                      <span className="font-semibold text-neutral-800 text-sm flex-1">
                        GoPay / OVO
                      </span>
                    </label>

                    {/* Virtual Account Bank */}
                    <label className={`flex items-center gap-4 p-4 rounded-lg border cursor-pointer transition-colors ${paymentMethod === 'bank' ? 'border-[#B88E2F] bg-orange-50/30' : 'border-neutral-200 hover:border-neutral-300'}`}>
                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === "bank"}
                        onChange={() => setPaymentMethod("bank")}
                        className="w-4 h-4 accent-[#B88E2F]"
                      />
                      <span className="font-semibold text-neutral-800 text-sm flex-1">
                        Transfer Bank (Virtual Account)
                      </span>
                    </label>
                  </div>
                </div>

              </div>

              {/* Right Column: Order Summary & Actions */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* 1. Order Summary Items */}
                <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm">
                  <h2 className="font-bold text-xl text-neutral-900 mb-6">
                    Ringkasan Pesanan
                  </h2>

                  <div className="space-y-6 divide-y divide-neutral-100">
                    {cart.length === 0 ? (
                      <div className="text-center py-6 text-neutral-500 text-sm">
                        Keranjang Anda kosong.
                      </div>
                    ) : (
                      cart.map((item, index) => (
                        <div key={item.id} className={index > 0 ? "pt-6" : ""}>
                          <div className="flex gap-4">
                            <div className="relative w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0 border border-neutral-200">
                              <Image
                                src={item.product.mainImage}
                                alt={item.product.name}
                                fill
                                sizes="80px"
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                              <div className="flex justify-between items-start gap-2">
                                <div>
                                  <h3 className="font-bold text-neutral-900 text-sm">{item.product.name}</h3>
                                  <p className="text-xs text-neutral-500 mt-1">
                                    {item.selectedColor && `Warna: ${item.selectedColor} `}
                                    {item.selectedSize && `• Ukuran: ${item.selectedSize}`}
                                  </p>
                                </div>
                                <span className="font-bold text-sm text-neutral-900 whitespace-nowrap">
                                  {formatIDR(item.product.price)}
                                </span>
                              </div>

                              <div className="flex items-center justify-between mt-3">
                                {/* Quantity Controls */}
                                <div className="flex items-center border border-neutral-200 rounded-md">
                                  <button
                                    type="button"
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="px-2 py-1 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
                                  >
                                    -
                                  </button>

                                <span className="w-8 text-center text-xs font-semibold text-neutral-900">
                                  {item.quantity}
                                </span>

                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="px-2 py-1 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
                                >
                                  +
                                </button>
                                </div>

                                <button
                                  type="button"
                                  onClick={() => removeFromCart(item.id)}
                                  className="flex items-center gap-1.5 text-xs font-medium text-red-500 hover:text-red-700"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                  Hapus
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* 2. Order Totals */}
                  <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm space-y-4">
                    <h2 className="font-bold text-lg text-neutral-900 mb-4">
                      Total Biaya
                    </h2>

                    <div className="flex justify-between items-center text-sm text-neutral-600">
                      <span>Subtotal</span>
                      <span className="font-medium text-neutral-900">
                        {formatIDR(summary.subtotal)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-sm text-neutral-600">
                      <span>Pengiriman</span>
                      <span className="font-medium text-neutral-900">
                        {formatIDR(
                          summary.subtotal > 5000000 || summary.subtotal === 0 ? 0 : 150000
                        )}
                      </span>
                    </div>

                    <hr className="border-neutral-100 my-2" />

                    <div className="flex justify-between items-center">
                      <span className="font-extrabold text-lg text-neutral-900">
                        Total
                      </span>
                      <span className="font-extrabold text-xl text-[#B88E2F]">
                        {formatIDR(
                          summary.subtotal +
                          (summary.subtotal > 5000000 || summary.subtotal === 0 ? 0 : 150000)
                        )}
                      </span>
                    </div>

                  {/* Free Shipping Banner */}
                  <div className="mt-4 flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-medium p-3 rounded-lg">
                    <Truck className="w-4 h-4 flex-shrink-0" />
                    <span>Gratis ongkir untuk pesanan di atas Rp 5.000.000</span>
                  </div>
                </div>

                {/* Badges */}
                <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm flex items-center justify-center gap-6">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-green-700">
                    <ShieldCheck className="w-4 h-4" />
                    Pembayaran Aman
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-600">
                    <Lock className="w-4 h-4" />
                    Enkripsi SSL
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleSubmitOrder}
                    disabled={cart.length === 0}
                    className="w-full flex items-center justify-center gap-2 bg-[#b88e2f] hover:bg-[#9f7927] text-white font-bold text-sm py-4 rounded-xl transition-all shadow-md disabled:bg-neutral-300 disabled:cursor-not-allowed"
                  >
                    Buat Pesanan
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Link
                    href="/shop"
                    className="w-full flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-200 font-bold text-sm py-4 rounded-xl transition-all shadow-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Lanjut Belanja
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <CartDrawer />
      <AuthModal />
    </div>
  );
}
