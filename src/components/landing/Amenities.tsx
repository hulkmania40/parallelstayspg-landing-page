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
    <section id="amenities" className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-5 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
            Amenities
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight">
            Everything You Need,
            <span className="text-primary"> All in One Place</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Modern facilities designed for comfort, productivity, and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 bg-card rounded-2xl border border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
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
