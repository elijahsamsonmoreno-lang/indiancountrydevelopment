import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import { LogoIcon } from '../components/Logo';
import './FeaturedWork.css';

const placeholders = [
  {
    title: 'Tribal Strategic Planning',
    category: 'Strategy & Governance',
  },
  {
    title: 'Native Enterprise Data Initiative',
    category: 'Data & Learning',
  },
  {
    title: 'Cross-Sector Coalition Building',
    category: 'Programs & Operations',
  },
];

export default function FeaturedWork() {
  return (
    <>
      <SEO
        title="Featured Work"
        path="/featured-work"
        description="Featured projects from Indian Country Development. Coming soon."
        noindex
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Featured Work', path: '/featured-work' },
        ]}
      />

      <main id="main">
        <ScrollReveal>
          <section className="section section--wide featured-section" aria-label="Featured work">
            <div className="section-label">
              <span className="label-text">Featured Work</span>
              <span className="label-line"></span>
            </div>

            <div className="featured-coming-soon">
              <div className="coming-soon-icon">
                <LogoIcon size={56} />
              </div>
              <h2 className="coming-soon-heading">Coming Soon</h2>
              <p className="coming-soon-text">
                Case studies and project highlights are on the way.
              </p>
            </div>

            <div className="featured-preview-grid">
              {placeholders.map(({ title, category }) => (
                <div key={title} className="featured-card">
                  <span className="featured-card-category">{category}</span>
                  <h3 className="featured-card-title">{title}</h3>
                  <div className="featured-card-badge">Coming Soon</div>
                </div>
              ))}
            </div>

            <div className="featured-cta">
              <p>
                Want to discuss a project?{' '}
                <Link to="/contact">Get in touch &rarr;</Link>
              </p>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </>
  );
}
