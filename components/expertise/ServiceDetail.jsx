import Link from 'next/link';
import { getWorkProjectBySlug } from '@/content/worksProjects';
import ServiceFaq from '@/components/expertise/ServiceFaq';
import ExpertiseCta from '@/components/expertise/ExpertiseCta';

export default function ServiceDetail({ service, category, prev, next }) {
  const relatedWorks = (service.relatedWorkSlugs ?? [])
    .map((slug) => getWorkProjectBySlug(slug))
    .filter(Boolean);

  return (
    <div className="expertise-section">
      <article className="service-detail" data-aos="fade-up">
        <p className="service-detail__intro">{service.intro}</p>

        {service.sections.map((section) => (
          <section className="service-detail__section" key={section.heading}>
            <h2 className="service-detail__heading">{section.heading}</h2>
            <p className="service-detail__body">{section.body}</p>
            {section.bullets?.length > 0 && (
              <ul className="service-detail__bullets">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>

      {relatedWorks.length > 0 && (
        <section className="expertise-section" data-aos="fade-up">
          <h2 className="heading h5 mb-3">Related work</h2>
          <ul className="service-detail__related mb-0">
            {relatedWorks.map((project) => (
              <li key={project.slug}>
                <Link href={`/works/${project.slug}`}>{project.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <ServiceFaq faqs={service.faqs} />

      {(prev || next) && (
        <nav className="service-siblings" aria-label="Related services" data-aos="fade-up">
          {prev ? (
            <Link
              href={`/expertise/${category.slug}/${prev.slug}`}
              className="service-siblings__link service-siblings__link--prev"
            >
              <span className="service-siblings__label">Previous</span>
              <span className="service-siblings__title">{prev.title}</span>
            </Link>
          ) : (
            <span />
          )}
          <Link
            href={`/expertise/${category.slug}`}
            className="service-siblings__back btn btn-outline-dark rounded-pill"
          >
            All {category.shortTitle}
          </Link>
          {next ? (
            <Link
              href={`/expertise/${category.slug}/${next.slug}`}
              className="service-siblings__link service-siblings__link--next"
            >
              <span className="service-siblings__label">Next</span>
              <span className="service-siblings__title">{next.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      )}

      <ExpertiseCta
        title={`Ready for ${service.title.toLowerCase()}?`}
        description="Share your requirements and timeline—we'll respond with a clear proposal."
      />
    </div>
  );
}
