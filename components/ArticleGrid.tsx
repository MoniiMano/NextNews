"use client";

import React, { memo } from "react";
import { ArticleCard } from "./ArticleCard";
import { Article } from "@/lib/types";

interface ArticleGridProps {
  articles: Article[];
  title: string;
}

export const ArticleGrid = memo<ArticleGridProps>(({ articles, title }) => {
  return (
    <section className="mb-12 md:mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary font-serif">
          {title}
        </h2>
        <a
          href="#"
          className="text-sm font-medium text-secondary hover:text-primary transition-colors"
        >
          View all
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <ArticleCard
            key={article.id}
            article={article}
            variant="story"
            loading={index < 3 ? "eager" : "lazy"}
          />
        ))}
      </div>
    </section>
  );
});

ArticleGrid.displayName = 'ArticleGrid';
