import Image from 'next/image';

export default function Projects() {
  return (
    <section className="projects">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto">
          <p className="badge text-primary bg-primary-subtle rounded-pill fs-6 mb-3" data-aos="fade-up">
            Our Projects
          </p>
          <h2 className="heading" data-aos="fade-up">
            Transforming Ideas into Digital Success Stories
          </h2>
          <p className="sub-heading col-lg-10" data-aos="fade-up">
            Explore our portfolio of successful digital transformations. Each project showcases our
            commitment to excellence, innovation, and delivering measurable results that help businesses
            thrive in the digital age.
          </p>
        </div>
      </div>
      <div className="row project">
        <div className="col-md-11 col-lg-10 mx-auto">
          <div className="mb-5" data-aos="fade-up">
            <figure>
              <Image 
                src="/images/abhyudaya-ornaments.png" 
                className="d-none d-sm-block img-fluid" 
                alt="Abhyudaya Ornaments"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
              <Image 
                src="/images/abhyudaya-ornaments-vertical.png" 
                className="d-block d-sm-none img-fluid"
                alt="Abhyudaya Ornaments"
                width={600}
                height={800}
                style={{ width: '100%', height: 'auto' }}
              />
            </figure>
          </div>
          <div className="row justify-content-between px-lg-5" data-aos="fade-up">
            <div className="col-md-4">
              <h5 className="mt-2 mb-3 mb-md-0 text-md-end">Abhyudaya Ornaments</h5>
            </div>
            <div className="col-md-7">
              <p className="lead mb-3">A distinguished jewelry manufacturer and retailer, Abhyudaya
                Ornaments needed a brand presence as exquisite as their craftsmanship.</p>
              <p className="mb-3">Our design team was entrusted with creating a sophisticated and
                memorable brand identity that reflects elegance and trust. From a meticulously
                crafted logo to a cohesive branding strategy, we ensured that every visual element
                resonated with their audience. Additionally, our social media designs amplified
                their presence, captivating customers with stunning creatives that highlight their
                artistry and heritage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

