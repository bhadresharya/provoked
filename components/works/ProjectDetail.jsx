import PageHero from '@/components/PageHero';
import ProjectMeta from '@/components/works/case-study/ProjectMeta';
import ProjectOverview from '@/components/works/case-study/ProjectOverview';
import ProjectChallenge from '@/components/works/case-study/ProjectChallenge';
import ProjectApproach from '@/components/works/case-study/ProjectApproach';
import ProjectGallery from '@/components/works/case-study/ProjectGallery';
import ProjectResults from '@/components/works/case-study/ProjectResults';
import ProjectDeliverables from '@/components/works/case-study/ProjectDeliverables';
import ProjectTestimonial from '@/components/works/case-study/ProjectTestimonial';
import ProjectDetailNav from '@/components/works/case-study/ProjectDetailNav';
import PageCta from '@/components/PageCta';

export default function ProjectDetail({ project, prev, next }) {
  return (
    <>
      <PageHero title={project.title} description={project.hook} />
      <ProjectMeta
        client={project.client}
        industry={project.industry}
        year={project.year}
        services={project.services}
        liveUrl={project.liveUrl}
      />
      <ProjectOverview overview={project.overview} />
      <ProjectChallenge challenge={project.challenge} />
      <ProjectApproach steps={project.approach} />
      <ProjectGallery gallery={project.gallery} />
      <ProjectResults results={project.results} />
      <ProjectDeliverables deliverables={project.deliverables} />
      <ProjectTestimonial testimonial={project.testimonial} />
      <ProjectDetailNav prev={prev} next={next} />
      <PageCta
        title="Ready to start your project?"
        description="Let's bring your brand vision to life."
        showPhone={false}
      />
    </>
  );
}
