'use client';

import { useState } from 'react';
import { CONTACT_FAQS } from '@/content/contactFaqs';

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="contact-section contact-faq" data-aos="fade-up">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto contact-section-inner">
          <p className="badge text-primary bg-primary-subtle rounded-pill fs-6 mb-3">
            FAQs
          </p>
          <h2 className="heading">Common questions</h2>
          <p className="sub-heading">
            Answers to questions we often hear about starting a project, timelines, pricing, and
            how we work.
          </p>
          <div className="contact-faq-accordion">
            {CONTACT_FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              const headingId = `contact-faq-heading-${index}`;
              const panelId = `contact-faq-panel-${index}`;

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
        </div>
      </div>
    </section>
  );
}
