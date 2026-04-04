import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Sovereign Break Logo — Option B / Shifted Ring
   Outer ring: near-circle with gap at ~2 o'clock
   Middle ring: offset circle shifted left/down
   Inner shape: smooth organic blob (land contour)
   Teal arc: short, outside the outer ring gap */

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
      {/* Outer ring — near-circle arc, gap from ~1:30 to ~3:30 o'clock */}
      <path
        className="logo-ring logo-ring-outer"
        d="M 84 10
           C 70 4, 50 4, 36 12
           C 20 22, 8 40, 8 60
           C 8 80, 18 96, 36 106
           C 50 114, 68 114, 82 106
           C 94 98, 104 86, 108 72"
        stroke={ink} strokeWidth="3" fill="none"
        strokeLinecap="round"
      />
      {/* Middle ring — near-circle, shifted left and down */}
      <path
        className="logo-ring logo-ring-mid"
        d="M 54 24
           C 36 24, 20 36, 18 54
           C 16 72, 24 88, 42 96
           C 56 102, 74 96, 84 82
           C 92 70, 92 54, 84 40
           C 78 30, 66 24, 54 24 Z"
        stroke={ink} strokeWidth="2.5" fill="none"
      />
      {/* Inner blob — smooth organic land contour */}
      <path
        className="logo-ring logo-ring-inner"
        d="M 48 46
           C 38 48, 32 56, 34 66
           C 36 76, 46 82, 58 80
           C 68 78, 76 68, 74 56
           C 72 46, 60 42, 48 46 Z"
        stroke={ink} strokeWidth="2.8" fill="none"
      />
      {/* Teal accent arc — outside the outer ring, in the gap */}
      <path
        className="logo-arc"
        d="M 110 42 C 116 52, 118 64, 114 76"
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
