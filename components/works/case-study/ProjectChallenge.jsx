export default function ProjectChallenge({ challenge }) {
  return (
    <section className="case-study-section" data-aos="fade-up">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto">
          <h2 className="heading">The Challenge</h2>
          <p className="mb-0">{challenge}</p>
        </div>
      </div>
    </section>
  );
}
