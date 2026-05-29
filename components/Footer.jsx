import Image from 'next/image';
import Link from 'next/link';

const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Expertise', href: '/expertise' },
  { label: 'Work', href: '/works' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="footer" data-aos="fade">
      <div className="container">
        <div className="row">
          <div className="col-md-11 col-lg-10 mx-auto">
            <div className="text-center">
              <Image
                src="/images/logo.svg"
                className="footer-logo mb-3"
                alt="Provoked Pixels Logo"
                width={120}
                height={23}
              />
              <nav className="footer-nav mb-3" aria-label="Footer navigation">
                <ul className="footer-nav__list">
                  {FOOTER_LINKS.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <p className="footer-contact text-muted small mb-2">
                <a href="tel:+919228191969" className="text-muted text-decoration-none">
                  +91 92281 91969
                </a>
                <span className="mx-2" aria-hidden="true">
                  ·
                </span>
                <a href="mailto:hi@provoked.in" className="text-muted text-decoration-none">
                  hi@provoked.in
                </a>
              </p>
              <p className="text-muted small mb-0">© 2025 Provoked Pixels</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
