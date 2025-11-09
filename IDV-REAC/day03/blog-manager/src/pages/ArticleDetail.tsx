import { useParams, useNavigate } from 'react-router-dom';
import { getArticles } from '../utils/storage';

export default function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = getArticles().find(a => a.id === id);

  if (!article) return <p>Article introuvable.</p>;

  return (
    <main
      role="main"
      aria-labelledby="article-title"
      style={{
        backgroundColor: '#ffe4e1',
        padding: '2rem',
        borderRadius: '8px',
        maxWidth: '600px',
        margin: '2rem auto',
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word'
      }}
    >
      <h2 id="article-title">{article.title}</h2>
      <p><strong>Catégorie :</strong> {article.category}</p>
      <p><strong>Auteur :</strong> {article.author || 'Anonyme'}</p>
      <p><strong>Date :</strong> {new Date(article.createdAt).toLocaleDateString()}</p>

      <p style={{
        maxHeight: '300px',
        overflowY: 'auto',
        padding: '1rem',
        backgroundColor: 'white',
        border: '1px solid #ccc',
        borderRadius: '5px'
      }}>
        {article.content}
      </p>

      <button
        onClick={() => navigate('/articles')}
        aria-label="Retour à la liste des articles"
        style={{
          marginTop: '2rem',
          backgroundColor: 'pink',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        ← Retour aux articles
      </button>
    </main>
  );
}
