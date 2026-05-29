import NotFoundContent from '@/components/NotFoundContent';

export default function WorkNotFound() {
  return (
    <NotFoundContent
      title="Project not found"
      description="The case study you are looking for does not exist or has been moved."
      backHref="/works"
      backLabel="Back to all work"
    />
  );
}
