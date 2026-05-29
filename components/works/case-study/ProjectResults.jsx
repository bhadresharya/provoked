export default function ProjectResults({ results }) {
  if (!results?.length) return null;

  return (
    <section className="case-study-section" data-aos="fade-up">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <h2 className="heading">Results</h2>
          <ul className="case-study-list mb-0">
            {results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
