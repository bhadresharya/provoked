export default function ProjectTestimonial({ testimonial }) {
  if (!testimonial?.quote) return null;

  return (
    <section className="case-study-testimonial" data-aos="fade-up">
      <div className="row">
        <div className="col-md-11 col-lg-10 mx-auto">
          <blockquote className="mb-0">
            <p className="h4 mb-3">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="text-muted">
              — {testimonial.author}
              {testimonial.role && `, ${testimonial.role}`}
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
