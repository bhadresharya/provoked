import Link from 'next/link';

export default function WorkNotFound() {
  return (
    <main>
      <div className="container">
        <section className="case-study-section">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <h1 className="heading">Project not found</h1>
              <p className="sub-heading mb-4">
                The case study you are looking for does not exist or has been moved.
              </p>
              <Link href="/works" className="link">
                Back to all work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
