'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { DAAS_FAQS } from '@/content/daasFaqs';

export default function DaasFaq() {
  const { id, eyebrow, title, description, items } = DAAS_FAQS;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id={id} className="daas-section daas-faq" aria-labelledby="daas-faq-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <header className="daas-section__header text-center">
              <p className="daas-eyebrow">{eyebrow}</p>
              <h2 id="daas-faq-heading" className="daas-section__title">
                {title}
              </h2>
              <p className="daas-section__desc">{description}</p>
            </header>

            <div className="daas-faq__list">
              {items.map((item, index) => {
                const isOpen = openIndex === index;
                const panelId = `daas-faq-panel-${index}`;
                const buttonId = `daas-faq-button-${index}`;

                return (
                  <div key={item.question} className={`daas-faq__item${isOpen ? ' is-open' : ''}`}>
                    <h3 className="daas-faq__question">
                      <button
                        type="button"
                        id={buttonId}
                        className="daas-faq__trigger"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      >
                        <span>{item.question}</span>
                        <ChevronDown
                          className="daas-faq__chevron"
                          size={20}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen ? (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          className="daas-faq__panel"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        >
                          <p className="daas-faq__answer">{item.answer}</p>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
