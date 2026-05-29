import Link from 'next/link';
import { EXPERTISE_PROCESS } from '@/content/expertisePage';

export default function ExpertiseProcess() {
  return (
    <section
      className="expertise-section expertise-process"
      id="how-we-work"
      data-aos="fade-up"
    >
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto expertise-section-inner">
          <h2 className="heading h4 mb-2">How we work</h2>
          <p className="sub-heading mb-4">
            A clear path from first conversation to final deliverables.{' '}
            <Link href="/contact">See our full contact process</Link>.
          </p>
          <div className="row g-4">
            {EXPERTISE_PROCESS.map((step, index) => (
              <div className="col-md-4" key={step.title}>
                <article className="expertise-process__step">
                  <p className="expertise-process__number">0{index + 1}</p>
                  <h3 className="h5 mb-2">{step.title}</h3>
                  <p className="text-muted mb-0">{step.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
