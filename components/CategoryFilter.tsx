"use client";

import React, { memo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { mobileCategoryFilters } from "@/lib/mock-data";

export const CategoryFilter = memo(() => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "HOME";

  return (
    <div className="md:hidden flex gap-2 overflow-x-auto scrollbar-hide py-4 -mx-4 px-4">
      {mobileCategoryFilters.map((filter) => {
        const active = category === filter.value;
        const href =
          filter.value === "HOME" ? "/" : `/?category=${filter.value}`;

        return (
          <Link
            key={filter.value}
            href={href}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              active
                ? "bg-accent text-white border-accent"
                : "bg-surface-card text-primary border-theme"
            }`}
          >
            {filter.label}
          </Link>
        );
      })}
    </div>
  );
});

CategoryFilter.displayName = 'CategoryFilter';
