export default function Contact() {
  return (
    <section className="contact" id="letsTalk" data-aos="fade-up">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <div className="cta">
            <p className="h3 mb-2">{"Let's Bring Your Vision to Life!"}</p>
            <p className="mb-4">{"Let's Talk! Let's create, innovate, and grow."}</p>
            <div data-aos="fade" data-aos-delay="500">
              <a href="tel:+919228191969"
                className="btn btn-outline-light rounded-pill px-4">+919228191969</a>
              <a href="mailto:hi@provoked.in"
                className="btn btn-outline-light rounded-pill px-4 ms-sm-2 mt-2 mt-sm-0">hi@provoked.in</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

