import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import { LogoIcon } from '../components/Logo';
import './FeaturedWork.css';

/* #38: Case study template structure — ready for real projects */
const placeholders = [
  {
    slug: 'tribal-strategic-planning',
    title: 'Tribal Strategic Planning',
    category: 'Strategy & Governance',
    situation: 'Multi-year strategic plan had stalled after leadership transition.',
    result: 'New framework survived two subsequent council turnovers.',
  },
  {
    slug: 'native-enterprise-data',
    title: 'Native Enterprise Data Initiative',
    category: 'Data & Learning',
    situation: 'No federal dataset existed on Native enterprise economic impact.',
    result: 'First comprehensive dataset now cited by federal agencies.',
  },
  {
    slug: 'cross-sector-coalition',
    title: 'Cross-Sector Coalition Building',
    category: 'Programs & Operations',
    situation: 'Fourteen organizations with conflicting timelines and no shared language.',
    result: 'Aligned coalition with operational MOU and shared metrics.',
  },
];

/* #34: Project timeline phases */
const phases = [
  { label: 'Discovery', desc: 'Listen, map stakeholders, understand governance context' },
  { label: 'Design', desc: 'Co-create strategy with tribal leadership and staff' },
  { label: 'Build', desc: 'Develop tools, systems, and structures' },
  { label: 'Handoff', desc: 'Transfer ownership, train staff, step back' },
];

export default function FeaturedWork() {
  return (
    <>
      <SEO
        title="Featured Work"
        path="/featured-work"
        description="Featured projects and case studies from Indian Country Development. Examples of our tribal consulting, strategy, and data work across Indian Country."
        keywords="Indian Country Development projects, tribal consulting case studies, Phil Gover work, Native American consulting projects, Center for Indian Country Development"
        noindex
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Featured Work', path: '/featured-work' },
        ]}
      />

      <main id="main">
        <ScrollReveal>
          <section className="section section--wide featured-section" aria-label="Featured work">
            <div className="section-label section-label--sticky">
              <span className="label-text">Featured Work</span>
              <span className="label-line"></span>
            </div>

            <div className="featured-coming-soon">
              <div className="coming-soon-icon">
                <LogoIcon size={64} />
              </div>
              <h2 className="coming-soon-heading">Coming Soon</h2>
              <p className="coming-soon-text">
                We&rsquo;re preparing case studies and project highlights that show how we work&mdash;from
                initial strategy through operational handoff. Check back soon.
              </p>
            </div>

            {/* #34: Project timeline */}
            <div className="project-timeline" aria-label="Our project process">
              <h3 className="timeline-heading">How a project moves</h3>
              <div className="timeline-track">
                {phases.map((phase, i) => (
                  <div key={i} className="timeline-phase stagger-child">
                    <div className="timeline-dot" aria-hidden="true">
                      <span className="timeline-num">{i + 1}</span>
                    </div>
                    {i < phases.length - 1 && <div className="timeline-connector" aria-hidden="true" />}
                    <h4 className="timeline-label">{phase.label}</h4>
                    <p className="timeline-desc">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* #22: gradient mesh cards + #38: case study template */}
            <div className="featured-preview-grid">
              {placeholders.map(({ slug, title, category, situation, result }) => (
                <div key={slug} className="featured-card card-hover" id={`case-${slug}`}>
                  <span className="featured-card-category">{category}</span>
                  <h3 className="featured-card-title">{title}</h3>
                  <div className="case-study-preview">
                    <p className="case-before"><strong>Situation:</strong> {situation}</p>
                    <p className="case-after"><strong>Result:</strong> {result}</p>
                  </div>
                  <div className="featured-card-badge">Coming Soon</div>
                </div>
              ))}
            </div>

            <div className="featured-cta">
              <p>
                Want to discuss a potential project?{' '}
                <Link to="/contact">Get in touch &rarr;</Link>
              </p>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </>
  );
}
