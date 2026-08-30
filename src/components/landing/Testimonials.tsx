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
    <section className="py-24 bg-accent/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-5 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
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
                  <Card className="h-full border-0 shadow-lg rounded-2xl bg-background">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex gap-0.5 mb-4">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-base leading-relaxed mb-6 grow italic text-foreground/80">
                        "{t.content}"
                      </p>
                      <div className="flex items-center gap-3 mt-auto">
                        <Avatar className="w-10 h-10 border-2 border-primary/10">
                          <AvatarImage src={t.avatar} />
                          <AvatarFallback>{t.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-bold text-sm">{t.name}</h4>
                          <p className="text-xs text-muted-foreground">{t.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-8 w-10 h-10 border-2 hover:bg-primary hover:text-primary-foreground transition-all" />
            <CarouselNext className="-right-4 md:-right-8 w-10 h-10 border-2 hover:bg-primary hover:text-primary-foreground transition-all" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
