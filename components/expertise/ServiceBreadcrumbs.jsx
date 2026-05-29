import Link from 'next/link';

export default function ServiceBreadcrumbs({ category, service }) {
  return (
    <nav className="service-breadcrumbs" aria-label="Breadcrumb" data-aos="fade-up">
      <ol className="service-breadcrumbs__list mb-0">
        <li>
          <Link href="/expertise">Expertise</Link>
        </li>
        {category && (
          <li>
            {service ? (
              <Link href={`/expertise/${category.slug}`}>{category.shortTitle}</Link>
            ) : (
              <span aria-current="page">{category.shortTitle}</span>
            )}
          </li>
        )}
        {service && (
          <li>
            <span aria-current="page">{service.title}</span>
          </li>
        )}
      </ol>
    </nav>
  );
}
