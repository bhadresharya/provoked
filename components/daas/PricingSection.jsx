'use client';

import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { useBooking } from '@/components/daas/BookingProvider';
import PaymentTrustNote from '@/components/daas/PaymentTrustNote';
import { DAAS_PRICING } from '@/content/daasPricing';
import { trackEvent } from '@/lib/analytics';

export default function PricingSection() {
  const { id, eyebrow, title, description, plan, comparisons, trustNotes } = DAAS_PRICING;
  const { openBooking } = useBooking();
  const compareItems = comparisons?.items ?? [];
  const sectionRef = useRef(null);
  const viewedRef = useRef(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || viewedRef.current) return;
        viewedRef.current = true;
        trackEvent('pricing_view');
        observer.disconnect();
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="daas-section daas-pricing"
      aria-labelledby="daas-pricing-heading"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <header className="daas-pricing__header text-center">
              <p className="daas-eyebrow">{eyebrow}</p>
              <h2 id="daas-pricing-heading" className="daas-pricing__headline">
                {title}
              </h2>
              <p className="daas-pricing__lead">{description}</p>
            </header>

            <article className="daas-pricing__panel">
              <div className="daas-pricing__offer">
                <p className="daas-pricing__pause">{plan.pauseLabel}</p>
                <h3 className="daas-pricing__name">{plan.name}</h3>
                {plan.highlight ? (
                  <p className="daas-pricing__highlight">{plan.highlight}</p>
                ) : null}
                <div className="daas-pricing__price">
                  <span className="daas-pricing__amount">{plan.price.display}</span>
                  <span className="daas-pricing__suffix">{plan.price.suffix}</span>
                </div>
                <div className="daas-pricing__actions">
                  <button
                    type="button"
                    className="btn btn-primary daas-btn w-100"
                    onClick={() => openBooking('pricing')}
                  >
                    {plan.ctaLabel}
                  </button>
                  <PaymentTrustNote />
                </div>
              </div>

              <div className="daas-pricing__includes">
                <h4 className="daas-pricing__includes-title">What’s included</h4>
                <ul className="daas-pricing__features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <Check size={16} strokeWidth={2.25} aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {compareItems.length ? (
              <aside className="daas-pricing__compare" aria-label="Cost comparison">
                <p className="daas-pricing__compare-eyebrow">{comparisons.eyebrow}</p>
                <div className="daas-pricing__compare-grid">
                  {compareItems.map((item) => (
                    <div key={item.label} className="daas-pricing__compare-card">
                      <p className="daas-pricing__compare-label">{item.label}</p>
                      <p className="daas-pricing__compare-value">{item.value}</p>
                      <p className="daas-pricing__compare-note mb-0">{item.note}</p>
                    </div>
                  ))}
                </div>
              </aside>
            ) : null}

            {trustNotes?.length ? (
              <div className="daas-pricing__trust">
                {trustNotes.map((note) => (
                  <div key={note.title} className="daas-pricing__trust-card">
                    <h3 className="daas-pricing__trust-title">{note.title}</h3>
                    <p className="daas-pricing__trust-text mb-0">{note.description}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
