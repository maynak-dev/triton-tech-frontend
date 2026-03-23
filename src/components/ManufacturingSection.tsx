import manufacturing1 from "@/assets/manufacturing-1.jpg";
import manufacturing2 from "@/assets/manufacturing-2.jpg";

const features = [
  "In-House Manufacturing Facilities",
  "Well qualified & capable Team",
  "Cad/Cam, CNC & Machines Shop",
  "Power Presses & Stamping Shop",
  "Spares Assembly Shop",
  "Finishing Process Shop",
  "Independent Quality Control Cell",
  "International Standard Quality & Testing",
  "Customer Care, Support & Service",
  "Warehouse & Logistics",
];

const ManufacturingSection = () => {
  return (
    <section id="manufacturing" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-10">
          Manufacturing Infrastructure
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <img
              src={manufacturing1}
              alt="Manufacturing facility"
              loading="lazy"
              className="rounded shadow-md w-full h-56 object-cover"
            />
            <img
              src={manufacturing2}
              alt="CNC Machine shop"
              loading="lazy"
              className="rounded shadow-md w-full h-56 object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">Our Features:</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-muted-foreground font-body">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;
