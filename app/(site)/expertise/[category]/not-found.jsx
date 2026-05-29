import NotFoundContent from '@/components/NotFoundContent';

export default function ExpertiseNotFound() {
  return (
    <NotFoundContent
      title="Expertise area not found"
      description="The service or category you are looking for does not exist or may have moved."
      backHref="/expertise"
      backLabel="Back to expertise"
    />
  );
}
