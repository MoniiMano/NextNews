"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { ArticleGrid } from "@/components/ArticleGrid";
import { LatestTicker } from "@/components/LatestTicker";
import { EditorsPicks } from "@/components/EditorsPicks";
import { CategoryFilter } from "@/components/CategoryFilter";
import { SkeletonLoader } from "@/components/SkeletonLoader";
import {
  mockArticles,
  editorPicks,
  latestHeadlines,
  getArticlesByCategory,
} from "@/lib/mock-data";

export default function Home() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "HOME";

  const [isLoading, setIsLoading] = useState(true);

  const articles = useMemo(() => getArticlesByCategory(category), [category]);
  
  const { featuredArticle, topStories, mobileStories } = useMemo(() => ({
    featuredArticle: articles[0],
    topStories: articles.slice(1, 4),
    mobileStories: articles.slice(1)
  }), [articles]);

  const handleCategoryChange = useCallback(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 150); // Reduced loading time for better UX
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    handleCategoryChange();
  }, [category, handleCategoryChange]);

  return (
    <main className="flex-1 bg-surface text-primary">
      {/* Desktop featured hero */}
      <section className="hidden md:block bg-surface-muted py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <SkeletonLoader variant="featured" />
          ) : (
            featuredArticle && (
              <ArticleCard
                article={featuredArticle}
                variant="featured"
                loading="eager"
              />
            )
          )}
        </div>
      </section>

      {/* Mobile featured hero */}
      <section className="md:hidden relative">
        {featuredArticle && (
          <Link href={`/article/${featuredArticle.slug}`}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={featuredArticle.imageUrl}
                alt={featuredArticle.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <span className="inline-block bg-accent text-white px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-3">
                  {featuredArticle.category}
                </span>
                <h1 className="text-2xl font-bold font-serif leading-tight mb-2">
                  {featuredArticle.title}
                </h1>
                <p className="text-sm text-white/80">
                  By {featuredArticle.author} · {featuredArticle.publishedAt}
                </p>
              </div>
            </div>
          </Link>
        )}
      </section>

      <LatestTicker headlines={latestHeadlines} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <CategoryFilter />

        {/* Desktop top stories */}
        <div className="hidden md:block">
          {isLoading ? (
            <SkeletonLoader variant="card" count={3} />
          ) : (
            <ArticleGrid articles={topStories} title="Top Stories" />
          )}
        </div>

        {/* Mobile article list */}
        <div className="md:hidden">
          <h2 className="text-xl font-bold text-primary font-serif mb-4">Top Stories</h2>
          {isLoading ? (
            <SkeletonLoader variant="card" count={2} />
          ) : (
            mobileStories.map((article) => (
              <ArticleCard key={article.id} article={article} variant="mobile" />
            ))
          )}
        </div>

        <EditorsPicks articles={editorPicks} />
      </div>
    </main>
  );
}
