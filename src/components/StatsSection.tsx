import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Local Clients", value: 72 },
  { label: "National Clients", value: 60 },
  { label: "Export Clients", value: 10 },
  { label: "Customer Satisfaction", value: 99 },
];

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-secondary text-secondary-foreground" ref={ref}>
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-center mb-10">
          Sales & Distribution
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="relative w-28 h-28 mx-auto mb-3">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(var(--topbar-bg))" strokeWidth="6" opacity="0.3" />
                  <circle
                    cx="50" cy="50" r="45" fill="none"
                    stroke="hsl(var(--primary))" strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 45}`}
                    strokeDashoffset={`${2 * Math.PI * 45 * (1 - (inView ? stat.value / 100 : 0))}`}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-heading font-bold text-2xl">
                  {inView ? stat.value : 0}%
                </span>
              </div>
              <p className="font-heading font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-secondary-foreground/80 font-body text-sm max-w-3xl mx-auto">
          Triton Tech Enterprise serves clients across Steel, Power, Cement, Food Processing, Water Treatment, Road-Rail Signaling, Airports, Defense, Colleges & Training Labs and Surgical Equipment industries.
        </p>
      </div>
    </section>
  );
};

export default StatsSection;
