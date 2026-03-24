const portfolioClients = [
  "Ashok Leyland",
  "NTPC",
  "WBSEDCL",
  "Greenfield City",
  "Fire Protection Control Technology Devices",
  "DAS – Deutsche Antriebs- und Steuerungstechnik GmbH",
  "DEKEM",
  "Ishaani Engineering Pvt. Ltd.",
  "Modern Engineering Co",
  "Public Works Department, Govt. of West Bengal",
  "Irrigation & Waterways Department, Govt. of West Bengal",
  "Power System Automation Solutions Ltd",
  "Sheffield Construction Company Inc",
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-10">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioClients.map((client) => (
            <div
              key={client}
              className="bg-card rounded shadow-sm p-5 flex items-center justify-center text-center hover:shadow-md transition-shadow"
            >
              <span className="font-heading font-bold text-sm text-foreground">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
