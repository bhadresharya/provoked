'use client';

import { useState } from 'react';

export default function ServiceFaq({ faqs, title = 'Common questions' }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs?.length) return null;

  return (
    <section className="expertise-section service-faq" data-aos="fade-up">
      <h2 className="heading h4 mb-4">{title}</h2>
      <div className="contact-faq-accordion">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const headingId = `service-faq-heading-${index}`;
          const panelId = `service-faq-panel-${index}`;

          return (
            <div className="contact-faq-item" key={faq.question}>
              <h3 className="h6 mb-0">
                <button
                  type="button"
                  className="contact-faq-trigger"
                  id={headingId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <i
                    className={`fa-solid fa-chevron-down contact-faq-icon${isOpen ? ' is-open' : ''}`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={headingId}
                className={`contact-faq-panel${isOpen ? ' is-open' : ''}`}
              >
                <p className="text-muted mb-0">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
