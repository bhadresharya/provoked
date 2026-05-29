import PageHero from '@/components/PageHero';
import ContactDetails from '@/components/contact/ContactDetails';
import ContactProcess from '@/components/contact/ContactProcess';
import ContactForm from '@/components/contact/ContactForm';
import ContactFAQ from '@/components/contact/ContactFAQ';

export const metadata = {
  title: 'Contact — Provoked Pixels',
  description:
    'Get in touch with Provoked Pixels for web design, branding, and digital marketing. Start your project today.',
};

export default function ContactPage() {
  return (
    <main>
      <div className="container">
        <PageHero
          title={"Let's Bring Your Vision to Life"}
          description="Have a project in mind? Tell us about your goals—we'll help you build a digital presence that drives results."
        />
        <ContactDetails />
        <ContactProcess />
        <ContactForm />
        <ContactFAQ />
      </div>
    </main>
  );
}
