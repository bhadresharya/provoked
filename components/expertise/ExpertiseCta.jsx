import Link from 'next/link';

export default function ExpertiseCta({
  title = 'Ready to start your project?',
  description = 'Tell us about your goals—we\'ll recommend the right services and respond with a clear next step.',
  primaryLabel = 'Get in touch',
  primaryHref = '/contact',
}) {
  return (
    <section className="expertise-section expertise-cta" id="get-started" data-aos="fade-up">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <div className="expertise-cta__inner">
            <h2 className="expertise-cta__title">{title}</h2>
            <p className="expertise-cta__text">{description}</p>
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <Link href={primaryHref} className="btn btn-primary rounded-pill px-4">
                {primaryLabel}
                <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true" />
              </Link>
              <a href="tel:+919228191969" className="btn btn-outline-light rounded-pill px-4">
                +91 92281 91969
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
