"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, summary, formatIDR } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-[#B88E2F]" />
              <h2 className="font-bold text-xl text-neutral-900">
                Shopping Cart
              </h2>
            </div>

            <button
              onClick={closeCart}
              className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <ShoppingBag className="w-12 h-12 text-neutral-300 mx-auto" />
                <p className="text-neutral-500 font-medium text-base">
                  Keranjang belanja kamu masih kosong.
                </p>
                <button
                  onClick={closeCart}
                  className="inline-block text-[#B88E2F] hover:underline font-semibold text-sm"
                >
                  Mulai Belanja Sekarang
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 py-2 border-b border-neutral-100 pb-4"
                >
                  <div className="relative w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.mainImage}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-neutral-900 text-sm truncate">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      {item.selectedSize && `Ukuran: ${item.selectedSize}`}
                      {item.selectedColor && ` • Warna: ${item.selectedColor}`}
                    </p>
                    <p className="text-sm font-semibold text-neutral-700 mt-1">
                      {item.quantity} <span className="text-xs text-neutral-400">x</span>{" "}
                      <span className="text-[#B88E2F]">
                        {formatIDR(item.product.price)}
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1.5 text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    title="Hapus dari keranjang"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-neutral-100 bg-neutral-50/50 space-y-5">
              <div className="flex items-center justify-between text-base">
                <span className="font-medium text-neutral-600">Subtotal</span>
                <span className="font-bold text-xl text-[#B88E2F]">
                  {formatIDR(summary.subtotal)}
                </span>
              </div>

              {/* Action Buttons matching design reference */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="py-2.5 px-3 border border-neutral-900 rounded-full text-center text-xs font-semibold text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
                >
                  Cart
                </Link>

                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="py-2.5 px-3 border border-neutral-900 rounded-full text-center text-xs font-semibold text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
                >
                  Checkout
                </Link>

                <Link
                  href="/comparison"
                  onClick={closeCart}
                  className="py-2.5 px-3 border border-neutral-900 rounded-full text-center text-xs font-semibold text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
                >
                  Comparison
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
