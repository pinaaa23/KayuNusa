"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { mockInspirations } from "@/data/inspirations";

export const InspirationSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % mockInspirations.length);
  };

  return (
    <section className="bg-[#FCF8F3] py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 leading-tight">
              50+ Inspirasi<br />Ruangan
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed max-w-md">
              Koleksi desain ruangan yang dirancang untuk menghadirkan kenyamanan dan keindahan.
            </p>
            <div>
              <Link
                href="/shop"
                className="inline-block bg-[#B88E2F] hover:bg-[#9E7824] text-white font-bold text-sm px-9 py-3.5 rounded-md shadow-md shadow-[#B88E2F]/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore More
              </Link>
            </div>
          </div>

          {/* Right Carousel Column */}
          <div className="lg:col-span-7 relative flex flex-col sm:flex-row gap-6 items-stretch">
            {/* Active Main Slide */}
            <div className="relative w-full sm:w-[380px] h-[480px] rounded-2xl overflow-hidden shadow-xl flex-shrink-0">
              <Image
                src={mockInspirations[activeIndex].image}
                alt={mockInspirations[activeIndex].title}
                fill
                sizes="(max-width: 640px) 100vw, 380px"
                className="object-cover transition-all duration-700"
              />

              {/* Floating Info Tag */}
              <div className="absolute bottom-8 left-6 right-16 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/40 space-y-1">
                <p className="text-neutral-500 text-xs font-semibold tracking-wider">
                  {mockInspirations[activeIndex].number} — {mockInspirations[activeIndex].category}
                </p>
                <h3 className="font-bold text-neutral-900 text-2xl">
                  {mockInspirations[activeIndex].title}
                </h3>

                <Link
                  href="/shop"
                  className="absolute -right-12 bottom-0 w-12 h-12 bg-[#B88E2F] text-white flex items-center justify-center rounded-r-xl hover:bg-[#9E7824] transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Secondary Slide Preview */}
            <div className="relative flex-1 hidden sm:block h-[420px] my-auto rounded-2xl overflow-hidden opacity-80 shadow-md">
              <Image
                src={mockInspirations[(activeIndex + 1) % mockInspirations.length].image}
                alt="Slide preview"
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>

            {/* Next Arrow Button */}
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-[#B88E2F] shadow-xl border border-neutral-100 flex items-center justify-center hover:bg-[#B88E2F] hover:text-white transition-all z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute -bottom-10 left-0 flex items-center gap-3">
              {mockInspirations.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    idx === activeIndex
                      ? "bg-[#B88E2F] ring-4 ring-[#B88E2F]/20 scale-110"
                      : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
