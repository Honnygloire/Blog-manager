import { useState, useEffect } from 'react';
import type { Article } from '../types/Article';
import { getArticles, saveArticles } from '../utils/storage';
import ArticleList from '../components/ArticleList';
import SearchBar from '../components/SearchBar';

export default function Articles() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    setArticles(getArticles());
  }, []);

  const handleDelete = (id: string) => {
    const updated = articles.filter(a => a.id !== id);
    saveArticles(updated);
    setArticles(updated);
  };

  const handleUpdate = (updatedArticle: Article) => {
    const updated = articles.map(a => (a.id === updatedArticle.id ? updatedArticle : a));
    saveArticles(updated);
    setArticles(updated);
  };

  const handleSearch = (query: string, sort: string) => {
    let filtered = getArticles().filter(a =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
    );

    filtered = filtered.sort((a, b) =>
      sort === 'newest'
        ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    setArticles(filtered);
  };

  return (
    <main role="main" aria-labelledby="articles-heading">
      <h2 id="articles-heading">Tous les articles</h2>
      <SearchBar onSearch={handleSearch} />
      <ArticleList
        articles={articles}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </main>
  );
}
