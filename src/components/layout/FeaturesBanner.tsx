"use client";

import React from "react";
import { Trophy, ShieldCheck, Truck, Headphones } from "lucide-react";

export const FeaturesBanner: React.FC = () => {
  const features = [
    {
      icon: Trophy,
      title: "Kualitas Terbaik",
      subtitle: "Dibuat dari material berkualitas tinggi",
    },
    {
      icon: ShieldCheck,
      title: "Garansi Produk",
      subtitle: "Sampai 2 tahun",
    },
    {
      icon: Truck,
      title: "Gratis Ongkir",
      subtitle: "Dengan min. belanja",
    },
    {
      icon: Headphones,
      title: "Bantuan",
      subtitle: "24 Jam",
    },
  ];

  return (
    <section className="bg-[#FAF4EF] py-14 border-y border-amber-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="flex items-center gap-4 group">
                <div className="p-3 text-neutral-900 group-hover:text-[#B88E2F] transition-colors">
                  <IconComponent className="w-12 h-12 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-500 text-sm mt-0.5">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
