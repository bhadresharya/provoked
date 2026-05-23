import PageHero from '@/components/PageHero';

const HOME_STATISTICS = [
  { value: '150+', label: 'Successful Projects' },
  { value: '80+', label: 'Happy Clients' },
  { value: '10+', label: 'Years Experience' },
];

export default function Hero() {
  return (
    <PageHero
      title="We create digital experiences that matter"
      description="Your vision, our expertise. We blend creativity and technology to build digital solutions that drive results for forward-thinking businesses."
      statistics={HOME_STATISTICS}
      imageSrc="/images/header-hero.jpg"
    />
  );
}
