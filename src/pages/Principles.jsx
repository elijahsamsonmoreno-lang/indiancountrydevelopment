import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import './Principles.css';

const principles = [
  {
    title: 'Tribal data belongs to tribal nations',
    body: 'We never publish, share, or retain data collected during engagements without explicit tribal authorization. Period.',
  },
  {
    title: 'Non-extractive by design',
    body: 'We scope engagements so tribal staff build capacity alongside us. Our goal is to make ourselves unnecessary.',
  },
  {
    title: 'Governance first',
    body: 'We design around existing tribal governance structures\u2014not around them. Council processes, community input cycles, and cultural protocols shape the work.',
  },
  {
    title: 'No fly-by consulting',
    body: 'We don\u2019t do two-day site visits and 80-page reports. We stay engaged through implementation and handoff.',
  },
  {
    title: 'Community ownership of outcomes',
    body: 'Everything we build\u2014tools, strategies, datasets\u2014is owned by the community. We don\u2019t license our work back to you.',
  },
  {
    title: 'Transparent on limitations',
    body: 'If a project isn\u2019t the right fit, we say so. We\u2019d rather refer you to the right partner than take work we can\u2019t do well.',
  },
];

export default function Principles() {
  return (
    <>
      <SEO
        title="Our Principles"
        path="/principles"
        description="Indian Country Development's principles on data sovereignty, non-extractive consulting, and community-owned outcomes. How we approach tribal consulting differently."
        keywords="tribal data sovereignty, non-extractive consulting, Indian Country Development principles, Phil Gover, Native American consulting ethics, tribal consulting values"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Our Principles', path: '/principles' },
        ]}
      />

      <main id="main">
        <ScrollReveal>
          <section className="section section--wide principles-section" aria-label="Our principles">
            <h1 className="sr-only">Our Principles &mdash; Non-Extractive Tribal Consulting Standards</h1>
            <div className="section-label section-label--sticky">
              <span className="label-text">Our Principles</span>
              <span className="label-line"></span>
            </div>

            <p className="principles-intro">
              These aren&rsquo;t marketing copy. They&rsquo;re the operating rules we hold ourselves to
              on every engagement. If a project can&rsquo;t meet these standards, we don&rsquo;t take it.
            </p>

            <div className="principles-grid">
              {principles.map((p, i) => (
                <div key={i} className="principle-card stagger-child">
                  <span className="principle-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <h2 className="principle-title">{p.title}</h2>
                  <p className="principle-body">{p.body}</p>
                </div>
              ))}
            </div>

            <div className="principles-cta">
              <p>
                Want to know more about how we work?{' '}
                <Link to="/contact">Start a conversation &rarr;</Link>
              </p>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </>
  );
}
