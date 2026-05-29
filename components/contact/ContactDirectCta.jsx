const CHANNELS = [
  {
    icon: 'fa-solid fa-phone',
    label: 'Call us',
    value: '+91 92281 91969',
    href: 'tel:+919228191969',
    buttonLabel: 'Call now',
  },
  {
    icon: 'fa-solid fa-envelope',
    label: 'Email us',
    value: 'hi@provoked.in',
    href: 'mailto:hi@provoked.in',
    buttonLabel: 'Send email',
  },
];

export default function ContactDirectCta() {
  return (
    <aside className="contact-direct-cta" data-aos="fade-up" data-aos-delay="100">
      <div className="contact-direct-cta__accent" aria-hidden="true" />
      <div className="contact-direct-cta__icon-wrap">
        <i className="fa-solid fa-headset" aria-hidden="true" />
      </div>
      <p className="contact-direct-cta__badge">Quick contact</p>
      <h3 className="contact-direct-cta__title">Prefer a direct call?</h3>
      <p className="contact-direct-cta__text">
        Skip the form—we&apos;re happy to talk through your project on a quick call or email.
      </p>
      <ul className="contact-direct-cta__channels">
        {CHANNELS.map((channel) => (
          <li key={channel.href}>
            <a href={channel.href} className="contact-direct-cta__channel">
              <span className="contact-direct-cta__channel-icon">
                <i className={channel.icon} aria-hidden="true" />
              </span>
              <span className="contact-direct-cta__channel-body">
                <span className="contact-direct-cta__channel-label">{channel.label}</span>
                <span className="contact-direct-cta__channel-value">{channel.value}</span>
              </span>
              <span className="contact-direct-cta__channel-action">{channel.buttonLabel}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="contact-direct-cta__meta">
        <i className="fa-regular fa-clock me-2" aria-hidden="true" />
        Monday – Friday, 10:00 AM – 6:00 PM IST
      </p>
      <p className="contact-direct-cta__meta mb-0">
        <i className="fa-solid fa-bolt me-2" aria-hidden="true" />
        Typical response within 1–2 business days
      </p>
    </aside>
  );
}
