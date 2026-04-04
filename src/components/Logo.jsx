import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Sovereign Break Logo — Option B / Shifted Ring */

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
      {/* Outer ring — near-circle, gap at ~1-3 o'clock */}
      <path
        className="logo-ring logo-ring-outer"
        d="M 80 10
           C 66 4, 46 4, 32 14
           C 16 26, 6 44, 8 64
           C 10 84, 22 100, 42 108
           C 58 114, 76 112, 88 102
           C 98 94, 106 80, 108 66"
        stroke={ink} strokeWidth="3" fill="none"
        strokeLinecap="round"
      />
      {/* Middle ring — shifted left and up */}
      <path
        className="logo-ring logo-ring-mid"
        d="M 48 22
           C 30 24, 16 38, 16 56
           C 16 74, 26 90, 44 96
           C 60 100, 76 92, 84 78
           C 90 66, 88 50, 80 38
           C 72 28, 58 22, 48 22 Z"
        stroke={ink} strokeWidth="2.5" fill="none"
      />
      {/* Inner blob — shifted left/up, organic land contour */}
      <path
        className="logo-ring logo-ring-inner"
        d="M 42 42
           C 32 46, 28 56, 30 66
           C 32 76, 42 82, 54 80
           C 66 78, 74 66, 70 54
           C 66 44, 52 40, 42 42 Z"
        stroke={ink} strokeWidth="2.8" fill="none"
      />
      {/* Teal accent arc — shifted up/left, outside outer ring gap */}
      <path
        className="logo-arc"
        d="M 104 32 C 110 42, 112 54, 110 64"
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
