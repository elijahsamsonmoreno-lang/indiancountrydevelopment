import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Suspense } from 'react';

// Test components directly since lazy loading complicates route tests
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorBoundary from '../components/ErrorBoundary';
import { LogoIcon, LogoFull, LogoCompact, LogoIconOnly } from '../components/Logo';

function TestWrapper({ children, initialRoute = '/' }) {
  return (
    <HelmetProvider>
      <MemoryRouter initialEntries={[initialRoute]}>
        <Suspense fallback={<div>Loading</div>}>
          {children}
        </Suspense>
      </MemoryRouter>
    </HelmetProvider>
  );
}

describe('Header', () => {
  it('renders nav toggle button', () => {
    render(<TestWrapper><Header /></TestWrapper>);
    const btn = screen.getByLabelText(/open navigation menu/i);
    expect(btn).toBeInTheDocument();
  });

  it('toggles nav drawer on click', () => {
    render(<TestWrapper><Header /></TestWrapper>);
    const btn = screen.getByLabelText(/open navigation/i);
    expect(btn.getAttribute('aria-expanded')).toBe('false');
    fireEvent.click(btn);
    expect(btn.getAttribute('aria-expanded')).toBe('true');
  });

  it('shows full logo on home route', () => {
    render(<TestWrapper initialRoute="/"><Header /></TestWrapper>);
    expect(screen.getByText(/Indian Country Development/)).toBeInTheDocument();
  });

  it('shows compact logo on subpages', () => {
    render(<TestWrapper initialRoute="/what-we-do"><Header /></TestWrapper>);
    expect(screen.getByText('ICD')).toBeInTheDocument();
  });

  it('renders desktop nav links', () => {
    render(<TestWrapper><Header /></TestWrapper>);
    const nav = document.querySelector('.icd-desktop-nav');
    expect(nav).toBeInTheDocument();
    expect(nav.querySelectorAll('a').length).toBeGreaterThan(0);
  });
});

describe('Footer', () => {
  it('renders copyright and tagline', () => {
    render(<TestWrapper><Footer /></TestWrapper>);
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
    expect(screen.getByText(/Native-led/)).toBeInTheDocument();
  });
});

describe('Logo', () => {
  it('renders LogoIcon SVG', () => {
    const { container } = render(<LogoIcon size={40} />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('renders LogoFull with link', () => {
    render(<TestWrapper><LogoFull /></TestWrapper>);
    const link = screen.getByLabelText(/Indian Country Development home/);
    expect(link).toBeInTheDocument();
  });

  it('renders LogoCompact with ICD text', () => {
    render(<TestWrapper><LogoCompact /></TestWrapper>);
    expect(screen.getByText('ICD')).toBeInTheDocument();
  });

  it('renders dark variant without errors', () => {
    const { container } = render(<LogoIconOnly size={24} dark />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});

describe('ErrorBoundary', () => {
  function ThrowingComponent() {
    throw new Error('test error');
  }

  it('renders fallback on error', () => {
    // Suppress console.error for expected error
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>
    );
    expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
    expect(screen.getByText(/Reload page/)).toBeInTheDocument();
    spy.mockRestore();
  });

  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <div>Safe content</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Safe content')).toBeInTheDocument();
  });
});
