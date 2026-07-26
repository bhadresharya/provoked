'use client';

import { ShieldCheck, RefreshCw, PauseCircle } from 'lucide-react';
import { DAAS_GUARANTEE } from '@/content/daasGuarantee';

const ICONS = [ShieldCheck, RefreshCw, PauseCircle];

export default function Guarantee() {
  const { id, eyebrow, title, description, pillars, faqHref, faqLabel } = DAAS_GUARANTEE;

  return (
    <section id={id} className="daas-section daas-guarantee" aria-labelledby="daas-guarantee-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <header className="daas-guarantee__header text-center">
              <p className="daas-eyebrow">{eyebrow}</p>
              <h2 id="daas-guarantee-heading" className="daas-guarantee__headline">
                {title}
              </h2>
              <p className="daas-guarantee__lead">{description}</p>
            </header>

            <div className="daas-guarantee__grid">
              {pillars.map((pillar, index) => {
                const Icon = ICONS[index] || ShieldCheck;
                return (
                  <article key={pillar.title} className="daas-guarantee__card">
                    <span className="daas-guarantee__icon" aria-hidden="true">
                      <Icon size={22} strokeWidth={2} />
                    </span>
                    <h3 className="daas-guarantee__title">{pillar.title}</h3>
                    <p className="daas-guarantee__text mb-0">{pillar.description}</p>
                  </article>
                );
              })}
            </div>

            <p className="daas-guarantee__faq text-center mb-0">
              <a href={faqHref}>{faqLabel}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
