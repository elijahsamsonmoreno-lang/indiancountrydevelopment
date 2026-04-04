import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Sovereign Break Logo — concentric organic rings with teal accent arc.
   Option B / Shifted Ring design with:
   #1: Animated teal arc (pulse/glow on hover)
   #2: Responsive sizing across devices
   #3: Dark variant for dark backgrounds
   #4: Draw-in animation on first load */

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
      {/* Outer ring */}
      <ellipse cx="60" cy="60" rx="52" ry="50"
        className="logo-ring logo-ring-outer"
        stroke={ink} strokeWidth="3.5" fill="none" />
      {/* Middle ring — slightly offset for organic feel */}
      <ellipse cx="58" cy="61" rx="38" ry="36"
        className="logo-ring logo-ring-mid"
        stroke={ink} strokeWidth="3" fill="none" />
      {/* Inner organic shape — cloud-like / land mass */}
      <path
        d="M 42 68 C 36 56, 42 42, 56 40 C 64 38, 72 42, 76 50 C 82 58, 78 70, 68 74 C 60 78, 48 76, 42 68 Z"
        className="logo-ring logo-ring-inner"
        stroke={ink} strokeWidth="3" fill="none" />
      {/* Teal accent arc on the right side */}
      <path
        d="M 104 42 C 112 52, 112 68, 104 78"
        className="logo-arc"
        stroke={accent} strokeWidth="4.5" strokeLinecap="round" fill="none" />
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
