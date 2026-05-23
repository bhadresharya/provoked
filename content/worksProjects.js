const ABHYUDAYA_PROJECT = {
  title: 'Abhyudaya Ornaments',
  lead:
    'A distinguished jewelry manufacturer and retailer, Abhyudaya Ornaments needed a brand presence as exquisite as their craftsmanship.',
  body:
    'Our design team was entrusted with creating a sophisticated and memorable brand identity that reflects elegance and trust. From a meticulously crafted logo to a cohesive branding strategy, we ensured that every visual element resonated with their audience. Additionally, our social media designs amplified their presence, captivating customers with stunning creatives that highlight their artistry and heritage.',
};

// Placeholder duplicates — replace with real project data later.
export const WORKS_PROJECTS = Array.from({ length: 3 }, (_, index) => ({
  id: `abhyudaya-ornaments-${index + 1}`,
  ...ABHYUDAYA_PROJECT,
}));
