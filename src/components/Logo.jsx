import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Sovereign Break Logo — Option B / Shifted Ring
   - Outer ring: nearly circular, with a small gap at upper-right
   - Middle ring: circular but shifted left/down for asymmetry
   - Inner shape: smooth organic blob like a land contour
   - Teal accent arc: small, sits in the gap of the outer ring */

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
      {/* Outer ring — nearly circular, gap at upper-right (~1-2 o'clock) */}
      <path
        className="logo-ring logo-ring-outer"
        d="M 82 14 A 52 52 0 1 0 100 38"
        stroke={ink} strokeWidth="3" fill="none"
        strokeLinecap="round"
      />
      {/* Middle ring — circular but shifted left and slightly down */}
      <circle
        className="logo-ring logo-ring-mid"
        cx="54" cy="62" r="34"
        stroke={ink} strokeWidth="2.8" fill="none"
      />
      {/* Inner blob — smooth organic land contour shape */}
      <path
        className="logo-ring logo-ring-inner"
        d="M 54 44 C 42 44, 34 52, 36 63 C 38 74, 48 80, 60 77 C 70 74, 76 66, 74 56 C 72 47, 64 43, 54 44 Z"
        stroke={ink} strokeWidth="2.8" fill="none"
      />
      {/* Teal accent arc — small, in the gap of the outer ring */}
      <path
        className="logo-arc"
        d="M 96 34 C 102 42, 104 52, 102 60"
        stroke={accent} strokeWidth="4" strokeLinecap="round" fill="none"
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
