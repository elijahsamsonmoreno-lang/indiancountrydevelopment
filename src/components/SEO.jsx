import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const BASE_URL = 'https://indiancountrydevelopment.com';
const SITE_NAME = 'Indian Country Development';
const DEFAULT_DESCRIPTION = 'Indian Country Development is a Native American owned consulting firm providing strategy, operations, and data services for tribal governments, Native organizations, and their partners. Founded by Phil Gover and Elijah Moreno.';
const DEFAULT_KEYWORDS = 'Phil Gover, Center for Indian Country Development, Indian Country Development, tribal consulting, Native American consulting, tribal economic development, tribal government consulting, Indigenous consulting, Native-led consulting';

export default function SEO({ title, description, path = '/', keywords, noindex = false, breadcrumbs }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Native American Owned Tribal Consulting`;
  const desc = description || DEFAULT_DESCRIPTION;
  const url = `${BASE_URL}${path}`;
  const kw = keywords || DEFAULT_KEYWORDS;

  const breadcrumbLD = breadcrumbs ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbs.map((item, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': item.name,
      'item': `${BASE_URL}${item.path}`,
    })),
  } : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={kw} />
      <link rel="canonical" href={url} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={`${BASE_URL}/og-image.png`} />

      {breadcrumbLD && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbLD)}
        </script>
      )}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  keywords: PropTypes.string,
  noindex: PropTypes.bool,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};
