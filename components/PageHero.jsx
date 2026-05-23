import Image from 'next/image';

export default function PageHero({
  title,
  description,
  statistics,
  imageSrc,
  imageAlt = 'Hero Image',
}) {
  return (
    <section className="hero">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto">
          <div className="col-md-11 offset-md-1">
            <div className="row">
              <div className="col-lg-11">
                <h1 className="heading" data-aos="fade-up">
                  {title}
                </h1>
                <p className="sub-heading col-lg-10" data-aos="fade-up">
                  {description}
                </p>
                {statistics?.length > 0 && (
                  <ul className="project-statistics" data-aos="fade-up">
                    {statistics.map((stat) => (
                      <li key={stat.label}>
                        <h5>{stat.value}</h5>
                        <p>{stat.label}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          {imageSrc && (
            <div className="col-12" data-aos="fade-up">
              <figure>
                <Image
                  src={imageSrc}
                  className="img-fluid"
                  alt={imageAlt}
                  width={1200}
                  height={600}
                  style={{ width: '100%', height: 'auto' }}
                />
              </figure>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
