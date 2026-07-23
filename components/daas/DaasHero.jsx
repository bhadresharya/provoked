'use client';

import { motion } from 'framer-motion';
import { DAAS_HERO } from '@/content/daasHome';
import { useBooking } from '@/components/daas/BookingProvider';

function getClientSlots() {
  const raw = process.env.NEXT_PUBLIC_CLIENT_SLOTS;
  const parsed = Number.parseInt(raw ?? '2', 10);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 2;
}

export default function DaasHero() {
  const { openBooking } = useBooking();
  const slots = getClientSlots();
  const slotsLabel =
    slots === 0
      ? 'Waitlist open'
      : slots === 1
        ? '1 client slot available'
        : `${slots} client slots available`;

  return (
    <section className="daas-hero" aria-labelledby="daas-hero-heading">
      <div className="daas-hero__glow" aria-hidden="true" />
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-xl-8 mx-auto">
            <motion.div
              className="daas-hero__inner"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="daas-hero__meta">
                <p className="daas-hero__eyebrow">{DAAS_HERO.eyebrow}</p>
                <div className="daas-hero__status" role="status">
                  <span className="daas-hero__status-dot" aria-hidden="true" />
                  <span className="daas-hero__status-label">{slotsLabel}</span>
                </div>
              </div>

              <h1 id="daas-hero-heading" className="daas-hero__title">
                {DAAS_HERO.title}
              </h1>
              <p className="daas-hero__desc">{DAAS_HERO.description}</p>
              <div className="daas-hero__ctas">
                <a href={DAAS_HERO.primaryCta.href} className="btn btn-primary daas-btn">
                  {DAAS_HERO.primaryCta.label}
                </a>
                <button
                  type="button"
                  className="btn btn-outline-light daas-btn"
                  onClick={openBooking}
                >
                  {DAAS_HERO.secondaryCta.label}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
