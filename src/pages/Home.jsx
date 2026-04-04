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

/* #8: differentiators */
const differentiators = [
  { headline: 'We\u2019ve never used a template', body: 'Every engagement is designed from scratch around your governance, your team, and your timeline.' },
  { headline: 'Our work outlasts us', body: 'We build systems your staff can run without us. If you still need us a year later, we failed.' },
  { headline: 'We say no more than yes', body: 'We take 4\u20136 projects a year. If we take yours, you get our full attention.' },
];

export default function Home() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef(null);

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
        <section className="hero" aria-label="Introduction">
          <div className="hero-inner">
            <h1 className="sr-only">Indian Country Development - Native-Led Tribal Consulting</h1>
            {/* #7: Bolder hero tagline */}
            <p className="hero-text">
              We don&rsquo;t parachute in with playbooks.{' '}
              We build what doesn&rsquo;t exist yet&mdash;for{' '}
              <span className="hero-term">
                <span
                  className={`hero-term-inner ${fading ? 'fade-out' : 'fade-in'}`}
                  onMouseEnter={stopRotation}
                  onMouseLeave={startRotation}
                  onFocus={stopRotation}
                  onBlur={startRotation}
                  tabIndex={0}
                  role="status"
                  aria-live="polite"
                >
                  {terms[idx]}
                </span>
              </span>{' '}
              and the partners working alongside them.
            </p>
            <p className="hero-sub">
              <Link to="/what-we-do">Strategy, operations, and data</Link> for{' '}
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

        {/* #8: How We're Different section */}
        <ScrollReveal>
          <section className="section section--wide differentiators-section" aria-label="How we are different">
            <div className="section-label section-label--sticky">
              <span className="label-text">How We&rsquo;re Different</span>
              <span className="label-line"></span>
            </div>

            <div className="diff-grid">
              {differentiators.map((d, i) => (
                <div key={i} className="diff-card stagger-child card-hover">
                  <h3 className="diff-headline">{d.headline}</h3>
                  <p className="diff-body">{d.body}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* #33: What We Won't Do */}
        <ScrollReveal>
          <section className="section section--wide section--solid-bg wont-do-section" aria-label="What we will not do">
            <div className="section-label">
              <span className="label-text">What We Won&rsquo;t Do</span>
              <span className="label-line"></span>
            </div>

            <div className="wont-do-grid">
              {[
                'We don\u2019t do one-week flybys.',
                'We don\u2019t write reports no one reads.',
                'We don\u2019t bid on work we can\u2019t staff.',
                'We don\u2019t treat tribal consultation as a checkbox.',
                'We don\u2019t take projects where we\u2019d learn on your dime.',
              ].map((item, i) => (
                <div key={i} className="wont-do-item stagger-child">
                  <span className="wont-do-x" aria-hidden="true">&times;</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>
      </main>
    </>
  );
}
