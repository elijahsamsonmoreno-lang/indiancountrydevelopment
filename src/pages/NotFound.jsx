import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" path="/404" noindex />
      <main className="error-page">
        <h1>Page not found</h1>
        <p>The page you&rsquo;re looking for doesn&rsquo;t exist.</p>
        <Link to="/" className="error-page-btn">Back to home</Link>
      </main>
    </>
  );
}
