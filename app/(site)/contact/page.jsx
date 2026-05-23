import PageHero from '@/components/PageHero';

export const metadata = {
  title: 'Contact — Provoked Pixels',
  description: 'Get in touch with Provoked Pixels.',
};

export default function ContactPage() {
  return (
    <main>
      <div className="container">
        <PageHero
          title={"Let's Bring Your Vision to Life"}
          description="Have a project in mind? Reach out—we'd love to hear from you and help your brand grow."
        />
      </div>
    </main>
  );
}
