import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header
      style={{
        backgroundColor: 'pink',
        color: 'white',
        padding: '0.9rem',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <h1 style={{ margin: 0, textAlign: 'center' }}>Blog Manager</h1>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '1rem',
          gap: '1rem',
        }}
      >
        <Link to="/" style={linkStyle}>🏠 Accueil</Link>
        <Link to="/articles" style={linkStyle}>📚 Articles</Link>
        <Link to="/new" style={linkStyle}>✍️ Créer</Link>
      </nav>
    </header>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1rem',
};
