"use client";

import React from "react";
import Image from "next/image";
import { mockInstagramGallery } from "@/data/inspirations";

export const InstagramGallery: React.FC = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      {/* Title */}
      <div className="text-center mb-10 px-4">
        <p className="text-neutral-500 font-semibold text-sm sm:text-base">
          Bagikan Inspirasi Ruangmu dengan
        </p>
        <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 mt-1">
          #KayuNusa
        </h2>
      </div>

      {/* Grid Gallery */}
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 auto-rows-[160px] sm:auto-rows-[220px]">
          {mockInstagramGallery.map((imgUrl, idx) => {
            // Give varied span for aesthetic masonry effect
            const isTall = idx === 1 || idx === 4;
            return (
              <div
                key={idx}
                className={`relative rounded-xl overflow-hidden shadow-sm group hover:shadow-lg transition-all duration-300 ${
                  isTall ? "row-span-2" : "row-span-1"
                }`}
              >
                <Image
                  src={imgUrl}
                  alt={`KayuNusa inspiration ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
