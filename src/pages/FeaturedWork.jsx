import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import { LogoIcon } from '../components/Logo';
import './FeaturedWork.css';

export default function FeaturedWork() {
  return (
    <>
      <SEO
        title="Featured Work"
        path="/featured-work"
        description="Featured projects from Indian Country Development. Coming soon."
        noindex
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
              <p className="coming-soon-cta">
                <Link to="/contact">Get in touch</Link> to discuss a project.
              </p>
            </div>
          </section>
        </ScrollReveal>
      </main>
    </>
  );
}
