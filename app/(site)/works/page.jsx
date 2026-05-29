import PageHero from '@/components/PageHero';
import WorksProjects from '@/components/works/WorksProjects';
import PageCta from '@/components/PageCta';

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
        <WorksProjects />
        <PageCta
          title="Have a project in mind?"
          description="Tell us about your goals—we'll help you build a digital presence that drives results."
        />
      </div>
    </main>
  );
}
