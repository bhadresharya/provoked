import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/works/ProjectDetail';
import {
  WORKS_PROJECTS,
  getWorkProjectBySlug,
  getAdjacentWorkProjects,
} from '@/content/worksProjects';

export async function generateStaticParams() {
  return WORKS_PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const project = getWorkProjectBySlug(params.slug);

  if (!project) {
    return { title: 'Project Not Found — Provoked Pixels' };
  }

  return {
    title: `${project.title} — Provoked Pixels`,
    description: project.hook,
  };
}

export default function WorkDetailPage({ params }) {
  const project = getWorkProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentWorkProjects(params.slug);

  return (
    <main>
      <div className="container">
        <ProjectDetail project={project} prev={prev} next={next} />
      </div>
    </main>
  );
}
