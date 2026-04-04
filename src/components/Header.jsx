import { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LogoFull, LogoCompact } from './Logo';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/what-we-do', label: 'What We Do' },
  { to: '/who-we-work-with', label: 'Who We Work With' },
  { to: '/featured-work', label: 'Featured Work' },
  { to: '/who-we-are', label: 'Who We Are' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const closeNav = useCallback(() => setNavOpen(false), []);

  useEffect(() => {
    closeNav();
  }, [location, closeNav]);

  useEffect(() => {
    const root = document.getElementById('root');
    if (navOpen) {
      root?.classList.add('nav-open');
    } else {
      root?.classList.remove('nav-open');
    }
  }, [navOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeNav();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [closeNav]);

  return (
    <>
      <header className="icd-header">
        {isHome ? <LogoFull /> : <LogoCompact />}
        <button
          className={`icd-nav-toggle${navOpen ? ' open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={() => setNavOpen(!navOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <nav className={`icd-nav-drawer${navOpen ? ' open' : ''}`} aria-hidden={!navOpen}>
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={closeNav}
            end={to === '/'}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
