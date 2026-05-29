export default function ProjectChallenge({ challenge }) {
  return (
    <section className="case-study-section" data-aos="fade-up">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <h2 className="heading">The Challenge</h2>
          <p className="mb-0">{challenge}</p>
        </div>
      </div>
    </section>
  );
}
