'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FullPageMenu, { useFullPageMenu } from '@/components/FullPageMenu';
import { useBooking } from '@/components/daas/BookingProvider';

const DESKTOP_LINKS = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Benefits', href: '/#benefits' },
  { label: 'Work', href: '/#work' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Header() {
  const { isOpen, isClosing, isToggled, isDisabled, toggleMenu, handleNavigate } =
    useFullPageMenu();
  const { openBooking } = useBooking();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClass = [
    'header',
    'daas-header',
    scrolled && 'daas-header--scrolled',
    isToggled && 'daas-header--menu-open',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <header className={headerClass}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <nav className="navbar navbar-expand-lg justify-content-between w-100 align-items-center">
                <Link className="navbar-brand" href="/" aria-label="Provoked Pixels home">
                  <Image
                    src="/images/logo.svg"
                    className="logo"
                    alt="Provoked Pixels Logo"
                    width={160}
                    height={31}
                    priority
                  />
                </Link>

                <ul className="daas-header__nav d-none d-lg-flex list-unstyled mb-0">
                  {DESKTOP_LINKS.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="daas-header__link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="daas-header__actions d-none d-lg-flex align-items-center gap-2">
                  <button
                    type="button"
                    className="btn btn-sm daas-btn-sm daas-header__ghost"
                    onClick={openBooking}
                  >
                    Book a call
                  </button>
                  <a href="/#pricing" className="btn btn-sm btn-primary daas-btn-sm">
                    See pricing
                  </a>
                </div>

                <button
                  type="button"
                  className="btn btn-navbar d-lg-none"
                  onClick={toggleMenu}
                  disabled={isDisabled}
                  aria-expanded={isOpen}
                  aria-controls="full-page-menu"
                  aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                  <div className={`navbar-toggle btn-1${isToggled ? ' toggle-1' : ''}`}>
                    <span className="nav-line-1" />
                    <span className="nav-line-2" />
                    <span className="nav-line-3" />
                  </div>
                  <span className="btn-navbar-text">{isOpen ? 'Close' : 'Menu'}</span>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <FullPageMenu
        isOpen={isOpen}
        isClosing={isClosing}
        onNavigate={handleNavigate}
        onBookCall={() => {
          handleNavigate();
          window.setTimeout(openBooking, 320);
        }}
      />
    </>
  );
}
