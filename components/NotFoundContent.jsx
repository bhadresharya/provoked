import Link from 'next/link';

export default function NotFoundContent({
  title = 'Page not found',
  description = 'The page you are looking for does not exist or may have moved.',
  backHref = '/',
  backLabel = 'Back to home',
}) {
  return (
    <main>
      <div className="container">
        <section className="page-section">
          <div className="row">
            <div className="col-md-11 col-lg-10 mx-auto page-section-inner text-center">
              <h1 className="heading h3 mb-3">{title}</h1>
              <p className="text-muted mb-4">{description}</p>
              <Link href={backHref} className="btn btn-primary rounded-pill px-4">
                {backLabel}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
