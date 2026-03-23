import productPdb from "@/assets/product-pdb.jpg";
import productPcc from "@/assets/product-pcc.jpg";
import productMcc from "@/assets/product-mcc.jpg";
import productHt from "@/assets/product-ht.jpg";

const products = [
  { name: "Power Distribution Board (PDB)", image: productPdb },
  { name: "Power Distribution with APFC", image: productPdb },
  { name: "Power Control Centre (PCC)", image: productPcc },
  { name: "Motor Control Centre (MCC)", image: productMcc },
  { name: "High Tension Panel (HT Panel)", image: productHt },
  { name: "Low Tension Panel (LT Panel)", image: productPdb },
  { name: "Automatic Power Factor (APFC)", image: productPcc },
  { name: "Auto Main Failure Panel (AMF)", image: productMcc },
  { name: "Sub Distribution Panel", image: productHt },
  { name: "AC Drive Panel", image: productPdb },
  { name: "Feeder Pillar Panel (Outdoor)", image: productPcc },
  { name: "Fire Panel / Fire Alarm Panel", image: productMcc },
  { name: "PCC Extension Panel", image: productHt },
  { name: "PLC Panel", image: productPdb },
  { name: "Busbar Trunking Panel", image: productPcc },
  { name: "Control Desk / Control Boards", image: productMcc },
];

const ProductsSection = () => {
  return (
    <section id="products" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-foreground text-center mb-10">
          Our Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-card rounded overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
              </div>
              <div className="p-3 text-center">
                <h5 className="font-heading font-bold text-sm text-foreground">{product.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
