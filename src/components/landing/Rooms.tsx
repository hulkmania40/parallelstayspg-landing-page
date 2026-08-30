import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap } from "lucide-react";

const rooms = [
  {
    type: "Elite Single",
    tagline: "Ultra Private Suite",
    price: "₹18,000",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop",
    features: ["Biometric Access", "Workstation", "Balcony", "Smart TV"],
    popular: false,
  },
  {
    type: "Premium Double",
    tagline: "Shared Luxury",
    price: "₹12,000",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop",
    features: ["Twin Workstations", "Ample Storage", "Attached Bath", "Daily Cleaning"],
    popular: true,
  },
  {
    type: "Social Triple",
    tagline: "Community Centric",
    price: "₹9,500",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop",
    features: ["Shared Storage", "Study Zone", "Biometric Lock", "High-speed WiFi"],
    popular: false,
  },
];

export function Rooms() {
  return (
    <section id="rooms" className="py-24 md:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="badge-accent inline-flex items-center px-4 py-2 rounded-full mb-5">
              <span className="text-sm font-bold tracking-wide">Rooms</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-5 text-foreground">
              Designed for Your <span className="italic text-accent">Ambition</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every room is a sanctuary. From biometric door locks to ergonomic workstations, we've optimized every square inch for your lifestyle.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-[3px] border-background bg-secondary overflow-hidden warm-shadow">
                  <img src={`https://i.pravatar.cc/150?u=room${i}`} alt="resident" />
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm font-bold font-heading tracking-tighter text-foreground">Joined by 1.2k+</span>
              <span className="text-xs text-muted-foreground font-medium">Happy Professionals</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className={`group relative overflow-hidden rounded-3xl border transition-all duration-400 hover:-translate-y-1 hover:warm-shadow-xl ${
              room.popular
                ? 'border-accent/50 bg-card'
                : 'border-border/50 hover:border-border bg-card'
            }`}>
              {room.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="btn-gradient px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest warm-shadow flex items-center gap-1.5">
                    <Zap className="w-3 h-3 fill-current" />
                    Bestseller
                  </div>
                </div>
              )}

              <CardHeader className="p-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                  <img
                    src={room.image}
                    alt={room.type}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </CardHeader>

              <CardContent className="p-6 pt-2">
                <Badge variant="secondary" className="badge-accent text-[10px] font-black uppercase tracking-wider rounded-lg px-2.5 py-0.5 mb-3">
                  {room.tagline}
                </Badge>
                <h3 className="font-heading text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{room.type}</h3>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl font-black font-heading text-accent">{room.price}</span>
                  <span className="text-muted-foreground font-medium text-sm">/mo</span>
                </div>

                <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-xs font-semibold text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-2">
                <Button
                  onClick={() => {
                    sessionStorage.setItem(
                      "prefilledMessage",
                      `I'm interested in the ${room.type} (${room.tagline}) option. Please share more details and availability.`
                    );
                    const el = document.getElementById("contact-form");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full h-12 rounded-xl text-sm font-bold transition-all duration-300 active:scale-95 ${
                    room.popular
                      ? 'btn-gradient'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  Book Exclusive Tour
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
