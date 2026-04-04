import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Sovereign Break Logo — Option B / Shifted Ring
   Rings nest close on the LEFT, wide gap on the RIGHT.
   Outer ring has gap at ~2-3 o'clock. Teal arc outside gap. */

export function LogoIcon({ size = 40, className = '', dark = false, animate = false }) {
  const ink = dark ? '#e5e7eb' : 'var(--ink, #0f172a)';
  const accent = 'var(--accent, #0f9c93)';

  return (
    <svg
      className={`logo-icon ${animate ? 'logo-animate' : ''} ${className}`}
      viewBox="-6 -6 132 132"
      width={size}
      height={size}
      aria-hidden="true"
      fill="none"
    >
      {/* Outer ring — near-circle, open gap at 2-3 o'clock */}
      <path
        className="logo-ring logo-ring-outer"
        d="M 88 16
           C 74 6, 54 2, 38 10
           C 20 20, 8 40, 8 60
           C 8 82, 20 100, 40 108
           C 58 116, 78 112, 92 100
           C 102 92, 108 78, 110 64"
        stroke={ink} strokeWidth="3" fill="none"
        strokeLinecap="round"
      />
      {/* Middle ring — shifted hard left, close to outer on left, gap on right */}
      <path
        className="logo-ring logo-ring-mid"
        d="M 42 20
           C 26 22, 14 36, 14 54
           C 14 72, 22 86, 38 94
           C 52 100, 68 96, 78 84
           C 86 74, 88 58, 82 44
           C 76 30, 58 20, 42 20 Z"
        stroke={ink} strokeWidth="2.5" fill="none"
      />
      {/* Inner blob — shifted left, organic land contour, wider than tall */}
      <path
        className="logo-ring logo-ring-inner"
        d="M 36 44
           C 24 50, 22 62, 26 72
           C 30 80, 42 84, 56 80
           C 68 76, 74 64, 68 52
           C 62 42, 46 40, 36 44 Z"
        stroke={ink} strokeWidth="2.8" fill="none"
      />
      {/* Teal accent arc — outside outer ring, in the gap */}
      <path
        className="logo-arc"
        d="M 106 30 C 114 42, 116 56, 114 66"
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
