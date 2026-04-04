import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://indiancountrydevelopment.com';
const SITE_NAME = 'Indian Country Development';
const DEFAULT_DESCRIPTION = 'Indian Country Development is a Native-led consulting firm providing strategy, operations, and data services for tribal governments, Native organizations, and their partners. Founded by Phil Gover and Elijah Moreno.';
const DEFAULT_KEYWORDS = 'Phil Gover, Center for Indian Country Development, Indian Country Development, tribal consulting, Native American consulting, tribal economic development, tribal government consulting, Indigenous consulting, Native-led consulting';

export default function SEO({ title, description, path = '/', keywords }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Native-Led Tribal Consulting`;
  const desc = description || DEFAULT_DESCRIPTION;
  const url = `${BASE_URL}${path}`;
  const kw = keywords || DEFAULT_KEYWORDS;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={kw} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
    </Helmet>
  );
}
