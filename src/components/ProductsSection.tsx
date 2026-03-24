import productLtPanel from "@/assets/product-lt-panel.jpg";
import productMcc from "@/assets/product-mcc.jpg";
import productHmi from "@/assets/product-hmi.jpg";
import productScada from "@/assets/product-scada.jpg";
import productPcc from "@/assets/product-pcc.jpg";
import productApfc from "@/assets/product-apfc.jpg";
import productBracket from "@/assets/product-bracket.jpg";
import productHospitalBed from "@/assets/product-hospital-bed.jpg";
import productAnesthesia from "@/assets/product-anesthesia.jpg";
import productBabyBed from "@/assets/product-baby-bed.jpg";
import productStretcher from "@/assets/product-stretcher.jpg";
import productDressingCart from "@/assets/product-dressing-cart.jpg";
import productIsolationCart from "@/assets/product-isolation-cart.jpg";
import productCrashCart from "@/assets/product-crash-cart.jpg";
import productTrolley from "@/assets/product-trolley.jpg";
import productAcBracket from "@/assets/product-ac-bracket.jpg";

const products = [
  { name: "LT Panels", image: productLtPanel },
  { name: "PLC Modules / Microcontrollers", image: productMcc },
  { name: "MCC / PCC / LDB Panels", image: productPcc },
  { name: "HMI Touch Screen", image: productHmi },
  { name: "VFD Module", image: productHmi },
  { name: "Energy Meter Modbus Comm.", image: productHmi },
  { name: "SCADA Software", image: productScada },
  { name: "Wireless PLC I/O Modules", image: productScada },
  { name: "APFC Panels", image: productApfc },
  { name: "Solar Products", image: productApfc },
  { name: "Control Panels – Drive PLC", image: productPcc },
  { name: "TV Wall Mount Bracket", image: productBracket },
  { name: "Hospital Bed", image: productHospitalBed },
  { name: "Stainless Steel Anesthesia Machine", image: productAnesthesia },
  { name: "Adjustable Hospital Baby Bed", image: productBabyBed },
  { name: "Hospital Stretcher", image: productStretcher },
  { name: "Multifunctional Dressing Cart", image: productDressingCart },
  { name: "Treatment Cart", image: productDressingCart },
  { name: "Isolation Cart", image: productIsolationCart },
  { name: "Infusion Cart", image: productIsolationCart },
  { name: "Nursing Cart", image: productCrashCart },
  { name: "Emergency Crash Cart", image: productCrashCart },
  { name: "Medical Trolley", image: productTrolley },
  { name: "AC Outdoor Unit Mounting Bracket", image: productAcBracket },
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
