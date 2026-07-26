import Image from 'next/image';
// import { useEffect, useId, useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { X } from 'lucide-react';
import { DAAS_WORK } from '@/content/daasWork';

/* Work detail modal — restore when case studies are ready
const sheetTransition = {
  type: 'spring',
  stiffness: 380,
  damping: 36,
  mass: 0.9,
};
*/

export default function WorkShowcase() {
  const { id, eyebrow, title, description, ctaLabel, ctaHref, capabilities, items } = DAAS_WORK;
  // Repeat until the half-track is wide enough for a seamless -50% loop on large screens.
  const minCardsPerHalf = 8;
  const copies = Math.max(2, Math.ceil(minCardsPerHalf / Math.max(items.length, 1)));
  const sequence = Array.from({ length: copies }, () => items).flat();
  const gallery = [...sequence, ...sequence];
  // const [active, setActive] = useState(null);
  // const titleId = useId();

  /* Work detail modal — restore when case studies are ready
  useEffect(() => {
    if (!active) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setActive(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('overflow-hidden');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('overflow-hidden');
    };
  }, [active]);
  */

  return (
    <section id={id} className="daas-section daas-work" aria-labelledby="daas-work-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <header className="daas-work__header text-center">
              <p className="daas-eyebrow">{eyebrow}</p>
              <h2 id="daas-work-heading" className="daas-work__headline">
                {title}
              </h2>
              {description ? <p className="daas-work__lead">{description}</p> : null}
              <a href={ctaHref} className="btn btn-dark daas-btn daas-work__cta">
                {ctaLabel}
              </a>
            </header>
          </div>
        </div>
      </div>

      <div className="daas-work__rail" aria-label="Recent project gallery">
        <div className="daas-work__track pb-5">
          {gallery.map((item, index) => {
            const isClone = index >= items.length;
            return (
              <article
                key={`${item.id}-${index}`}
                className={`daas-work__card${isClone ? ' daas-work__card--clone' : ''}`}
                aria-hidden={isClone ? true : undefined}
              >
                <div className="daas-work__media">
                  {item.video ? (
                    <video
                      className="daas-work__video"
                      src={item.video}
                      poster={item.image}
                      muted
                      loop
                      playsInline
                      autoPlay
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="320px"
                      className="daas-work__image"
                    />
                  )}
                </div>
                <div className="daas-work__meta">
                  <span className="daas-work__tag">{item.tag}</span>
                  <h3 className="daas-work__title">{item.title}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <ul className="daas-work__caps" aria-label="Capabilities">
              {capabilities.map((label) => (
                <li key={label}>
                  <span className="daas-work__cap">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Work detail modal — restore when case studies are ready
      <AnimatePresence>
        {active ? (
          <motion.div
            className="daas-work-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              className="daas-work-modal__close"
              aria-label="Close case study"
              onClick={() => setActive(null)}
            >
              <X size={18} strokeWidth={2.5} aria-hidden="true" />
            </button>

            <motion.div
              className="daas-work-modal__sheet"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={sheetTransition}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="daas-work-modal__media">
                {active.video ? (
                  <video
                    className="daas-work-modal__video"
                    src={active.video}
                    poster={active.image}
                    controls
                    playsInline
                    autoPlay
                    muted
                    loop
                  />
                ) : (
                  <Image
                    src={active.image}
                    alt={active.title}
                    width={1600}
                    height={1200}
                    sizes="100vw"
                    className="daas-work-modal__image"
                    priority
                  />
                )}
              </div>
              <div className="daas-work-modal__body">
                <span className="daas-work__tag">{active.tag}</span>
                <h3 id={titleId} className="daas-work-modal__title">
                  {active.title}
                </h3>
                {active.problem ? (
                  <p className="daas-work-modal__block">
                    <strong>Problem.</strong> {active.problem}
                  </p>
                ) : null}
                {active.work ? (
                  <p className="daas-work-modal__block">
                    <strong>Work.</strong> {active.work}
                  </p>
                ) : null}
                {active.outcome ? (
                  <p className="daas-work-modal__block mb-0">
                    <strong>Outcome.</strong> {active.outcome}
                  </p>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      */}
    </section>
  );
}
