"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/types";

interface ArticleCardProps {
  article: Article;
  variant?: "featured" | "story" | "mobile";
  loading?: "lazy" | "eager";
}

export const ArticleCard = memo<ArticleCardProps>(({
  article,
  variant = "story",
  loading = "lazy",
}) => {
  if (variant === "featured") {
    return (
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <div className="mb-4">
            <span className="inline-block bg-accent text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 font-serif" 
              style={{ color: 'var(--text-primary)' }}>
            {article.title}
          </h1>

          <p className="text-base md:text-lg text-secondary mb-6 line-clamp-3">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-3 text-sm text-secondary">
            {article.authorAvatar && (
              <Image
                src={article.authorAvatar}
                alt={article.author}
                width={36}
                height={36}
                className="rounded-full object-cover"
              />
            )}
            <div>
              <span className="font-medium text-primary block">{article.author}</span>
              <span>{article.publishedAt}</span>
            </div>
          </div>

          <Link
            href={`/article/${article.slug}`}
            className="inline-flex items-center gap-2 mt-6 text-accent font-semibold text-sm transition-colors hover:opacity-80"
          >
            Read More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[420px] overflow-hidden rounded-xl order-1 lg:order-2">
          <Image
            src={article.imageUrl}
            alt={article.imageAlt}
            fill
            className="object-cover"
            loading={loading === "eager" ? "eager" : "lazy"}
            priority={loading === "eager"}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </article>
    );
  }

  if (variant === "mobile") {
    return (
      <Link href={`/article/${article.slug}`}>
        <article className="group overflow-hidden rounded-xl bg-surface-card border border-theme mb-4">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={article.imageUrl}
              alt={article.imageAlt}
              fill
              className="object-cover"
              loading={loading}
              sizes="100vw"
            />
          </div>
          <div className="p-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
              {article.category}
            </span>
            <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-accent transition-colors font-serif" 
                style={{ color: 'var(--text-primary)' }}>
              {article.title}
            </h3>
            <p className="text-sm text-secondary mb-3 line-clamp-2">{article.excerpt}</p>
            <p className="text-xs text-secondary">
              By {article.author} · {article.publishedAt}
            </p>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/article/${article.slug}`}>
      <article className="cursor-pointer group h-full flex flex-col">
        <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4">
          <Image
            src={article.imageUrl}
            alt={article.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading={loading === "eager" ? "eager" : "lazy"}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-accent block mb-2">
          {article.category}
        </span>

        <h3 className="text-lg md:text-xl font-bold mb-3 line-clamp-2 font-serif group-hover:text-accent transition-colors" 
            style={{ color: 'var(--text-primary)' }}>
          {article.title}
        </h3>

        <p className="text-sm text-secondary line-clamp-3 flex-1">
          {article.excerpt}
        </p>
      </article>
    </Link>
  );
});

ArticleCard.displayName = 'ArticleCard';
