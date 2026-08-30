import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Zap, LayoutGrid } from "lucide-react";

const rooms = [
  {
    type: "Elite Single",
    tagline: "Ultra Private Suite",
    price: "₹18,000",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop",
    features: ["Biometric Access", "Workstation", "Balcony", "Smart TV"],
    popular: false,
    gradient: "from-blue-500/10 to-transparent",
  },
  {
    type: "Premium Double",
    tagline: "Shared Luxury",
    price: "₹12,000",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop",
    features: ["Twin Workstations", "Ample Storage", "Attached Bath", "Daily Cleaning"],
    popular: true,
    gradient: "from-primary/20 to-transparent",
  },
  {
    type: "Social Triple",
    tagline: "Community Centric",
    price: "₹9,500",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop",
    features: ["Shared Storage", "Study Zone", "Biometric Lock", "High-speed WiFi"],
    popular: false,
    gradient: "from-purple-500/10 to-transparent",
  },
];

export function Rooms() {
  return (
    <section id="rooms" className="py-32 bg-background relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <LayoutGrid className="w-3 h-3" />
              Living Spaces
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Designed for Your <br /> 
              <span className="text-primary italic">Ambition</span>
            </h2>
            <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl font-medium">
              Every room is a sanctuary. From biometric door locks to ergonomic workstations, 
              we've optimized every square inch for your lifestyle.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-accent overflow-hidden shadow-lg">
                  <img src={`https://i.pravatar.cc/150?u=room${i}`} alt="resident" />
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-sm font-black uppercase tracking-tighter">Joined by 1.2k+</span>
              <span className="text-xs text-muted-foreground font-bold italic">Happy Professionals</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {rooms.map((room, index) => (
            <Card key={index} className={`group relative overflow-hidden rounded-[3rem] border-2 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] hover:-translate-y-3 ${room.popular ? 'border-primary' : 'border-border/50'}`}>
              {/* Card Hover Gradient Overlay */}
              <div className={`absolute inset-0 bg-linear-to-b ${room.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              {room.popular && (
                <div className="absolute top-8 right-8 z-20">
                  <div className="bg-primary text-primary-foreground px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center gap-2">
                    <Zap className="w-3 h-3 fill-current" />
                    Bestseller
                  </div>
                </div>
              )}
              
              <CardHeader className="p-4">
                <div className="aspect-4/3 rounded-[2rem] overflow-hidden relative shadow-inner">
                  <img 
                    src={room.image} 
                    alt={room.type}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-60" />
                </div>
              </CardHeader>

              <CardContent className="p-10 pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-accent/50 text-[10px] font-black uppercase tracking-tighter rounded-lg px-2 py-0.5">
                    {room.tagline}
                  </Badge>
                </div>
                <h3 className="text-3xl font-black mb-6 group-hover:text-primary transition-colors">{room.type}</h3>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-black text-primary">{room.price}</span>
                  <span className="text-muted-foreground font-bold">/mo</span>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-10 pt-0">
                <Button className={`w-full h-14 rounded-2xl text-md font-black transition-all group-hover:scale-[1.02] active:scale-95 ${room.popular ? 'shadow-2xl shadow-primary/20' : 'bg-accent text-foreground hover:bg-accent/80'}`} variant={room.popular ? 'default' : 'secondary'}>
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
