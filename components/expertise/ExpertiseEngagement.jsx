import { EXPERTISE_ENGAGEMENT } from '@/content/expertisePage';

export default function ExpertiseEngagement() {
  return (
    <section className="expertise-section expertise-engagement" id="engagement" data-aos="fade-up">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto expertise-section-inner">
          <p className="badge text-primary bg-primary-subtle rounded-pill fs-6 mb-3">
            {EXPERTISE_ENGAGEMENT.badge}
          </p>
          <h2 className="heading h4 mb-2">{EXPERTISE_ENGAGEMENT.title}</h2>
          <p className="sub-heading mb-4">{EXPERTISE_ENGAGEMENT.intro}</p>
          <div className="row g-4 mb-4">
            {EXPERTISE_ENGAGEMENT.points.map((point) => (
              <div className="col-md-4" key={point.title}>
                <article className="expertise-engagement__card h-100">
                  <h3 className="h6 mb-2">{point.title}</h3>
                  <p className="text-muted mb-0">{point.description}</p>
                </article>
              </div>
            ))}
          </div>
          <p className="expertise-engagement__note mb-0">
            <i className="fa-solid fa-circle-check text-primary me-2" aria-hidden="true" />
            {EXPERTISE_ENGAGEMENT.note}
          </p>
        </div>
      </div>
    </section>
  );
}
