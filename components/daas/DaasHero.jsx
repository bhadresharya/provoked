'use client';

import { motion } from 'framer-motion';
import { DAAS_HERO } from '@/content/daasHome';
import { useBooking } from '@/components/daas/BookingProvider';

export default function DaasHero() {
  const { openBooking } = useBooking();

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
              </div>

              <h1 id="daas-hero-heading" className="daas-hero__title">
                {DAAS_HERO.title}
              </h1>
              <p className="daas-hero__desc">{DAAS_HERO.description}</p>
              {DAAS_HERO.bestFor ? (
                <p className="daas-hero__best-for">{DAAS_HERO.bestFor}</p>
              ) : null}
              <div className="daas-hero__ctas">
                <a href={DAAS_HERO.primaryCta.href} className="btn btn-primary daas-btn">
                  {DAAS_HERO.primaryCta.label}
                </a>
                <button
                  type="button"
                  className="btn btn-outline-light daas-btn"
                  onClick={() => openBooking('hero')}
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
