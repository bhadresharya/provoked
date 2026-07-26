'use client';

import { ArrowRight } from 'lucide-react';
import { useBooking } from '@/components/daas/BookingProvider';
import PaymentTrustNote from '@/components/daas/PaymentTrustNote';
import { DAAS_FINAL_CTA } from '@/content/daasFinalCta';

export default function FinalCta() {
  const {
    id,
    eyebrow,
    title,
    description,
    priceLabel,
    priceSuffix,
    primaryLabel,
    secondaryLabel,
    secondaryHref,
    showPaymentTrust,
  } = DAAS_FINAL_CTA;
  const { openBooking } = useBooking();

  return (
    <section id={id} className="daas-section daas-final-cta" aria-labelledby="daas-final-cta-heading">
      <div className="daas-final-cta__glow" aria-hidden="true" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="daas-eyebrow daas-final-cta__eyebrow">{eyebrow}</p>
            <p className="daas-final-cta__price">
              <span className="daas-final-cta__amount">{priceLabel}</span>
              <span className="daas-final-cta__suffix">{priceSuffix}</span>
            </p>
            <h2 id="daas-final-cta-heading" className="daas-final-cta__headline">
              {title}
            </h2>
            <p className="daas-final-cta__lead">{description}</p>
            <div className="daas-final-cta__actions">
              <button type="button" className="btn btn-primary daas-btn" onClick={() => openBooking('final_cta')}>
                {primaryLabel}
                <ArrowRight size={18} strokeWidth={2.25} aria-hidden="true" />
              </button>
              <a href={secondaryHref} className="btn daas-btn daas-final-cta__ghost">
                {secondaryLabel}
              </a>
            </div>
            {showPaymentTrust ? <PaymentTrustNote tone="dark" /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
