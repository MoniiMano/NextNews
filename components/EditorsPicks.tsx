"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/types";

interface EditorsPicksProps {
  articles: Article[];
}

export const EditorsPicks = memo<EditorsPicksProps>(({ articles }) => {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary font-serif">
          Editor&apos;s Picks
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:opacity-80 transition-opacity"
        >
          View all
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {articles.map((article) => (
          <Link key={article.id} href={`/article/${article.slug}`}>
            <article className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-3">
                <Image
                  src={article.imageUrl}
                  alt={article.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
                {article.category}
              </span>
              <h3 className="text-sm md:text-base font-bold font-serif line-clamp-3 group-hover:text-accent transition-colors"
                  style={{ color: 'var(--text-primary)' }}>
                {article.title}
              </h3>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
});

EditorsPicks.displayName = 'EditorsPicks';
