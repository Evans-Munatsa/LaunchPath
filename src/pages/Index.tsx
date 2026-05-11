import heroImg from "@/assets/models/models1.jpg";
import { Header } from "@/components/Header";
import { TeamSection } from "@/components/TeamSection";
import { OfferSection } from "@/components/OfferSection";
import { StrategySection } from "@/components/StrategySection";
import { TestimonialSection } from "@/components/TestimonialSection";
import { BrandsSection } from "@/components/BrandsSection";
import { PeopleSection } from "@/components/PeopleSection";
import { ContactFooter } from "@/components/ContactFooter";
import { Reveal } from "@/components/Reveal";

const PartnerLogo = ({ name, variant }: { name: string; variant: number }) => (
  <svg viewBox="0 0 160 28" className="h-6 w-auto transition-opacity duration-300 hover:opacity-100" aria-label={name}>
    {variant === 0 && <circle cx="14" cy="14" r="10" fill="none" stroke="white" strokeWidth="2" />}
    {variant === 1 && <rect x="4" y="4" width="20" height="20" rx="4" fill="none" stroke="white" strokeWidth="2" />}
    {variant === 2 && <path d="M4 22V6l10 16V6" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round" />}
    {variant === 3 && <path d="M14 4l10 18H4z" fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round" />}
    <text x="32" y="19" fill="white" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">{name}</text>
  </svg>
);

const Hero = () => (
  <section className="relative min-h-screen w-full overflow-hidden">
    <img src={heroImg} alt="Young graduates collaborating" className="absolute inset-0 h-full w-full object-cover scale-110 animate-[fade-in_1.4s_ease-out_both]" width={1920} height={1080} />
    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/30" aria-hidden />
    {/* Floating ambient orbs */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute right-10 top-1/4 h-96 w-96 rounded-full bg-amber-300/15 blur-3xl animate-[float_10s_ease-in-out_infinite]" style={{ animationDelay: "2s" }} />
    </div>
    <Header variant="light" />
    <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-end px-6 pb-16 pt-40 md:px-14 md:pb-20">
      <div className="max-w-[900px] text-white">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-medium text-white/90 backdrop-blur-sm ring-1 ring-white/20 animate-[fade-in-up_.7s_ease-out_both]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-[pulse-ring_2.4s_ease-out_infinite] rounded-full bg-emerald-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Tackling African youth unemployment
        </span>
        <h1 className="mt-6 text-[44px] leading-[1.05] font-bold sm:text-[58px] md:text-[78px]">
          <span className="block animate-[blur-in_.9s_cubic-bezier(.2,.7,.2,1)_both]">Connecting graduates</span>
          <span className="block animate-[blur-in_.9s_cubic-bezier(.2,.7,.2,1)_both]" style={{ animationDelay: "150ms" }}>
            with <span className="text-gradient">meaningful work</span>
          </span>
        </h1>
        <p className="mt-8 max-w-[680px] text-[17px] leading-relaxed text-white/90 md:text-[18px] animate-[fade-in-up_.9s_ease-out_both]" style={{ animationDelay: "350ms" }}>
          LaunchPath helps South African SMEs hire smarter and faster, matching ambitious graduates with entry-level roles that actually move careers forward.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 animate-[fade-in-up_.9s_ease-out_both]" style={{ animationDelay: "500ms" }}>
          <a href="/what-we-do" className="shine group inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 text-[15px] font-semibold text-foreground transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_15px_40px_-10px_rgba(255,255,255,0.5)]">
            <span className="relative z-10">Start hiring</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a href="/about-us" className="rounded-full bg-white/10 px-9 py-4 text-[15px] font-semibold text-white backdrop-blur-sm ring-1 ring-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-[1.04]">
            Our mission
          </a>
        </div>
      </div>
      <div className="mt-16 md:mt-24 animate-[fade-in_1.2s_ease-out_both]" style={{ animationDelay: "700ms" }}>
        <p className="text-[14px] font-medium text-white">Trusted by 200+ growing SMEs across South Africa</p>
        {/* <div className="mt-6 flex flex-wrap items-center gap-x-12 gap-y-6 opacity-70">
          {[
            { name: "Kasi Co", v: 0 },
            { name: "Boitumelo", v: 1 },
            { name: "Veld Tech", v: 2 },
            { name: "Aurora SA", v: 3 },
          ].map((b, i) => (
            <div key={i} className="transition-all duration-300 hover:opacity-100 hover:scale-105">
              <PartnerLogo name={b.name} variant={b.v} />
            </div>
          ))}
        </div> */}
      </div>
    </div>
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/70">
      <span className="text-[11px] uppercase tracking-[0.3em]">Scroll</span>
      <span className="h-10 w-[1px] bg-gradient-to-b from-white/70 to-transparent animate-[float_2s_ease-in-out_infinite]" />
    </div>
  </section>
);

const Index = () => (
  <main className="min-h-screen bg-background">
    <Hero />
    <Reveal as="section" step={0}><TeamSection /></Reveal>
    <Reveal as="section" step={1}><OfferSection /></Reveal>
    <Reveal as="section" step={1}><StrategySection /></Reveal>
    <Reveal as="section" step={1}><TestimonialSection /></Reveal>
    <Reveal as="section" step={1}><BrandsSection /></Reveal>
    <Reveal as="section" step={1}><PeopleSection /></Reveal>
    <Reveal as="section" step={1}><ContactFooter /></Reveal>
  </main>
);

export default Index;
