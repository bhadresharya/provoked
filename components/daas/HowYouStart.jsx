'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useBooking } from '@/components/daas/BookingProvider';
import PaymentTrustNote from '@/components/daas/PaymentTrustNote';
import { DAAS_START } from '@/content/daasStart';

export default function HowYouStart() {
  const { id, eyebrow, title, description, path, steps, ctaLabel, ctaNote } = DAAS_START;
  const { openBooking } = useBooking();

  return (
    <section id={id} className="daas-section daas-start" aria-labelledby="daas-start-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <header className="daas-start__header text-center">
              <p className="daas-eyebrow">{eyebrow}</p>
              <h2 id="daas-start-heading" className="daas-start__headline">
                {title}
              </h2>
              <p className="daas-start__lead">{description}</p>
              {path?.length ? (
                <p className="daas-start__path" aria-hidden="true">
                  {path.map((item, index) => (
                    <span key={item}>
                      {index > 0 ? ' → ' : ''}
                      {item}
                    </span>
                  ))}
                </p>
              ) : null}
            </header>

            <ol className="daas-start__steps list-unstyled mb-5">
              {steps.map((step, index) => (
                <motion.li
                  key={step.number}
                  className="daas-start__step"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                >
                  <div className="daas-start__marker">
                    <span className="daas-start__number">{step.number}</span>
                  </div>
                  <div className="daas-start__body">
                    <h3 className="daas-start__title">{step.title}</h3>
                    <p className="daas-start__text mb-0">{step.description}</p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <div className="daas-start__cta">
              <button type="button" className="btn btn-primary daas-btn" onClick={() => openBooking('how_you_start')}>
                {ctaLabel}
                <ArrowRight size={18} strokeWidth={2.25} aria-hidden="true" />
              </button>
              <p className="daas-start__cta-note mb-0">{ctaNote}</p>
              <PaymentTrustNote />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
