import { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LogoFull, LogoCompact } from './Logo';
import { preloadRoute } from '../App';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/featured-work', label: 'Featured Work' },
  { to: '/who-we-work-with', label: 'Who We Work With' },
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
      <header className="icd-header" role="banner">
        {isHome ? <LogoFull /> : <LogoCompact />}

        <nav className="icd-desktop-nav" aria-label="Main navigation">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => isActive ? 'active' : ''}
              end={to === '/'}
              onMouseEnter={() => preloadRoute(to)}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`icd-nav-toggle${navOpen ? ' open' : ''}`}
          aria-label={navOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={navOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile drawer */}
      <nav
        id="mobile-nav-drawer"
        className={`icd-nav-drawer${navOpen ? ' open' : ''}`}
        aria-hidden={!navOpen}
        aria-label="Mobile navigation"
      >
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={closeNav}
            end={to === '/'}
            tabIndex={navOpen ? 0 : -1}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
