export default function ProjectOverview({ overview }) {
  return (
    <section className="case-study-section" data-aos="fade-up">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto">
          <p className="badge text-primary bg-primary-subtle rounded-pill fs-6 mb-3">
            Overview
          </p>
          <p className="lead mb-0">{overview}</p>
        </div>
      </div>
    </section>
  );
}
