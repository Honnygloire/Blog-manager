import type { Article } from '../types/Article';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import { useState } from 'react';

interface Props {
  article: Article;
  onDelete: (id: string) => void;
  onUpdate: (updated: Article) => void;
}


export default function ArticleCard({ article, onDelete, onUpdate }: Props) {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    const confirmDelete = window.confirm(`Supprimer "${article.title}"?`);
    if (confirmDelete) {
      onDelete(article.id);
    }
  };

  return (
    <>
      <div style={{ border: '1px solid pink', padding: '1rem', marginBottom: '1rem' }}>
        <Link to={`/articles/${article.id}`} style={{ textDecoration: 'none' }}>
          <h3>{article.title}</h3>
          <p>{article.category} | {new Date(article.createdAt).toLocaleDateString()}</p>
          <p>By {article.author}</p>
        </Link>
        <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white', marginRight: '0.5rem' }}>
          Supprimer
        </button>
        <button onClick={() => setShowModal(true)} style={{ backgroundColor: 'orange', color: 'white' }}>
          Modifier
        </button>
      </div>

      {showModal && (
        <Modal
          article={article}
          onClose={() => setShowModal(false)}
          onUpdate={onUpdate}
        />
      )}
    </>
  );
}
