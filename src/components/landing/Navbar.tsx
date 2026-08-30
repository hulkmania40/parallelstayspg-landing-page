import { useState, useEffect } from "react";
import { Menu, Home, Info, Bed, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/src/components/theme/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Logo } from "@/src/components/Logo";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Amenities", href: "#amenities", icon: Info },
  { name: "Rooms", href: "#rooms", icon: Bed },
  { name: "Community", href: "#community", icon: Users },
  { name: "FAQ", href: "#faq", icon: MessageSquare },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById("contact-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleNavClick = (item: { href: string; name: string }) => {
    setIsOpen(false);
    if (item.href.startsWith("#")) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-400 px-4 sm:px-6",
        isScrolled
          ? "py-3 glass-nav border-b border-border/40 shadow-sm"
          : "py-4 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <Logo name="Parallel Stays PG" />

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isScrolled ? "nav-text" : "text-foreground/70 hover:text-accent"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 ml-4">
            <ModeToggle />
            <Button
              size="sm"
              className="btn-gradient rounded-full px-6 font-bold text-sm"
              onClick={scrollToForm}
            >
              Book Now
            </Button>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("rounded-full h-10 w-10", isScrolled && "nav-text-dark")}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-100 bg-background">
              <SheetHeader className="border-b pb-4">
                <SheetTitle>
                  <Logo name="Parallel Stays PG" />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 mt-6">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 text-base font-medium p-3 rounded-xl transition-colors hover:bg-accent/10 text-foreground"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                  >
                    <item.icon className="h-5 w-5 text-muted-foreground" />
                    {item.name}
                  </a>
                ))}

                <div className="mt-6 pt-6 border-t space-y-3">
                  <Button
                    className="w-full btn-gradient rounded-xl"
                    onClick={scrollToForm}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
