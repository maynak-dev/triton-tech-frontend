const Footer = () => {
  return (
    <footer id="contact" className="bg-topbar text-topbar-foreground py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-lg mb-3">Triton Tech Enterprise</h3>
            <p className="font-body text-sm text-topbar-foreground/80 leading-relaxed">
              India's #1 Electrical Control Panels Manufacturers and Exporters. Manufacturing Power and Control Distribution Boards for all kind of industries.
            </p>
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg mb-3">Quick Links</h3>
            <ul className="space-y-2 font-body text-sm text-topbar-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Products</a></li>
              <li><a href="#manufacturing" className="hover:text-primary transition-colors">Manufacturing</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg mb-3">Contact Info</h3>
            <div className="space-y-2 font-body text-sm text-topbar-foreground/80">
              <p>📞 +91-1234567890 </p>
              <p>📧 sales@tritontech.com</p>
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
