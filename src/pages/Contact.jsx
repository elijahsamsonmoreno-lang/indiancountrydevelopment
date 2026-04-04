import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';
import './Contact.css';

const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'contact@indiancountrydevelopment.com';

const templates = {
  tribal: {
    title: 'Tribal government / enterprise',
    desc: 'For councils, departments, or enterprises looking at strategy, operations, or data work.',
    body: `Subject: Potential project support for our tribal government

Dear Phil and Elijah,

I'm reaching out from [Tribal Nation / department / enterprise name]. We are currently working on [brief description of the initiative or challenge] and are looking for support with [strategy / operations / data & evaluation].

We'd be interested in a short conversation to see whether Indian Country Development might be a good fit for this work and what a scoped engagement might look like, including rough timelines and budget.

A few quick details:
\u2022 Team / department: [brief description]
\u2022 Key decision-makers: [e.g., council, board, CEO, etc.]
\u2022 Desired timeline: [e.g., hoping to decide by X date]
\u2022 Any constraints you should know about: [optional]

Thank you for considering this. We appreciate your work in Indian Country and look forward to connecting.

Best,
[Name]
[Title]
[Tribal Nation / enterprise]`,
  },
  nativeOrg: {
    title: 'Native-led organization / TCU / urban Indian',
    desc: 'For Native-led nonprofits, tribal colleges, or urban Indian organizations.',
    body: `Subject: Exploring support for our Native-led organization

Dear Phil and Elijah,

I'm reaching out from [organization name], a [brief description: Native-led nonprofit / tribal college / urban Indian organization] serving [community / region].

We're navigating [brief description of challenge or opportunity] and are interested in support with [strategy / program design / evaluation / data & learning]. We want to make sure any work we do is aligned with our community and sustainable for our team.

Could we schedule a time to talk through what we're facing and whether it makes sense to work together?

A few quick details:
\u2022 Our work: [1\u20132 sentences]
\u2022 Current need: [1\u20132 sentences]
\u2022 Timeline / key dates: [if any]

Thank you for your time and for the work you do across Indian Country.

Best,
[Name]
[Title]
[Organization]`,
  },
  external: {
    title: 'External partner (state, philanthropy, higher ed)',
    desc: "For partners who want to work with tribes in a way that's not extractive or symbolic.",
    body: `Subject: Support for working with tribal partners on [project name]

Dear Phil and Elijah,

I'm reaching out from [agency / foundation / university / organization name]. We are planning or currently working on [brief description of program or initiative] that involves tribal nations or Native communities.

We want to make sure our approach is grounded in how tribal governance and consultation actually work, and that our timelines and expectations are realistic and non-extractive. We're interested in exploring how Indian Country Development might help us design or adjust this work.

A few quick details:
\u2022 Our role: [state agency / philanthropy / university unit, etc.]
\u2022 Tribal or Native partners involved (or hoped for): [if applicable]
\u2022 Project goals: [1\u20132 sentences]
\u2022 Timeframe / key decisions: [e.g., RFP dates, board meetings]

If this sounds aligned with the kind of work you take on, we'd appreciate a conversation about fit and possible next steps.

Best,
[Name]
[Title]
[Organization]`,
  },
  general: {
    title: 'General inquiry / not sure yet',
    desc: "For when you know something needs to move, but you're still clarifying what.",
    body: `Subject: Exploring a potential project with Indian Country Development

Dear Phil and Elijah,

I'm reaching out from [organization / tribe / team]. We are in the early stages of thinking about support for [brief description of the issue or area: strategy, operations, data, evaluation, etc.], and we're not yet sure what the right shape of a project would be.

What we do know:
\u2022 The context: [1\u20133 sentences about what's happening now]
\u2022 The questions we're asking: [a few bullet points]
\u2022 Any time pressures or key dates: [if relevant]

We would value a conversation to see whether this might be a fit for Indian Country Development, and to get your perspective on how you'd structure an engagement like this.

Best,
[Name]
[Title]
[Organization]`,
  },
};

export default function Contact() {
  const [templateKey, setTemplateKey] = useState('tribal');
  const [switching, setSwitching] = useState(false);
  const [toast, setToast] = useState(null);
  const toastTimer = useRef(null);

  const tpl = templates[templateKey];

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

  const handleTemplateChange = (e) => {
    setSwitching(true);
    setTimeout(() => {
      setTemplateKey(e.target.value);
      setSwitching(false);
    }, 120);
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
          {/* #13: upgraded headline */}
          <h1 className="contact-heading">Let&rsquo;s talk about the work in front of you.</h1>
          <p className="contact-tagline">
            We keep our project load small on purpose. If you&rsquo;re navigating something complex&mdash;and want a team
            that knows Indian Country and actually builds with you&mdash;reach out.
          </p>

          {/* #37: Capacity badge */}
          <div className="capacity-badge" aria-label="Currently accepting projects">
            <span className="capacity-dot" aria-hidden="true"></span>
            Currently accepting projects for Q3 2026
          </div>

          <div className="contact-block">
            <p className="contact-desc">
              Share a few lines about your team, what you&rsquo;re working on, and any timelines or deadlines you&rsquo;re facing.
              We&rsquo;ll follow up to see whether we&rsquo;re a good fit and what a scoped engagement might look like.
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

          <div className="templates">
            <h2 className="templates-heading">Quick-start email drafts</h2>
            <p className="templates-tagline">
              Pick the option that best matches your role. Copy the draft, then adjust it with your project details.
            </p>

            <div className="templates-control">
              <label htmlFor="templateSelect" className="templates-label">I&rsquo;m reaching out from a</label>
              <select
                id="templateSelect"
                className="templates-select"
                value={templateKey}
                onChange={handleTemplateChange}
                aria-label="Select your organization type"
              >
                <option value="tribal">Tribal government / enterprise</option>
                <option value="nativeOrg">Native-led org / TCU / urban Indian</option>
                <option value="external">External partner (state, philanthropy, higher ed)</option>
                <option value="general">General inquiry / not sure yet</option>
              </select>
            </div>

            <article className={`template-current${switching ? ' switching' : ''}`} aria-live="polite">
              <h3 className="template-title">{tpl.title}</h3>
              <p className="template-desc">{tpl.desc}</p>
              <pre className="template-body">{tpl.body}</pre>
              <button
                className="template-copy"
                type="button"
                aria-label="Copy email template to clipboard"
                onClick={() => copyText(tpl.body, 'Template copied')}
              >
                Copy template
              </button>
            </article>
          </div>
        </section>
      </ScrollReveal>

      <div className={`copy-toast${toast ? ' show' : ''}`} aria-live="polite" aria-atomic="true" role="status">
        {toast}
      </div>
    </>
  );
}
