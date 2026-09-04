"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingBag } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeaturesBanner } from "@/components/layout/FeaturesBanner";
import { PageBanner } from "@/components/layout/PageBanner";
import { CartDrawer } from "@/components/modals/CartDrawer";
import { AuthModal } from "@/components/modals/AuthModal";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, summary, formatIDR } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Banner */}
        <PageBanner
          title="Cart"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Cart" },
          ]}
        />

        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {cart.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <div className="w-16 h-16 bg-amber-50 text-[#B88E2F] rounded-full flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">
                  Keranjang Belanja Kamu Kosong
                </h2>
                <p className="text-neutral-500 text-sm max-w-md mx-auto">
                  Belum ada produk yang ditambahkan. Mari jelajahi katalog koleksi furniture kayu kami.
                </p>
                <Link
                  href="/shop"
                  className="inline-block bg-[#B88E2F] hover:bg-[#9E7824] text-white font-bold text-sm px-8 py-3.5 rounded-lg shadow-md transition-all"
                >
                  Jelajahi Katalog Shop
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Table: Cart Items */}
                <div className="lg:col-span-8 overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#F9F1E7] text-neutral-900 font-bold text-sm">
                        <th className="py-4 px-6 rounded-l-lg">Produk</th>
                        <th className="py-4 px-4">Harga</th>
                        <th className="py-4 px-4 text-center">Jumlah</th>
                        <th className="py-4 px-4">Total</th>
                        <th className="py-4 px-4 rounded-r-lg"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      {cart.map((item) => (
                        <tr key={item.id} className="hover:bg-neutral-50/50 transition-colors">
                          <td className="py-6 px-6">
                            <div className="flex items-center gap-4">
                              <div className="relative w-20 h-20 bg-[#F9F1E7] rounded-xl overflow-hidden flex-shrink-0">
                                <Image
                                  src={item.product.mainImage}
                                  alt={item.product.name}
                                  fill
                                  sizes="80px"
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h3 className="font-semibold text-neutral-900 text-base">
                                  {item.product.name}
                                </h3>
                                <p className="text-xs text-neutral-400">
                                  {item.selectedSize && `Size: ${item.selectedSize}`}
                                  {item.selectedColor && ` • Color: ${item.selectedColor}`}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="py-6 px-4 font-semibold text-neutral-700 text-sm whitespace-nowrap">
                            {formatIDR(item.product.price)}
                          </td>

                          <td className="py-6 px-4 text-center">
                            <input
                              type="number"
                              min={1}
                              value={item.quantity}
                              onChange={(e) =>
                                updateQuantity(item.id, parseInt(e.target.value) || 1)
                              }
                              className="w-14 text-center border border-neutral-300 rounded-lg py-1.5 font-semibold text-sm focus:outline-none focus:border-[#B88E2F]"
                            />
                          </td>

                          <td className="py-6 px-4 font-bold text-neutral-900 text-sm whitespace-nowrap">
                            {formatIDR(item.product.price * item.quantity)}
                          </td>

                          <td className="py-6 px-4 text-right">
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-2 text-[#B88E2F] hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                              title="Hapus"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Right Card: Cart Totals */}
                <div className="lg:col-span-4 bg-[#F9F1E7] p-8 rounded-2xl space-y-8 shadow-sm">
                  <h2 className="font-extrabold text-2xl text-neutral-900 text-center">
                    Total Keranjang Belanja
                  </h2>

                  <div className="space-y-4 text-sm border-b border-amber-200/60 pb-6">
                    <div className="flex justify-between items-center text-neutral-700">
                      <span className="font-semibold">Subtotal</span>
                      <span className="font-semibold text-neutral-500">
                        {formatIDR(summary.subtotal)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-base pt-2">
                      <span className="font-bold text-neutral-900">Total</span>
                      <span className="font-extrabold text-xl text-[#B88E2F]">
                        {formatIDR(summary.total)}
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <Link
                      href="/checkout"
                      className="inline-block w-full border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 font-bold text-base py-3.5 rounded-xl transition-all shadow-sm"
                    >
                      Check Out
                    </Link>
                  </div>
                </div>
              </div>
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
