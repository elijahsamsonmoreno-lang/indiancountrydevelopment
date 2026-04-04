import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/global.css';

const Home = lazy(() => import('./pages/Home'));
const WhatWeDo = lazy(() => import('./pages/WhatWeDo'));
const WhoWeAre = lazy(() => import('./pages/WhoWeAre'));
const Work = lazy(() => import('./pages/Work'));
const FeaturedWork = lazy(() => import('./pages/FeaturedWork'));
const Contact = lazy(() => import('./pages/Contact'));
const Principles = lazy(() => import('./pages/Principles'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<div style={{ minHeight: '100vh', paddingTop: '5rem' }} />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/who-we-work-with" element={<Work />} />
            <Route path="/featured-work" element={<FeaturedWork />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/principles" element={<Principles />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
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
