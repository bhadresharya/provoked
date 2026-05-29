export default function ProjectMeta({ client, industry, year, services, liveUrl }) {
  return (
    <section className="case-study-meta" data-aos="fade-up">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <p className="text-muted small mb-1">Client</p>
              <p className="mb-0 fw-medium">{client}</p>
            </div>
            <div className="col-md-6 col-lg-3">
              <p className="text-muted small mb-1">Industry</p>
              <p className="mb-0 fw-medium">{industry}</p>
            </div>
            <div className="col-md-6 col-lg-3">
              <p className="text-muted small mb-1">Year</p>
              <p className="mb-0 fw-medium">{year}</p>
            </div>
            <div className="col-md-6 col-lg-3">
              <p className="text-muted small mb-1">Services</p>
              <div className="d-flex flex-wrap gap-2">
                {services.map((service) => (
                  <span
                    key={service}
                    className="badge text-primary bg-primary-subtle rounded-pill"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
            {liveUrl && (
              <div className="col-12">
                <a href={liveUrl} className="link" target="_blank" rel="noopener noreferrer">
                  View live project
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
