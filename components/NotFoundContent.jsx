import Link from 'next/link';

export default function NotFoundContent({
  title = 'Page not found',
  description = 'That page no longer exists. Head back to the Provoked Pixels storefront.',
  backHref = '/',
  backLabel = 'Back to home',
}) {
  return (
    <main className="daas-home daas-not-found">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-6 mx-auto text-center">
            <p className="daas-eyebrow">404</p>
            <h1 className="daas-section__title">{title}</h1>
            <p className="daas-section__desc mb-4">{description}</p>
            <Link href={backHref} className="btn btn-primary daas-btn">
              {backLabel}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
