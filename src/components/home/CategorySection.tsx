"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { mockCategories } from "@/data/categories";

export const CategorySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-neutral-900">
            Jelajahi Koleksi Kami
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-2">
            Beragam pilihan furniture kayu dengan desain fungsional dan elegan.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockCategories.map((category) => (
            <Link
              key={category.id}
              href={`/shop?category=${category.slug}`}
              className="group block text-center space-y-4"
            >
              <div className="relative w-full h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
              </div>
              <h3 className="font-bold text-neutral-900 text-xl group-hover:text-[#B88E2F] transition-colors">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
