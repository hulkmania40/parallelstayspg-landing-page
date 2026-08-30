import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the security deposit amount?",
    answer: "Our standard security deposit is equivalent to one month's rent. It is fully refundable at the time of move-out, subject to our exit policy and room condition assessment.",
  },
  {
    question: "Are guests allowed in the PG?",
    answer: "Yes, day guests are welcome in our vibrant common areas until 9 PM. For overnight stays, we require 24-hour prior notice and management approval to ensure the comfort of all residents.",
  },
  {
    question: "Is there a notice period for vacating?",
    answer: "We maintain a standard 30-day notice period. This allows us to handle the administrative checkout process, security refund, and room maintenance efficiently.",
  },
  {
    question: "What kind of food is provided?",
    answer: "We offer a diverse, nutritionally balanced menu. Weekdays include breakfast and dinner, while weekends feature a full three-meal service. We cater to both vegetarian and non-vegetarian preferences with home-style cooking.",
  },
  {
    question: "Are there any hidden charges?",
    answer: "Transparency is our core value. Your monthly rent covers high-speed WiFi, professional housekeeping, laundry services, and basic utility costs. There are zero hidden administrative fees.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            Support Center
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Got Questions? <br /> We've Got Answers
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Everything you need to know about your future home. Can't find what you're looking for? Reach out to our support team.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="group border border-border/60 rounded-2xl overflow-hidden transition-all duration-300 data-[state=open]:border-primary/30 data-[state=open]:bg-primary/2 data-[state=open]:shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:data-[state=open]:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
            >
              <AccordionTrigger className="cursor-pointer flex flex-1 items-center justify-between py-6 px-6 text-left text-lg font-semibold transition-all hover:no-underline hover:text-primary [&[data-state=open]>svg]:rotate-45">
                <span className="pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[16px] leading-relaxed px-6 pb-6 pt-0 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="border-t border-border/40 pt-4 mt-1">
                  {faq.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 p-8 rounded-3xl bg-accent/30 border border-dashed border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-1">Still have more questions?</h4>
            <p className="text-sm text-muted-foreground">Our concierge team is here to help you 24/7.</p>
          </div>
          <button className="px-8 py-3 bg-foreground text-background dark:bg-primary dark:text-primary-foreground rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg">
            Chat with us
          </button>
        </div>
      </div>
    </section>
  );
}
