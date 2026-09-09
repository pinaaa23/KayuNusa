import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/modals/CartDrawer";
import { AuthModal } from "@/components/modals/AuthModal";
import { mockInspirations } from "@/data/inspirations";
import { ChevronRight } from "lucide-react";

export default function InspirationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Banner Section */}
        <section className="relative h-[300px] w-full bg-[#f9fafb] flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
            alt="Inspirasi Ruangan Banner"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="relative z-10 text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900">
              Inspirasi Ruangan
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm font-medium text-neutral-600">
              <Link href="/" className="hover:text-[#B88E2F] transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-neutral-900">Inspirasi Ruangan</span>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-neutral-900">Temukan Gaya Ideal Anda</h2>
            <p className="text-neutral-600">
              Jelajahi berbagai pilihan desain ruangan yang memadukan estetika dan fungsionalitas. Temukan inspirasi untuk menciptakan rumah impian Anda bersama KayuNusa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockInspirations.map((item) => (
              <div key={item.id} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                  <p className="text-[#B88E2F] text-sm font-bold tracking-wider mb-2">
                    {item.number} — {item.category}
                  </p>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <Link
                    href={`/shop`}
                    className="inline-flex items-center justify-center bg-white/20 backdrop-blur-md text-white border border-white/40 hover:bg-white hover:text-neutral-900 font-semibold px-6 py-2.5 rounded-full transition-all duration-300"
                  >
                    Lihat Produk
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <CartDrawer />
      <AuthModal />
    </div>
  );
}
