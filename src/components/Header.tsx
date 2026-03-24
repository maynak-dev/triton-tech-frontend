import { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "HOME", href: "#" },
  { label: "ABOUT US", href: "#about" },
  { label: "PRODUCTS", href: "#products" },
  { label: "MANUFACTURING", href: "#manufacturing" },
  { label: "PORTFOLIO", href: "#portfolio" },
  { label: "CONTACT US", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
              <div className="text-muted-foreground text-xs">+91 9903748648</div>
              <div className="text-muted-foreground text-xs">+91 9163521032</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-8 h-8 text-primary" />
            <div>
              <div className="font-heading font-bold text-sm text-foreground">Email</div>
              <div className="text-muted-foreground text-xs">business.tritontech@gmail.com</div>
            </div>
          </div>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <nav className="bg-secondary hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-0">
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

      {menuOpen && (
        <nav className="bg-secondary md:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-secondary-foreground text-sm font-heading font-medium hover:bg-primary hover:text-primary-foreground transition-colors border-b border-secondary-foreground/10"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
