import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
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

export default function Home() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef(null);
  const termRef = useRef(null);

  const rotate = useCallback(() => {
    setFading(true);
    setTimeout(() => {
      setIdx((prev) => (prev + 1) % terms.length);
      setFading(false);
    }, 260);
  }, []);

  const startRotation = useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(rotate, 3200);
  }, [rotate]);

  const stopRotation = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    startRotation();
    return stopRotation;
  }, [startRotation, stopRotation]);

  return (
    <>
      <SEO
        path="/"
        description="Indian Country Development is a Native-led consulting firm for tribal governments and their partners. Strategy, operations, and data by Phil Gover and Elijah Moreno."
        keywords="Phil Gover, Center for Indian Country Development, Indian Country Development, tribal consulting, Native American consulting, tribal economic development, Indian Country, tribal government consulting"
      />

      <main role="main">
        <section className="hero">
          <div className="hero-inner">
            <h1 className="sr-only">Indian Country Development - Native-Led Tribal Consulting</h1>
            <p className="hero-text">
              A Native-led consulting firm for{' '}
              <span className="hero-term">
                <span
                  ref={termRef}
                  className={`hero-term-inner ${fading ? 'fade-out' : 'fade-in'}`}
                  onMouseEnter={stopRotation}
                  onMouseLeave={startRotation}
                  onFocus={stopRotation}
                  onBlur={startRotation}
                  tabIndex={0}
                >
                  {terms[idx]}
                </span>
              </span>{' '}
              and the partners working alongside them&mdash;
              <Link to="/what-we-do">strategy, operations, and data</Link> for{' '}
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
      </main>
    </>
  );
}
