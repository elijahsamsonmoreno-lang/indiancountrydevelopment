import { useState } from 'react';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import './WhoWeAre.css';

const team = [
  {
    id: 'phil',
    name: 'Phil Gover',
    lead: 'Has built four institutions from scratch that still operate today.',
    items: [
      'Creates organizations where none existed\u2014charter school networks, nonprofit accelerators, cross-sector initiatives.',
      'Designs systems that bridge tribal governments, federal agencies, and private partners.',
      'Turns crowded rooms into aligned, working coalitions.',
      'Moves strategy from paper to practice with operational clarity.',
    ],
    tribal: 'Northern and Southern Paiute, Pawnee, and Comanche Nations.',
    edu: 'MBA, Darden School of Business \u00B7 BA, University of Virginia',
    email: 'phil@indiancountrydevelopment.com',
  },
  {
    id: 'elijah',
    name: 'Elijah Moreno',
    lead: 'Built the first comprehensive federal dataset on Native enterprise\u2014cited by federal agencies nationwide.',
    items: [
      'Creates analytical tools and platforms that didn\u2019t exist\u2014including data dashboards and applications for tribal communities.',
      'Built the first comprehensive federal dataset on Native enterprise and economic impact.',
      'Turns incomplete data into rigorous evidence that moves policy and investment.',
      'Makes the quantitative case for what Indian Country already knows.',
    ],
    tribal: 'Coastal Band of the Chumash Nation.',
    edu: 'PhD Candidate, Cornell University \u00B7 BA, Dartmouth College',
    email: 'elijah@indiancountrydevelopment.com',
  },
];

