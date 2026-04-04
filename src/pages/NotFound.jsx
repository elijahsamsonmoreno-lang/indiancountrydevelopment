import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { LogoIcon } from '../components/Logo';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" path="/404" noindex />
      <main style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: '5rem 2rem 2rem',
        textAlign: 'center',
      }}>
        <LogoIcon size={48} />
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '1rem 0 0.5rem' }}>
          Page not found
        </h1>
        <p style={{ color: 'var(--ink-soft)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist.
        </p>
        <Link
          to="/"
          style={{
            padding: '0.5rem 1.5rem',
            borderRadius: '999px',
            background: 'var(--accent)',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.9rem',
            textDecoration: 'none',
          }}
        >
          Back to home
        </Link>
      </main>
    </>
  );
}
