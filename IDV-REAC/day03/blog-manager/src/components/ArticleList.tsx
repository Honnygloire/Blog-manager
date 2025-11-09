import type { Article } from '../types/Article';
import ArticleCard from './ArticleCard';

interface Props {
  articles: Article[];
  onDelete: (id: string) => void;
  onUpdate: (updated: Article) => void;
}

export default function ArticleList({ articles, onDelete, onUpdate }: Props) {
  return (
    <div>
      {articles.map(article => (
        <ArticleCard
          key={article.id}
          article={article}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
