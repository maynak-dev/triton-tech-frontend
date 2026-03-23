import { Phone, Wrench } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-topbar text-topbar-foreground text-sm">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <span className="font-body">
          India's #1 Electrical Control Panels Manufacturers and Exporters.
        </span>
        <div className="hidden md:flex items-center gap-4">
          <a href="#products" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Phone className="w-3.5 h-3.5" /> Products Range
          </a>
          <a href="#contact" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Wrench className="w-3.5 h-3.5" /> Service & AMC
          </a>
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-4 py-1 rounded-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get A Quote
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
