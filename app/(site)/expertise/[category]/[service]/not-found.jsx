import NotFoundContent from '@/components/NotFoundContent';

export default function ServiceNotFound() {
  return (
    <NotFoundContent
      title="Service not found"
      description="The service you are looking for does not exist or may have moved."
      backHref="/expertise"
      backLabel="Back to expertise"
    />
  );
}
