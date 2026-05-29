import Link from 'next/link';
import { EXPERTISE_INTRO, EXPERTISE_NAV } from '@/content/expertisePage';

export default function ExpertiseIntro() {
  return (
    <section className="expertise-section expertise-intro" data-aos="fade-up">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto expertise-section-inner">
          <p className="badge text-primary bg-primary-subtle rounded-pill fs-6 mb-3">
            {EXPERTISE_INTRO.badge}
          </p>
          <p className="expertise-intro__text lead mb-4">{EXPERTISE_INTRO.text}</p>
          <nav className="expertise-intro__nav" aria-label="On this page">
            <ul className="expertise-intro__nav-list">
              {EXPERTISE_NAV.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <Link href={item.href} className="expertise-intro__nav-link">
                      {item.label}
                      <i className="fa-solid fa-arrow-up-right-from-square ms-1" aria-hidden="true" />
                    </Link>
                  ) : (
                    <a href={item.href} className="expertise-intro__nav-link">
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
