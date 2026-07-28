'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TILE_LINES = [
  [
    { src: '/images/img/4.jpg', large: true },
    { src: '/images/img/5.jpg' },
    { src: '/images/img/6.jpg' },
    { src: '/images/img/4.jpg', large: true },
    { src: '/images/img/5.jpg' },
    { src: '/images/img/6.jpg' },
  ],
  [
    { src: '/images/img/1.jpg' },
    { src: '/images/img/2.jpg' },
    { src: '/images/img/3.jpg', large: true },
    { src: '/images/img/1.jpg' },
    { src: '/images/img/2.jpg' },
    { src: '/images/img/3.jpg', large: true },
  ],
  [
    { src: '/images/img/7.jpg' },
    { src: '/images/img/8.jpg', large: true },
    { src: '/images/img/9.jpg' },
    { src: '/images/img/7.jpg' },
    { src: '/images/img/8.jpg', large: true },
    { src: '/images/img/9.jpg' },
  ],
];

const MENU_ITEMS = [
  { label: 'how it works', href: '/#how-it-works' },
  { label: 'benefits', href: '/#benefits' },
  { label: 'work', href: '/#work' },
  { label: 'pricing', href: '/#pricing' },
  { label: 'faq', href: '/#faq' },
];

const TRANSITION_MS = 500;

export default function FullPageMenu({ isOpen, isClosing, onNavigate, onBookCall }) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href.startsWith('/#')) return pathname === '/';
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || (!isOpen && !isClosing)) {
    return null;
  }

  const menuClass = [
    'full-page-menu',
    isOpen && 'show',
    isClosing && 'close-transition',
  ]
    .filter(Boolean)
    .join(' ');

  return createPortal(
    <div id="full-page-menu" className={menuClass} aria-hidden={!isOpen}>
      <div className="tiles">
        {TILE_LINES.map((line, lineIndex) => (
          <div className="tiles__line" key={lineIndex}>
            {line.map((tile, tileIndex) => (
              <div
                key={`${lineIndex}-${tileIndex}`}
                className={`tiles__line-img${tile.large ? ' tiles__line-img--large' : ''}`}
                style={{ backgroundImage: `url(${tile.src})` }}
              />
            ))}
          </div>
        ))}
      </div>
      <nav className="menu-wrap" aria-label="Main navigation">
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`menu__item${isActive(item.href) ? ' menu__item--active' : ''}`}
            onClick={onNavigate}
            aria-current={isActive(item.href) ? 'page' : undefined}
          >
            <span className="menu__item-text">{item.label}</span>
          </Link>
        ))}
        <div className="menu-wrap__ctas">
          <button type="button" className="btn btn-outline-light" onClick={onBookCall}>
            Book a call
          </button>
          <Link href="/#pricing" className="btn btn-primary" onClick={onNavigate}>
            See pricing
          </Link>
        </div>
      </nav>
    </div>,
    document.body
  );
}

export function useFullPageMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = window.setTimeout(() => {
        document.body.classList.add('overflow-hidden');
      }, TRANSITION_MS);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      document.body.classList.remove('overflow-hidden');
    }, TRANSITION_MS);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const closeMenu = useCallback(() => {
    setIsClosing(true);
    window.setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setIsToggled(false);
    }, TRANSITION_MS);
  }, []);

  const toggleMenu = useCallback(() => {
    if (isDisabled) return;

    setIsDisabled(true);
    window.setTimeout(() => setIsDisabled(false), TRANSITION_MS);

    if (isOpen) {
      closeMenu();
      return;
    }

    setIsOpen(true);
    setIsToggled(true);
  }, [closeMenu, isDisabled, isOpen]);

  const handleNavigate = useCallback(() => {
    if (isOpen) {
      closeMenu();
    }
  }, [closeMenu, isOpen]);

  return {
    isOpen,
    isClosing,
    isToggled,
    isDisabled,
    toggleMenu,
    handleNavigate,
  };
}
