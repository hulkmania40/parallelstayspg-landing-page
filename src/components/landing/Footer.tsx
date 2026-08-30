import { useRef, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail,
  Send
} from "lucide-react";
import { 
  FaInstagram, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn 
} from "react-icons/fa";
import { Logo } from "@/src/components/Logo";

const socialLinks = [
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaTwitter, label: "Twitter" },
  { icon: FaLinkedinIn, label: "LinkedIn" },
];

export function Footer() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const whatsappMessage = [
      "Hi, I am interested in Parallel Stays Studio Rooms.",
      name ? `Name: ${name}` : null,
      email ? `Email: ${email}` : null,
      phone ? `Phone: ${phone}` : null,
      message ? `Message: ${message}` : null,
    ].filter((line): line is string => Boolean(line)).join("\n");

    const whatsappUrl = `https://wa.me/917702657021?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    formRef.current?.reset();
  };

  return (
    <footer className="bg-background pt-24 pb-12 border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Logo />
            </div>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Premium studio rooms for modern professionals and students. Located in the heart of Whitefield, Bengaluru.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-muted-foreground text-sm">Kalidas Road, 10, Pattandur Agrahara Village Main Rd, Whitefield, Bengaluru - 560066</span>
                  <a 
                    href="https://maps.app.goo.gl/8xFvwBYGGCCPHaZd8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary text-xs font-bold hover:underline mt-1 w-fit"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground">+91 80505 26162</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground">contact@parallelstays.com</span>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              {socialLinks.map((social, i) => (
                <Button key={i} variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="bg-accent/50 p-10 rounded-[2.5rem] border">
            <h3 className="text-2xl font-bold mb-6">Have Questions? Drop a Message</h3>
            <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input name="name" placeholder="Your Name" className="h-12 rounded-xl bg-background border-none focus-visible:ring-primary" />
                <Input name="email" type="email" placeholder="Email Address" className="h-12 rounded-xl bg-background border-none focus-visible:ring-primary" />
              </div>
              <Input name="phone" placeholder="Phone Number" className="h-12 rounded-xl bg-background border-none focus-visible:ring-primary" />
              <Textarea name="message" placeholder="How can we help you?" className="min-h-30 rounded-xl bg-background border-none focus-visible:ring-primary resize-none" />
              <Button type="submit" className="w-full h-12 rounded-xl font-bold gap-2 shadow-lg shadow-primary/10">
                <Send className="w-4 h-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm">
            © 2026 Parallel Stays Studio Rooms. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
