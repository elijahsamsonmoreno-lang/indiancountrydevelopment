import { LogoIconOnly } from './Logo';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-logo">
        <LogoIconOnly size={28} />
      </div>
      <p className="footer-tagline">Native-led. Evidence-built. Operationally real.</p>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Tribal Economic Development Partners L.L.C.
      </p>
    </footer>
  );
}
