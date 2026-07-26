'use client';

import { motion } from 'framer-motion';
import { DAAS_SOCIAL_PROOF } from '@/content/daasSocialProof';

export default function SocialProof() {
  const { id, eyebrow, draftBadge, title, description, logos, testimonials } = DAAS_SOCIAL_PROOF;

  return (
    <section id={id} className="daas-section daas-proof" aria-labelledby="daas-proof-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <header className="daas-proof__header text-center">
              <p className="daas-eyebrow">{eyebrow}</p>
              <p className="daas-draft-badge">{draftBadge}</p>
              <h2 id="daas-proof-heading" className="daas-proof__headline">
                {title}
              </h2>
              <p className="daas-proof__lead">{description}</p>
            </header>

            <ul className="daas-proof__logos list-unstyled mb-4" aria-label="Client logos (draft slots)">
              {logos.map((logo) => (
                <li key={logo.id}>
                  <span className="daas-proof__logo-slot">{logo.label}</span>
                </li>
              ))}
            </ul>

            <div className="daas-proof__quotes">
              {testimonials.map((item, index) => (
                <motion.blockquote
                  key={item.id}
                  className="daas-proof__quote"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <p className="daas-proof__quote-text">“{item.quote}”</p>
                  <footer className="daas-proof__quote-meta">
                    <cite className="daas-proof__quote-name">{item.name}</cite>
                    <span className="daas-proof__quote-role">
                      {item.role}, {item.company}
                    </span>
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
