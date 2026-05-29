const STEPS = [
  {
    title: 'Tell us your goals',
    description: 'Share your project details, timeline, and any references that inspire you.',
  },
  {
    title: 'Discovery call',
    description: 'We discuss your needs, audience, and the best approach for your brand.',
  },
  {
    title: 'Proposal & kickoff',
    description: 'You receive a clear plan with scope, timeline, and next steps to begin.',
  },
];

export default function ContactProcess() {
  return (
    <section className="contact-section contact-process" data-aos="fade-up">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto contact-section-inner">
          <h2 className="heading">What happens next?</h2>
          <div className="row g-4">
            {STEPS.map((step, index) => (
              <div className="col-md-4" key={step.title}>
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
