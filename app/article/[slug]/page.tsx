import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getArticleBySlug, mockArticles, editorPicks } from "@/lib/mock-data";
import { ArticleSidebar } from "@/components/ArticleSidebar";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.imageUrl],
    },
  };
}

export function generateStaticParams() {
  const allArticles = [...mockArticles, ...editorPicks];
  return allArticles.map((article) => ({
    slug: article.slug,
  }));
}

function renderContent(content: string) {
  const blocks = content.split("\n\n");

  return blocks.map((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (
      trimmed.length < 80 &&
      !trimmed.endsWith(".") &&
      !trimmed.startsWith('"')
    ) {
      return (
        <h2
          key={idx}
          className="text-2xl font-bold text-primary font-serif mt-10 mb-4"
        >
          {trimmed}
        </h2>
      );
    }

    if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
      return (
        <blockquote
          key={idx}
          className="border-l-4 border-accent pl-6 my-8 italic text-lg text-secondary"
        >
          {trimmed}
        </blockquote>
      );
    }

    return (
      <p key={idx} className="text-base text-secondary leading-relaxed mb-4">
        {trimmed}
      </p>
    );
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = [...mockArticles, ...editorPicks]
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const categoryLabel =
    article.category.charAt(0) + article.category.slice(1).toLowerCase();

  return (
    <main className="flex-1 bg-surface">
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0a2e] via-[#0f172a] to-[#1e1b4b] dark:from-[#0a0612] dark:via-[#0f0f0f] dark:to-[#1a0a2e]" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-accent/10 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <span className="inline-block bg-accent text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-6">
                {article.category}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-serif">
                {article.title}
              </h1>

              <p className="text-base md:text-lg text-white/70 mb-8 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-3 mb-8">
                {article.authorAvatar ? (
                  <Image
                    src={article.authorAvatar}
                    alt={article.author}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-white/20" />
                )}
                <div className="text-sm text-white/80">
                  <span className="font-medium text-white block">
                    {article.author}
                  </span>
                  <span>
                    {article.publishedAt}
                    {article.readingTime && ` · ${article.readingTime} min read`}
                  </span>
                </div>
              </div>

              <a
                href="#article-body"
                className="inline-flex items-center gap-2 text-accent font-semibold text-sm"
              >
                Read More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[380px] overflow-hidden rounded-2xl">
              <Image
                src={article.imageUrl}
                alt={article.imageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article body + sidebar */}
      <div
        id="article-body"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14"
      >
        <nav className="text-sm text-secondary mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="mx-2">›</span>
          <span className="text-primary">{categoryLabel}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          <article className="lg:col-span-2">
            <p className="text-lg text-secondary leading-relaxed mb-6 font-medium">
              {article.excerpt}
            </p>

            {article.content ? (
              <div>{renderContent(article.content)}</div>
            ) : (
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  This article explores the most recent developments in this
                  important topic.
                </p>
                <p>
                  Our analysis draws from multiple sources and expert opinions
                  to provide comprehensive coverage.
                </p>
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-theme">
              <h3 className="font-bold text-primary mb-4 font-serif">
                Share Article
              </h3>
              <div className="flex gap-3">
                {["Twitter", "Facebook", "Link"].map((label) => (
                  <button
                    key={label}
                    className="p-3 bg-surface-card border border-theme hover:text-accent rounded-full transition-colors text-secondary"
                    aria-label={`Share on ${label}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="4" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          </article>

          <ArticleSidebar relatedArticles={relatedArticles} />
        </div>
      </div>

      <section className="border-t border-theme bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent font-semibold transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
