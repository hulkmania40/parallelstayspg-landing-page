import { Button } from "@/components/ui/button";
import { Users2, Calendar, Zap } from "lucide-react";

export function Community() {
  return (
    <section id="community" className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop"
                    alt="Community Event"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
                    alt="Common Area"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                    <p className="text-xs font-black uppercase tracking-widest text-white">Networking Zone</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop"
                    alt="Shared Meal"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white text-primary p-2.5 rounded-xl shadow-lg">
                      <Zap className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
                    alt="Celebration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <p className="absolute bottom-4 left-4 text-base font-black italic">Shared Memories.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="font-black uppercase tracking-[0.2em] text-xs text-white/80">The Human Connection</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[0.95] text-white">
                Where Ambition <br /> Meets <span className="italic font-light text-white/80">Community</span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Parallel Stays is more than just luxury rooms — it's a launchpad for your next big idea. Join a curated community of engineers, designers, and entrepreneurs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-2 italic">Social Rituals</h4>
                <p className="text-white/60 leading-relaxed text-sm">Movie marathons, game nights, and rooftop mixers designed to break the ice.</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <Users2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-2 italic">Co-working</h4>
                <p className="text-white/60 leading-relaxed text-sm">Collaborate in our high-energy workspaces equipped with ergonomic comfort.</p>
              </div>
            </div>

            <Button size="lg" variant="secondary" className="rounded-2xl w-full sm:w-fit px-10 h-14 font-bold text-primary hover:bg-white hover:scale-105 transition-all">
              Apply to the Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
