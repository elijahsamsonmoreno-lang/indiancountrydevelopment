import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Sovereign Break Logo — Option B / Shifted Ring
   All three rings are organic contour paths (no circles).
   Outer ring has a gap at upper-right where the teal arc sits. */

export function LogoIcon({ size = 40, className = '', dark = false, animate = false }) {
  const ink = dark ? '#e5e7eb' : 'var(--ink, #0f172a)';
  const accent = 'var(--accent, #0f9c93)';

  return (
    <svg
      className={`logo-icon ${animate ? 'logo-animate' : ''} ${className}`}
      viewBox="-4 -4 128 128"
      width={size}
      height={size}
      aria-hidden="true"
      fill="none"
    >
      {/* Outer ring — organic contour, gap at ~1 o'clock */}
      <path
        className="logo-ring logo-ring-outer"
        d="M 78 12 C 62 6, 42 8, 28 20 C 14 32, 8 50, 10 66 C 12 82, 22 96, 38 104 C 54 112, 74 112, 90 102 C 100 96, 106 84, 108 72 C 110 58, 106 44, 96 34"
        stroke={ink} strokeWidth="3" fill="none"
        strokeLinecap="round"
      />
      {/* Middle ring — organic contour, shifted left/down */}
      <path
        className="logo-ring logo-ring-mid"
        d="M 52 26 C 38 28, 24 38, 22 54 C 20 70, 26 84, 42 92 C 56 98, 72 94, 82 82 C 90 72, 92 58, 86 44 C 80 32, 66 24, 52 26 Z"
        stroke={ink} strokeWidth="2.6" fill="none"
      />
      {/* Inner blob — smooth land contour */}
      <path
        className="logo-ring logo-ring-inner"
        d="M 50 46 C 40 48, 34 56, 36 66 C 38 76, 48 82, 60 78 C 70 74, 76 64, 72 54 C 68 46, 58 44, 50 46 Z"
        stroke={ink} strokeWidth="2.6" fill="none"
      />
      {/* Teal accent arc — in the gap */}
      <path
        className="logo-arc"
        d="M 94 30 C 100 38, 104 48, 104 58"
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
