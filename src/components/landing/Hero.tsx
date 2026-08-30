import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-background">
      {/* Background Gradients */}
      <div className="absolute top-[-5%] left-[10%] w-[35%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[30%] h-[35%] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8 items-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-bold tracking-wide uppercase text-primary">Parallel Stays Studio Rooms</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-foreground">
              Premium <span className="text-primary underline decoration-primary/25 underline-offset-8">Studios</span>.
              Near <span className="italic font-light text-primary/80">ITPL</span>.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Experience upscale studio living at Parallel Stays. Located near ITPL Backgate-3, Whitefield, featuring biometric security and a professional community.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" onClick={scrollToForm} className="rounded-2xl px-8 text-base h-14 font-bold shadow-xl shadow-primary/15 hover:shadow-primary/30 transition-all active:scale-95">
                Reserve Your Room
              </Button>
              <a href="https://maps.app.goo.gl/8xFvwBYGGCCPHaZd8" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-2xl px-8 text-base h-14 border-2 font-bold transition-all active:scale-95">
                  Location Map
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="hidden sm:flex items-center gap-8 sm:gap-12 pt-8 border-t border-border/50">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-primary">4.4/5</span>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Google Rating</span>
              </div>
              <div className="w-px h-12 bg-border/50" />
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-primary">410+</span>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Reviews</span>
              </div>
              <div className="w-px h-12 bg-border/50" />
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black text-primary">Whitefield</span>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Bengaluru</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative min-w-0">
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop"
                alt="Premium Suite"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* Floating Badge - Biometric */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 bg-background/95 backdrop-blur-xl p-3 sm:p-5 rounded-2xl shadow-xl border border-border/60">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-green-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-sm font-black leading-tight">Biometric Gate</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground font-medium leading-tight hidden sm:block">100% Secure Access</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Location */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 bg-primary px-4 py-3 sm:px-5 sm:py-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  <span className="font-black tracking-tight text-xs sm:text-sm text-primary-foreground">ITPL Whitefield</span>
                </div>
              </div>
            </div>

            {/* Decorative blur - hidden on small mobile */}
            <div className="hidden sm:block absolute -top-16 -right-16 -z-10 w-48 h-48 bg-primary/10 rounded-full blur-[60px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
