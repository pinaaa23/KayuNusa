"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { User, Search, ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { mockProducts } from "@/data/products";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeSearchQuery = searchParams.get("q");
  const isSearchActive = !!activeSearchQuery;
  const { summary, toggleCart } = useCart();
  const { user, openAuthModal, logoutMock } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const searchResults = useMemo(() => {
    if (!searchKeyword.trim()) return [];
    const kw = searchKeyword.toLowerCase();
    return mockProducts
      .filter((p) => 
        p.name.toLowerCase().includes(kw) || 
        p.category.toLowerCase().includes(kw) ||
        p.subtitle.toLowerCase().includes(kw)
      )
      .slice(0, 5); // Limit to 5 results
  }, [searchKeyword]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Tentang", href: "/about" },
    { name: "Kontak", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-neutral-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-[#B88E2F] flex items-center justify-center text-white shadow-md shadow-[#B88E2F]/20 group-hover:bg-[#A07A27] transition-all">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 22H22L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 9L7 19H17L12 9Z" fill="currentColor"/>
            </svg>
          </div>
          <span className="font-bold text-2xl tracking-tight text-neutral-900 group-hover:text-[#B88E2F] transition-colors">
            KayuNusa
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-medium transition-colors relative py-1 ${
                  isActive
                    ? "text-[#B88E2F] font-semibold"
                    : "text-neutral-700 hover:text-[#B88E2F]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B88E2F] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action Icons */}
        <div className="hidden md:flex items-center gap-6">
          {/* User Profile / Auth */}
          <div className="relative">
            <button
              onClick={() => (user ? setIsUserMenuOpen(!isUserMenuOpen) : openAuthModal("login"))}
              className="p-2 text-neutral-700 hover:text-[#B88E2F] hover:bg-neutral-50 rounded-full transition-all"
              title={user ? `Logged in as ${user.displayName}` : "Account Login"}
            >
              <User className="w-5 h-5" />
            </button>

            {user && isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-neutral-100 py-2 z-50 animate-in fade-in slide-in-from-top-2">
                <div className="px-4 py-2 border-b border-neutral-100">
                  <p className="text-xs text-neutral-400">Signed in as</p>
                  <p className="text-sm font-semibold text-neutral-800 truncate">{user.displayName}</p>
                </div>
                <button
                  onClick={() => {
                    logoutMock();
                    setIsUserMenuOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Search Icon */}
          <div className="relative">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 hover:bg-neutral-50 rounded-full transition-all ${
                isSearchOpen || isSearchActive ? "text-[#B88E2F]" : "text-neutral-700 hover:text-[#B88E2F]"
              }`}
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {isSearchOpen && (
              <div className="absolute right-0 mt-3 w-[350px] bg-white rounded-2xl shadow-2xl border border-neutral-100 p-4 z-50 animate-in fade-in slide-in-from-top-2">
                <form onSubmit={(e) => {
                  e.preventDefault();
                  setIsSearchOpen(false);
                  if (searchKeyword.trim()) {
                    router.push(`/shop?q=${encodeURIComponent(searchKeyword)}`);
                  }
                }} className="flex items-center gap-3">
                  <input 
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="Cari produk (misal: Kursi)..."
                    className="flex-1 text-base py-2 bg-transparent border-b-2 border-[#B88E2F] focus:outline-none text-neutral-900 placeholder:text-neutral-300"
                    autoFocus
                  />
                  <button type="submit" className="text-[#B88E2F] p-2 hover:bg-amber-50 rounded-full transition-colors">
                    <Search className="w-5 h-5" />
                  </button>
                </form>

                {/* Live Search Results */}
                {searchKeyword.trim() && (
                  <div className="mt-4 flex flex-col gap-1">
                    {searchResults.length > 0 ? (
                      <>
                        <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2 px-2">Hasil Pencarian</h4>
                        {searchResults.map((product) => (
                          <button
                            key={product.id}
                            type="button"
                            onClick={() => {
                              setIsSearchOpen(false);
                              router.push(`/shop/${product.slug}`);
                            }}
                            className="flex items-center gap-3 p-2 hover:bg-neutral-50 rounded-xl transition-colors text-left"
                          >
                            <div className="relative w-12 h-12 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                              <Image src={product.mainImage} alt={product.name} fill sizes="48px" className="object-cover" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-neutral-900 line-clamp-1">{product.name}</p>
                              <p className="text-xs text-neutral-500">{product.category}</p>
                            </div>
                          </button>
                        ))}
                        <button 
                          onClick={() => {
                            setIsSearchOpen(false);
                            router.push(`/shop?q=${encodeURIComponent(searchKeyword)}`);
                          }}
                          className="w-full text-center text-xs font-bold text-[#B88E2F] hover:text-[#9E7824] pt-3 pb-1"
                        >
                          Lihat semua hasil
                        </button>
                      </>
                    ) : (
                      <p className="text-sm text-neutral-500 text-center py-4">Tidak ada produk ditemukan.</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cart Icon & Badge */}
          <button
            onClick={toggleCart}
            className="p-2 text-neutral-700 hover:text-[#B88E2F] hover:bg-neutral-50 rounded-full transition-all relative"
            title="Shopping Cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {summary.itemCount > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-[#B88E2F] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                {summary.itemCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Controls (Cart + Hamburger) */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleCart}
            className="p-2 text-neutral-700 hover:text-[#B88E2F] rounded-lg relative"
          >
            <ShoppingCart className="w-6 h-6" />
            {summary.itemCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#B88E2F] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                {summary.itemCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-[#B88E2F] rounded-lg"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white px-4 pt-4 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? "bg-[#F9F1E7] text-[#B88E2F] font-semibold"
                      : "text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-neutral-100 flex items-center justify-around">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                user ? logoutMock() : openAuthModal("login");
              }}
              className="flex items-center gap-2 text-neutral-700 hover:text-[#B88E2F] py-2 px-3 rounded-lg text-sm font-medium"
            >
              <User className="w-5 h-5" />
              <span>{user ? user.displayName : "Masuk / Daftar"}</span>
            </button>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                router.push("/shop");
              }}
              className="flex items-center gap-2 text-neutral-700 hover:text-[#B88E2F] py-2 px-3 rounded-lg text-sm font-medium"
            >
              <Search className="w-5 h-5" />
              <span>Cari</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
