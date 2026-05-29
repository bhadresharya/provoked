import Link from 'next/link';
import ServiceCategoryGrid from '@/components/expertise/ServiceCategoryGrid';
import ExpertiseCta from '@/components/expertise/ExpertiseCta';
import { getFeaturedCategory, getServicesByCategory } from '@/content/services';

const PROCESS_STEPS = [
  {
    title: 'Share your goals',
    description: 'Tell us about your event, brand, or project scope and timeline.',
  },
  {
    title: 'Discovery & proposal',
    description: 'We align on deliverables, milestones, and a transparent quote.',
  },
  {
    title: 'Design & delivery',
    description: 'We execute with clear reviews—production-ready files for your team.',
  },
];

export default function ExpertiseHub({ categories }) {
  const featured = getFeaturedCategory();
  const featuredServices = featured ? getServicesByCategory(featured.slug) : [];

  return (
    <div className="expertise-hub">
      {featured && (
        <section className="expertise-section expertise-featured" data-aos="fade-up">
          <div className="expertise-featured__accent" aria-hidden="true" />
          <p className="badge text-primary bg-primary-subtle rounded-pill fs-6 mb-3">
            {featured.badge ?? 'Our specialty'}
          </p>
          <h2 className="heading">{featured.title}</h2>
          <p className="sub-heading">{featured.intro[0]}</p>
          <div className="d-flex flex-wrap gap-2 mb-4">
            <Link
              href={`/expertise/${featured.slug}`}
              className="btn btn-primary rounded-pill px-4"
            >
              Explore conference branding
            </Link>
            <Link href="/contact" className="btn btn-outline-dark rounded-pill px-4">
              Discuss your event
            </Link>
          </div>
          <ServiceCategoryGrid
            items={featuredServices.slice(0, 6)}
            variant="service"
            columns={3}
          />
          {featuredServices.length > 6 && (
            <p className="mt-4 mb-0">
              <Link href={`/expertise/${featured.slug}`} className="text-primary fw-medium">
                View all {featuredServices.length} conference services
                <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true" />
              </Link>
            </p>
          )}
        </section>
      )}

      <section className="expertise-section" data-aos="fade-up">
        <p className="badge text-primary bg-primary-subtle rounded-pill fs-6 mb-3">
          All expertise
        </p>
        <h2 className="heading h4 mb-2">Services we offer</h2>
        <p className="sub-heading mb-4">
          Web design, branding, digital marketing, and our conference branding specialty—explore
          each area in depth.
        </p>
        <ServiceCategoryGrid items={categories} variant="category" columns={2} />
      </section>

      <section className="expertise-section expertise-process" data-aos="fade-up">
        <h2 className="heading h4 mb-2">How we work</h2>
        <p className="sub-heading mb-4">
          A clear process from first conversation to final deliverables.{' '}
          <Link href="/contact">See full contact process</Link>.
        </p>
        <div className="row g-4">
          {PROCESS_STEPS.map((step, index) => (
            <div className="col-md-4" key={step.title}>
              <p className="text-primary fw-bold mb-1">0{index + 1}</p>
              <h3 className="h5 mb-2">{step.title}</h3>
              <p className="text-muted mb-0">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <ExpertiseCta />
    </div>
  );
}
