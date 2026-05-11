import { Header } from "@/components/Header";
import { OfferSection } from "@/components/OfferSection";
import { StrategySection } from "@/components/StrategySection";
import { BrandsSection } from "@/components/BrandsSection";
import { ContactFooter } from "@/components/ContactFooter";
import { Reveal } from "@/components/Reveal";

const WhatWeDo = () => (
  <main className="min-h-screen bg-page">
    <div className="relative overflow-hidden bg-foreground pt-32 pb-24 text-background">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute right-10 bottom-0 h-96 w-96 rounded-full bg-amber-300/10 blur-3xl animate-[float_10s_ease-in-out_infinite]" style={{ animationDelay: "2s" }} />
      </div>
      <Header variant="light" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-14">
        <h1 className="max-w-[900px] text-[44px] font-bold leading-[1.05] md:text-[72px] animate-[blur-in_.9s_ease-out_both]">
          What We Do
        </h1>
        <p className="mt-6 max-w-[640px] text-[17px] leading-relaxed text-background/80 animate-[fade-in-up_.9s_ease-out_both]" style={{ animationDelay: "200ms" }}>
          From sourcing to onboarding — every service is built to help SMEs hire great graduates faster, and to help graduates start careers that actually go somewhere.
        </p>
      </div>
    </div>
    <Reveal as="section" step={0}><OfferSection /></Reveal>
    <Reveal as="section" step={1}><StrategySection /></Reveal>
    <Reveal as="section" step={1}><BrandsSection /></Reveal>
    <Reveal as="section" step={1}><ContactFooter /></Reveal>
  </main>
);

export default WhatWeDo;
