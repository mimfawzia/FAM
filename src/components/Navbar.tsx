import {useEffect, useState} from 'react';
import {Menu, X} from 'lucide-react';
import {PERSONAL_INFO} from '../data/portfolioData';

const NAV_LINKS = [
  {label: 'Home', href: '#home'},
  {label: 'About', href: '#about'},
  {label: 'Services', href: '#services'},
  {label: 'Skills', href: '#skills'},
  {label: 'Portfolio', href: '#portfolio'},
  {label: 'Experience', href: '#experience'},
  {label: 'Contact', href: '#contact'},
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
        scrolled
          ? 'bg-[#071525]/90 backdrop-blur-md border-b border-white/[0.08]'
          : 'bg-[#071525]/70 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D6C5] rounded-sm"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Zone 2: Clean Typography Navigation Links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#B7C5D3]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#00D6C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D6C5] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#00D6C5] px-4 py-2 text-sm font-semibold text-[#071525] whitespace-nowrap shrink-0 transition-all duration-150 hover:bg-[#1de6d6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D6C5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#071525]"
          >
            Let&apos;s Connect
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#102238]/70 text-white transition-colors hover:border-[#00D6C5]/40 hover:text-[#00D6C5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D6C5]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav-drawer"
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-white/[0.08] bg-[#071525]/95 backdrop-blur-lg px-5 py-4"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-[#B7C5D3] transition-colors hover:bg-[#102238] hover:text-[#00D6C5]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="mt-2 flex min-h-[44px] items-center justify-center rounded-lg bg-[#00D6C5] px-4 py-2.5 text-sm font-semibold text-[#071525] transition-colors hover:bg-[#1de6d6]"
            >
              Let&apos;s Connect
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
