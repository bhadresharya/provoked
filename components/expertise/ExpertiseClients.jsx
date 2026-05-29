import { EXPERTISE_CLIENTS } from '@/content/expertisePage';

export default function ExpertiseClients() {
  return (
    <section className="expertise-section expertise-clients" id="clients" data-aos="fade-up">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto expertise-section-inner">
          <p className="badge text-primary bg-primary-subtle rounded-pill fs-6 mb-3">
            Clients
          </p>
          <h2 className="heading h4 mb-2">Who we work with</h2>
          <p className="sub-heading mb-4">
            We partner with teams that value thoughtful design, clear communication, and
            measurable outcomes—locally in India and internationally.
          </p>
          <div className="row g-4">
            {EXPERTISE_CLIENTS.map((client) => (
              <div className="col-md-6" key={client.title}>
                <article className="expertise-clients__card">
                  <i className={`${client.icon} expertise-clients__icon`} aria-hidden="true" />
                  <h3 className="h5 mb-2">{client.title}</h3>
                  <p className="text-muted mb-0">{client.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
