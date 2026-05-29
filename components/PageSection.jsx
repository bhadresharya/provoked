export default function PageSection({
  children,
  className = '',
  id,
  aos = 'fade-up',
  aosDelay,
}) {
  const sectionClass = ['page-section', className].filter(Boolean).join(' ');

  return (
    <section
      className={sectionClass}
      id={id}
      data-aos={aos}
      {...(aosDelay != null ? { 'data-aos-delay': aosDelay } : {})}
    >
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto page-section-inner">{children}</div>
      </div>
    </section>
  );
}
