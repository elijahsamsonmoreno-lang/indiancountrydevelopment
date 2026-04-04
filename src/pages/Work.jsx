import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import './Work.css';

const audiences = [
  {
    id: 'tribal',
    tab: 'Tribal & Native-Led',
    lead: "For teams navigating something hard\u2014a stuck initiative, a leadership transition, a project that's bigger than current capacity.",
    items: [
      'We co-design around your governance, not against it.',
      'We structure information without sidelining local decision-makers.',
      'We stay in the background so your staff can focus on relationships.',
    ],
  },
  {
    id: 'external',
    tab: 'External Partners',
    lead: "For partners who know working with tribes isn't a box to check\u2014and want to get it right.",
    items: [
      'We clarify how tribal governance and consultation actually work for your project.',
      "We align timelines and scopes so the work isn't extractive or symbolic.",
      'We translate between organizational, legal, and community language.',
    ],
  },
];

export default function Work() {
  const [activeTab, setActiveTab] = useState('tribal');

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      const nextIndex = (index + dir + audiences.length) % audiences.length;
      setActiveTab(audiences[nextIndex].id);
    }
  };

  return (
    <>
      <SEO
        title="Who We Work With"
        path="/who-we-work-with"
        description="Indian Country Development works with tribal governments, Native-led organizations, and external partners like foundations, state agencies, and universities committed to non-extractive collaboration."
        keywords="tribal government consulting, Native American consulting partners, Indian Country Development clients, tribal consulting services, Phil Gover, Center for Indian Country Development"
      />

      <main id="main">
        <ScrollReveal>
          <section className="section section--wide work-section" id="audience">
            <div className="section-label">
              <span className="label-text">Who We Work With</span>
            </div>

            <div className="audience-block">
              <div className="audience-tabs" role="tablist" aria-label="Who we work with">
                {audiences.map((aud, i) => (
                  <button
                    key={aud.id}
                    className={`aud-tab${activeTab === aud.id ? ' active' : ''}`}
                    role="tab"
                    aria-selected={activeTab === aud.id}
                    aria-controls={`panel-${aud.id}`}
                    id={`tab-${aud.id}`}
                    tabIndex={activeTab === aud.id ? 0 : -1}
                    onClick={() => setActiveTab(aud.id)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                  >
                    {aud.tab}
                  </button>
                ))}
              </div>

              <div className="audience-panels">
                {audiences.map((aud) => (
                  <div
                    key={aud.id}
                    className={`aud-panel${activeTab === aud.id ? ' active' : ''}`}
                    id={`panel-${aud.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${aud.id}`}
                    hidden={activeTab !== aud.id}
                  >
                    <p className="panel-lead">{aud.lead}</p>
                    <ul className="panel-list">
                      {aud.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="audience-cta">
                Ready to explore a project together?{' '}
                <Link to="/contact">Get in touch.</Link>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </>
  );
}
