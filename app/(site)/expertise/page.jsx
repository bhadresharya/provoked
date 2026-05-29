import PageHero from '@/components/PageHero';
import ExpertiseIntro from '@/components/expertise/ExpertiseIntro';
import ExpertiseServiceBlocks from '@/components/expertise/ExpertiseServiceBlocks';
import ConferenceSpotlight from '@/components/expertise/ConferenceSpotlight';
import ExpertiseProcess from '@/components/expertise/ExpertiseProcess';
import ExpertiseClients from '@/components/expertise/ExpertiseClients';
import ExpertiseEngagement from '@/components/expertise/ExpertiseEngagement';
import ExpertiseCta from '@/components/expertise/ExpertiseCta';

export const metadata = {
  title: 'Expertise — Provoked Pixels',
  description:
    'Web design, branding, graphic design, and digital marketing services—plus conference and event branding. Explore how Provoked Pixels helps brands grow.',
};

export default function ExpertisePage() {
  return (
    <main>
      <div className="container">
        <PageHero
          title="Innovating India's Digital Ecosystem with Smart Design & Marketing"
          description="Through expert web design, graphic design, and AI-driven digital marketing, we empower brands to stand out in a competitive digital landscape."
        />
        <ExpertiseIntro />
        <ExpertiseServiceBlocks />
        <ConferenceSpotlight />
        <ExpertiseProcess />
        <ExpertiseClients />
        <ExpertiseEngagement />
        <ExpertiseCta />
      </div>
    </main>
  );
}
