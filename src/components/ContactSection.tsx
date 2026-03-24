import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(import.meta.env.VITE_API_URL + "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="font-heading font-bold text-3xl text-foreground text-center mb-2">
          Contact Us
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto font-body">
          Get in touch with us for any queries or quotation requests.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-bold text-foreground">Phone</h4>
                <p className="text-muted-foreground text-sm font-body">+91-93759-60914</p>
                <p className="text-muted-foreground text-sm font-body">+91-93282-47164</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-bold text-foreground">Email</h4>
                <p className="text-muted-foreground text-sm font-body">sales@mbautomation.co.in</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-bold text-foreground">Address</h4>
                <p className="text-muted-foreground text-sm font-body">India, Silvassa, Madhya Pradesh</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-background rounded-lg shadow-md p-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  required
                  maxLength={100}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded font-body text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded font-body text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  maxLength={20}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded font-body text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  required
                  maxLength={200}
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded font-body text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <textarea
                name="message"
                placeholder="Your Message *"
                required
                maxLength={2000}
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded font-body text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-primary text-primary-foreground px-8 py-3 rounded font-heading font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="text-green-600 font-body text-sm">✅ Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-destructive font-body text-sm">❌ Failed to send. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
