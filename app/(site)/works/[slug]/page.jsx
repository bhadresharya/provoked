// Placeholder slug keeps static export valid until project JSON is added in a later step.
const PLACEHOLDER_SLUG = '__placeholder__';

export async function generateStaticParams() {
  return [{ slug: PLACEHOLDER_SLUG }];
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug} — Provoked Pixels`,
    description: 'Case study from Provoked Pixels.',
  };
}

export default function WorkDetailPage() {
  return (
    <main>
      <div className="container" />
    </main>
  );
}
