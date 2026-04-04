import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Sovereign Break Logo — Option B / Shifted Ring
   Outer ring: circular, gap on the RIGHT (~2-4 o'clock)
   Middle + inner: shifted LEFT, nesting close to outer on LEFT side
   Teal arc: on the RIGHT, bridging the gap in the outer ring
   All shapes mostly circular. */

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
      {/* Outer ring — circular, gap on right side */}
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
      {/* Middle ring — shifted LEFT, close to outer on left, gap on right */}
      <path
        className="logo-ring logo-ring-mid"
        d="M 44 16
           C 26 18, 12 32, 12 50
           C 12 68, 22 84, 40 92
           C 56 98, 72 92, 82 78
           C 90 66, 90 50, 82 36
           C 74 24, 58 16, 44 16 Z"
        stroke={ink} strokeWidth="2.5" fill="none"
      />
      {/* Inner blob — shifted LEFT, mostly circular */}
      <path
        className="logo-ring logo-ring-inner"
        d="M 38 38
           C 26 42, 22 54, 24 64
           C 26 76, 38 82, 52 80
           C 64 78, 72 66, 68 54
           C 64 42, 50 36, 38 38 Z"
        stroke={ink} strokeWidth="2.8" fill="none"
      />
      {/* Teal accent arc — on the RIGHT, bridging the outer ring gap */}
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
