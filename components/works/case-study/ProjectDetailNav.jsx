import Link from 'next/link';

const navButtonClass =
  'btn btn-outline-dark rounded-pill px-3 px-md-4 case-study-nav__btn';

export default function ProjectDetailNav({ prev, next }) {
  return (
    <section className="case-study-nav" data-aos="fade-up">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto">
          <div className="case-study-nav__controls mb-4">
            <div className="case-study-nav__side">
              {prev ? (
                <Link href={`/works/${prev.slug}`} className={navButtonClass}>
                  <i className="fa-solid fa-arrow-left" aria-hidden="true" />
                  <span className="case-study-nav__label">{prev.title}</span>
                </Link>
              ) : (
                <span className="case-study-nav__placeholder" aria-hidden="true" />
              )}
            </div>

            <div className="case-study-nav__center">
              <Link href="/works" className={navButtonClass}>
                Back to all work
              </Link>
            </div>

            <div className="case-study-nav__side case-study-nav__side--end">
              {next ? (
                <Link href={`/works/${next.slug}`} className={navButtonClass}>
                  <span className="case-study-nav__label">{next.title}</span>
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
              ) : (
                <span className="case-study-nav__placeholder" aria-hidden="true" />
              )}
            </div>
          </div>

          <div className="cta text-center">
            <p className="h4 mb-2">Ready to start your project?</p>
            <p className="mb-4">Let&apos;s bring your brand vision to life.</p>
            <div>
              <Link href="/contact" className="btn btn-outline-light rounded-pill px-4">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
