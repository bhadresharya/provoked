import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import ServiceBreadcrumbs from '@/components/expertise/ServiceBreadcrumbs';
import ServiceDetail from '@/components/expertise/ServiceDetail';
import ServiceJsonLd from '@/components/expertise/ServiceJsonLd';
import {
  getAdjacentServices,
  getCategoryBySlug,
  getServiceBySlugs,
  getStaticServiceParams,
} from '@/content/services';

const SITE_URL = 'https://provoked.in';

export async function generateStaticParams() {
  return getStaticServiceParams();
}

export async function generateMetadata({ params }) {
  const service = getServiceBySlugs(params.category, params.service);

  if (!service) {
    return { title: 'Service Not Found — Provoked Pixels' };
  }

  return {
    title: service.meta.title,
    description: service.meta.description,
  };
}

export default function ExpertiseServicePage({ params }) {
  const category = getCategoryBySlug(params.category);
  const service = getServiceBySlugs(params.category, params.service);

  if (!category || !service) {
    notFound();
  }

  const { prev, next } = getAdjacentServices(params.category, params.service);
  const pageUrl = `${SITE_URL}/expertise/${category.slug}/${service.slug}`;

  return (
    <main>
      <ServiceJsonLd
        name={service.title}
        description={service.meta.description}
        url={pageUrl}
      />
      <div className="container">
        <PageHero title={service.title} description={service.meta.description} />
        <ServiceBreadcrumbs category={category} service={service} />
        <ServiceDetail
          service={service}
          category={category}
          prev={prev}
          next={next}
        />
      </div>
    </main>
  );
}
