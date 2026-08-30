import {
  Wifi,
  Bike,
  Shield,
  Waves,
  Utensils,
  WashingMachine,
  Fingerprint,
  BrushCleaning,
} from "lucide-react";

const amenities = [
  {
    title: "High-Speed WiFi",
    description: "Gigabit internet connectivity throughout the building for seamless work and play.",
    icon: Wifi,
  },
  {
    title: "Gourmet Meals",
    description: "Nutritious, home-style meals prepared daily by our expert in-house chefs.",
    icon: Utensils,
  },
  {
    title: "Biometric Entry",
    description: "Advanced fingerprint-based gate unlocking system for maximum security and ease.",
    icon: Fingerprint,
  },
  {
    title: "24/7 Security",
    description: "Round-the-clock CCTV surveillance and on-site staff for your absolute peace of mind.",
    icon: Shield,
  },
  {
    title: "Housekeeping",
    description: "Daily professional cleaning services to keep your living space spotless and fresh.",
    icon: BrushCleaning,
  },
  {
    title: "Bike Parking",
    description: "Dedicated and spacious spots for two-wheelers with 24/7 surveillance and security.",
    icon: Bike,
  },
  {
    title: "Refrigerator",
    description: "Shared refrigerator facilities to safely store your food, beverages, and essentials.",
    icon: Waves,
  },
  {
    title: "Washing Machine",
    description: "Self-service washing machines available for convenient and hassle-free laundry.",
    icon: WashingMachine,
  },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-24 md:py-32 relative overflow-hidden section-warm">
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/8 rounded-full blur-[120px] pointer-events-none blob-float" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-primary/5 rounded-full blur-[100px] pointer-events-none blob-float-delay" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="badge-accent inline-flex items-center px-4 py-2 rounded-full mb-5">
            <span className="text-sm font-bold tracking-wide">Amenities</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-5 text-foreground">
            Everything You Need,<br />
            <span className="gradient-text">All in One Place</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Modern facilities designed for comfort, productivity, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 bg-card rounded-2xl border border-border/50 hover:border-accent/30 hover:warm-shadow-lg transition-all duration-400"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent/15 transition-all duration-300">
                <item.icon className="w-6 h-6 text-accent" />
              </div>

              <h3 className="text-lg font-bold mb-2 font-heading group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
