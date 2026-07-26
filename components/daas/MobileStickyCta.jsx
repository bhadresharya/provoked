'use client';

import { useBooking } from '@/components/daas/BookingProvider';
import { DAAS_PRICING } from '@/content/daasPricing';

export default function MobileStickyCta() {
  const { openBooking, isOpen } = useBooking();
  const { plan } = DAAS_PRICING;

  if (isOpen) return null;

  return (
    <div className="daas-mobile-cta d-lg-none" role="region" aria-label="Book a call">
      <div className="daas-mobile-cta__inner">
        <div className="daas-mobile-cta__price">
          <span className="daas-mobile-cta__amount">{plan.price.display}</span>
          <span className="daas-mobile-cta__suffix">{plan.price.suffix}</span>
        </div>
        <button type="button" className="btn btn-primary daas-btn-sm daas-mobile-cta__btn" onClick={() => openBooking('mobile_sticky')}>
          Book a call
        </button>
      </div>
    </div>
  );
}
