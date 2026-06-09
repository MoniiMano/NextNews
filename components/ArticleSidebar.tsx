"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/types";

interface ArticleSidebarProps {
  relatedArticles: Article[];
}

export const ArticleSidebar: React.FC<ArticleSidebarProps> = ({
  relatedArticles,
}) => {
  return (
    <aside className="space-y-8">
      {relatedArticles.length > 0 && (
        <div>
          <h3 className="font-bold text-primary mb-4 font-serif text-lg">
            Related Articles
          </h3>
          <div className="space-y-4">
            {relatedArticles.map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.slug}`}
                className="flex gap-3 group"
              >
                <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={article.imageUrl}
                    alt={article.imageAlt}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-primary font-serif line-clamp-2 group-hover:text-accent transition-colors mb-1">
                    {article.title}
                  </h4>
                  <p className="text-xs text-secondary">{article.publishedAt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="bg-surface-muted rounded-xl p-6 border border-theme">
        <h3 className="font-bold text-primary mb-2 font-serif">
          Stay Informed
        </h3>
        <p className="text-sm text-secondary mb-4">
          Get the day&apos;s top stories delivered to your inbox.
        </p>
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2.5 rounded-lg border border-theme bg-surface text-primary text-sm placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
          <button
            type="submit"
            className="w-full bg-accent text-white py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </aside>
  );
};
