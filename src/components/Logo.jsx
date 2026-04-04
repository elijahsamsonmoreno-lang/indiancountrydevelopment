import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Sovereign Break Logo — Option B / Shifted Ring
   All rings are mostly circular. Middle + inner shifted RIGHT.
   Rings nest close on the RIGHT side near the gap.
   Teal arc closes/bridges the gap in the outer ring. */

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
      {/* Outer ring — mostly circular, gap at ~2-4 o'clock on right */}
      <path
        className="logo-ring logo-ring-outer"
        d="M 100 30
           C 90 14, 72 4, 54 4
           C 28 4, 6 26, 6 54
           C 6 82, 28 104, 54 104
           C 72 104, 88 94, 98 80"
        stroke={ink} strokeWidth="3" fill="none"
        strokeLinecap="round"
      />
      {/* Middle ring — circular, shifted RIGHT so it nests close to outer on right */}
      <path
        className="logo-ring logo-ring-mid"
        d="M 66 18
           C 48 14, 28 22, 20 40
           C 12 56, 16 76, 32 88
           C 46 98, 66 98, 80 86
           C 92 74, 96 56, 88 40
           C 82 26, 74 20, 66 18 Z"
        stroke={ink} strokeWidth="2.5" fill="none"
      />
      {/* Inner blob — shifted right, organic but mostly round */}
      <path
        className="logo-ring logo-ring-inner"
        d="M 58 38
           C 44 38, 34 48, 34 60
           C 34 72, 44 80, 58 80
           C 70 80, 80 72, 80 60
           C 80 48, 72 38, 58 38 Z"
        stroke={ink} strokeWidth="2.8" fill="none"
      />
      {/* Teal accent arc — bridges/closes the gap in outer ring */}
      <path
        className="logo-arc"
        d="M 99 34 C 106 46, 106 62, 100 76"
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
