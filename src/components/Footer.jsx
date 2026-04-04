import { Link } from 'react-router-dom';
import { LogoIconOnly } from './Logo';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-logo">
        <LogoIconOnly size={28} />
      </div>
      <p className="footer-tagline">Native-led. Evidence-built. Operationally real.</p>
      <nav className="footer-links" aria-label="Footer navigation">
        <Link to="/principles">Our Principles</Link>
        <Link to="/featured-work">Featured Work</Link>
      </nav>
      <p className="footer-copyright">
        &copy; 2026 Tribal Economic Development Partners L.L.C. All rights reserved.
      </p>
      <p className="footer-legal">
        Indian Country Development&trade; is a trademark of Tribal Economic Development Partners L.L.C.
        Unauthorized use is prohibited.
      </p>
    </footer>
  );
}
