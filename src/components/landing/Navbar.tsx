// Navbar - sticky top navigation
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

  const isActive = (href: string) => {
    return href === "/";
  };

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "py-4 bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <Logo name="Parallel Stays PG" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative",
                    active
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                >
                  {item.name}
                  {active && !item.href.startsWith("#") && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </a>
              );
            })}
          </div>
          <div className="flex items-center gap-3 ml-4">
            <ModeToggle />
            <Button
              size="sm"
              className="rounded-full px-6 shadow-md hover:shadow-lg transition-all active:scale-95"
              onClick={scrollToForm}
            >
              Book Now
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-100">
              <SheetHeader className="border-b pb-4">
                <SheetTitle>
                  <Logo name="Parallel Stays PG" />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-2 mt-6">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 text-base font-medium p-3 rounded-lg transition-colors",
                        active
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-accent"
                      )}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item);
                      }}
                    >
                      <item.icon
                        className={cn(
                          "h-5 w-5",
                          active ? "text-primary" : "text-muted-foreground"
                        )}
                      />
                      {item.name}
                    </a>
                  );
                })}

                <div className="mt-6 pt-6 border-t space-y-3">
                  <Button
                    className="w-full rounded-lg"
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
