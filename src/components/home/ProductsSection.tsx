"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Share2, Heart } from "lucide-react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ProductsSectionProps {
  products: Product[];
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  const { addToCart, formatIDR } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleShare = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.subtitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link produk telah disalin ke clipboard!");
    }
  };

  return (
    <section className="py-16 bg-white">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl text-neutral-900">
            Produk Kami
          </h2>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => {
            const isWishlisted = isInWishlist(product.id);
            return (
              <div
                key={product.id}
                className="group relative bg-[#F4F5F7] rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl"
              >
                {/* Image Container */}
                <div className="relative w-full h-[280px] bg-neutral-200 overflow-hidden">
                  <Image
                    src={product.mainImage}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badges */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                    {product.discountPercent && (
                      <span className="w-12 h-12 rounded-full bg-[#E97171] text-white text-xs font-bold flex items-center justify-center shadow-md">
                        -{product.discountPercent}%
                      </span>
                    )}
                    {product.isNew && (
                      <span className="w-12 h-12 rounded-full bg-[#2EC4B6] text-white text-xs font-bold flex items-center justify-center shadow-md">
                        New
                      </span>
                    )}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-neutral-900/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4 p-4 z-20">
                    <div className="flex flex-col gap-3 w-full max-w-[210px]">
                      <button
                        onClick={() => addToCart(product, 1)}
                        className="w-full bg-white hover:bg-[#B88E2F] text-[#B88E2F] hover:text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-md transition-all duration-200 shadow-md whitespace-nowrap text-center border-2 border-white hover:border-[#B88E2F]"
                      >
                        Tambahkan ke Keranjang
                      </button>
                      <Link
                        href={`/shop/${product.slug}`}
                        className="w-full bg-black/20 hover:bg-[#B88E2F] text-white hover:text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-md transition-all duration-200 shadow-md border-2 border-white hover:border-[#B88E2F] whitespace-nowrap text-center"
                      >
                        Detail Produk
                      </Link>
                    </div>

                    <div className="flex items-center gap-6 text-white font-semibold text-sm">
                      <button
                        onClick={(e) => handleShare(product, e)}
                        className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors"
                      >
                        <Share2 className="w-4 h-4" />
                        <span>Share</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWishlist(product);
                        }}
                        className={`flex items-center gap-2 hover:text-[#B88E2F] transition-colors ${
                          isWishlisted ? "text-rose-400" : ""
                        }`}
                      >
                        <Heart className={`w-4 h-4 ${isWishlisted ? "fill-current" : ""}`} />
                        <span>Like</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <h3 className="font-bold text-neutral-900 text-lg sm:text-xl group-hover:text-[#B88E2F] transition-colors">
                      <Link href={`/shop`}>{product.name}</Link>
                    </h3>
                    <p className="text-neutral-500 text-xs sm:text-sm truncate">
                      {product.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="font-bold text-neutral-900 text-base sm:text-lg">
                      {formatIDR(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-neutral-400 text-xs sm:text-sm line-through">
                        {formatIDR(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-block border-2 border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white font-bold text-sm px-14 py-3.5 rounded-md transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Lihat Semua
          </Link>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
};
