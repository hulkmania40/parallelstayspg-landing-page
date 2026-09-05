import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToForm = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-20 overflow-hidden gradient-hero-bg">
      <div className="absolute top-[-5%] left-[5%] w-[40%] h-[45%] bg-accent/15 rounded-full blur-[160px] pointer-events-none blob-float" />
      <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[40%] bg-primary/6 rounded-full blur-[140px] pointer-events-none blob-float-delay" />

      <div className="max-w-7xl mx-auto px-6 w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col gap-8 items-start">
            <div className="badge-accent inline-flex items-center gap-2 px-4 py-2 rounded-full">
              <span className="text-sm font-bold tracking-wide text-accent">Parallel Stays Studio Rooms</span>
            </div>

            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] text-foreground">
              Premium{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-accent">Studios</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent/15 rounded-full -z-0" />
              </span>
              .<br />
              Near{" "}
              <span className="text-muted-foreground font-medium italic">ITPL</span>.
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Experience upscale studio living at Parallel Stays. Located near ITPL Backgate-3, Whitefield, featuring biometric security and a professional community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" onClick={scrollToForm} className="btn-gradient rounded-2xl px-8 text-base h-14 font-bold">
                Reserve Your Room
              </Button>
              <a href="https://maps.app.goo.gl/8xFvwBYGGCCPHaZd8" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-2xl px-8 text-base h-14 border-2 border-border hover:border-primary hover:bg-secondary/50 font-bold transition-all">
                  Location Map
                </Button>
              </a>
            </div>

            <div className="hidden sm:flex items-center gap-6 sm:gap-10 pt-8 border-t border-border/60">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black font-heading text-accent">4.4/5</span>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Google Rating</span>
              </div>
              <div className="stats-divider" />
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black font-heading text-foreground">410+</span>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Reviews</span>
              </div>
              <div className="stats-divider" />
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-black font-heading text-foreground">Whitefield</span>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Bengaluru</span>
              </div>
            </div>
          </div>

          <div className="relative min-w-0">
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] warm-shadow-xl hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop"
                alt="Premium Suite"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent" />

              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 glass-card p-3 sm:p-5 rounded-2xl warm-shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                  </div>
                  <div>
                    <p className="text-[11px] sm:text-sm font-black leading-tight text-on-light">Biometric Gate</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground/80 font-medium leading-tight hidden sm:block text-on-light">100% Secure Access</p>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 bg-primary text-primary-foreground px-4 py-3 sm:px-5 sm:py-4 rounded-2xl warm-shadow-lg">
                <div className="flex items-center gap-2 sm:gap-3">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  <span className="font-black tracking-tight text-xs sm:text-sm">ITPL Whitefield</span>
                </div>
              </div>
            </div>

            <div className="hidden sm:block absolute -top-16 -right-16 -z-10 w-48 h-48 bg-accent/10 rounded-full blur-[60px] blob-float" />
          </div>
        </div>
      </div>
    </section>
  );
}
