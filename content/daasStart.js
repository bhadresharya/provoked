export const DAAS_START = {
  id: 'how-you-start',
  eyebrow: 'How you start',
  title: 'What happens after the intro call.',
  description:
    'The product is clear. Here’s the exact path from booking a call to dropping your first brief.',
  steps: [
    {
      number: '01',
      title: 'Book a 15-min intro',
      description:
        'We walk through the plan, queue model, and fit. No pitch deck theatre — just clarity on whether we should work together.',
    },
    {
      number: '02',
      title: 'Pay via Razorpay link',
      description:
        'If it’s a yes, we send a secure Razorpay payment link. Pay with UPI, cards, or netbanking — no checkout on this site.',
    },
    {
      number: '03',
      title: 'Get Notion board access',
      description:
        'Usually within a day of payment. Accept the invite — how to brief and what “done” looks like is written on the board.',
    },
    {
      number: '04',
      title: 'Drop your first brief',
      description:
        'Add the first request to the queue. We pick it up as the active job and start shipping in 24–48 hours on average.',
    },
  ],
  path: ['Call', 'Razorpay link', 'Board', 'First brief'],
  ctaLabel: 'Book a 15-min intro call',
  ctaNote: 'Talk first. Pay only if it’s a fit.',
};
