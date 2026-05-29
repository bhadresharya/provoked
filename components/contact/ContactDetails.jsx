const CONTACT_ITEMS = [
  {
    icon: 'fa-solid fa-phone',
    label: 'Phone',
    value: '+91 92281 91969',
    href: 'tel:+919228191969',
  },
  {
    icon: 'fa-solid fa-envelope',
    label: 'Email',
    value: 'hi@provoked.in',
    href: 'mailto:hi@provoked.in',
  },
  {
    icon: 'fa-solid fa-clock',
    label: 'Office hours',
    value: 'Monday – Friday, 10:00 AM – 6:00 PM IST',
  },
  {
    icon: 'fa-solid fa-location-dot',
    label: 'Location',
    value: 'India (Remote & on-site by appointment)',
  },
];

export default function ContactDetails() {
  return (
    <section className="contact-section contact-details" data-aos="fade-up">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto contact-section-inner">
          <p className="badge text-primary bg-primary-subtle rounded-pill fs-6 mb-3">
            Get in touch
          </p>
          <h2 className="heading">We&apos;d love to hear about your project</h2>
          <p className="sub-heading">
            Whether you need a new website, a brand refresh, or a full digital marketing strategy,
            our team is ready to help you build something impactful.
          </p>
          <div className="row g-4">
            {CONTACT_ITEMS.map((item) => (
              <div className="col-md-6" key={item.label}>
                <div className="card h-100 border-0 shadow-sm contact-card">
                  <div className="card-body">
                    <i className={`${item.icon} text-primary mb-3`} aria-hidden="true" />
                    <p className="text-muted small mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-dark text-decoration-none fw-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mb-0 fw-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