export default function WhoWeAre() {
  const [activeTab, setActiveTab] = useState('phil');

  const handleKeyDown = (e, index) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      const dir = e.key === 'ArrowRight' ? 1 : -1;
      const nextIndex = (index + dir + team.length) % team.length;
      setActiveTab(team[nextIndex].id);
    }
  };

  return (
    <>
      <SEO
        title="Who We Are"
        path="/who-we-are"
        description="Meet Phil Gover and Elijah Moreno, the team behind Indian Country Development. Decades of combined experience in tribal governance, economic development, and community-centered strategy."
        keywords="Phil Gover tribal consultant, Elijah Moreno, Indian Country Development team, Native American consulting experts, tribal governance consultants, Center for Indian Country Development"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Who We Are', path: '/who-we-are' },
        ]}
      />

      <main id="main">
        <ScrollReveal>
          <section className="section section--wide about-section" id="about" aria-label="About the team">
            <div className="section-label section-label--sticky">
              <span className="label-text">Who We Are</span>
              <span className="label-line"></span>
            </div>

            <div className="about-block">
              <p className="about-intro">
                We&rsquo;ve spent years working across Indian Country&mdash;on reservations, in community hubs, with tribal enterprises, Native nonprofits, urban Indian organizations, and state partners. We&rsquo;ve run interviews, evaluations, and focus groups; led statewide studies and economic analyses; and sat in the rooms where partnerships were formed or broke down. That work taught us what tribal governments are asked to carry, where systems are strong, where gaps recur, and what actually helps people succeed for more than one funding cycle.
              </p>

              <div className="about-tabs" role="tablist" aria-label="Team members">
                {team.map((member, i) => (
                  <button
                    key={member.id}
                    className={`about-tab${activeTab === member.id ? ' active' : ''}`}
                    role="tab"
                    aria-selected={activeTab === member.id}
                    aria-controls={`panel-${member.id}`}
                    id={`tab-${member.id}`}
                    tabIndex={activeTab === member.id ? 0 : -1}
                    onClick={() => setActiveTab(member.id)}
                    onKeyDown={(e) => handleKeyDown(e, i)}
                  >
                    {member.name}
                  </button>
                ))}
              </div>

              <div className="about-panels">
                {team.map((member) => (
                  <div
                    key={member.id}
                    className={`about-panel${activeTab === member.id ? ' active' : ''}`}
                    id={`panel-${member.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${member.id}`}
                    hidden={activeTab !== member.id}
                  >
                    {/* #21: Photo placeholder */}
                    <div className="member-photo-placeholder" aria-hidden="true">
                      <span className="photo-initials">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <p className="panel-lead">{member.lead}</p>
                    <ul className="panel-list">
                      {member.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                    <p className="panel-tribal">
                      <strong>Tribal Affiliation:</strong> {member.tribal}
                    </p>
                    <p className="panel-edu">
                      <strong>Education:</strong> {member.edu}
                    </p>
                    <p className="panel-email">
                      <a href={`mailto:${member.email}`}>{member.email}</a>
                    </p>
                  </div>
                ))}
              </div>

              <div className="combined-strength">
                <h3 className="combined-label">Together</h3>
                <p className="combined-text">
                  Together, we take that perspective and build things that work in real life: institutions that outlast leadership turnover, tools and datasets that remove guesswork, strategies that come off the page, and partnerships that sustain momentum. Our best work starts at zero and ends at operational&mdash;building evidence, alignment, and capacity so tribal nations and Native-serving institutions can run programs, systems, and enterprises without relying on us.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* #39: Partner ecosystem visualization */}
        <ScrollReveal>
          <section className="section section--wide ecosystem-section" aria-label="How we connect partners">
            <div className="section-label">
              <span className="label-text">Where ICD Sits</span>
              <span className="label-line"></span>
            </div>

            <div className="ecosystem-viz">
              <svg viewBox="0 0 600 320" className="ecosystem-svg" aria-hidden="true" fill="none">
                {/* Connection lines */}
                <line x1="300" y1="100" x2="120" y2="240" stroke="var(--accent-soft)" strokeWidth="2" strokeDasharray="6 4" />
                <line x1="300" y1="100" x2="300" y2="260" stroke="var(--accent-soft)" strokeWidth="2" strokeDasharray="6 4" />
                <line x1="300" y1="100" x2="480" y2="240" stroke="var(--accent-soft)" strokeWidth="2" strokeDasharray="6 4" />

                {/* ICD - center top */}
                <circle cx="300" cy="80" r="42" fill="var(--accent)" opacity="0.12" />
                <circle cx="300" cy="80" r="30" fill="var(--accent)" opacity="0.08" />
                <text x="300" y="78" textAnchor="middle" fontSize="11" fontWeight="800" fill="var(--accent)">ICD</text>
                <text x="300" y="92" textAnchor="middle" fontSize="7" fontWeight="600" fill="var(--ink-soft)">Bridge &amp; Builder</text>

                {/* Tribal Governments - bottom left */}
                <rect x="55" y="220" width="130" height="50" rx="10" fill="var(--accent-soft-light)" stroke="var(--accent)" strokeWidth="1.5" />
                <text x="120" y="244" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--ink)">Tribal Governments</text>
                <text x="120" y="258" textAnchor="middle" fontSize="7" fill="var(--ink-muted)">&amp; Native Orgs</text>

                {/* Federal/State - bottom center */}
                <rect x="235" y="240" width="130" height="50" rx="10" fill="rgba(76,29,149,0.06)" stroke="var(--cta-purple)" strokeWidth="1.5" opacity="0.7" />
                <text x="300" y="264" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--ink)">Federal &amp; State</text>
                <text x="300" y="278" textAnchor="middle" fontSize="7" fill="var(--ink-muted)">Agencies</text>

                {/* External Partners - bottom right */}
                <rect x="415" y="220" width="130" height="50" rx="10" fill="var(--accent-soft-light)" stroke="var(--line)" strokeWidth="1.5" />
                <text x="480" y="244" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--ink)">External Partners</text>
                <text x="480" y="258" textAnchor="middle" fontSize="7" fill="var(--ink-muted)">Foundations &amp; Universities</text>
              </svg>
              <p className="ecosystem-caption">
                We sit between the communities we serve and the systems they navigate&mdash;translating, aligning, and building so partnerships actually work.
              </p>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </>
  );
}
