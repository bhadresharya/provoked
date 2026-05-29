import Link from 'next/link';

export default function ExpertiseNotFound() {
  return (
    <main>
      <div className="container">
        <section className="expertise-section py-5">
          <div className="col-md-10 col-lg-8 mx-auto text-center">
            <h1 className="heading h3 mb-3">Expertise area not found</h1>
            <p className="text-muted mb-4">
              The service or category you are looking for does not exist or may have moved.
            </p>
            <Link href="/expertise" className="btn btn-primary rounded-pill px-4">
              Back to expertise
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
