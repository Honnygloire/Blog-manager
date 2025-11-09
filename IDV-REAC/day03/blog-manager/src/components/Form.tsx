import { useState } from 'react';
import type { Article } from '../types/Article';
import { saveArticles, getArticles } from '../utils/storage';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


export default function Form() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const navigate = useNavigate();


  const validate = () => {
    const newErrors: { [key: string]: boolean } = {};
    if (!title.trim()) newErrors.title = true;
    if (!category.trim()) newErrors.category = true;
    if (!content.trim()) newErrors.content = true;
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newArticle: Article = {
      id: uuidv4(),
      title: title.trim(),
      category: category.trim(),
      content: content.trim(),
      author: author.trim() || 'Anonyme',
      createdAt: new Date().toISOString(),
    };

    const articles = getArticles();
    saveArticles([...articles, newArticle]);
    navigate('/articles');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }} aria-label="Formulaire de création d’article">
      <div>
        <label htmlFor="title">Titre*</label>
        <input
          id="title"
          aria-required="true"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ borderColor: errors.title ? 'red' : undefined }}
        />
        {errors.title && <p style={{ color: 'red', fontWeight: 'bold' }}>Le titre est requis.</p>}
      </div>

      <div>
        <label htmlFor="category">Catégorie*</label>
        <input
          id="category"
          aria-required="true"
          value={category}
          onChange={e => setCategory(e.target.value)}
          style={{ borderColor: errors.category ? 'red' : undefined }}
        />
        {errors.category && <p style={{ color: 'red', fontWeight: 'bold' }}>La catégorie est requise.</p>}
      </div>

      <div>
        <label htmlFor="content">Contenu*</label>
        <textarea
          id="content"
          aria-required="true"
          value={content}
          onChange={e => setContent(e.target.value)}
          style={{
            borderColor: errors.content ? 'red' : undefined,
            minHeight: '120px',
            resize: 'vertical',
          }}
        />
        {errors.content && <p style={{ color: 'red', fontWeight: 'bold' }}>Le contenu est requis.</p>}
      </div>

      <div>
        <label htmlFor="author">Auteur</label>
        <input
          id="author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
      </div>

      <button
        type="submit"
        aria-label="Créer l’article"
        style={{ marginTop: '1rem' }}
      >
        Créer l’article
      </button>
    </form>
  );
}
