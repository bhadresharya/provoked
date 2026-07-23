'use client';

import { motion } from 'framer-motion';
import { DAAS_HOW_IT_WORKS } from '@/content/daasHome';

export default function HowItWorks() {
  const { id, title, steps, story } = DAAS_HOW_IT_WORKS;

  return (
    <section id={id} className="daas-section daas-how" aria-labelledby="daas-how-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <header className="daas-how__header text-center">
              <h2 id="daas-how-heading" className="daas-how__headline">
                {title}
              </h2>
            </header>

            <ol className="daas-how__steps list-unstyled mb-0">
              {steps.map((step, index) => (
                <motion.li
                  key={step.number}
                  className="daas-how__step"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <div className="daas-how__step-inner">
                    <span className="daas-how__number">{step.number}</span>
                    <div className="daas-how__body">
                      <h3 className="daas-how__title">{step.title}</h3>
                      <p className="daas-how__text">{step.description}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ol>

            <p className="daas-how__story">{story}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
