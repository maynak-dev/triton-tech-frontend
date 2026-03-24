import manufacturing1 from "@/assets/manufacturing-1.jpg";
import manufacturing2 from "@/assets/manufacturing-2.jpg";

const manufacturingCategories = [
  {
    title: "Panels",
    items: ["APFC Panel", "FASD Panel", "AMF Panel", "DOL Starter Panel", "MCC Panel", "VFD Panel", "PCC Panel", "ATS Panel", "LPBS Panel", "PDB Panel"],
  },
  {
    title: "Switchgears",
    items: ["Metal Clad Switchgear", "Metal Enclosed Switchgears", "Pad Mounted Switchgear"],
  },
  {
    title: "Design",
    items: ["SLD Design", "Balanced System", "Unbalanced System", "IoT Based Systems"],
  },
  {
    title: "Monitoring Systems",
    items: ["Agricultural Monitoring System", "Smart Poultry Management System", "Centralized Patient Monitoring System", "RFID Inventory Management System", "GPS Based Tracking System", "Security System with Motion Detection"],
  },
  {
    title: "Industrial Fabrication",
    items: ["Cutting", "Folding", "Machining", "Punching", "Additive Manufacturing", "Stamping", "Welding"],
  },
];

const ManufacturingSection = () => {
  return (
    <section id="manufacturing" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-10">
          Manufacturing & Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
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
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {manufacturingCategories.map((category) => (
              <div key={category.title}>
                <h3 className="font-heading font-bold text-foreground mb-2">{category.title}</h3>
                <ul className="space-y-1">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground font-body text-sm">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;
