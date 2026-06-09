"use client";

import React, { memo } from "react";
import Link from "next/link";
import { LatestHeadline } from "@/lib/types";

interface LatestTickerProps {
  headlines: LatestHeadline[];
}

export const LatestTicker = memo<LatestTickerProps>(({ headlines }) => {
  return (
    <section className="bg-ticker border-y border-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 py-3 overflow-hidden">
          <span className="shrink-0 inline-flex items-center gap-1.5 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5.555 17.776l-1.16-4.115a1 1 0 00-.115-.393l-2.74-4.32a1 1 0 011.414-1.414l3.16 5.002 5.53-9.58a1 1 0 011.732 1l-6.5 11.25a1 1 0 01-1.732 0z" />
            </svg>
            Latest
          </span>

          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide text-sm text-secondary whitespace-nowrap">
            {headlines.map((headline, index) => (
              <React.Fragment key={headline.id}>
                {index > 0 && (
                  <span className="text-accent shrink-0" aria-hidden="true">
                    •
                  </span>
                )}
                <Link
                  href={`/article/${headline.slug}`}
                  className="hover:text-primary transition-colors shrink-0"
                >
                  {headline.title}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

LatestTicker.displayName = 'LatestTicker';
