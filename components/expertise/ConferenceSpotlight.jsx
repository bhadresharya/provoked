import Link from 'next/link';

export default function ConferenceSpotlight() {
  return (
    <section className="conference-spotlight" id="conferenceBranding" data-aos="fade-up">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <div className="conference-spotlight__inner">
            <div className="conference-spotlight__accent" aria-hidden="true" />
            <p className="badge text-primary bg-primary-subtle rounded-pill fs-6 mb-3">
              Our specialty
            </p>
            <h2 className="heading h3 mb-3">Conference & event branding</h2>
            <p className="sub-heading mb-4">
              We help organizers and associations build cohesive event identities—signage, stage
              design, delegate materials, sponsor kits, and pre-event marketing—all aligned to your
              conference dates.
            </p>
            <Link
              href="/expertise/conference-branding"
              className="btn btn-primary rounded-pill px-4"
            >
              Explore conference branding
              <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
