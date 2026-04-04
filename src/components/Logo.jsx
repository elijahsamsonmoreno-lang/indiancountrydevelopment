import { Link } from 'react-router-dom';

/* Sovereign Break Logo — concentric organic rings with teal accent arc.
   Matches the "Option B / Shifted Ring" reference design. */

export function LogoIcon({ size = 40, className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      width={size}
      height={size}
      aria-hidden="true"
      fill="none"
    >
      {/* Outer ring */}
      <ellipse cx="60" cy="60" rx="52" ry="50"
        stroke="var(--ink, #0f172a)" strokeWidth="3.5" fill="none" />
      {/* Middle ring — slightly offset for organic feel */}
      <ellipse cx="58" cy="61" rx="38" ry="36"
        stroke="var(--ink, #0f172a)" strokeWidth="3" fill="none" />
      {/* Inner organic shape — cloud-like / land mass */}
      <path
        d="M 42 68 C 36 56, 42 42, 56 40 C 64 38, 72 42, 76 50 C 82 58, 78 70, 68 74 C 60 78, 48 76, 42 68 Z"
        stroke="var(--ink, #0f172a)" strokeWidth="3" fill="none" />
      {/* Teal accent arc on the right side */}
      <path
        d="M 104 42 C 112 52, 112 68, 104 78"
        stroke="var(--accent, #0f9c93)" strokeWidth="4.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function LogoFull({ className = '' }) {
  return (
    <Link to="/" className={`icd-logo ${className}`} aria-label="Indian Country Development home">
      <LogoIcon size={38} />
      <span className="icd-logo-text">
        Indian Country Development<span className="icd-logo-tm">&trade;</span>
      </span>
    </Link>
  );
}

export function LogoCompact({ className = '' }) {
  return (
    <Link to="/" className={`icd-logo ${className}`} aria-label="Indian Country Development home">
      <LogoIcon size={34} />
      <span className="icd-logo-text">
        ICD<span className="icd-logo-tm">&trade;</span>
      </span>
    </Link>
  );
}
