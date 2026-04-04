import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTopButton from './components/ScrollToTopButton';
import './styles/global.css';

const Home = lazy(() => import('./pages/Home'));
const WhatWeDo = lazy(() => import('./pages/WhatWeDo'));
const WhoWeAre = lazy(() => import('./pages/WhoWeAre'));
const Work = lazy(() => import('./pages/Work'));
const FeaturedWork = lazy(() => import('./pages/FeaturedWork'));
const Contact = lazy(() => import('./pages/Contact'));
const Principles = lazy(() => import('./pages/Principles'));
const NotFound = lazy(() => import('./pages/NotFound'));

/* #3: Preload routes on hover — warm the chunk cache */
const routeImports = {
  '/': () => import('./pages/Home'),
  '/what-we-do': () => import('./pages/WhatWeDo'),
  '/who-we-work-with': () => import('./pages/Work'),
  '/who-we-are': () => import('./pages/WhoWeAre'),
  '/contact': () => import('./pages/Contact'),
  '/featured-work': () => import('./pages/FeaturedWork'),
  '/principles': () => import('./pages/Principles'),
};

export function preloadRoute(path) {
  const loader = routeImports[path];
  if (loader) loader();
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* #2: Loading skeleton */
function LoadingSkeleton() {
  return (
    <div className="loading-skeleton" style={{ minHeight: '100vh', paddingTop: '5rem' }}>
      <div className="skeleton-shimmer" />
    </div>
  );
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<LoadingSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/who-we-work-with" element={<Work />} />
            <Route path="/featured-work" element={<FeaturedWork />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/principles" element={<Principles />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}
