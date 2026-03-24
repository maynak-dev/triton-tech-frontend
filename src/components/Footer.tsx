const Footer = () => {
  return (
    <footer className="bg-topbar text-topbar-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-lg mb-3">Triton Tech Enterprise</h3>
            <p className="font-body text-sm text-topbar-foreground/80 leading-relaxed">
              Because Your Safety Is Not Optional. Trusted manufacturer of Electrical Control Panels, Automation Solutions, Medical Equipment & Industrial Fabrication since 2020.
            </p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 font-body text-sm text-topbar-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-accent transition-colors">Products</a></li>
              <li><a href="#manufacturing" className="hover:text-accent transition-colors">Manufacturing</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg mb-3">Contact Info</h3>
            <div className="space-y-2 font-body text-sm text-topbar-foreground/80">
              <p>📞 +91 9903748648 / 9163521032</p>
              <p>📧 business.tritontech@gmail.com</p>
              <p>📍 India</p>
            </div>
          </div>
        </div>
        <div className="border-t border-topbar-foreground/20 pt-4 text-center font-body text-xs text-topbar-foreground/60">
          © {new Date().getFullYear()} Triton Tech Enterprise. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
