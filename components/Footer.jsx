import Image from 'next/image';
import Link from 'next/link';

const FOOTER_LINKS = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Board', href: '/#board' },
  { label: 'Benefits', href: '/#benefits' },
  { label: 'Work', href: '/#work' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
];

const LEGAL_LINKS = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];

const INSTAGRAM_URL = 'https://www.instagram.com/provoked.pixels/';

function InstagramIcon({ size = 16 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.35" cy="6.65" r="1.1" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer daas-footer">
      <div className="daas-footer__wash" aria-hidden="true" />
      <div className="container">
        <div className="daas-footer__inner">
          <div className="daas-footer__top">
            <div className="daas-footer__brand">
              <Link href="/" className="daas-footer__logo" aria-label="Provoked Pixels home">
                <Image
                  src="/images/logo.svg"
                  className="footer-logo"
                  alt="Provoked Pixels Logo"
                  width={156}
                  height={30}
                />
              </Link>
              <p className="daas-footer__tagline">
                Design subscription for founders and growing businesses.
              </p>
            </div>

            <nav className="footer-nav" aria-label="Footer">
              <ul className="footer-nav__list">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="daas-footer__bottom">
            <p className="daas-footer__copy">© {year} Provoked Pixels</p>

            <div className="daas-footer__meta">
              <nav className="daas-footer__legal" aria-label="Legal">
                {LEGAL_LINKS.map((link) => (
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>

              <a
                className="daas-footer__instagram"
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
