import type { Article } from '../types/Article';

const STORAGE_KEY = 'blog_articles';

export function getArticles(): Article[] {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveArticles(articles: Article[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}
