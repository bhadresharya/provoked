'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function CalendlyModal({ isOpen, onClose, url }) {
  return (
    <AnimatePresence>
      {isOpen && url ? (
        <motion.div
          className="daas-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="daas-calendly-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="daas-modal__backdrop"
            aria-label="Close booking modal"
            onClick={onClose}
          />
          <motion.div
            className="daas-modal__panel"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="daas-modal__header">
              <h2 id="daas-calendly-title" className="daas-modal__title">
                Book a 15-min intro call
              </h2>
              <button
                type="button"
                className="daas-modal__close"
                onClick={onClose}
                aria-label="Close"
              >
                <X size={20} strokeWidth={2} />
              </button>
            </div>
            <div className="daas-modal__body">
              <iframe
                title="Calendly scheduling"
                src={url}
                className="daas-modal__iframe"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
