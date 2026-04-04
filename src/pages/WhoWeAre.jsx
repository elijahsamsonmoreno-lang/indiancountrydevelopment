import { useState } from 'react';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import './WhoWeAre.css';

const team = [
  {
    id: 'phil',
    name: 'Phil Gover',
    lead: 'Has built institutions from scratch that still operate today.',
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
        description="Meet Phil Gover and Elijah Moreno, the team behind Indian Country Development."
        keywords="Phil Gover tribal consultant, Elijah Moreno, Indian Country Development team, Native American consulting experts, tribal governance consultants, Center for Indian Country Development"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Who We Are', path: '/who-we-are' },
        ]}
      />

      <main id="main">
        <ScrollReveal>
          <section className="section section--wide about-section" id="about" aria-label="About the team">
            <div className="section-label">
              <span className="label-text">Who We Are</span>
              <span className="label-line"></span>
            </div>

            <div className="about-block">
              <p className="about-intro">
                We&rsquo;ve worked across Indian Country for years&mdash;on reservations, in tribal enterprises, with Native nonprofits, federal agencies, and state partners. That experience taught us where systems work, where gaps keep showing up, and what actually lasts beyond a single funding cycle.
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
                  We build things that work in real life: institutions that outlast leadership turnover, tools that remove guesswork, and strategies that come off the page. Our best work starts at zero and ends at operational.
                </p>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </>
  );
}
