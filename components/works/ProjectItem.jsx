import Image from 'next/image';

export default function ProjectItem({
  title,
  lead,
  body,
  image = '/images/abhyudaya-ornaments.png',
  imageMobile = '/images/abhyudaya-ornaments-vertical.png',
}) {
  return (
    <div className="row project">
      <div className="col-md-11 col-lg-10 mx-auto">
        <div className="mb-5" data-aos="fade-up">
          <figure>
            <Image
              src={image}
              className="d-none d-sm-block img-fluid"
              alt={title}
              width={1200}
              height={600}
              style={{ width: '100%', height: 'auto' }}
            />
            <Image
              src={imageMobile}
              className="d-block d-sm-none img-fluid"
              alt={title}
              width={600}
              height={800}
              style={{ width: '100%', height: 'auto' }}
            />
          </figure>
        </div>
        <div className="row justify-content-between px-lg-5" data-aos="fade-up">
          <div className="col-md-4">
            <h4 className="mt-2 mb-3 mb-md-0 text-md-end">{title}</h4>
          </div>
          <div className="col-md-7">
            <p className="lead mb-3">{lead}</p>
            <p className="mb-0">{body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
