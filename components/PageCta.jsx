import Link from 'next/link';

export default function PageCta({
  title = 'Ready to start your project?',
  description = "Tell us about your goals—we'll recommend the right services and respond with a clear next step.",
  primaryLabel = 'Get in touch',
  primaryHref = '/contact',
  showPhone = true,
  showEmail = false,
  className = '',
  id,
}) {
  return (
    <section
      className={`page-section page-cta${className ? ` ${className}` : ''}`}
      id={id}
      data-aos="fade-up"
    >
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto page-section-inner">
          <div className="page-cta__inner">
            <h2 className="page-cta__title">{title}</h2>
            <p className="page-cta__text">{description}</p>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <Link href={primaryHref} className="btn btn-primary rounded-pill px-4">
                {primaryLabel}
                <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true" />
              </Link>
              {showPhone && (
                <a href="tel:+919228191969" className="btn btn-outline-light rounded-pill px-4">
                  +91 92281 91969
                </a>
              )}
              {showEmail && (
                <a href="mailto:hi@provoked.in" className="btn btn-outline-light rounded-pill px-4">
                  hi@provoked.in
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
