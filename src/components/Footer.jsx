import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <p className="footer-tagline">Native-led. Evidence-built. Operationally real.</p>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link to="/who-we-are">Who We Are</Link>
        <Link to="/principles">Our Values</Link>
      </nav>
      <p className="footer-copyright">
        &copy; 2026 Tribal Economic Development Partners L.L.C. All rights reserved.
      </p>
      <p className="footer-legal">
        Tribal Economic Development Partners L.L.C.<br />
        d/b/a Indian Country Development&trade;
      </p>
    </footer>
  );
}
