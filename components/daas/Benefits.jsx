'use client';

import {
  LayoutList,
  BadgeIndianRupee,
  Zap,
  Sparkles,
  RefreshCw,
  BadgeCheck,
} from 'lucide-react';
import { DAAS_BENEFITS } from '@/content/daasHome';

const ICON_MAP = {
  board: LayoutList,
  rate: BadgeIndianRupee,
  speed: Zap,
  quality: Sparkles,
  flex: RefreshCw,
  own: BadgeCheck,
};

export default function Benefits() {
  const { id, eyebrow, title, description, items } = DAAS_BENEFITS;
  const rail = [...items, ...items];

  return (
    <section id={id} className="daas-section daas-benefits" aria-labelledby="daas-benefits-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <header className="daas-benefits__header text-center">
              <p className="daas-eyebrow daas-eyebrow--light">{eyebrow}</p>
              <h2 id="daas-benefits-heading" className="daas-benefits__headline">
                {title}
              </h2>
              <p className="daas-benefits__lead">{description}</p>
            </header>
          </div>
        </div>
      </div>

      <div className="daas-benefits__rail" aria-label="Membership benefits">
        <ul className="daas-benefits__track list-unstyled mb-0">
          {rail.map((item, index) => {
            const Icon = ICON_MAP[item.icon] || Sparkles;
            const isClone = index >= items.length;

            return (
              <li
                key={`${item.title}-${index}`}
                className="daas-benefits__item"
                aria-hidden={isClone ? true : undefined}
              >
                <article className={`daas-benefits__card daas-benefits__card--${item.accent}`}>
                  <div className="daas-benefits__visual" aria-hidden="true">
                    <span className="daas-benefits__icon">
                      <Icon size={28} strokeWidth={2} />
                    </span>
                  </div>
                  <div className="daas-benefits__body">
                    <h3 className="daas-benefits__title">{item.title}</h3>
                    <p className="daas-benefits__text mb-0">{item.description}</p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
