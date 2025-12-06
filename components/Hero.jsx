import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto">
          <div className="col-md-11 offset-md-1">
            <div className="row">
              <div className="col-lg-11">
                <h1 className="heading" data-aos="fade-up">
                  We create digital experiences that matter
                </h1>
                <p className="sub-heading col-lg-10" data-aos="fade-up">
                  Your vision, our expertise. We blend creativity and technology to build digital
                  solutions that drive results for forward-thinking businesses.
                </p>
                <ul className="project-statistics" data-aos="fade-up">
                  <li>
                    <h5>150+</h5>
                    <p>Successful Projects</p>
                  </li>
                  <li>
                    <h5>80+</h5>
                    <p>Happy Clients</p>
                  </li>
                  <li>
                    <h5>10+</h5>
                    <p>Years Experience</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12" data-aos="fade-up">
            <figure>
              <Image 
                src="/images/header-hero.jpg" 
                className="img-fluid" 
                alt="Hero Image"
                width={1200}
                height={600}
                style={{ width: '100%', height: 'auto' }}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

