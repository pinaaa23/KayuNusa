"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Star, ChevronRight, Share2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/modals/CartDrawer";
import { AuthModal } from "@/components/modals/AuthModal";
import { mockProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Product } from "@/types/product";

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const { addToCart, formatIDR } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  // Find product by slug or default to first product
  const product: Product =
    mockProducts.find((p) => p.slug === slug) || mockProducts[8] || mockProducts[0];

  // States for gallery, size, color, quantity, and tabs
  const [selectedImage, setSelectedImage] = useState<string>(
    product.images[0] || product.mainImage
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product.variants?.sizes?.[0] || "L"
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    product.variants?.colors?.[0]?.name || "Gold"
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"desc" | "info" | "reviews">("desc");

  // Related products
  const relatedProducts = mockProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb Bar */}
        <section className="bg-[#FAF4EF] py-4 px-4 sm:px-6 lg:px-8 border-b border-amber-100/50">
          <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm text-neutral-500 font-medium overflow-x-auto">
            <Link href="/" className="hover:text-[#B88E2F]">Home</Link>
            <ChevronRight className="w-4 h-4 text-neutral-400" />
            <Link href="/shop" className="hover:text-[#B88E2F]">Shop</Link>
            <ChevronRight className="w-4 h-4 text-neutral-400" />
            <span className="text-neutral-400">|</span>
            <span className="text-neutral-900 font-semibold truncate">{product.name}</span>
          </div>
        </section>

        {/* Product Main Detail Section */}
        <section className="py-10 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left Column: Image Gallery (Thumbnails + Main View) */}
              <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4">
                {/* Thumbnails */}
                <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-18 h-18 sm:w-20 sm:h-20 bg-[#F9F1E7] rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                        selectedImage === img
                          ? "border-[#B88E2F] scale-95"
                          : "border-transparent hover:border-neutral-300"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} preview ${idx + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Main Large Image Container */}
                <div className="relative flex-1 h-[380px] sm:h-[500px] bg-[#FFF9F3] rounded-2xl overflow-hidden border border-amber-100/60 shadow-sm">
                  <Image
                    src={selectedImage}
                    alt={product.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Product Information & Controls */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h1 className="font-extrabold text-3xl sm:text-4xl text-neutral-900">
                    {product.name}
                  </h1>
                  <p className="text-2xl font-bold text-neutral-700 mt-2">
                    {formatIDR(product.price)}
                  </p>
                </div>

                {/* Rating Stars & Review Count */}
                <div className="flex items-center gap-4 text-sm text-neutral-500 py-1">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-current text-amber-400"
                            : "text-neutral-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-neutral-300">|</span>
                  <span className="text-xs text-neutral-500 font-medium">
                    {product.reviewCount} Customer Review
                  </span>
                </div>

                {/* Description Excerpt */}
                <p className="text-neutral-600 text-sm leading-relaxed border-b border-neutral-100 pb-6">
                  {product.description}
                </p>

                {/* Size Selector */}
                {/* Size Selector */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Size
                  </label>
                  <div className="flex items-center gap-3">
                    {(product.variants?.sizes || ["L", "XL", "XS"]).map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[36px] h-9 px-3 rounded-lg font-semibold text-xs sm:text-sm flex items-center justify-center transition-all ${
                          selectedSize === size
                            ? "bg-[#B88E2F] text-white shadow-sm"
                            : "bg-[#F9F1E7] text-neutral-800 hover:bg-neutral-200"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Swatches */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                    Color
                  </label>
                  <div className="flex items-center gap-3">
                    {(
                      product.variants?.colors || [
                        { name: "Purple", hex: "#816DFA" },
                        { name: "Black", hex: "#000000" },
                        { name: "Gold", hex: "#B88E2F" },
                      ]
                    ).map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        style={{ backgroundColor: color.hex }}
                        className={`w-8 h-8 rounded-full transition-all border-2 shadow-sm ${
                          selectedColor === color.name
                            ? "ring-2 ring-offset-2 ring-[#B88E2F] scale-110 border-white"
                            : "border-transparent hover:scale-105"
                        }`}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Action Controls (Quantity, Add to Cart, Compare) */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-b border-neutral-100 pb-8">
                  {/* Quantity Box */}
                  <div className="flex items-center border border-neutral-300 rounded-xl overflow-hidden bg-white">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-4 py-3 text-neutral-600 hover:bg-neutral-100 font-bold"
                    >
                      -
                    </button>
                    <span className="px-4 py-3 font-semibold text-neutral-900 text-sm">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-4 py-3 text-neutral-600 hover:bg-neutral-100 font-bold"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => addToCart(product, quantity, selectedSize, selectedColor)}
                    className="border-2 border-neutral-900 hover:bg-[#B88E2F] hover:border-[#B88E2F] hover:text-white text-neutral-900 font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-sm"
                  >
                    Tambahkan
                  </button>

                  {/* Compare Button */}
                  <Link
                    href="/comparison"
                    className="border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 font-bold text-sm px-6 py-3.5 rounded-xl transition-all"
                  >
                    + Bandingkan
                  </Link>
                </div>

                {/* Metadata (SKU, Kategori, Tag, Share) */}
                <div className="space-y-3 text-sm text-neutral-400 pt-2">
                  <div className="flex items-center gap-4">
                    <span className="w-20">SKU</span>
                    <span>: {product.sku}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-20">Kategori</span>
                    <span>: {product.category}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-20">Tag</span>
                    <span>: {product.tags.join(", ")}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="w-20">Share</span>
                    <div className="flex items-center gap-3 text-neutral-800">
                      <span>:</span>
                      <svg className="w-4 h-4 cursor-pointer fill-current hover:text-[#B88E2F]" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      <svg className="w-4 h-4 cursor-pointer fill-current hover:text-[#B88E2F]" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                      <svg className="w-4 h-4 cursor-pointer fill-current hover:text-[#B88E2F]" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Section (Description, Additional Info, Reviews) */}
        <section className="border-t border-neutral-200 py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {/* Tab Headers */}
            <div className="flex flex-wrap items-center justify-center gap-8 border-b border-neutral-100 pb-4">
              <button
                onClick={() => setActiveTab("desc")}
                className={`text-xl sm:text-2xl font-semibold transition-all ${
                  activeTab === "desc"
                    ? "text-neutral-900 font-bold border-b-2 border-neutral-900 pb-2"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("info")}
                className={`text-xl sm:text-2xl font-semibold transition-all ${
                  activeTab === "info"
                    ? "text-neutral-900 font-bold border-b-2 border-neutral-900 pb-2"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                Informasi Tambahan
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`text-xl sm:text-2xl font-semibold transition-all ${
                  activeTab === "reviews"
                    ? "text-neutral-900 font-bold border-b-2 border-neutral-900 pb-2"
                    : "text-neutral-400 hover:text-neutral-600"
                }`}
              >
                Reviews [{product.reviewCount}]
              </button>
            </div>

            {/* Tab Content */}
            <div className="max-w-4xl mx-auto text-neutral-600 text-sm sm:text-base leading-relaxed space-y-4">
              {activeTab === "desc" && (
                <>
                  <p>{product.description}</p>
                  <p>{product.additionalInfo || "Sofa Asgaard Premium dibuat dari material kayu pilihan berstandar tinggi yang tahan lama dan ramah lingkungan."}</p>
                </>
              )}
              {activeTab === "info" && (
                <p>
                  Ukuran: Standard / Custom. Material Rangka: Kayu Jati Solid. Pelapis: Fabric Premium Linen. Garansi Rangka: 2 Tahun.
                </p>
              )}
              {activeTab === "reviews" && (
                <div className="space-y-4">
                  <div className="bg-[#FAF4EF] p-4 rounded-xl">
                    <p className="font-bold text-neutral-900">Budi Santoso ⭐⭐⭐⭐⭐</p>
                    <p className="text-neutral-600 text-sm mt-1">
                      Kualitas sangat bagus dan kokoh! Pengiriman cepat ke Jogja.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Lifestyle Image Previews matching Detail produk.png */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              <div className="relative h-80 rounded-2xl overflow-hidden bg-[#F9F1E7]">
                <Image
                  src={product.images[0] || product.mainImage}
                  alt="Lifestyle view 1"
                  fill
                  sizes="600px"
                  className="object-cover"
                />
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden bg-[#F9F1E7]">
                <Image
                  src={product.images[1] || product.mainImage}
                  alt="Lifestyle view 2"
                  fill
                  sizes="600px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Produk Serupa */}
        <section className="py-16 bg-white border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-bold text-3xl text-center text-neutral-900 mb-12">
              Produk Serupa
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((relProd) => (
                <div
                  key={relProd.id}
                  className="group relative bg-[#F4F5F7] rounded-lg overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative w-full h-[260px] bg-neutral-200 overflow-hidden">
                    <Image
                      src={relProd.mainImage}
                      alt={relProd.name}
                      fill
                      sizes="300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-neutral-900 text-lg hover:text-[#B88E2F]">
                        <Link href={`/shop/${relProd.slug}`}>{relProd.name}</Link>
                      </h3>
                      <p className="text-neutral-500 text-xs truncate">
                        {relProd.subtitle}
                      </p>
                    </div>

                    <div className="pt-2 font-bold text-neutral-900">
                      {formatIDR(relProd.price)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/shop"
                className="inline-block border-2 border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white font-bold text-sm px-12 py-3 rounded-md transition-all"
              >
                Lihat Semua
              </Link>
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
