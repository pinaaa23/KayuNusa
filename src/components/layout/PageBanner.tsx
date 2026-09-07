"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface PageBannerProps {
  title: string;
  breadcrumbs: BreadcrumbItem[];
}

export const PageBanner: React.FC<PageBannerProps> = ({ title, breadcrumbs }) => {
  return (
    <section className="relative w-full py-12 sm:py-16 bg-neutral-100 flex items-center justify-center text-center overflow-hidden border-b border-neutral-200">
      {/* Background Image with texture & soft blur overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 filter blur-[2px]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-white/80" />

      {/* Content */}
      <div className="relative z-10 space-y-3 px-4">
        {/* Emblem Logo */}
        <div className="w-10 h-10 mx-auto rounded-lg bg-[#B88E2F] flex items-center justify-center text-white shadow-md shadow-[#B88E2F]/20">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 22H22L12 2Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 9L7 19H17L12 9Z" fill="currentColor"/>
          </svg>
        </div>

        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-neutral-900 tracking-tight">
          {title}
        </h1>

        {/* Breadcrumb Links */}
        <nav className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium">
          {breadcrumbs.map((item, idx) => {
            const isLast = idx === breadcrumbs.length - 1;
            return (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronRight className="w-4 h-4 text-neutral-400" />}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="font-bold text-neutral-900 hover:text-[#B88E2F] transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <span className={isLast ? "text-neutral-500 font-normal" : "font-bold text-neutral-900"}>
                    {item.name}
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </section>
  );
};
