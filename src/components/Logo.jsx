import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Sovereign Break Logo — Shifted Ring / Topographic Contour
   Three organic asymmetrical rings with upper-right bulge.
   Teal accent segment outside the outer ring gap on the right.
   NOT concentric circles. NOT geometric. Contour-map feeling. */

export function LogoIcon({ size = 40, className = '', dark = false, animate = false }) {
  const ink = dark ? '#e5e7eb' : '#2F3440';
  const accent = '#49BDB1';

  return (
    <svg
      className={`logo-icon ${animate ? 'logo-animate' : ''} ${className}`}
      viewBox="0 0 200 200"
      width={size}
      height={size}
      aria-hidden="true"
      fill="none"
    >
      {/* Outer ring — organic, bulges upper-right, open gap on right ~2-4 o'clock */}
      <path
        className="logo-ring logo-ring-outer"
        d="M 152 52
           C 138 28, 112 12, 86 14
           C 58 16, 34 32, 22 56
           C 10 80, 12 110, 28 134
           C 44 158, 72 168, 100 166
           C 128 164, 150 150, 162 128
           C 170 114, 174 96, 170 80"
        stroke={ink} strokeWidth="5.5" fill="none"
        strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Middle ring — echoes upper-right distortion, continuous, shifted slightly */}
      <path
        className="logo-ring logo-ring-mid"
        d="M 132 52
           C 120 34, 100 26, 78 28
           C 54 30, 36 46, 30 68
           C 24 90, 28 114, 44 132
           C 60 150, 84 154, 106 148
           C 126 142, 142 126, 148 106
           C 154 86, 148 64, 132 52 Z"
        stroke={ink} strokeWidth="5" fill="none"
        strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Inner ring — bean-like, irregular, not centered, shifted left-of-center */}
      <path
        className="logo-ring logo-ring-inner"
        d="M 92 66
           C 72 62, 54 72, 50 90
           C 46 108, 54 126, 74 132
           C 90 136, 110 128, 118 112
           C 126 96, 120 76, 104 68
           C 100 66, 96 66, 92 66 Z"
        stroke={ink} strokeWidth="5.5" fill="none"
        strokeLinecap="round" strokeLinejoin="round"
      />
      {/* Teal accent segment — right side, outside/aligned to outer ring gap */}
      <path
        className="logo-arc"
        d="M 168 56 C 180 72, 182 94, 176 112"
        stroke={accent} strokeWidth="7" strokeLinecap="round" fill="none"
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
        Indian Country Development
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
        Indian Country Development
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
