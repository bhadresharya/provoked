'use client';

import Image from 'next/image';
import { DAAS_WORK } from '@/content/daasWork';

export default function WorkShowcase() {
  const { id, eyebrow, title, description, ctaLabel, ctaHref, capabilities, items } = DAAS_WORK;
  // Duplicate for seamless marquee feel on wide screens
  const gallery = [...items, ...items];

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
            <article
              key={`${item.id}-${index}`}
              className="daas-work__card"
              aria-hidden={index >= items.length ? true : undefined}
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
    </section>
  );
}
