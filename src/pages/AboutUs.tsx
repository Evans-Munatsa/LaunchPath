import { Header } from "@/components/Header";
import { TeamSection } from "@/components/TeamSection";
import { PeopleSection } from "@/components/PeopleSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { ContactFooter } from "@/components/ContactFooter";
import { Reveal } from "@/components/Reveal";

const AboutUs = () => (
  <main className="min-h-screen bg-page">
    <div className="relative overflow-hidden bg-foreground pt-32 pb-24 text-background">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute right-10 bottom-0 h-96 w-96 rounded-full bg-amber-300/10 blur-3xl animate-[float_10s_ease-in-out_infinite]" style={{ animationDelay: "2s" }} />
      </div>
      <Header variant="light" />
      <div className="relative mx-auto max-w-[1400px] px-6 md:px-14">
        <h1 className="max-w-[900px] text-[44px] font-bold leading-[1.05] md:text-[72px] animate-[blur-in_.9s_ease-out_both]">
          Built to fix <span className="text-gradient">graduate unemployment</span>.
        </h1>
        <p className="mt-6 max-w-[640px] text-[17px] leading-relaxed text-background/80 animate-[fade-in-up_.9s_ease-out_both]" style={{ animationDelay: "200ms" }}>
          LaunchPath was founded to address South Africa's youth unemployment crisis. Our goal is simple: connect graduates with meaningful entry-level work by helping SMEs hire smarter and faster.
        </p>
      </div>
    </div>
    <Reveal as="section" step={0}><TeamSection /></Reveal>
    <Reveal as="section" step={1}><PeopleSection /></Reveal>
    <Reveal as="section" step={1}><TestimonialSection /></Reveal>
    <Reveal as="section" step={1}><ContactFooter /></Reveal>
  </main>
);

export default AboutUs;
