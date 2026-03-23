import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-heading text-sm font-bold text-foreground uppercase mb-1">
              Welcome to
            </h2>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6">
              Triton Tech Enterprise – Electrical Control Panels Manufacturers in India
            </h3>
            <div className="w-20 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              We, Triton Tech Enterprise, is a fast growing firm in electrical field, for manufacturing Power and Control Distribution Boards. We specialize in range of Power and Control Panels for all kind of industries. We have full facility for testing various types of Distribution Boards.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Since our establishment, we have emerged as India's one of the most prominent manufacturers, suppliers, and service providers of a comprehensive range of Electrical Control Panels. Our products are manufactured by using quality basic material and environment friendly processing techniques.
            </p>
            <h4 className="font-heading font-bold text-foreground mb-2">
              Triton Tech Enterprise is a SIEMENS - SIEPAN ELITE Technology Partner.
            </h4>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              In the context of the cooperation agreement, we grant the company named above the right to manufacture and sell the SIEPAN ELITE design verified low-voltage power distribution board.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={aboutImage}
              alt="M.B. Automation Engineer"
              loading="lazy"
              width={640}
              height={512}
              className="rounded shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
