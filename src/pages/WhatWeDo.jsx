import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import './WhatWeDo.css';

const services = [
  {
    id: 'strategy',
    title: 'Strategy & Governance',
    body: 'The kind of planning that survives council turnover and actually respects how tribal governance works. Too many strategies die in drawers. Ours get used.',
  },
  {
    id: 'operations',
    title: 'Programs & Operations',
    body: "Untangling the messy stuff\u2014overlapping roles, unclear handoffs, initiatives that stalled. We build structures your team can actually run without us.",
  },
  {
    id: 'data',
    title: 'Data & Learning',
    body: "Making information useful\u2014not just collected. Summaries leadership will read, tools staff will use, and no dashboards no one opens.",
  },
];

export default function WhatWeDo() {
  const [openId, setOpenId] = useState('strategy');

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
      />

      <main id="main" style={{ paddingTop: '4.9rem' }}>
        <ScrollReveal>
          <section className="section section--wide" id="services">
            <div className="section-label">
              <span className="label-text">What We Do</span>
            </div>

            <div className="services-list" aria-label="Service areas">
              {services.map(({ id, title, body }) => {
                const isOpen = openId === id;
                return (
                  <div key={id} className={`service-item${isOpen ? ' open' : ''}`}>
                    <div className="service-card">
                      <div
                        className="service-header"
                        role="button"
                        tabIndex={0}
                        aria-expanded={isOpen}
                        aria-controls={`body-${id}`}
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
                      <div className="service-body" id={`body-${id}`}>
                        <p>{body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="services-note">
              <p>
                Not seeing what you need? We've built plenty that didn't exist before.{' '}
                <Link to="/contact">Tell us what you're facing &rarr;</Link>
              </p>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </>
  );
}
