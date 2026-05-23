import PageHero from '@/components/PageHero';

const PLACEHOLDER_SLUG = '__placeholder__';

export async function generateStaticParams() {
  return [{ slug: PLACEHOLDER_SLUG }];
}

export async function generateMetadata({ params }) {
  return {
    title: `${formatSlug(params.slug)} — Provoked Pixels`,
    description: 'Case study from Provoked Pixels.',
  };
}

function formatSlug(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function WorkDetailPage({ params }) {
  const title =
    params.slug === PLACEHOLDER_SLUG
      ? 'Case Study'
      : formatSlug(params.slug);

  return (
    <main>
      <div className="container">
        <PageHero
          title={title}
          description="A closer look at how we partnered with our client to deliver impactful design and digital solutions."
          imageSrc="/images/header-hero.jpg"
        />
      </div>
    </main>
  );
}
