'use client';

import Image from 'next/image';
import { useBooking } from '@/components/daas/BookingProvider';
import { DAAS_STUDIO } from '@/content/daasStudio';

export default function MeetStudio() {
  const { id, eyebrow, draftBadge, title, name, role, photo, photoAlt, letter, ctaLabel } =
    DAAS_STUDIO;
  const { openBooking } = useBooking();

  return (
    <section id={id} className="daas-section daas-studio" aria-labelledby="daas-studio-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="daas-studio__panel">
              <div className="daas-studio__media">
                <Image
                  src={photo}
                  alt={photoAlt}
                  width={400}
                  height={480}
                  className="daas-studio__photo"
                />
                <p className="daas-draft-badge daas-draft-badge--on-media">{draftBadge}</p>
              </div>
              <div className="daas-studio__copy">
                <p className="daas-eyebrow daas-eyebrow--on-dark">{eyebrow}</p>
                <h2 id="daas-studio-heading" className="daas-studio__headline">
                  {title}
                </h2>
                <p className="daas-studio__name">{name}</p>
                <p className="daas-studio__role">{role}</p>
                {letter.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="daas-studio__letter">
                    {paragraph}
                  </p>
                ))}
                <button type="button" className="btn btn-primary daas-btn" onClick={openBooking}>
                  {ctaLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
