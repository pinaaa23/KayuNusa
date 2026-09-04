import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeaturesBanner } from "@/components/layout/FeaturesBanner";
import { HeroSection } from "@/components/home/HeroSection";
import { CategorySection } from "@/components/home/CategorySection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { InspirationSection } from "@/components/home/InspirationSection";
import { InstagramGallery } from "@/components/home/InstagramGallery";
import { CartDrawer } from "@/components/modals/CartDrawer";
import { AuthModal } from "@/components/modals/AuthModal";
import { mockProducts } from "@/data/products";

export default function HomePage() {
  // Take first 8 products for Home page grid matching Home.png
  const homeProducts = mockProducts.slice(0, 8);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <CategorySection />
        <ProductsSection products={homeProducts} />
        <InspirationSection />
        <InstagramGallery />
      </main>

      <Footer />

      {/* Global Modals & Drawers */}
      <CartDrawer />
      <AuthModal />
    </div>
  );
}
