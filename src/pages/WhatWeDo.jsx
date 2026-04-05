import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import './WhatWeDo.css';

const services = [
  {
    id: 'strategy',
    title: 'Strategy & Governance',
    body: "We\u2019ve watched six-figure plans collect dust. Ours don\u2019t. We build the kind of strategy that survives council turnover and respects how tribal governance actually works\u2014because we\u2019ve been in those rooms.",
  },
  {
    id: 'operations',
    title: 'Programs & Operations',
    body: "Untangling the messy stuff\u2014overlapping roles, unclear handoffs, initiatives that stalled. We build structures your team can actually run without us. When we leave, the system stays.",
  },
  {
    id: 'data',
    title: 'Data & Learning',
    body: "Making information useful\u2014not just collected. Summaries leadership will read, tools staff will use, and zero dashboards no one opens. Evidence that moves decisions, not just fills binders.",
  },
];

export default function WhatWeDo() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <SEO
        title="What We Do"
        path="/what-we-do"
        description="Indian Country Development provides strategy & governance, programs & operations, and data & learning services for tribal governments and Native organizations. Phil Gover and Elijah Moreno lead our tribal consulting practice."
        keywords="tribal consulting services, Indian Country Development, strategy governance tribal, tribal operations consulting, Native American data services, Phil Gover consulting"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'What We Do', path: '/what-we-do' },
        ]}
      />

      <main id="main" className="page-main">
        <ScrollReveal>
          <section className="section section--wide" id="services" aria-label="Our services">
            <div className="section-label section-label--sticky">
              <span className="label-text">What We Do</span>
              <span className="label-line"></span>
            </div>

            <div className="services-list" role="group" aria-label="Service areas">
              {services.map(({ id, title, body }) => {
                const isOpen = openId === id;
                return (
                  <div key={id} className={`service-item stagger-child${isOpen ? ' open' : ''}`}>
                    <div className="service-card">
                      <div
                        className="service-header"
                        role="button"
                        tabIndex={0}
                        aria-expanded={isOpen}
                        aria-controls={`body-${id}`}
                        aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${title}`}
                        onClick={() => toggle(id)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            toggle(id);
                          }
                        }}
                      >
                        <h3 className="service-title">{title}</h3>
                        <span className="service-toggle" aria-hidden="true">+</span>
                      </div>
                      <div className="service-body" id={`body-${id}`} role="region">
                        <p>{body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="services-note">
              <p>
                Not seeing what you need? We&rsquo;ve built plenty that didn&rsquo;t exist before.{' '}
                <Link to="/contact">Tell us what you&rsquo;re facing &rarr;</Link>
              </p>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </>
  );
}
