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
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Gourmet Meals",
    description: "Nutritious, home-style meals prepared daily by our expert in-house chefs.",
    icon: Utensils,
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    title: "Biometric Entry",
    description: "Advanced fingerprint-based gate unlocking system for maximum security and ease.",
    icon: Fingerprint,
    color: "bg-indigo-600/10 text-indigo-600",
  },
  {
    title: "24/7 Security",
    description: "Round-the-clock CCTV surveillance and on-site staff for your absolute peace of mind.",
    icon: Shield,
    color: "bg-green-500/10 text-green-500",
  },
  {
    title: "Housekeeping",
    description: "Daily professional cleaning services to keep your living space spotless and fresh.",
    icon: BrushCleaning,
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Bike Parking",
    description: "Dedicated and spacious spots for two-wheelers with 24/7 surveillance and security.",
    icon: Bike,
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    title: "Refrigerator",
    description: "Shared refrigerator facilities to safely store your food, beverages, and essentials.",
    icon: Waves,
    color: "bg-cyan-500/10 text-cyan-500",
  },
  {
    title: "Washing Machine",
    description: "Self-service washing machines available for convenient and hassle-free laundry.",
    icon: WashingMachine,
    color: "bg-sky-500/10 text-sky-500",
  },
];

export function Amenities() {
  return (
    <section id="amenities" className="py-32 relative overflow-hidden bg-background">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 relative">
          <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
            Premium Living
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight bg-clip-text text-transparent bg-linear-to-b from-foreground to-foreground/70">
            Unrivaled Amenities <br className="hidden sm:block" /> For Modern Life
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            We've redefined co-living by combining luxury hotel services with the warmth of a home.
            Experience facilities designed for the next generation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 bg-card/50 backdrop-blur-sm rounded-[2.5rem] border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden"
            >
              {/* Hover Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:bg-primary/10 transition-colors duration-500" />

              <div className={`w-16 h-16 rounded-[1.5rem] ${item.color} flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <item.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-medium">
                {item.description}
              </p>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
