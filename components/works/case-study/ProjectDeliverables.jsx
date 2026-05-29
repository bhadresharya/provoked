export default function ProjectDeliverables({ deliverables }) {
  if (!deliverables?.length) return null;

  return (
    <section className="case-study-section" data-aos="fade-up">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto">
          <h2 className="heading">What We Delivered</h2>
          <ul className="case-study-list mb-0">
            {deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
