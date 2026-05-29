export const SERVICE_CATEGORIES = [
  {
    slug: 'conference-branding',
    title: 'Conference & Event Branding',
    shortTitle: 'Conference Branding',
    featured: true,
    badge: 'Our specialty',
    meta: {
      title: 'Conference Branding Services | Provoked Pixels',
      description:
        'End-to-end conference and event branding—identity, signage, stage design, delegate materials, and digital touchpoints for memorable summits and congresses.',
    },
    intro: [
      'We specialize in conference and event branding that unifies every touchpoint—from the stage backdrop to delegate badges, sponsor kits, and pre-event marketing. Organizers, associations, and agencies trust us to deliver a cohesive visual system on tight event timelines.',
      'Whether you are launching a new summit, refreshing an annual congress, or scaling branding across a hybrid program, we design systems that look premium in person and online—and that your production partners can implement with confidence.',
    ],
    highlights: [
      'One visual system across venue, print, and digital',
      'Sponsor-ready guidelines and tier artwork',
      'Print-ready files with production specs',
      'Built for annual editions and year-on-year refresh',
    ],
  },
  {
    slug: 'web-design',
    title: 'Web Design & Development',
    shortTitle: 'Web Design',
    featured: false,
    meta: {
      title: 'Web Design & Development Services | Provoked Pixels',
      description:
        'Custom website design, UI/UX, e-commerce, landing pages, and redesigns—fast, user-friendly sites that convert visitors into customers.',
    },
    intro: [
      'Your website is your brand\'s first impression. We design visually stunning, fast, and user-friendly websites that engage visitors and drive conversions—from sleek portfolios and corporate sites to e-commerce stores and event registration pages.',
      'Our approach blends strategy, UI/UX, and development support so every page serves a clear business goal.',
    ],
    highlights: [
      'Mobile-first, performance-focused builds',
      'Clear UX for conversion and navigation',
      'Scalable design systems for growth',
      'Event and campaign landing pages',
    ],
  },
  {
    slug: 'branding-and-graphic-design',
    title: 'Branding & Graphic Design',
    shortTitle: 'Branding & Design',
    featured: false,
    meta: {
      title: 'Branding & Graphic Design Services | Provoked Pixels',
      description:
        'Logo design, brand identity, social media graphics, packaging, print collateral, and visual systems that build recognition and trust.',
    },
    intro: [
      'From striking brand identities to engaging social media creatives, our graphic design services breathe life into your vision. We create visuals that communicate your story, build recognition, and leave a lasting impression.',
      'Every design is crafted to captivate your audience and support your business goals across digital and print.',
    ],
    highlights: [
      'Logo and full brand identity systems',
      'Social, print, and packaging design',
      'Brand guidelines for consistent rollout',
      'Campaign-ready creative assets',
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'Digital Marketing',
    featured: false,
    meta: {
      title: 'Digital Marketing Services | Provoked Pixels',
      description:
        'SEO, PPC, social media marketing, content, and email campaigns—data-informed strategies that maximize reach, engagement, and ROI.',
    },
    intro: [
      'In a competitive digital landscape, smart marketing is essential. We craft data-informed strategies across SEO, paid media, social, content, and email to help your brand reach the right audience and convert interest into action.',
      'We align creative and analytics so every campaign supports measurable business outcomes.',
    ],
    highlights: [
      'Search and paid media optimization',
      'Social content and ad creative',
      'Content and email nurture flows',
      'Pre-event promotion for conferences and launches',
    ],
  },
];

function buildService({
  slug,
  categorySlug,
  title,
  metaDescription,
  intro,
  deliverables,
  audience,
  timeline,
  faqs,
  relatedWorkSlugs = [],
}) {
  return {
    slug,
    categorySlug,
    title,
    meta: {
      title: `${title} | Provoked Pixels`,
      description: metaDescription,
    },
    intro,
    sections: [
      {
        heading: 'What we deliver',
        body: 'We provide a focused scope with clear deliverables your team or vendors can implement without guesswork.',
        bullets: deliverables,
      },
      {
        heading: 'Who it\'s for',
        body: audience,
      },
      {
        heading: 'Typical timeline',
        body: timeline,
      },
    ],
    faqs,
    relatedWorkSlugs,
  };
}

const defaultFaqs = (serviceName) => [
  {
    question: `How do we get started with ${serviceName.toLowerCase()}?`,
    answer:
      'Share your event or project details via our contact form or email. We schedule a short discovery call, confirm scope, and provide a transparent proposal with timeline and deliverables.',
  },
  {
    question: 'Do you work with clients outside India?',
    answer:
      'Yes. We are based in India and collaborate with clients locally and internationally through video calls, email, and shared project tools.',
  },
];

export const SERVICES = [
  // Conference branding (12)
  buildService({
    slug: 'conference-brand-identity',
    categorySlug: 'conference-branding',
    title: 'Conference Brand Identity',
    metaDescription:
      'Complete conference brand identity—logo, color, typography, and guidelines for summits, congresses, and corporate events.',
    intro:
      'A strong conference brand identity anchors every touchpoint at your event. We develop a distinctive visual system—logo, palette, typography, and graphic language—that feels premium on stage, in the venue, and across digital channels.',
    deliverables: [
      'Primary and secondary logo lockups',
      'Color palette and typography system',
      'Graphic motifs and layout patterns',
      'Conference brand guidelines PDF',
      'Social and web application examples',
    ],
    audience:
      'Event organizers, associations, PCOs, and in-house marketing teams planning summits, congresses, trade shows, or multi-day corporate conferences.',
    timeline:
      'Brand identity projects typically run 4–8 weeks depending on stakeholder rounds. For fixed event dates, we recommend starting at least 10–12 weeks before the event.',
    faqs: [
      ...defaultFaqs('conference brand identity'),
      {
        question: 'Can you refresh an existing conference brand instead of starting from scratch?',
        answer:
          'Yes. We offer conference rebrands that preserve recognition while modernizing visuals—ideal for annual editions evolving their positioning.',
      },
    ],
    relatedWorkSlugs: ['abhyudaya-ornaments-1'],
  }),
  buildService({
    slug: 'event-logo-design',
    categorySlug: 'conference-branding',
    title: 'Event Logo Design',
    metaDescription:
      'Custom event and conference logo design—memorable marks for summits, annual meets, and themed editions.',
    intro:
      'Your event logo appears on badges, signage, presentations, and social posts—it must read clearly at every size. We design versatile event logos with variants for digital, print, and sponsor co-branding.',
    deliverables: [
      'Primary event logo and sub-mark',
      'Monochrome and reversed versions',
      'Favicon and social avatar exports',
      'Clear-space and minimum-size rules',
      'File package for vendors (AI, SVG, PNG)',
    ],
    audience:
      'Teams launching a new conference name, creating a themed edition (e.g. "Summit 2026"), or needing a standalone mark for a multi-track event program.',
    timeline: 'Logo design typically takes 2–4 weeks including revision rounds.',
    faqs: defaultFaqs('event logo design'),
    relatedWorkSlugs: ['abhyudaya-ornaments-1'],
  }),
  buildService({
    slug: 'conference-signage-design',
    categorySlug: 'conference-branding',
    title: 'Conference Signage & Wayfinding',
    metaDescription:
      'Conference signage and wayfinding design—registration, directional signs, session rooms, and venue branding.',
    intro:
      'Clear signage reduces friction and elevates the attendee experience. We design wayfinding systems, registration backdrops, session room signs, and directional graphics aligned with your conference identity—production-ready for your print partner.',
    deliverables: [
      'Registration and welcome desk artwork',
      'Directional and room identification signs',
      'Floor plan and zone graphics',
      'Icon set for amenities and tracks',
      'Print-ready files with dimensions noted',
    ],
    audience:
      'Venue-based conferences, hotel ballrooms, convention centers, and multi-floor events requiring consistent wayfinding.',
    timeline:
      'Signage packages are often finalized 4–6 weeks before the event once floor plans and session lists are confirmed.',
    faqs: defaultFaqs('conference signage'),
  }),
  buildService({
    slug: 'stage-backdrop-design',
    categorySlug: 'conference-branding',
    title: 'Stage & Backdrop Design',
    metaDescription:
      'Conference stage backdrop and key visual design for keynotes, panels, and award ceremonies.',
    intro:
      'The stage is the visual heart of your conference. We design keynote backdrops, LED wall key visuals, lower-third safe zones, and speaker holding slides so your program looks broadcast-ready and on-brand in photos and livestreams.',
    deliverables: [
      'Main stage backdrop artwork',
      'LED / projection specs and safe zones',
      'Speaker holding slide template',
      'Panel and fireside chat variants',
      'Photo-friendly composition guidance',
    ],
    audience:
      'Organizers of keynotes, plenary sessions, award nights, and hybrid streams where stage presence drives brand perception.',
    timeline:
      'Stage artwork is usually locked 3–5 weeks before the event; rush turnaround available when schedules require it.',
    faqs: defaultFaqs('stage backdrop design'),
  }),
  buildService({
    slug: 'conference-delegate-materials',
    categorySlug: 'conference-branding',
    title: 'Conference Delegate Materials',
    metaDescription:
      'Delegate badge, lanyard, program, and conference kit design for professional attendee experiences.',
    intro:
      'Delegate materials extend your brand into every attendee\'s hands. We design badges, lanyards, programs, tote inserts, and welcome kit items that feel cohesive, readable, and easy for registration teams to produce.',
    deliverables: [
      'Badge and lanyard card artwork',
      'Conference program / agenda booklet',
      'Welcome letter and kit insert designs',
      'Name tag hierarchy (delegate, speaker, VIP, staff)',
      'Print specs for badge printers',
    ],
    audience:
      'Conferences with physical check-in, multi-day agendas, and tiered attendee types requiring clear visual hierarchy.',
    timeline:
      'Delegate artwork often follows final badge data fields; allow 2–4 weeks before print cutoff.',
    faqs: defaultFaqs('delegate materials'),
  }),
  buildService({
    slug: 'exhibition-booth-branding',
    categorySlug: 'conference-branding',
    title: 'Exhibition & Booth Branding',
    metaDescription:
      'Exhibition booth and shell-scheme branding for trade shows, expo floors, and sponsor activations.',
    intro:
      'Stand out on the expo floor with booth branding that draws traffic and supports demos. We design shell-scheme wraps, pull-up banners, demo area graphics, and meeting pod visuals aligned with your conference or exhibitor identity.',
    deliverables: [
      'Booth backwall and side panel artwork',
      'Pull-up banners and standees',
      'Counter graphics and demo zone signage',
      'Meeting room / pod branding',
      'Vendor-ready print files',
    ],
    audience:
      'Exhibitors, title sponsors, and event organizers branding shared expo zones or innovation halls.',
    timeline:
      'Booth artwork typically needs venue dimension confirmation 4–6 weeks before build-up.',
    faqs: defaultFaqs('exhibition booth branding'),
  }),
  buildService({
    slug: 'conference-presentation-templates',
    categorySlug: 'conference-branding',
    title: 'Conference Presentation Templates',
    metaDescription:
      'Speaker presentation templates for conferences—PowerPoint and Google Slides masters on-brand for every session.',
    intro:
      'Inconsistent slides dilute your program\'s professionalism. We build speaker templates with title, content, chart, and quote layouts—easy for presenters to use while keeping typography, color, and logo placement on brand.',
    deliverables: [
      'Master slide deck (PPTX / Google Slides)',
      'Title, section, and content layouts',
      'Chart, table, and image slide variants',
      'Speaker instructions one-pager',
      'Optional holding slide for stage transitions',
    ],
    audience:
      'Conference producers managing dozens of speakers who need a simple, enforced visual standard.',
    timeline:
      'Templates are often delivered 6–8 weeks before the event so speakers can build decks early.',
    faqs: defaultFaqs('presentation templates'),
  }),
  buildService({
    slug: 'conference-sponsor-kit',
    categorySlug: 'conference-branding',
    title: 'Conference Sponsor Kit Design',
    metaDescription:
      'Sponsor kit and partner branding for conferences—logo usage, tier artwork, and recognition materials.',
    intro:
      'Sponsors expect clarity and visibility. We design sponsor kits with logo placement rules, tier lockups, recognition slides, and artwork templates so partnerships look premium and are easy for sponsors to implement.',
    deliverables: [
      'Sponsor logo usage guidelines',
      'Tier badge artwork (Gold, Silver, etc.)',
      'Recognition slide and signage templates',
      'Co-branded social and email headers',
      'Sponsor deliverable checklist for organizers',
    ],
    audience:
      'Events with multi-tier sponsorship programs needing consistent partner branding across venue and digital.',
    timeline:
      'Sponsor kits are best finalized before sales cycles close—often 3–6 months ahead of large events.',
    faqs: defaultFaqs('sponsor kit design'),
  }),
  buildService({
    slug: 'conference-website-design',
    categorySlug: 'conference-branding',
    title: 'Conference Website Design',
    metaDescription:
      'Conference and event website design—agenda, speakers, registration CTAs, and sponsor visibility.',
    intro:
      'Your event website is the hub for registration, agenda updates, and sponsor visibility. We design responsive conference sites and landing pages that convert visitors into delegates—with clear IA for speakers, schedule, venue, and FAQs.',
    deliverables: [
      'Homepage and registration landing design',
      'Agenda / schedule page layouts',
      'Speaker and sponsor page templates',
      'Mobile-optimized UI components',
      'Handoff for development or CMS build',
    ],
    audience:
      'Organizers needing a dedicated event microsite or annual conference website refresh.',
    timeline:
      'Event websites often launch 2–4 months before the conference; landing pages can ship faster for early-bird campaigns.',
    faqs: defaultFaqs('conference website design'),
    relatedWorkSlugs: ['abhyudaya-ornaments-2'],
  }),
  buildService({
    slug: 'conference-marketing-design',
    categorySlug: 'conference-branding',
    title: 'Conference Marketing Design',
    metaDescription:
      'Pre-event conference marketing creatives—social templates, email headers, ads, and speaker announcement kits.',
    intro:
      'Build momentum before doors open. We create social media templates, email headers, digital ads, and speaker announcement kits so your marketing team can promote consistently from save-the-date through last-call registration.',
    deliverables: [
      'Social post and story templates',
      'Speaker announcement graphics',
      'Email header and banner set',
      'Paid ad creative sizes (Meta, LinkedIn)',
      'Campaign calendar visual checklist',
    ],
    audience:
      'Marketing teams running multi-channel pre-event campaigns with frequent content needs.',
    timeline:
      'Marketing kits are often delivered 8–12 weeks before the event alongside brand identity lock-up.',
    faqs: defaultFaqs('conference marketing design'),
    relatedWorkSlugs: ['abhyudaya-ornaments-2'],
  }),
  buildService({
    slug: 'virtual-event-branding',
    categorySlug: 'conference-branding',
    title: 'Virtual & Hybrid Event Branding',
    metaDescription:
      'Virtual and hybrid event branding—stream overlays, digital backdrops, lower thirds, and online session graphics.',
    intro:
      'Hybrid and virtual programs need branding that works on screen. We design stream overlays, virtual stage backdrops, lower thirds, break-out room holding slides, and platform-specific assets for webinars and broadcast-style conferences.',
    deliverables: [
      'Stream overlay and lower-third pack',
      'Virtual stage / Zoom backdrop designs',
      'Session title and intermission slides',
      'Breakout room branding',
      'Platform export specs (16:9, safe zones)',
    ],
    audience:
      'Organizers running hybrid plenaries, virtual summits, or parallel online tracks alongside in-person programs.',
    timeline:
      'Virtual asset packs typically finalize 3–4 weeks before first rehearsal or dry run.',
    faqs: defaultFaqs('virtual event branding'),
  }),
  buildService({
    slug: 'conference-rebrand',
    categorySlug: 'conference-branding',
    title: 'Conference Rebrand & Refresh',
    metaDescription:
      'Conference rebrand services—evolve your annual event identity while keeping recognition year on year.',
    intro:
      'Annual conferences often need evolution, not reinvention. We refresh logos, color systems, and templates while preserving equity—so returning attendees recognize the event while sensing growth and relevance.',
    deliverables: [
      'Brand audit and refresh strategy',
      'Updated logo and visual system',
      'Migration guide for existing assets',
      'Template updates (slides, social, signage)',
      'Rollout plan for edition transition',
    ],
    audience:
      'Established conferences updating positioning, merging tracks, or modernizing after a multi-year visual run.',
    timeline:
      'Rebrand timelines vary; 6–10 weeks is common when updating templates across print and digital.',
    faqs: defaultFaqs('conference rebrand'),
    relatedWorkSlugs: ['abhyudaya-ornaments-3'],
  }),

  // Web design (8)
  buildService({
    slug: 'ui-ux-design',
    categorySlug: 'web-design',
    title: 'UI/UX Design Services',
    metaDescription:
      'UI/UX design for websites and web apps—user flows, wireframes, and interfaces that convert.',
    intro:
      'Great experiences start with understanding users. We map journeys, wireframe key flows, and design interfaces that are intuitive, accessible, and aligned with your business goals.',
    deliverables: ['User flow diagrams', 'Wireframes', 'High-fidelity UI screens', 'Interactive prototypes', 'Design system components'],
    audience: 'Businesses launching new sites, products, or redesigning flows with conversion or usability gaps.',
    timeline: 'UI/UX phases typically run 2–5 weeks depending on page count and complexity.',
    faqs: defaultFaqs('UI/UX design'),
  }),
  buildService({
    slug: 'website-design',
    categorySlug: 'web-design',
    title: 'Custom Website Design',
    metaDescription:
      'Custom business website design—corporate, portfolio, and service sites built for clarity and conversion.',
    intro:
      'We design custom websites tailored to your brand and audience—structured for clarity, credibility, and action. Every layout supports your content strategy and growth plans.',
    deliverables: ['Homepage and inner page designs', 'Responsive layouts', 'Component library', 'Developer handoff specs', 'Content placement guidance'],
    audience: 'Companies needing a professional web presence beyond template solutions.',
    timeline: 'Most custom site designs take 4–8 weeks from discovery to final UI.',
    faqs: defaultFaqs('website design'),
  }),
  buildService({
    slug: 'ecommerce-website-design',
    categorySlug: 'web-design',
    title: 'E-commerce Website Design',
    metaDescription:
      'E-commerce website design—product listings, checkout UX, and storefronts that drive sales.',
    intro:
      'We design e-commerce experiences that showcase products beautifully and simplify checkout—reducing friction from browse to purchase on mobile and desktop.',
    deliverables: ['Storefront and category templates', 'Product detail layouts', 'Cart and checkout UX', 'Promotional banner system', 'Mobile shopping patterns'],
    audience: 'Retailers, D2C brands, and catalog businesses scaling online sales.',
    timeline: 'E-commerce design projects often run 6–10 weeks including catalog structure planning.',
    faqs: defaultFaqs('e-commerce design'),
  }),
  buildService({
    slug: 'landing-page-design',
    categorySlug: 'web-design',
    title: 'Landing Page Design',
    metaDescription:
      'High-converting landing page design for campaigns, product launches, and event registration.',
    intro:
      'Focused landing pages turn traffic into leads and registrations. We design single-purpose pages with clear hierarchy, trust signals, and CTAs optimized for your campaign goal.',
    deliverables: ['Hero and offer structure', 'Social proof sections', 'Form and CTA placement', 'Mobile-first layout', 'A/B-ready variant options'],
    audience: 'Teams running ads, product launches, webinars, or conference registration drives.',
    timeline: 'Landing pages can often be designed in 1–3 weeks.',
    faqs: defaultFaqs('landing page design'),
  }),
  buildService({
    slug: 'website-redesign',
    categorySlug: 'web-design',
    title: 'Website Redesign',
    metaDescription:
      'Website redesign services—modernize UX, visuals, and performance while preserving what works.',
    intro:
      'Outdated sites cost trust and conversions. We audit your current site, retain strengths, and redesign UX, visuals, and content structure for today\'s users and search expectations.',
    deliverables: ['Site audit summary', 'Updated IA and wireframes', 'New visual design system', 'Template redesigns', 'Migration recommendations'],
    audience: 'Businesses with aging sites, rebrand initiatives, or shifting product focus.',
    timeline: 'Redesigns typically span 6–12 weeks depending on scope and content volume.',
    faqs: defaultFaqs('website redesign'),
    relatedWorkSlugs: ['abhyudaya-ornaments-3'],
  }),
  buildService({
    slug: 'wordpress-website-design',
    categorySlug: 'web-design',
    title: 'WordPress Website Design',
    metaDescription:
      'WordPress website design—custom themes and editable layouts for marketing teams.',
    intro:
      'We design WordPress-ready sites that balance brand expression with easy content updates—ideal for teams that need marketing agility without sacrificing design quality.',
    deliverables: ['Custom theme design', 'Gutenberg/block patterns', 'Blog and resource templates', 'Style guide for editors', 'Developer-ready assets'],
    audience: 'Organizations standardizing on WordPress for marketing and content publishing.',
    timeline: 'WordPress design projects usually run 5–8 weeks including template planning.',
    faqs: defaultFaqs('WordPress design'),
  }),
  buildService({
    slug: 'website-maintenance',
    categorySlug: 'web-design',
    title: 'Website Maintenance & Support',
    metaDescription:
      'Website maintenance and design support—updates, fixes, and iterative improvements.',
    intro:
      'Sites need ongoing care. We support design updates, content changes, bug fixes, and iterative UX improvements so your site stays current and reliable.',
    deliverables: ['Content and layout updates', 'Design tweak requests', 'QA after changes', 'Monthly improvement backlog', 'Priority support channel'],
    audience: 'Teams without in-house design/dev capacity post-launch.',
    timeline: 'Support engagements are ongoing—response SLAs defined in your plan.',
    faqs: defaultFaqs('website maintenance'),
  }),
  buildService({
    slug: 'website-performance-optimization',
    categorySlug: 'web-design',
    title: 'Website Performance Optimization',
    metaDescription:
      'Website speed and performance optimization—faster loads, better Core Web Vitals, improved UX.',
    intro:
      'Slow sites lose visitors and rankings. We optimize layouts, assets, and implementation guidance to improve load times and Core Web Vitals alongside visual quality.',
    deliverables: ['Performance audit', 'Image and asset guidelines', 'Layout simplification recommendations', 'Critical path improvements', 'Before/after metrics review'],
    audience: 'Sites with high bounce, poor mobile scores, or SEO pressure on speed metrics.',
    timeline: 'Optimization sprints often run 2–4 weeks depending on site complexity.',
    faqs: defaultFaqs('performance optimization'),
  }),

  // Branding & graphic design (8)
  buildService({
    slug: 'logo-design',
    categorySlug: 'branding-and-graphic-design',
    title: 'Logo Design Services',
    metaDescription:
      'Professional logo design—memorable marks and versatile lockups for growing brands.',
    intro:
      'A strong logo is the cornerstone of recognition. We design distinctive marks with clear variants for digital, print, and small-size applications.',
    deliverables: ['Primary logo and sub-mark', 'Color and monochrome versions', 'Clear-space rules', 'Social and favicon exports', 'Source files for vendors'],
    audience: 'Startups, rebrands, and product lines needing a definitive visual anchor.',
    timeline: 'Logo projects typically take 2–4 weeks.',
    faqs: defaultFaqs('logo design'),
    relatedWorkSlugs: ['abhyudaya-ornaments-1'],
  }),
  buildService({
    slug: 'brand-identity-design',
    categorySlug: 'branding-and-graphic-design',
    title: 'Brand Identity Design',
    metaDescription:
      'Full brand identity design—visual systems, guidelines, and assets for consistent brand expression.',
    intro:
      'Beyond the logo, identity is how your brand feels everywhere. We build cohesive systems—color, type, imagery, and patterns—with guidelines teams can follow.',
    deliverables: ['Logo system', 'Color, type, and imagery direction', 'Stationery and digital templates', 'Brand guidelines document', 'Launch asset pack'],
    audience: 'Businesses formalizing or refreshing how they present across touchpoints.',
    timeline: 'Identity systems often take 4–8 weeks.',
    faqs: defaultFaqs('brand identity design'),
    relatedWorkSlugs: ['abhyudaya-ornaments-1', 'abhyudaya-ornaments-3'],
  }),
  buildService({
    slug: 'social-media-design',
    categorySlug: 'branding-and-graphic-design',
    title: 'Social Media Design',
    metaDescription:
      'Social media graphic design—templates, campaigns, and on-brand content for every platform.',
    intro:
      'Consistent social creatives build trust and engagement. We design templates and campaign assets tailored to your platforms and content rhythm.',
    deliverables: ['Post and story templates', 'Campaign creative sets', 'Profile and cover artwork', 'Carousel and reel cover frames', 'Editable template files'],
    audience: 'Brands publishing regularly on Instagram, LinkedIn, Facebook, and emerging channels.',
    timeline: 'Template systems often deliver in 2–4 weeks; campaigns vary by volume.',
    faqs: defaultFaqs('social media design'),
    relatedWorkSlugs: ['abhyudaya-ornaments-2'],
  }),
  buildService({
    slug: 'packaging-design',
    categorySlug: 'branding-and-graphic-design',
    title: 'Packaging Design',
    metaDescription:
      'Product packaging design—shelf-ready visuals that communicate quality and drive purchase.',
    intro:
      'Packaging is your product\'s handshake at point of sale. We design labels, boxes, and retail-ready artwork that align with your brand and regulatory needs.',
    deliverables: ['Concept directions', 'Final dieline-ready artwork', 'Material and finish notes', 'SKU variant layouts', 'Print vendor coordination support'],
    audience: 'CPG, retail, gifting, and specialty product brands entering or refreshing retail.',
    timeline: 'Packaging timelines depend on print proofing—often 4–8 weeks.',
    faqs: defaultFaqs('packaging design'),
  }),
  buildService({
    slug: 'marketing-collateral-design',
    categorySlug: 'branding-and-graphic-design',
    title: 'Marketing Collateral Design',
    metaDescription:
      'Brochures, flyers, and marketing collateral design for sales and events.',
    intro:
      'Print and PDF collateral still close deals. We design brochures, one-pagers, flyers, and sales kits that communicate value clearly and look polished in hand.',
    deliverables: ['Brochures and one-pagers', 'Flyers and handouts', 'Sales deck PDFs', 'Event handouts', 'Print-ready exports'],
    audience: 'Sales teams, event exhibitors, and B2B marketers needing tangible leave-behinds.',
    timeline: 'Single pieces can ship in 1–2 weeks; full kits may take 3–5 weeks.',
    faqs: defaultFaqs('marketing collateral design'),
  }),
  buildService({
    slug: 'infographic-design',
    categorySlug: 'branding-and-graphic-design',
    title: 'Infographic Design',
    metaDescription:
      'Infographic design—turn complex data and processes into clear, shareable visuals.',
    intro:
      'Infographics make complex stories scannable. We structure data, process flows, and comparisons into visuals optimized for web, presentations, and print.',
    deliverables: ['Content structure wireframe', 'Final infographic artwork', 'Social crop variants', 'Editable source files', 'Icon and chart styling'],
    audience: 'Teams explaining research, product benefits, or internal processes externally.',
    timeline: 'Single infographics often take 1–2 weeks.',
    faqs: defaultFaqs('infographic design'),
  }),
  buildService({
    slug: 'print-design',
    categorySlug: 'branding-and-graphic-design',
    title: 'Print Design Services',
    metaDescription:
      'Professional print design—posters, banners, stationery, and production-ready artwork.',
    intro:
      'Print demands precision. We design posters, banners, stationery, and large-format pieces with correct bleed, color modes, and vendor specs.',
    deliverables: ['Poster and banner artwork', 'Business stationery', 'Large-format event print', 'Print spec documentation', 'Preflight-ready files'],
    audience: 'Brands and events needing reliable print production partners.',
    timeline: 'Turnaround depends on print vendor schedules—design usually 1–3 weeks per piece.',
    faqs: defaultFaqs('print design'),
  }),
  buildService({
    slug: 'presentation-design',
    categorySlug: 'branding-and-graphic-design',
    title: 'Presentation Design',
    metaDescription:
      'Presentation and pitch deck design—investor decks, sales slides, and keynote visuals.',
    intro:
      'High-stakes decks deserve more than default templates. We design pitch decks, sales presentations, and keynote slides with narrative flow and on-brand visuals.',
    deliverables: ['Slide master template', 'Custom chart and diagram styling', 'Speaker notes layout', 'PDF export for sharing', 'Editable PPTX / Google Slides'],
    audience: 'Founders, sales leaders, and executives presenting to investors or enterprise buyers.',
    timeline: 'Decks typically take 2–4 weeks depending on slide count and data complexity.',
    faqs: defaultFaqs('presentation design'),
  }),

  // Digital marketing (8)
  buildService({
    slug: 'seo-services',
    categorySlug: 'digital-marketing',
    title: 'SEO Services',
    metaDescription:
      'Search engine optimization—technical, on-page, and content SEO to grow organic visibility.',
    intro:
      'Organic search drives sustainable traffic. We improve site structure, on-page content, and technical foundations so your audience finds you for the right queries.',
    deliverables: ['SEO audit', 'Keyword and content map', 'On-page optimization plan', 'Technical recommendations', 'Monthly performance reporting'],
    audience: 'Businesses investing in long-term visibility beyond paid channels.',
    timeline: 'Meaningful SEO gains typically build over 3–6 months; audits start within 2 weeks.',
    faqs: defaultFaqs('SEO services'),
  }),
  buildService({
    slug: 'local-seo',
    categorySlug: 'digital-marketing',
    title: 'Local SEO Services',
    metaDescription:
      'Local SEO for businesses—maps visibility, local listings, and geo-targeted content.',
    intro:
      'Local customers search nearby first. We optimize listings, local landing pages, and reviews strategy so you show up when it matters in your market.',
    deliverables: ['Google Business Profile optimization', 'Local citation audit', 'Location page templates', 'Review response guidelines', 'Local rank tracking setup'],
    audience: 'Retail, services, and multi-location brands competing in specific cities or regions.',
    timeline: 'Local SEO programs often run 3+ months with initial setup in 2–4 weeks.',
    faqs: defaultFaqs('local SEO'),
  }),
  buildService({
    slug: 'google-ads-ppc',
    categorySlug: 'digital-marketing',
    title: 'Google Ads & PPC Management',
    metaDescription:
      'Google Ads and PPC campaign setup and management—search and display ads that convert.',
    intro:
      'Paid search captures intent now. We structure campaigns, write ads, and optimize bids and landing alignment to maximize return on ad spend.',
    deliverables: ['Account and campaign structure', 'Ad copy and extensions', 'Conversion tracking setup', 'Landing page alignment review', 'Ongoing optimization reports'],
    audience: 'Businesses with defined offers ready to scale through paid search and display.',
    timeline: 'Campaign launches often within 2–3 weeks after tracking and landing pages are ready.',
    faqs: defaultFaqs('Google Ads'),
  }),
  buildService({
    slug: 'social-media-marketing',
    categorySlug: 'digital-marketing',
    title: 'Social Media Marketing',
    metaDescription:
      'Social media marketing—content planning, community growth, and platform strategy.',
    intro:
      'Social channels build relationships at scale. We plan content calendars, manage campaigns, and align organic and paid social with your brand voice.',
    deliverables: ['Platform strategy', 'Content calendar', 'Post copy and creative direction', 'Community engagement guidelines', 'Performance dashboards'],
    audience: 'Brands building awareness, trust, and leads through social platforms.',
    timeline: 'Strategy deliverables in 2–3 weeks; ongoing programs monthly.',
    faqs: defaultFaqs('social media marketing'),
    relatedWorkSlugs: ['abhyudaya-ornaments-2'],
  }),
  buildService({
    slug: 'content-marketing',
    categorySlug: 'digital-marketing',
    title: 'Content Marketing',
    metaDescription:
      'Content marketing strategy and assets—blogs, guides, and funnels that educate and convert.',
    intro:
      'Useful content attracts and nurtures leads. We plan topics, produce assets, and map content to funnel stages aligned with SEO and sales goals.',
    deliverables: ['Content strategy and pillars', 'Blog and guide outlines', 'Asset production (with design support)', 'Distribution plan', 'Performance review'],
    audience: 'B2B and B2C brands investing in inbound and thought leadership.',
    timeline: 'Strategy in 2–4 weeks; production cadence defined monthly.',
    faqs: defaultFaqs('content marketing'),
  }),
  buildService({
    slug: 'email-marketing',
    categorySlug: 'digital-marketing',
    title: 'Email Marketing',
    metaDescription:
      'Email marketing design and campaigns—newsletters, nurture flows, and promotional sends.',
    intro:
      'Email remains one of the highest-ROI channels. We design templates, write campaign frameworks, and build flows for onboarding, nurture, and promotion.',
    deliverables: ['Email template design', 'Campaign copy frameworks', 'Automation flow maps', 'List segmentation guidance', 'A/B test recommendations'],
    audience: 'Brands with lists or lead magnets ready to nurture and convert via email.',
    timeline: 'Template systems in 2–3 weeks; flows vary by complexity.',
    faqs: defaultFaqs('email marketing'),
  }),
  buildService({
    slug: 'social-media-ads',
    categorySlug: 'digital-marketing',
    title: 'Social Media Advertising',
    metaDescription:
      'Social media ad creative and campaign setup for Meta, LinkedIn, and more.',
    intro:
      'Paid social amplifies your best offers. We design ad creatives, define audiences, and structure campaigns on Meta, LinkedIn, and other platforms.',
    deliverables: ['Ad creative sets', 'Audience and placement strategy', 'Campaign structure', 'Landing alignment', 'Performance reporting'],
    audience: 'Teams running lead gen, event promotion, or e-commerce through social ads.',
    timeline: 'Creative and launch often within 2–4 weeks.',
    faqs: defaultFaqs('social media ads'),
  }),
  buildService({
    slug: 'marketing-strategy',
    categorySlug: 'digital-marketing',
    title: 'Marketing Strategy & Consulting',
    metaDescription:
      'Marketing strategy consulting—channel mix, positioning, and campaign planning.',
    intro:
      'Before tactics, you need direction. We audit your market, define positioning, and recommend channel mix, messaging, and campaign priorities tied to business goals.',
    deliverables: ['Market and competitor review', 'Positioning summary', 'Channel and budget recommendations', '90-day action plan', 'KPI framework'],
    audience: 'Leadership teams aligning marketing investment with growth targets.',
    timeline: 'Strategy engagements typically run 3–5 weeks.',
    faqs: defaultFaqs('marketing strategy'),
  }),
];

export function getAllCategories() {
  return SERVICE_CATEGORIES;
}

export function getCategoryBySlug(slug) {
  return SERVICE_CATEGORIES.find((category) => category.slug === slug) ?? null;
}

export function getFeaturedCategory() {
  return SERVICE_CATEGORIES.find((category) => category.featured) ?? null;
}

export function getAllServices() {
  return SERVICES;
}

export function getServicesByCategory(categorySlug) {
  return SERVICES.filter((service) => service.categorySlug === categorySlug);
}

export function getServiceBySlugs(categorySlug, serviceSlug) {
  return (
    SERVICES.find(
      (service) => service.categorySlug === categorySlug && service.slug === serviceSlug,
    ) ?? null
  );
}

export function getAdjacentServices(categorySlug, serviceSlug) {
  const categoryServices = getServicesByCategory(categorySlug);
  const index = categoryServices.findIndex((service) => service.slug === serviceSlug);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index > 0 ? categoryServices[index - 1] : null,
    next: index < categoryServices.length - 1 ? categoryServices[index + 1] : null,
  };
}

export function getStaticCategoryParams() {
  return SERVICE_CATEGORIES.map((category) => ({ category: category.slug }));
}

export function getStaticServiceParams() {
  return SERVICES.map((service) => ({
    category: service.categorySlug,
    service: service.slug,
  }));
}
