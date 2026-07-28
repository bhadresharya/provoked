export const DAAS_PRICING = {
  id: 'pricing',
  eyebrow: 'Pricing',
  title: 'One clear monthly number.',
  description:
    'Less than a junior designer’s monthly cost — with senior output and no hiring overhead.',
  plan: {
    id: 'monthly',
    name: 'Provoked Monthly Club',
    pauseLabel: 'Pause or cancel anytime',
    highlight: 'Best for startups shipping every week',
    price: {
      display: '₹49,990',
      suffix: '/month',
    },
    gstNote: 'Prices exclusive of 18% GST.',
    features: [
      'One active request at a time',
      'Avg. 48-hour delivery',
      'Unlimited requests in queue',
      'Works across brands / products',
      'Shared Notion design board',
      'Decks, UI, campaigns & stage motion',
      'Senior studio craft',
      'Pause or cancel anytime',
    ],
    ctaLabel: 'Book a 15 min intro call',
  },
  comparisons: {
    eyebrow: 'Compared to',
    items: [
      {
        label: 'Full-time hire',
        value: '₹60k–1.2L+',
        note: 'CTC + tools + management',
      },
      {
        label: 'Agency retainer',
        value: '₹1.5L–3L+',
        note: 'Slow process, surprise invoices',
      },
    ],
  },
  trustNotes: [
    {
      title: 'Pause when you need to',
      description:
        'Cash-flow crunch or a quiet month? Pause the plan and come back when work picks up.',
    },
    {
      title: 'Talk before you pay',
      description:
        'Book a 15-min intro call first. If we’re a fit, you pay through a Razorpay link we send — not a checkout button on this page.',
    },
    {
      title: 'No long contracts',
      description:
        'Month-to-month by design. Stay as long as it helps — leave when it doesn’t.',
    },
  ],
};
