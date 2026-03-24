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
              Triton Tech Enterprise
            </h3>
            <div className="w-20 h-1 bg-primary mb-6" />
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Triton Tech Enterprise began its journey in 2020 as a small group of passionate professionals dedicated to providing reliable technical support in the field of electrical and automation solutions. Through consistent effort and expertise, the company quickly grew in recognition.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              By 2022, it had established itself as a trusted Electrical and Electronics manufacturer, serving both local and national clients. Since then, Triton Tech Enterprise has continued to expand its capabilities, building a strong reputation as a reliable partner in delivering innovative and high-quality solutions across diverse industries.
            </p>
            <h4 className="font-heading font-bold text-foreground mb-2">
              Products & Services
            </h4>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Triton Tech Enterprise specializes in the design, supply, and commissioning of advanced automation solutions including PLC Panels, SCADA Software, HMI/MMI Panels, VFD/DC Drive Panels, Hydraulic & Pneumatic Systems, and Instrumentation across Steel, Power, Cement, Food Processing, Water Treatment, Defense, and more.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={aboutImage}
              alt="Triton Tech Enterprise"
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
