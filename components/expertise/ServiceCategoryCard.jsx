import Link from 'next/link';

export default function ServiceCategoryCard({ item, variant = 'category' }) {
  const href =
    variant === 'service'
      ? `/expertise/${item.categorySlug}/${item.slug}`
      : `/expertise/${item.slug}`;

  const title = variant === 'service' ? item.title : item.title;
  const description =
    variant === 'service' ? item.meta.description : item.meta.description;

  return (
    <article className={`service-card${item.featured ? ' service-card--featured' : ''}`}>
      {item.featured && item.badge && (
        <p className="service-card__badge">{item.badge}</p>
      )}
      {item.featured && !item.badge && variant === 'category' && (
        <p className="service-card__badge">Our specialty</p>
      )}
      <h3 className="service-card__title">
        <Link href={href}>{title}</Link>
      </h3>
      <p className="service-card__text">{description}</p>
      <Link href={href} className="service-card__link">
        Learn more
        <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true" />
      </Link>
    </article>
  );
}
