'use client';

import Image from 'next/image';
import Link from 'next/link';
import FullPageMenu, { useFullPageMenu } from '@/components/FullPageMenu';

export default function Header() {
  const { isOpen, isClosing, isToggled, isDisabled, toggleMenu, handleNavigate } =
    useFullPageMenu();

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-md-11 col-lg-10 mx-auto">
              <nav className="navbar navbar-expand-lg justify-content-between w-100">
                <Link className="navbar-brand" href="/" aria-label="Provoked Pixels home">
                  <Image
                    src="/images/logo.svg"
                    className="logo"
                    alt="Provoked Pixels Logo"
                    width={180}
                    height={35}
                    priority
                  />
                </Link>
                <button
                  type="button"
                  className={`btn btn-navbar${isToggled ? ' btn-light' : ''}`}
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
      />
    </>
  );
}
