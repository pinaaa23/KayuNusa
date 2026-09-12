"use client";

import React, { useState, useMemo, useEffect, Suspense, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
// Removed duplicate import; useEffect already imported from line 3
import { SlidersHorizontal, LayoutGrid, List, Share2, X, Search, Tag } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeaturesBanner } from "@/components/layout/FeaturesBanner";
import { PageBanner } from "@/components/layout/PageBanner";
import { CartDrawer } from "@/components/modals/CartDrawer";
import { AuthModal } from "@/components/modals/AuthModal";
import { mockProducts } from "@/data/products";
import { mockCategories } from "@/data/categories";
import { useCart } from "@/context/CartContext";

import { Product } from "@/types/product";

function ShopContent() {
  const { addToCart, formatIDR } = useCart();
  const searchParams = useSearchParams();
  const router = useRouter();
  const listRef = useRef<HTMLDivElement>(null);

  // State for view mode: 'grid' or 'list'
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // State for toolbar filters & pagination
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");
  const [itemsPerPage, setItemsPerPage] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [priceRange, setPriceRange] = useState<number>(15000000);

  // Slug → Category name mapping
  const slugToCategoryName: Record<string, string> = useMemo(() => {
    const map: Record<string, string> = {};
    mockCategories.forEach((cat) => {
      map[cat.slug] = cat.name;
    });
    return map;
  }, []);

  // Read ?category= from URL and apply filter on mount / URL change
  useEffect(() => {
    const categorySlug = searchParams.get("category");
    if (categorySlug && slugToCategoryName[categorySlug]) {
      setSelectedCategory(slugToCategoryName[categorySlug]);
    } else if (!categorySlug) {
      setSelectedCategory("all");
    }

    const query = searchParams.get("q");
    if (query) {
      setSearchQuery(query);
    }

    setCurrentPage(1);
  }, [searchParams, slugToCategoryName]);

  // Helper: clear category filter and remove from URL
  const clearCategoryFilter = () => {
    setSelectedCategory("all");
    setCurrentPage(1);
    router.push("/shop");
  };

  // Helper: set category filter and update URL
  const applyCategoryFilter = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1);
    const cat = mockCategories.find((c) => c.name === categoryName);
    if (cat) {
      router.push(`/shop?category=${cat.slug}`);
    }
  };

  // Share handler
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
      alert(`Link untuk ${product.name} telah disalin ke clipboard!`);
    }
  };

  const extendedProducts = useMemo(() => {
    return mockProducts;
  }, []);

  // Filter & Sort logic
  const filteredProducts = useMemo(() => {
    return extendedProducts.filter((product) => {
      // Category Filter
      const matchCategory =
        selectedCategory === "all" ||
        product.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        product.categoryId === selectedCategory;

      // Search Query Filter
      const matchSearch =
        !searchQuery ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

      // Price Range Filter
      const matchPrice = product.price <= priceRange;

      return matchCategory && matchSearch && matchPrice;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  }, [extendedProducts, selectedCategory, searchQuery, priceRange, sortBy]);

  // Auto‑scroll to product list when a category is active
  useEffect(() => {
    if (selectedCategory !== "all" && listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedCategory]);

  // Pagination calculation
  const totalProducts = filteredProducts.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Header Title Banner */}
        <PageBanner
          title="Shop"
          breadcrumbs={[
            { name: "Home", href: "/" },
            { name: "Shop" },
          ]}
        />

        {/* Toolbar & Filter Bar Strip */}
        <section className="bg-[#FAF4EF] border-b border-amber-100/60 py-4 px-4 sm:px-6 lg:px-8 transition-all">
          <div className="max-w-7xl mx-auto flex flex-col gap-3">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Left Controls (Filter Button, View Modes, Search) */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-neutral-800 w-full md:w-auto justify-between md:justify-start">
                {/* Filter Button */}
                <button
                  onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
                  className="flex items-center gap-2 font-medium hover:text-[#B88E2F] py-2 px-3 rounded-lg hover:bg-white/60 transition-all border border-transparent hover:border-neutral-200"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  <span className="font-medium text-base">Filter</span>
                </button>

                {/* View Switchers */}
                <div className="flex items-center gap-2 border-l border-neutral-300 pl-4 sm:pl-6">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === "grid"
                        ? "bg-[#B88E2F] text-white shadow-sm"
                        : "text-neutral-600 hover:text-[#B88E2F] hover:bg-white/60"
                    }`}
                    title="Grid View"
                  >
                    <LayoutGrid className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded-lg transition-all ${
                      viewMode === "list"
                        ? "bg-[#B88E2F] text-white shadow-sm"
                        : "text-neutral-600 hover:text-[#B88E2F] hover:bg-white/60"
                    }`}
                    title="List View"
                  >
                    <List className="w-5 h-5" />
                  </button>
                </div>

                {/* Search Bar */}
                <div className="relative flex-1 min-w-[200px] sm:min-w-[260px] border-l border-neutral-300 pl-4 sm:pl-6">
                  <Search className="w-4 h-4 text-neutral-400 absolute left-7 sm:left-9 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Cari produk..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full text-sm pl-9 pr-4 py-2 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:border-[#B88E2F] placeholder:text-neutral-400 shadow-sm"
                  />
                </div>
              </div>

              {/* Right: Product count */}
              <div className="text-sm text-neutral-500 font-medium whitespace-nowrap">
                {filteredProducts.length} produk ditemukan
              </div>
            </div>

            {/* Active Filters Pill */}
            {(selectedCategory !== "all" || searchQuery.trim() !== "") && (
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-neutral-500 font-medium">Filter aktif:</span>
                
                {selectedCategory !== "all" && (
                  <span className="inline-flex items-center gap-1.5 bg-[#B88E2F] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    <Tag className="w-3 h-3" />
                    Kategori: {selectedCategory}
                    <button
                      onClick={clearCategoryFilter}
                      className="ml-1 hover:text-amber-200 transition-colors"
                      aria-label="Hapus filter kategori"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}

                {searchQuery.trim() !== "" && (
                  <span className="inline-flex items-center gap-1.5 bg-neutral-800 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                    <Search className="w-3 h-3" />
                    Pencarian: &quot;{searchQuery}&quot;
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setCurrentPage(1);
                        const params = new URLSearchParams(window.location.search);
                        params.delete("q");
                        router.push(`/shop?${params.toString()}`);
                      }}
                      className="ml-1 hover:text-neutral-300 transition-colors"
                      aria-label="Hapus pencarian"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Expandable Filter Drawer / Panel */}
        {isFilterDrawerOpen && (
          <section className="bg-white border-b border-neutral-200 py-6 px-4 sm:px-6 lg:px-8 animate-in slide-in-from-top-2 duration-300">
            <div className="max-w-7xl mx-auto space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg text-neutral-900 flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-[#B88E2F]" />
                  Filter Produk KayuNusa
                </h3>
                <button
                  onClick={() => setIsFilterDrawerOpen(false)}
                  className="p-1.5 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 3-Column Clean Filter Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
                {/* 1. Category Filter */}
                <div>
                  <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                    Kategori Ruangan
                  </label>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => {
                        setSelectedCategory("all");
                        setCurrentPage(1);
                      }}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                        selectedCategory === "all"
                          ? "bg-[#B88E2F] text-white shadow-sm"
                          : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                      }`}
                    >
                      Semua
                    </button>
                    {mockCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => applyCategoryFilter(cat.name)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                          selectedCategory === cat.name
                            ? "bg-[#B88E2F] text-white shadow-sm"
                            : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                    <button
                      onClick={() => {
                        setSelectedCategory("Sofas");
                        setCurrentPage(1);
                      }}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                        selectedCategory === "Sofas"
                          ? "bg-[#B88E2F] text-white shadow-sm"
                          : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                      }`}
                    >
                      Sofas
                    </button>
                    <button
                      onClick={clearCategoryFilter}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                        selectedCategory === "all"
                          ? "bg-[#B88E2F] text-white shadow-sm"
                          : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                      }`}
                    >
                      Semua Produk
                    </button>
                  </div>
                </div>

                {/* 2. Price Range Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                      Maksimal Harga
                    </label>
                    <span className="text-xs font-bold text-[#B88E2F]">
                      {formatIDR(priceRange)}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={100000}
                    max={15000000}
                    step={100000}
                    value={priceRange}
                    onChange={(e) => {
                      setPriceRange(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="w-full accent-[#B88E2F]"
                  />
                </div>

                {/* 3. Sort By Filter */}
                <div>
                  <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                    Berdasarkan (Pengurutan)
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full text-sm p-2.5 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:border-[#B88E2F] font-medium shadow-sm"
                  >
                    <option value="default">Default</option>
                    <option value="price-low">Harga: Terendah ke Tinggi</option>
                    <option value="price-high">Harga: Tinggi ke Rendah</option>
                    <option value="name-asc">Nama: A-Z</option>
                    <option value="rating">Rating Tertinggi</option>
                  </select>
                </div>
              </div>

              {/* Reset Filter Button */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => {
                    clearCategoryFilter();
                    setSearchQuery("");
                    setPriceRange(15000000);
                    setSortBy("default");
                    setCurrentPage(1);
                  }}
                  className="text-xs font-semibold text-neutral-500 hover:text-[#B88E2F] underline"
                >
                  Reset Semua Filter
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Product Catalog Display Section */}
        <section className="py-12 sm:py-16 bg-white" ref={listRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {currentProducts.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <div className="w-16 h-16 bg-amber-50 text-[#B88E2F] rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">
                  Tidak Ada Produk Yang Ditemukan
                </h3>
                <p className="text-neutral-500 text-sm">
                  Coba sesuaikan kata kunci pencarian atau reset filter kamu.
                </p>
                <button
                  onClick={() => {
                    clearCategoryFilter();
                    setSearchQuery("");
                    setPriceRange(15000000);
                  }}
                  className="inline-block bg-[#B88E2F] text-white font-bold text-sm px-6 py-2.5 rounded-md hover:bg-[#9E7824] transition-colors"
                >
                  Lihat Semua Produk
                </button>
              </div>
            ) : viewMode === "grid" ? (
              /* GRID VIEW MODE (Matching Home.png & Produk.png) */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {currentProducts.map((product) => {
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
                          </div>
                        </div>
                      </div>

                      {/* Info Container */}
                      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-2">
                        <div>
                          <h3 className="font-bold text-neutral-900 text-lg sm:text-xl group-hover:text-[#B88E2F] transition-colors">
                            <Link href={`/shop/${product.slug}`}>{product.name}</Link>
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
            ) : (
              /* LIST VIEW MODE */
              <div className="space-y-6">
                {currentProducts.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="bg-[#F4F5F7] rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row gap-6 items-center hover:shadow-lg transition-all"
                    >
                      <div className="relative w-full sm:w-60 h-48 rounded-lg overflow-hidden bg-neutral-200 flex-shrink-0">
                        <Image
                          src={product.mainImage}
                          alt={product.name}
                          fill
                          sizes="240px"
                          className="object-cover"
                        />
                        {product.discountPercent && (
                          <span className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#E97171] text-white text-xs font-bold flex items-center justify-center">
                            -{product.discountPercent}%
                          </span>
                        )}
                      </div>

                      <div className="flex-1 space-y-3 w-full">
                        <div>
                          <span className="text-xs font-bold text-[#B88E2F] uppercase tracking-wider">
                            {product.category}
                          </span>
                          <h3 className="font-bold text-2xl text-neutral-900 hover:text-[#B88E2F]">
                            <Link href={`/shop/${product.slug}`}>{product.name}</Link>
                          </h3>
                          <p className="text-neutral-600 text-sm mt-1">
                            {product.description}
                          </p>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="font-bold text-xl text-neutral-900">
                            {formatIDR(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-neutral-400 text-sm line-through">
                              {formatIDR(product.originalPrice)}
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                          <button
                            onClick={() => addToCart(product, 1)}
                            className="bg-[#B88E2F] hover:bg-[#9E7824] text-white font-bold text-sm px-5 py-2.5 rounded-md shadow-sm transition-colors"
                          >
                            Tambahkan ke Keranjang
                          </button>
                          <Link
                            href={`/shop/${product.slug}`}
                            className="border border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white font-bold text-sm px-5 py-2.5 rounded-md transition-colors"
                          >
                            Detail Produk
                          </Link>
                          <button
                            onClick={(e) => handleShare(product, e)}
                            className="p-2 text-neutral-600 hover:text-[#B88E2F] hover:bg-white rounded-lg transition-colors border border-neutral-200"
                            title="Share"
                          >
                            <Share2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Pagination Controls matching Produk.png */}
            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-center gap-3">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                  const isActive = pageNum === currentPage;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => {
                        setCurrentPage(pageNum);
                        window.scrollTo({ top: 400, behavior: "smooth" });
                      }}
                      className={`w-12 h-12 rounded-lg font-semibold text-base transition-all ${
                        isActive
                          ? "bg-[#B88E2F] text-white shadow-md"
                          : "bg-[#F9F1E7] text-neutral-900 hover:bg-[#B88E2F] hover:text-white"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                {currentPage < totalPages && (
                  <button
                    onClick={() => {
                      setCurrentPage((prev) => prev + 1);
                      window.scrollTo({ top: 400, behavior: "smooth" });
                    }}
                    className="h-12 px-7 rounded-lg bg-[#F9F1E7] text-neutral-900 hover:bg-[#B88E2F] hover:text-white font-semibold text-base transition-all"
                  >
                    Lanjut
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Features Benefit Banner */}
        <FeaturesBanner />
      </main>

      <Footer />

      {/* Global Modals */}
      <CartDrawer />
      <AuthModal />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-[#B88E2F] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-neutral-500 font-medium">Memuat produk...</p>
        </div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
