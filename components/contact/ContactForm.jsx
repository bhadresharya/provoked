'use client';

import { useState } from 'react';
import ContactDirectCta from '@/components/contact/ContactDirectCta';
import {
  CONTACT_FORM_ACTION,
  CONTACT_FORM_ENABLED,
} from '@/content/contactForm';

const PROJECT_TYPES = [
  'Web Design',
  'Branding & Graphic Design',
  'Digital Marketing',
  'Website Redesign',
  'Other',
];

export default function ContactForm() {
  const [submitNotice, setSubmitNotice] = useState('');

  const handleSubmit = (e) => {
    if (CONTACT_FORM_ENABLED) return;

    e.preventDefault();
    setSubmitNotice(
      'Online submissions are not configured yet. Please email hi@provoked.in or call +91 92281 91969.',
    );
  };

  return (
    <section className="contact-section contact-form-section" data-aos="fade-up">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto contact-section-inner">
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="contact-form-card h-100">
                <div className="contact-form-card__header">
                  <p className="badge text-primary bg-primary-subtle rounded-pill fs-6 mb-3">
                    Project inquiry
                  </p>
                  <h2 className="heading mb-2">Start your project</h2>
                  <p className="contact-form-card__intro mb-0">
                    Fill out the form and we&apos;ll get back to you within 1–2 business days.
                  </p>
                </div>
                <form
                  className="contact-form"
                  action={CONTACT_FORM_ENABLED ? CONTACT_FORM_ACTION : undefined}
                  method="POST"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="contact-field">
                        <label htmlFor="contact-name" className="contact-label">
                          Name <span className="contact-required">*</span>
                        </label>
                        <input
                          type="text"
                          className="contact-input"
                          id="contact-name"
                          name="name"
                          placeholder="Your full name"
                          autoComplete="name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-field">
                        <label htmlFor="contact-email" className="contact-label">
                          Email <span className="contact-required">*</span>
                        </label>
                        <input
                          type="email"
                          className="contact-input"
                          id="contact-email"
                          name="email"
                          placeholder="you@company.com"
                          autoComplete="email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-field">
                        <label htmlFor="contact-company" className="contact-label">
                          Company
                          <span className="contact-optional">(optional)</span>
                        </label>
                        <input
                          type="text"
                          className="contact-input"
                          id="contact-company"
                          name="company"
                          placeholder="Your company name"
                          autoComplete="organization"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="contact-field">
                        <label htmlFor="contact-type" className="contact-label">
                          Project type <span className="contact-required">*</span>
                        </label>
                        <div className="contact-select-wrap">
                          <select
                            className="contact-input contact-select"
                            id="contact-type"
                            name="projectType"
                            defaultValue=""
                            required
                          >
                            <option value="" disabled>
                              Select a service
                            </option>
                            {PROJECT_TYPES.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                          <i
                            className="fa-solid fa-chevron-down contact-select-icon"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contact-field">
                        <label htmlFor="contact-message" className="contact-label">
                          Tell us about your project <span className="contact-required">*</span>
                        </label>
                        <textarea
                          className="contact-input contact-textarea"
                          id="contact-message"
                          name="message"
                          rows={5}
                          placeholder="Share your goals, timeline, budget range, and anything else we should know."
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contact-form__actions">
                        {submitNotice && (
                          <p className="contact-form__notice text-muted mb-0" role="status">
                            {submitNotice}
                          </p>
                        )}
                        <button type="submit" className="btn btn-primary contact-submit rounded-pill">
                          Send message
                          <i className="fa-solid fa-paper-plane ms-2" aria-hidden="true" />
                        </button>
                        <p className="contact-form__note mb-0">
                          By submitting, you agree to be contacted about your inquiry.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-sidebar">
                <div className="card border-0 shadow-sm contact-card mb-4">
                  <div className="card-body p-4">
                    <h3 className="h5 mb-3">Why work with us?</h3>
                    <ul className="contact-list mb-0">
                      <li>Creative design backed by strategy</li>
                      <li>Clear communication at every stage</li>
                      <li>Custom solutions for your business goals</li>
                      <li>Experience across branding, web, and marketing</li>
                    </ul>
                  </div>
                </div>
                <ContactDirectCta />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
