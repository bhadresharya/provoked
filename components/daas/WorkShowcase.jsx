import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { DAAS_WORK } from '@/content/daasWork';

export default function WorkShowcase() {
  const {
    id,
    eyebrow,
    title,
    description,
    ctaLabel,
    ctaHref,
    scopeTitle,
    scopeDescription,
    capabilities,
    items,
  } = DAAS_WORK;

  // Duplicate for a seamless -50% continuous loop (same pattern as Benefits).
  const gallery = [...items, ...items];

  return (
    <section id={id} className="daas-section daas-work" aria-labelledby="daas-work-heading">
      <div className="container">
        <div className="daas-work__grid">
          <div className="daas-work__panel daas-work__panel--gallery">
            <div className="daas-work__collage" aria-hidden="true">
              <div className="daas-work__track">
                {gallery.map((item, index) => {
                  const isClone = index >= items.length;
                  return (
                    <div
                      key={`${item.id}-${index}`}
                      className={`daas-work__thumb daas-work__thumb--${index % 4}${
                        isClone ? ' daas-work__thumb--clone' : ''
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="180px"
                        className="daas-work__image"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="daas-work__copy">
              <p className="daas-eyebrow">{eyebrow}</p>
              <h2 id="daas-work-heading" className="daas-work__headline">
                {title}
              </h2>
              {description ? <p className="daas-work__lead">{description}</p> : null}
              {/* <a
                href={ctaHref}
                className="btn btn-dark daas-btn daas-work__cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                {ctaLabel}
                <ArrowUpRight size={18} strokeWidth={2.25} aria-hidden="true" />
              </a> */}
            </div>
          </div>

          <div className="daas-work__panel daas-work__panel--scope">
            <ul className="daas-work__caps" aria-label="Capabilities">
              {capabilities.map((label) => (
                <li key={label}>
                  <span className={`daas-work__cap${label === '+ more' ? ' daas-work__cap--more' : ''}`}>
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="daas-work__copy daas-work__copy--scope">
              <h3 className="daas-work__scope-title">{scopeTitle}</h3>
              {scopeDescription ? <p className="daas-work__lead mb-0">{scopeDescription}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
