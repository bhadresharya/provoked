import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Work — Provoked Pixels',
  description: 'Portfolio and case studies from Provoked Pixels.',
};

export default function WorksPage() {
  return (
    <main>
      <div className="container">
        <PageHero
          title="Transforming Ideas into Digital Success Stories"
          description="Explore our portfolio of successful digital transformations. Each project showcases our commitment to excellence, innovation, and delivering measurable results."
        />
      </div>
    </main>
  );
}
