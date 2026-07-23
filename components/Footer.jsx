import Image from 'next/image';
import Link from 'next/link';

const FOOTER_LINKS = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Benefits', href: '/#benefits' },
  { label: 'Work', href: '/#work' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
];

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/provoked-pixels',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/provokedpixels',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer daas-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="daas-footer__inner">
              <div className="daas-footer__brand">
                <Image
                  src="/images/logo.svg"
                  className="footer-logo"
                  alt="Provoked Pixels Logo"
                  width={140}
                  height={27}
                />
              </div>

              <div className="daas-footer__bottom">
                <p className="mb-0">© {year} Provoked Pixels</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
