import Image from 'next/image';

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
              <p className="text-muted small">© 2025 Provoked Pixels</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

