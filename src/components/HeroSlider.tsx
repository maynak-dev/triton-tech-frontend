import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroPanels from "@/assets/hero-panels.jpg";
import heroManufacturing from "@/assets/hero-manufacturing.jpg";

const slides = [
  {
    image: heroPanels,
    title: "Automation & Controls",
    subtitle: "Leading manufacturers of Industrial Automation, Electrical Control Panels & Medical Equipment.",
  },
  {
    image: heroManufacturing,
    title: "Advanced Technology",
    subtitle: "We provide Commercial & Residential Automation Solutions with industry-leading expertise.",
  },
  {
    image: heroPanels,
    title: "Because Your Safety Is Not Optional",
    subtitle: "Innovative and high-quality solutions across diverse industries since 2020.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                {slides[current].title}
              </h1>
              <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 font-body">
                {slides[current].subtitle}
              </p>
              <div className="flex gap-4">
                <a
                  href="#products"
                  className="bg-primary text-primary-foreground px-6 py-3 font-heading font-bold uppercase tracking-wide hover:opacity-90 transition-opacity"
                >
                  Our Products
                </a>
                <a
                  href="#contact"
                  className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 font-heading font-bold uppercase tracking-wide hover:bg-primary-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? "bg-primary" : "bg-primary-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
