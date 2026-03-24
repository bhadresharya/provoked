import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-11 col-lg-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
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
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

