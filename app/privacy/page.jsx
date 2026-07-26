import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Privacy Policy — Provoked Pixels',
  description: 'How Provoked Pixels collects, uses, and protects information for the design subscription.',
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="26 Jul 2026">
      <p>
        Provoked Pixels (“we”, “us”) provides a monthly design subscription. This policy explains what
        we collect when you browse provoked.in, book an intro call, or become a client.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Contact details</strong> you share (name, email, company, phone) via booking forms,
          email, or onboarding.
        </li>
        <li>
          <strong>Project materials</strong> you upload or paste into the shared request board (briefs,
          brand assets, feedback).
        </li>
        <li>
          <strong>Billing details</strong> needed for invoices (billing address, payment references).
          Payment processors may handle card/UPI data directly — we do not store full card numbers on
          our servers.
        </li>
        <li>
          <strong>Usage analytics</strong> via tools such as Google Tag Manager / GA4 (pages viewed,
          device basics, approximate location).
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>Respond to intro-call requests and sales questions</li>
        <li>Deliver design work and manage the subscription</li>
        <li>Send invoices, receipts, and service notices</li>
        <li>Improve the website and understand which pages help visitors</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We do not sell your data. We may share limited information with operators we need to run the
        service (for example Cal.com for scheduling, Notion for the request board, email, analytics,
        and payment/invoice tools), under their respective terms.
      </p>

      <h2>Retention</h2>
      <p>
        We keep client and billing records as long as needed for the engagement, accounting, and legal
        obligations. You can ask us to delete non-essential marketing contacts anytime.
      </p>

      <h2>Your choices</h2>
      <p>
        Email <a href="mailto:hello@provoked.in">hello@provoked.in</a> to access, correct, or request
        deletion of personal data we hold, or to ask privacy questions.
      </p>
    </LegalPage>
  );
}
