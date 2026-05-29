import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import ServiceBreadcrumbs from '@/components/expertise/ServiceBreadcrumbs';
import ServiceCategoryDetail from '@/components/expertise/ServiceCategoryDetail';
import ServiceJsonLd from '@/components/expertise/ServiceJsonLd';
import {
  getCategoryBySlug,
  getServicesByCategory,
  getStaticCategoryParams,
} from '@/content/services';

const SITE_URL = 'https://provoked.in';

export async function generateStaticParams() {
  return getStaticCategoryParams();
}

export async function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.category);

  if (!category) {
    return { title: 'Expertise Not Found — Provoked Pixels' };
  }

  return {
    title: category.meta.title,
    description: category.meta.description,
  };
}

export default function ExpertiseCategoryPage({ params }) {
  const category = getCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  const services = getServicesByCategory(category.slug);
  const pageUrl = `${SITE_URL}/expertise/${category.slug}`;

  return (
    <main>
      <ServiceJsonLd
        name={category.title}
        description={category.meta.description}
        url={pageUrl}
      />
      <div className="container">
        <PageHero title={category.title} description={category.meta.description} />
        <ServiceBreadcrumbs category={category} />
        <ServiceCategoryDetail category={category} services={services} />
      </div>
    </main>
  );
}
