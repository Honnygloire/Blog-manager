import { useState } from 'react';
import type { Article } from '../types/Article';

interface Props {
  article: Article;
  onClose: () => void;
  onUpdate: (updated: Article) => void;
}

export default function Modal({ article, onClose, onUpdate }: Props) {
  const [title, setTitle] = useState(article.title);
  const [category, setCategory] = useState(article.category);
  const [content, setContent] = useState(article.content);
  const [author, setAuthor] = useState(article.author);

  const handleUpdate = () => {
    const updatedArticle: Article = {
      ...article,
      title,
      category,
      content,
      author,
    };
    onUpdate(updatedArticle);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        width: '90%',
        maxWidth: '600px',
      }}>
        <h2>Modifier l’article</h2>
        <input placeholder="Titre" value={title} onChange={e => setTitle(e.target.value)} />
        <input placeholder="Catégorie" value={category} onChange={e => setCategory(e.target.value)} />
        <textarea placeholder="Contenu" value={content} onChange={e => setContent(e.target.value)} />
        <input placeholder="Auteur" value={author} onChange={e => setAuthor(e.target.value)} />
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
          <button onClick={handleUpdate}>💾 Enregistrer</button>
          <button onClick={onClose}>❌ Annuler</button>
        </div>
      </div>
    </div>
  );
}
