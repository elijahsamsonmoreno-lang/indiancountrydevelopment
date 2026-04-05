import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import './Home.css';

const terms = [
  'tribal governments',
  'Native Hawaiian Organizations',
  'Alaska Native Corporations',
  'Tribal Colleges and Universities',
  'Native-led organizations',
  'state-recognized tribes',
  'Alaska Native communities',
  'tribal enterprises',
  'Urban Indian communities',
];

const ROTATION_INTERVAL = 3200;
const FADE_DURATION = 260;

export default function Home() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [openPanel, setOpenPanel] = useState(null);
  const intervalRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const tick = () => {
      if (pausedRef.current) return;
      setFading(true);
      setTimeout(() => {
        setIdx((prev) => (prev + 1) % terms.length);
        setFading(false);
      }, FADE_DURATION);
    };

    intervalRef.current = setInterval(tick, ROTATION_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, []);

  const pauseRotation = useCallback(() => { pausedRef.current = true; }, []);
  const resumeRotation = useCallback(() => { pausedRef.current = false; }, []);

  const togglePanel = useCallback((panel) => {
    setOpenPanel((prev) => prev === panel ? null : panel);
  }, []);

  return (
    <>
      <SEO
        path="/"
        description="Indian Country Development is a Native American owned consulting firm for tribal governments and their partners. Strategy, operations, and data by Phil Gover and Elijah Moreno."
        keywords="Phil Gover, Center for Indian Country Development, Indian Country Development, tribal consulting, Native American consulting, tribal economic development, Indian Country, tribal government consulting"
      />

      <main role="main">
        <section className="hero" aria-label="Introduction">
          <div className="hero-inner">
            <h1 className="sr-only">Indian Country Development - Native American Owned Tribal Consulting</h1>
            <p className="hero-text">
              A Native American owned consulting firm for{' '}
              <span className="hero-term">
                <span
                  className={`hero-term-inner ${fading ? 'fade-out' : 'fade-in'}`}
                  onMouseEnter={pauseRotation}
                  onMouseLeave={resumeRotation}
                  onFocus={pauseRotation}
                  onBlur={resumeRotation}
                  tabIndex={0}
                  role="status"
                  aria-live="polite"
                >
                  {terms[idx]}
                </span>
              </span>{' '}
              and the partners working alongside them&mdash;
              <Link to="/featured-work">strategy, operations, and data</Link> for{' '}
              <strong className="hero-highlight">Indian Country development.</strong>
            </p>
          </div>
        </section>

        <div className="bottom-cta-wrap">
          <p className="bottom-cta">
            <Link to="/contact">
              <span className="bottom-cta-label">Start a conversation</span>
            </Link>
          </p>
        </div>

        <ScrollReveal>
          <section className="section section--wide how-we-work-section" aria-label="How we work">
            <div className="section-label">
              <span className="label-text">How We Work</span>
              <span className="label-line"></span>
            </div>

            <h2 className="sr-only">How We Work</h2>
            <div className="how-grid">
              <div
                className={`how-panel how-do${openPanel === 'do' ? ' open' : ''}`}
                role="button"
                tabIndex={0}
                aria-expanded={openPanel === 'do'}
                onClick={() => togglePanel('do')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); togglePanel('do'); } }}
              >
                <div className="how-header">
                  <h3 className="how-heading">What we do</h3>
                  <span className="how-toggle" aria-hidden="true">{openPanel === 'do' ? '\u2212' : '+'}</span>
                </div>
                <div className="how-body">
                  <ul className="how-list">
                    <li>Design every engagement from scratch around your governance, team, and timeline.</li>
                    <li>Build systems your staff can run without us.</li>
                    <li>Take 4&ndash;6 projects a year so each one gets our full attention.</li>
                  </ul>
                </div>
              </div>

              <div
                className={`how-panel how-dont${openPanel === 'dont' ? ' open' : ''}`}
                role="button"
                tabIndex={0}
                aria-expanded={openPanel === 'dont'}
                onClick={() => togglePanel('dont')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); togglePanel('dont'); } }}
              >
                <div className="how-header">
                  <h3 className="how-heading">What we don&rsquo;t</h3>
                  <span className="how-toggle" aria-hidden="true">{openPanel === 'dont' ? '\u2212' : '+'}</span>
                </div>
                <div className="how-body">
                  <ul className="how-list how-list--no">
                    <li>One-week flybys.</li>
                    <li>Reports no one reads.</li>
                    <li>Bid on work we can&rsquo;t staff.</li>
                    <li>Treat tribal consultation as a checkbox.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </>
  );
}
