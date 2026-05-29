import ServiceCategoryCard from '@/components/expertise/ServiceCategoryCard';

export default function ServiceCategoryGrid({
  items,
  variant = 'category',
  columns = 2,
}) {
  const colClass = columns === 3 ? 'col-md-6 col-lg-4' : 'col-md-6';

  return (
    <div className={`row g-4 service-category-grid service-category-grid--${variant}`}>
      {items.map((item) => (
        <div className={colClass} key={variant === 'service' ? item.slug : item.slug}>
          <ServiceCategoryCard item={item} variant={variant} />
        </div>
      ))}
    </div>
  );
}
