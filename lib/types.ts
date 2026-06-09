export type ArticleCategory =
  | "WORLD"
  | "TECH"
  | "BUSINESS"
  | "CULTURE"
  | "URBAN"
  | "CLIMATE"
  | "SCIENCE"
  | "SPACE";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: ArticleCategory;
  author: string;
  publishedAt: string;
  imageUrl: string;
  imageAlt: string;
  readingTime?: number;
  authorAvatar?: string;
}

export type Category = "HOME" | "WORLD" | "TECH" | "BUSINESS" | "CULTURE";

export interface NavItem {
  label: string;
  href: string;
  category?: Category;
}

export interface LatestHeadline {
  id: string;
  title: string;
  slug: string;
}
