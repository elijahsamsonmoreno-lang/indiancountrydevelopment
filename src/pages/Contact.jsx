import { useRef, useState } from 'react';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import './Contact.css';

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'contact@indiancountrydevelopment.com';

export default function Contact() {
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  const showToast = (msg) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2000);
  };

  const copyText = (text, msg) => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(
        () => showToast(msg || 'Copied'),
        () => showToast('Unable to copy')
      );
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showToast(msg || 'Copied');
      } catch {
        showToast('Unable to copy');
      }
      document.body.removeChild(ta);
    }
  };

  return (
    <>
      <SEO
        title="Contact"
        path="/contact"
        description="Get in touch with Indian Country Development. Contact Phil Gover or Elijah Moreno for tribal consulting, strategy, operations, and data services."
        keywords="contact Indian Country Development, Phil Gover contact, tribal consulting contact, Native American consulting, hire tribal consultants, Center for Indian Country Development"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />

      <ScrollReveal>
        <section className="section contact-section" id="contact" aria-label="Contact information">
          <h1 className="sr-only">Contact Indian Country Development &mdash; Tribal Consulting by Phil Gover and Elijah Moreno</h1>
          <p className="contact-heading" aria-hidden="true">Let&rsquo;s talk.</p>
          <p className="contact-tagline">
            We keep our project load small on purpose. If you&rsquo;re navigating something real and want a team that knows Indian Country&mdash;reach out.
          </p>

          <div className="capacity-badge" aria-label="Currently accepting projects">
            <span className="capacity-dot" aria-hidden="true"></span>
            Currently accepting projects for Q3 &amp; Q4 2026
          </div>

          <div className="contact-block">
            <p className="contact-desc">
              Tell us about your team and what you&rsquo;re working on. We&rsquo;ll follow up to see if it&rsquo;s a fit.
            </p>

            <div className="contact-line">
              <span className="contact-label">Contact</span>
              Phil Gover or Elijah Moreno
            </div>

            <div className="contact-line contact-email">
              <span className="contact-label">Email</span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link">
                {CONTACT_EMAIL}
              </a>
              <button
                className="copy-email-btn"
                type="button"
                aria-label={`Copy email address ${CONTACT_EMAIL}`}
                onClick={() => copyText(CONTACT_EMAIL, 'Email address copied')}
              >
                <span className="copy-pill">Copy email</span>
              </button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <div className={`copy-toast${toast ? ' show' : ''}`} aria-live="polite" aria-atomic="true" role="status">
        {toast}
      </div>
    </>
  );
}
