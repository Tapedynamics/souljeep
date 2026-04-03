import fs from 'fs';
import path from 'path';

export interface BlogArticle {
  slug: string;
  lang: 'es' | 'en';
  title: string;
  description: string;
  keywords: string[];
  content: string;
  image: string;
  imageAlt: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  readingTime: number;
  relatedTourSlug?: string;
}

const articlesDir = path.join(process.cwd(), 'data/blog/articles');

function loadArticles(): BlogArticle[] {
  if (!fs.existsSync(articlesDir)) return [];

  const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.json'));
  const articles: BlogArticle[] = [];

  for (const file of files) {
    try {
      const raw = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
      const article = JSON.parse(raw) as BlogArticle;
      articles.push(article);
    } catch {
      // Skip malformed files
    }
  }

  // Sort by date descending
  return articles.sort((a, b) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getAllArticles(lang?: 'es' | 'en'): BlogArticle[] {
  const all = loadArticles();
  if (lang) return all.filter(a => a.lang === lang);
  return all;
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return loadArticles().find(a => a.slug === slug);
}

export function getArticleSlugs(): string[] {
  return loadArticles().map(a => a.slug);
}
