import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, MapPin, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden overflow-x-hidden bg-background">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[5%] right-[-5%] w-[35%] h-[35%] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-10 items-start min-w-0">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary animate-in fade-in slide-in-from-left duration-700">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-bold tracking-wide uppercase">Parallel Stays Studio Rooms</span>
              </div>
              
                <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.95] text-foreground wrap-break-word">
                Premium <span className="text-primary underline decoration-primary/20 underline-offset-8">Studios</span>.<br />
                Near <span className="italic font-light text-primary/80">ITPL</span>.
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-145 leading-relaxed font-medium">
                Experience upscale studio living at Parallel Stays. Located near ITPL Backgate-3, Whitefield, featuring biometric security and a professional community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <Button size="lg" className="rounded-2xl px-10 text-lg shadow-2xl shadow-primary/20 hover:shadow-primary/40 group h-16 transition-all duration-300">
                Reserve Your Room
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <a 
                href="https://maps.app.goo.gl/8xFvwBYGGCCPHaZd8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="outline" className="w-full rounded-2xl px-10 text-lg h-16 bg-background/50 backdrop-blur-md border-2 hover:bg-accent/50 transition-all duration-300">
                  Location Map
                </Button>
              </a>
            </div>

            {/* Mobile compact summary (no scroll) */}
            <div className="w-full pt-6 sm:hidden">
              <p className="text-lg md:text-xl text-muted-foreground leading-tight">
                <span className="text-2xl font-black text-primary">4.4/5</span>
                <span className="mx-3">•</span>
                <span className="font-black">410+ reviews</span>
                <span className="mx-3">•</span>
                <span className="font-black">Whitefield</span>
              </p>
            </div>

            {/* Desktop / sm+ detailed stats */}
            <div className="hidden sm:flex items-center gap-6 sm:gap-10 pt-8 border-t border-border/50 w-full">
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-3xl font-black text-primary">4.4/5</span>
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Google Rating</span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-3xl font-black text-primary">410+</span>
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Reviews</span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <span className="text-3xl font-black text-primary">Whitefield</span>
                <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Bengaluru</span>
              </div>
            </div>
          </div>

          <div className="relative group min-w-0">
            {/* Main Hero Image with Glass Border */}
            <div className="relative z-10 p-3 rounded-[3rem] bg-linear-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl overflow-hidden backdrop-blur-sm">
              <div className="rounded-[2.5rem] overflow-hidden aspect-4/5">
                  <img
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop"
                  alt="Premium Suite"
                    className="w-full h-full max-w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Floating Security Badge */}
            <div className="absolute -top-6 -left-6 z-20 bg-background/95 backdrop-blur-xl p-5 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-border animate-bounce-slow">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/10 rounded-2xl">
                  <ShieldCheck className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm font-black">Biometric Gate</p>
                  <p className="text-xs text-muted-foreground font-bold">100% Secure Access</p>
                </div>
              </div>
            </div>

            {/* Floating Location Tag */}
            <div className="absolute bottom-4 right-4 lg:-bottom-10 lg:-right-6 z-20 bg-primary p-4 lg:p-6 rounded-3xl shadow-2xl text-primary-foreground animate-in slide-in-from-right duration-1000 max-w-[75%]">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 animate-pulse" />
                <span className="font-black tracking-tight text-sm lg:text-base">ITPL Whitefield Hub</span>
              </div>
            </div>
            
            {/* Decorative Orbs */}
            <div className="absolute -top-20 -right-20 -z-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
