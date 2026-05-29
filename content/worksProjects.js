const ABHYUDAYA_BASE = {
  title: 'Abhyudaya Ornaments',
  client: 'Abhyudaya Ornaments',
  industry: 'Jewelry & Retail',
  year: '2024',
  services: ['Branding', 'Social Media Design'],
  liveUrl: null,
  hook:
    'Repositioned a jewelry brand with a premium identity and social-first creative system.',
  lead:
    'A distinguished jewelry manufacturer and retailer, Abhyudaya Ornaments needed a brand presence as exquisite as their craftsmanship.',
  overview:
    'Abhyudaya Ornaments is a distinguished jewelry manufacturer and retailer known for craftsmanship and heritage. We partnered with them to build a cohesive brand identity and social presence that reflects elegance, trust, and timeless appeal.',
  challenge:
    'They had a strong offline reputation, but their digital brand felt inconsistent and did not reflect the premium quality of their products. Social channels lacked a unified visual language, making it difficult to stand out in a competitive jewelry market.',
  approach: [
    {
      title: 'Discover',
      description:
        'We studied their heritage, audience, and competitors to define a visual direction rooted in elegance and trust.',
    },
    {
      title: 'Design',
      description:
        'We crafted a logo system, typography, and brand assets that communicate sophistication across touchpoints.',
    },
    {
      title: 'Build',
      description:
        'We developed social templates and campaign creatives aligned with the new identity.',
    },
    {
      title: 'Grow',
      description:
        'We refined rollout across channels to strengthen recognition and engagement.',
    },
  ],
  results: [
    'Cohesive premium brand identity across digital channels',
    'Stronger social presence with consistent, high-quality creatives',
    'Clearer positioning that reflects craftsmanship and heritage',
  ],
  deliverables: [
    'Logo & brand identity system',
    'Social media design templates',
    'Campaign creatives',
    'Brand visual guidelines',
  ],
  testimonial: {
    quote:
      'Provoked Pixels understood our vision and translated it into a brand that truly represents who we are.',
    author: 'Client Representative',
    role: 'Abhyudaya Ornaments',
  },
  image: '/images/abhyudaya-ornaments.png',
  imageMobile: '/images/abhyudaya-ornaments-vertical.png',
  gallery: [
    {
      src: '/images/abhyudaya-ornaments.png',
      alt: 'Abhyudaya Ornaments brand showcase',
    },
    {
      src: '/images/abhyudaya-ornaments-vertical.png',
      alt: 'Abhyudaya Ornaments social creatives',
    },
    {
      src: '/images/abhyudaya-ornaments.png',
      alt: 'Abhyudaya Ornaments identity application',
    },
  ],
};

export const WORKS_PROJECTS = [
  {
    id: 'abhyudaya-ornaments-1',
    slug: 'abhyudaya-ornaments-1',
    ...ABHYUDAYA_BASE,
    body: 'Our design team created a sophisticated brand identity and social creative system that reflects elegance and trust, helping the brand resonate with its audience online.',
  },
  {
    id: 'abhyudaya-ornaments-2',
    slug: 'abhyudaya-ornaments-2',
    ...ABHYUDAYA_BASE,
    title: 'Abhyudaya Ornaments — Social Campaign',
    body: 'We extended the brand identity into a consistent social media presence with templates and campaign creatives designed to highlight artistry and heritage.',
  },
  {
    id: 'abhyudaya-ornaments-3',
    slug: 'abhyudaya-ornaments-3',
    ...ABHYUDAYA_BASE,
    title: 'Abhyudaya Ornaments — Brand Refresh',
    body: 'A full brand refresh including logo refinement, visual guidelines, and digital assets that elevated their positioning in the jewelry market.',
  },
];

export function getWorkProjectBySlug(slug) {
  return WORKS_PROJECTS.find((project) => project.slug === slug) ?? null;
}

export function getWorkProjectIndex(slug) {
  return WORKS_PROJECTS.findIndex((project) => project.slug === slug);
}

export function getAdjacentWorkProjects(slug) {
  const index = getWorkProjectIndex(slug);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? WORKS_PROJECTS[index - 1] : null,
    next: index < WORKS_PROJECTS.length - 1 ? WORKS_PROJECTS[index + 1] : null,
  };
}
