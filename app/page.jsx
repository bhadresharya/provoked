import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DaasHero from '@/components/daas/DaasHero';
import HowItWorks from '@/components/daas/HowItWorks';
import Benefits from '@/components/daas/Benefits';
import WorkShowcase from '@/components/daas/WorkShowcase';
import PricingSection from '@/components/daas/PricingSection';
import DaasFaq from '@/components/daas/DaasFaq';

export const metadata = {
  title: 'Provoked Pixels — Design subscription for startups',
  description:
    'Flat ₹29,990/month design subscription for founders and growing businesses. Pitch decks, product UI, campaigns, and event visuals in 24–48 hours. Pause anytime.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="daas-home">
        <DaasHero />
        <HowItWorks />
        <Benefits />
        <WorkShowcase />
        <PricingSection />
        <DaasFaq />
        <Footer />
      </main>
    </>
  );
}
