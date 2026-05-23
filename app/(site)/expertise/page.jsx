import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Expertise — Provoked Pixels',
  description: 'Services offered by Provoked Pixels.',
};

export default function ExpertisePage() {
  return (
    <main>
      <div className="container">
        <PageHero
          title="Innovating India's Digital Ecosystem with Smart Design & Marketing"
          description="Through expert web design, graphic design, and AI-driven digital marketing, we empower brands to stand out in a competitive digital landscape."
          imageSrc="/images/header-hero.jpg"
        />
      </div>
    </main>
  );
}
