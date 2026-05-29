export default function ProjectApproach({ steps }) {
  return (
    <section className="case-study-section" data-aos="fade-up">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto">
          <h2 className="heading">Our Approach</h2>
          <div className="row g-4">
            {steps.map((step, index) => (
              <div className="col-md-6" key={step.title}>
                <p className="text-primary fw-bold mb-1">0{index + 1}</p>
                <h5 className="mb-2">{step.title}</h5>
                <p className="text-muted mb-0">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
