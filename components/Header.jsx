'use client';

import { useEffect, useRef, useState } from 'react';
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

const TOP_ALWAYS_SHOW = 72;
const HIDE_DELTA = 16;
const SHOW_DELTA = 12;
const COOLDOWN_MS = 220;
const ARM_MS = 420;

function readScrollY() {
  return window.scrollY || document.documentElement.scrollTop || 0;
}

export default function Header() {
  const { isOpen, isClosing, isToggled, isDisabled, toggleMenu, handleNavigate } =
    useFullPageMenu();
  const { openBooking } = useBooking();
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0);
  const hiddenRef = useRef(false);
  const cooldownUntilRef = useRef(0);
  const armedUntilRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    hiddenRef.current = hidden;
  }, [hidden]);

  useEffect(() => {
    lastYRef.current = readScrollY();

    const setHiddenSafe = (next) => {
      if (hiddenRef.current === next) return;
      hiddenRef.current = next;
      setHidden(next);
    };

    const arm = () => {
      armedUntilRef.current = performance.now() + ARM_MS;
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;

      window.requestAnimationFrame(() => {
        tickingRef.current = false;

        const y = readScrollY();
        const now = performance.now();
        const delta = y - lastYRef.current;
        const userIntent = now <= armedUntilRef.current;

        if (isOpen || y <= TOP_ALWAYS_SHOW) {
          setHiddenSafe(false);
          lastYRef.current = y;
          return;
        }

        // Layout shifts (board animation, fonts, etc.) also fire scroll.
        // Only hide/show when the user recently scrolled.
        if (!userIntent) {
          lastYRef.current = y;
          return;
        }

        if (now < cooldownUntilRef.current) {
          lastYRef.current = y;
          return;
        }

        if (delta > HIDE_DELTA) {
          setHiddenSafe(true);
          cooldownUntilRef.current = now + COOLDOWN_MS;
        } else if (delta < -SHOW_DELTA) {
          setHiddenSafe(false);
          cooldownUntilRef.current = now + COOLDOWN_MS;
        }

        lastYRef.current = y;
      });
    };

    const onKeyDown = (event) => {
      if (
        event.key === 'ArrowUp' ||
        event.key === 'ArrowDown' ||
        event.key === 'PageUp' ||
        event.key === 'PageDown' ||
        event.key === 'Home' ||
        event.key === 'End' ||
        event.key === ' '
      ) {
        arm();
      }
    };

    const onPointerDown = (event) => {
      // Cover scrollbar drags near the viewport edge.
      if (event.clientX >= window.innerWidth - 24) arm();
    };

    window.addEventListener('wheel', arm, { passive: true });
    window.addEventListener('touchstart', arm, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('wheel', arm);
      window.removeEventListener('touchstart', arm);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('scroll', onScroll);
    };
  }, [isOpen]);

  const headerClass = [
    'header',
    'daas-header',
    hidden ? 'daas-header--hidden' : '',
    isToggled ? 'daas-header--menu-open' : '',
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
                    onClick={() => openBooking('header')}
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
          window.setTimeout(() => openBooking('full_page_menu'), 320);
        }}
      />
    </>
  );
}
