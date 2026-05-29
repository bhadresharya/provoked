import Link from 'next/link';
import ServiceCategoryGrid from '@/components/expertise/ServiceCategoryGrid';
import ExpertiseCta from '@/components/expertise/ExpertiseCta';

export default function ServiceCategoryDetail({ category, services }) {
  return (
    <div className="expertise-section">
      <div className="service-category-detail" data-aos="fade-up">
        {category.intro.map((paragraph) => (
          <p className="service-category-detail__intro" key={paragraph.slice(0, 40)}>
            {paragraph}
          </p>
        ))}

        {category.highlights?.length > 0 && (
          <ul className="service-category-detail__highlights">
            {category.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <section className="expertise-section" data-aos="fade-up">
        <h2 className="heading h4 mb-2">
          {category.featured ? 'Conference branding services' : `${category.shortTitle} services`}
        </h2>
        <p className="sub-heading mb-4">
          Explore our {category.shortTitle.toLowerCase()} offerings in detail.
        </p>
        <ServiceCategoryGrid items={services} variant="service" columns={2} />
      </section>

      {category.featured && (
        <section className="expertise-section" data-aos="fade-up">
          <p className="text-muted mb-2">Also explore</p>
          <Link href="/expertise" className="text-primary fw-medium">
            View all expertise areas
            <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true" />
          </Link>
        </section>
      )}

      <ExpertiseCta
        title={
          category.featured
            ? 'Planning a conference or event?'
            : `Interested in ${category.shortTitle.toLowerCase()}?`
        }
        description={
          category.featured
            ? 'Share your event date, venue, and goals—we\'ll outline a branding scope that fits your timeline.'
            : 'Tell us about your project and we\'ll recommend the right approach.'
        }
        primaryLabel={category.featured ? 'Discuss your event' : 'Get in touch'}
      />
    </div>
  );
}
