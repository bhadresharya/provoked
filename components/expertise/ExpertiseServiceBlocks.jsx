import Link from 'next/link';
import { EXPERTISE_HUB_CATEGORY_SLUGS } from '@/content/expertisePage';
import { getCategoryBySlug, getServicesByCategory } from '@/content/services';

export default function ExpertiseServiceBlocks() {
  const categories = EXPERTISE_HUB_CATEGORY_SLUGS.map((slug) => {
    const category = getCategoryBySlug(slug);
    const services = getServicesByCategory(slug);
    return { category, services };
  }).filter((entry) => entry.category);

  return (
    <section className="expertise-section expertise-services" id="services" data-aos="fade-up">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto expertise-section-inner">
          <h2 className="heading h4 mb-2">Services we offer</h2>
          <p className="sub-heading mb-5">
            Strategy-led design and marketing across three core areas—each with dedicated
            deliverables and deep-dive service pages.
          </p>
          <ul className="expertise-service-list">
            {categories.map(({ category, services }, index) => (
              <li
                className="expertise-service-block row"
                id={category.slug}
                key={category.slug}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="col-md-3">
                  <h3 className="expertise-service-block__title mb-3 mb-md-0 text-md-end">
                    {category.shortTitle}
                  </h3>
                </div>
                <div className="col-md-9">
                  <div className="row justify-content-between">
                    <div className="col-md-6">
                      <p className="expertise-service-block__intro mb-3 mb-md-2">
                        {category.intro[0]}
                      </p>
                      <Link
                        href={`/expertise/${category.slug}`}
                        className="expertise-service-block__link"
                      >
                        Explore {category.shortTitle.toLowerCase()}
                        <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true" />
                      </Link>
                    </div>
                    <div className="col-md-6 col-lg-5">
                      <ul className="expertise-service-block__items">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link href={`/expertise/${category.slug}/${service.slug}`}>
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
