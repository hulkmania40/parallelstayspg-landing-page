import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    content: "The best PG I've ever stayed in. The amenities are top-notch, and the community events make it feel like home. The high-speed WiFi is a lifesaver for remote work!",
    avatar: "https://i.pravatar.cc/150?u=rahul",
    rating: 5,
  },
  {
    name: "Ananya Iyer",
    role: "Product Designer",
    content: "UrbanStay isn't just a place to stay; it's an experience. The housekeeping is impeccable, and I've made some of my best friends here during the weekend mixers.",
    avatar: "https://i.pravatar.cc/150?u=ananya",
    rating: 5,
  },
  {
    name: "Vikram Mehta",
    role: "Data Scientist",
    content: "Seamless move-in process and very professional management. The food is actually good—unlike most hostels. Highly recommended for professionals!",
    avatar: "https://i.pravatar.cc/150?u=vikram",
    rating: 4,
  },
  {
    name: "Sanya Malhotra",
    role: "Marketing Manager",
    content: "Safety was my priority, and UrbanStay delivers perfectly with biometric access. The common areas are beautiful and great for unwinding after work.",
    avatar: "https://i.pravatar.cc/150?u=sanya",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="badge-accent inline-flex items-center px-4 py-2 rounded-full mb-5">
            <span className="text-sm font-bold tracking-wide">Testimonials</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            What Our Residents Say
          </h2>
        </div>

        <div className="relative px-0 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-3">
                  <Card className="h-full border-0 warm-shadow-lg rounded-2xl bg-card">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-base leading-relaxed mb-6 grow text-foreground/80">
                        "{t.content}"
                      </p>
                      <div className="flex items-center gap-3 mt-auto">
                        <Avatar className="w-10 h-10 border-2 border-accent/20">
                          <AvatarImage src={t.avatar} />
                          <AvatarFallback className="bg-accent/10 text-accent font-bold text-xs">{t.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold text-sm text-foreground">{t.name}</h4>
                          <p className="text-xs text-muted-foreground">{t.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-8 w-10 h-10 border-2 border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all rounded-full" />
            <CarouselNext className="-right-4 md:-right-8 w-10 h-10 border-2 border-border hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all rounded-full" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
