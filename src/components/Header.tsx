import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "HOME", href: "#" },
  { label: "ABOUT US", href: "#about" },
  { label: "PRODUCTS", href: "#products" },
  { label: "MANUFACTURING", href: "#manufacturing" },
  { label: "QUALITY", href: "#quality" },
  { label: "CLIENTELE", href: "#clients" },
  { label: "CONTACT US", href: "#contact" },
];

const Header = () => {
  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Triton Tech Enterprise" className="h-14 w-auto" />
          <div className="hidden sm:block">
            <span className="font-heading font-bold text-lg text-foreground leading-tight block">
              TRITON TECH
            </span>
            <span className="text-primary text-xs font-semibold tracking-widest">ENTERPRISE</span>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-8 h-8 text-primary" />
            <div>
              <div className="font-heading font-bold text-sm text-foreground">Phone</div>
              <div className="text-muted-foreground text-xs">+91-93759-60914</div>
              <div className="text-muted-foreground text-xs">+91-93282-47164</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-8 h-8 text-primary" />
            <div>
              <div className="font-heading font-bold text-sm text-foreground">Email</div>
              <div className="text-muted-foreground text-xs">sales@mbautomation.co.in</div>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-secondary">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap items-center gap-0">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block px-4 py-3 text-secondary-foreground text-sm font-heading font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
