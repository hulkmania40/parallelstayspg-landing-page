import { Button } from "@/components/ui/button";
import { Users2, Calendar, Zap, Heart, MessageCircle } from "lucide-react";

export function Community() {
  return (
    <section id="community" className="py-32 bg-primary text-primary-foreground overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 animate-pulse" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            {/* Visual Mosaic */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="group relative rounded-[3rem] overflow-hidden aspect-square shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1932&auto=format&fit=crop" 
                    alt="Community Event"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Heart className="w-12 h-12 fill-white text-white animate-bounce" />
                  </div>
                </div>
                <div className="group relative rounded-[3rem] overflow-hidden aspect-[3/4] shadow-2xl -rotate-3 hover:rotate-0 transition-all duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop" 
                    alt="Common Area"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <p className="text-xs font-black uppercase tracking-widest text-white">Networking Zone</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6 pt-16">
                <div className="group relative rounded-[3rem] overflow-hidden aspect-[3/4] shadow-2xl -rotate-2 hover:rotate-0 transition-all duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1949&auto=format&fit=crop" 
                    alt="Shared Meal"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-6 right-6">
                    <div className="bg-white text-primary p-3 rounded-2xl shadow-xl">
                      <Zap className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="group relative rounded-[3rem] overflow-hidden aspect-square shadow-2xl rotate-6 hover:rotate-0 transition-all duration-700">
                  <img 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" 
                    alt="Celebration"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <p className="absolute bottom-6 left-8 text-lg font-black italic underline decoration-white/30 underline-offset-4">Shared Memories.</p>
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute top-1/2 -right-10 bg-white text-primary p-8 rounded-[3rem] shadow-2xl hidden xl:block rotate-12 group hover:rotate-0 transition-all">
               <MessageCircle className="w-10 h-10 mb-4 animate-pulse" />
               <p className="text-xl font-black italic tracking-tighter">"I found my co-founder here!"</p>
               <p className="text-xs font-bold text-primary/60 mt-2 uppercase">- Ankit, Resident</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-0.5 bg-white/30" />
                <span className="font-black uppercase tracking-[0.3em] text-xs text-white/80">The Human Connection</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] text-white">
                Where Ambition <br /> Meets <span className="italic font-light text-primary-foreground/90">Community</span>
              </h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed font-medium">
                UrbanStay is more than just luxury rooms—it's a launchpad for your next big idea. Join a curated community of engineers, designers, and entrepreneurs.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <Calendar className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-black mb-3 italic">Social Rituals</h4>
                <p className="text-primary-foreground/70 leading-relaxed font-medium text-sm">Movie marathons, game nights, and rooftop mixers designed to break the ice.</p>
              </div>
              <div className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  <Users2 className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-black mb-3 italic">Co-working</h4>
                <p className="text-primary-foreground/70 leading-relaxed font-medium text-sm">Collaborate in our high-energy workspaces equipped with ergonomic comfort.</p>
              </div>
            </div>

            <Button size="lg" variant="secondary" className="rounded-2xl w-full sm:w-fit px-12 h-16 font-black text-primary hover:bg-white hover:scale-105 transition-all shadow-xl">
              Apply to the Community
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
