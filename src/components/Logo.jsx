import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Sovereign Break Logo — Option B / Shifted Ring
   Three organic, irregular concentric rings with a teal accent arc
   where the outer ring breaks/shifts on the right side. */

export function LogoIcon({ size = 40, className = '', dark = false, animate = false }) {
  const ink = dark ? '#e5e7eb' : 'var(--ink, #0f172a)';
  const accent = 'var(--accent, #0f9c93)';

  return (
    <svg
      className={`logo-icon ${animate ? 'logo-animate' : ''} ${className}`}
      viewBox="0 0 120 120"
      width={size}
      height={size}
      aria-hidden="true"
      fill="none"
    >
      {/* Outer ring — organic, with a break/shift on the right */}
      <path
        className="logo-ring logo-ring-outer"
        d="M 58 8 C 30 8, 8 28, 8 58 C 8 88, 28 110, 58 112 C 78 113, 95 104, 104 88 C 108 81, 110 72, 110 63 C 110 42, 98 22, 76 12 C 70 9, 64 8, 58 8 Z"
        stroke={ink} strokeWidth="3.2" fill="none"
      />
      {/* Middle ring — shifted slightly, organic wobble */}
      <path
        className="logo-ring logo-ring-mid"
        d="M 56 22 C 36 23, 22 38, 22 58 C 22 78, 35 95, 56 96 C 72 97, 86 88, 92 74 C 96 66, 96 56, 92 46 C 86 32, 72 22, 56 22 Z"
        stroke={ink} strokeWidth="2.8" fill="none"
      />
      {/* Inner organic blob — land mass shape */}
      <path
        className="logo-ring logo-ring-inner"
        d="M 52 42 C 42 44, 36 52, 38 62 C 40 72, 48 78, 58 76 C 68 74, 78 68, 78 56 C 78 46, 70 40, 60 40 C 57 40, 54 41, 52 42 Z"
        stroke={ink} strokeWidth="2.8" fill="none"
      />
      {/* Teal accent arc — sits in the break of the outer ring, right side */}
      <path
        className="logo-arc"
        d="M 105 44 C 114 54, 114 70, 106 82"
        stroke={accent} strokeWidth="4.5" strokeLinecap="round" fill="none"
      />
    </svg>
  );
}

LogoIcon.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
  dark: PropTypes.bool,
  animate: PropTypes.bool,
};

export function LogoFull({ className = '' }) {
  return (
    <Link to="/" className={`icd-logo ${className}`} aria-label="Indian Country Development home">
      <LogoIcon size={38} animate className="logo-responsive" />
      <span className="icd-logo-text">
        Indian Country Development<span className="icd-logo-tm">&trade;</span>
      </span>
    </Link>
  );
}

LogoFull.propTypes = { className: PropTypes.string };

export function LogoCompact({ className = '' }) {
  return (
    <Link to="/" className={`icd-logo ${className}`} aria-label="Indian Country Development home">
      <LogoIcon size={34} animate className="logo-responsive" />
      <span className="icd-logo-text">
        ICD<span className="icd-logo-tm">&trade;</span>
      </span>
    </Link>
  );
}

LogoCompact.propTypes = { className: PropTypes.string };

export function LogoIconOnly({ size = 28, dark = false, className = '' }) {
  return <LogoIcon size={size} dark={dark} className={className} />;
}

LogoIconOnly.propTypes = {
  size: PropTypes.number,
  dark: PropTypes.bool,
  className: PropTypes.string,
};
