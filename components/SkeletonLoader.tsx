"use client";

import React, { memo } from "react";

interface SkeletonLoaderProps {
  variant?: "featured" | "card";
  count?: number;
}

export const SkeletonLoader = memo<SkeletonLoaderProps>(({
  variant = "card",
  count = 3,
}) => {
  if (variant === "featured") {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center animate-pulse">
        <div className="space-y-4 order-2 lg:order-1">
          <div className="h-6 w-20 bg-surface-card rounded" />
          <div className="h-12 bg-surface-card rounded w-full" />
          <div className="h-12 bg-surface-card rounded w-5/6" />
          <div className="h-4 bg-surface-card rounded w-full" />
          <div className="h-4 bg-surface-card rounded w-4/5" />
        </div>
        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[420px] bg-surface-card rounded-xl order-1 lg:order-2" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-[16/10] bg-surface-card rounded-xl mb-4" />
          <div className="h-3 w-16 bg-surface-card rounded mb-3" />
          <div className="h-5 bg-surface-card rounded mb-2" />
          <div className="h-5 w-5/6 bg-surface-card rounded mb-3" />
          <div className="h-4 bg-surface-card rounded" />
        </div>
      ))}
    </div>
  );
});

SkeletonLoader.displayName = 'SkeletonLoader';
