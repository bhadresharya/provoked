import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DaasHero from '@/components/daas/DaasHero';
import HowItWorks from '@/components/daas/HowItWorks';
import BoardPreview from '@/components/daas/BoardPreview';
import Benefits from '@/components/daas/Benefits';
import WorkShowcase from '@/components/daas/WorkShowcase';
// import SocialProof from '@/components/daas/SocialProof';
// import MeetStudio from '@/components/daas/MeetStudio';
import PricingSection from '@/components/daas/PricingSection';
import HowYouStart from '@/components/daas/HowYouStart';
import Guarantee from '@/components/daas/Guarantee';
import DaasFaq from '@/components/daas/DaasFaq';
import FinalCta from '@/components/daas/FinalCta';
import MobileStickyCta from '@/components/daas/MobileStickyCta';

export const metadata = {
  title: 'Provoked Pixels — Provoked Monthly Club',
  description:
    'Provoked Monthly Club: flat ₹49,990/month design subscription for founders and growing businesses. Pitch decks, product UI, campaigns, and event visuals in 24–48 hours. Pause anytime.',
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="daas-home">
        <DaasHero />
        <HowItWorks />
        <BoardPreview />
        <Benefits />
        <WorkShowcase />
        {/* Draft trust sections — restore when real quotes / logos / founder assets are ready
        <SocialProof />
        <MeetStudio />
        */}
        <PricingSection />
        <HowYouStart />
        <Guarantee />
        <DaasFaq />
        <FinalCta />
        <Footer />
        <MobileStickyCta />
      </main>
    </>
  );
}
