import ProjectItem from '@/components/works/ProjectItem';
import { WORKS_PROJECTS } from '@/content/worksProjects';

export default function WorksProjects() {
  return (
    <section className="projects">
      {WORKS_PROJECTS.map((project) => (
        <ProjectItem
          key={project.id}
          title={project.title}
          lead={project.lead}
          body={project.body}
        />
      ))}
    </section>
  );
}
