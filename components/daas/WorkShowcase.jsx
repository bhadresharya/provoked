'use client';

import { useEffect, useId, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { DAAS_WORK } from '@/content/daasWork';

export default function WorkShowcase() {
  const { id, eyebrow, title, description, ctaLabel, ctaHref, capabilities, items } = DAAS_WORK;
  const gallery = [...items, ...items];
  const [active, setActive] = useState(null);
  const titleId = useId();

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
        <div className="daas-work__track">
          {gallery.map((item, index) => (
            <button
              type="button"
              key={`${item.id}-${index}`}
              className="daas-work__card"
              aria-hidden={index >= items.length ? true : undefined}
              tabIndex={index >= items.length ? -1 : 0}
              onClick={() => setActive(item)}
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
            </button>
          ))}
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

      {active ? (
        <div
          className="daas-work-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setActive(null)}
        >
          <div className="daas-work-modal__panel" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="daas-work-modal__close"
              aria-label="Close case study"
              onClick={() => setActive(null)}
            >
              <X size={20} aria-hidden="true" />
            </button>
            <div className="daas-work-modal__media">
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="daas-work-modal__image"
              />
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
          </div>
        </div>
      ) : null}
    </section>
  );
}
