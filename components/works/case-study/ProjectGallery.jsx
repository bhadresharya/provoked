import Image from 'next/image';

export default function ProjectGallery({ gallery }) {
  if (!gallery?.length) return null;

  return (
    <section className="case-study-gallery" data-aos="fade-up">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto">
          <h2 className="heading mb-4">Project Gallery</h2>
          <div className="row g-4">
            {gallery.map((item, index) => (
              <div className={`col-12${index > 0 ? ' col-md-6' : ''}`} key={`${item.src}-${index}`}>
                <figure>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={1200}
                    height={index === 0 ? 600 : 500}
                    className="img-fluid"
                    style={{ width: '100%', height: 'auto' }}
                  />
                  {item.caption && (
                    <figcaption className="text-muted small mt-2">{item.caption}</figcaption>
                  )}
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
