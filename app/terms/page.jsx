import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Terms of Service — Provoked Pixels',
  description:
    'Terms for the Provoked Pixels design subscription, including billing, pause, and delivery.',
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="26 Jul 2026">
      <p>
        These terms cover use of provoked.in and the Provoked Pixels design subscription. By booking a
        call, paying an invoice, or using the shared request board, you agree to them.
      </p>

      <h2>The service</h2>
      <p>
        We provide ongoing design work on a monthly subscription: typically one active request at a
        time, with additional requests held in queue. Typical first delivery for an active request is
        about 24–48 hours, depending on scope. Exact inclusions are confirmed during onboarding and on
        your shared board.
      </p>

      <h2>Sales-led start</h2>
      <p>
        Subscriptions usually begin after an intro call. If we’re a fit, we send a secure Razorpay
        payment link (UPI, cards, or netbanking). Paying that link confirms the plan for the billing
        period.
      </p>

      <h2>Fees</h2>
      <p>
        Plan price is shown on the site (currently ₹49,990/month unless otherwise agreed). You are
        responsible for providing accurate billing details.
      </p>

      <h2>Pause &amp; cancel</h2>
      <p>
        The plan is month-to-month. You may pause or cancel with notice before the next billing cycle
        (details are confirmed in writing when you start). Work already in progress for a paid period
        is completed under that period’s terms unless you and we agree otherwise.
      </p>

      <h2>Revisions</h2>
      <p>
        Reasonable revisions on the active request are included so the work matches the brief. Major
        scope changes may be treated as a new request in the queue.
      </p>

      <h2>IP &amp; files</h2>
      <p>
        After payment for the relevant period, you own the final deliverables created specifically for
        you. We may keep copies for portfolio or process use unless you ask us not to in writing.
        Source files are shared as agreed on the board.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Do not submit illegal, infringing, or harmful briefs. We may refuse or stop work that violates
        law or these terms.
      </p>

      <h2>Limitation</h2>
      <p>
        The service is provided on a commercially reasonable basis. To the extent allowed by law, our
        liability for any claim related to the subscription is limited to fees you paid us for the
        month in which the issue arose.
      </p>

      <h2>Contact</h2>
      <p>
        Questions: <a href="mailto:hello@provoked.in">hello@provoked.in</a>
      </p>
    </LegalPage>
  );
}
