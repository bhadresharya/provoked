import PageHero from '@/components/PageHero';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { WORKS_PROJECTS, getWorkProjectBySlug } from '@/content/worksProjects';

export async function generateStaticParams() {
  return WORKS_PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  return {
    title: `${formatSlug(params.slug)} — Provoked Pixels`,
    description: 'Case study from Provoked Pixels.',
  };
}

function formatSlug(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function WorkDetailPage({ params }) {
  const project = getWorkProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <div className="container">
        <PageHero
          title={project.title}
          description="A closer look at how we partnered with our client to deliver impactful design and digital solutions."
          imageSrc="/images/header-hero.jpg"
        />
        <section className="projects">
          <div className="row project">
            <div className="col-md-11 col-lg-10 mx-auto">
              <div className="mb-5" data-aos="fade-up">
                <figure>
                  <Image
                    src={project.image}
                    className="d-none d-sm-block img-fluid"
                    alt={project.title}
                    width={1200}
                    height={600}
                    style={{ width: '100%', height: 'auto' }}
                  />
                  <Image
                    src={project.imageMobile}
                    className="d-block d-sm-none img-fluid"
                    alt={project.title}
                    width={600}
                    height={800}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </figure>
              </div>
              <div className="row justify-content-between px-lg-5" data-aos="fade-up">
                <div className="col-md-4">
                  <h4 className="mt-2 mb-3 mb-md-0 text-md-end">{project.title}</h4>
                </div>
                <div className="col-md-7">
                  <p className="lead mb-3">{project.lead}</p>
                  <p className="mb-0">{project.body}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
