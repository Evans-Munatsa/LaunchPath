import { Briefcase, Users, GraduationCap, Rocket, Heart, Brain, Sparkles, Target, Eye, Compass, Shield, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const tags = [
  { label: "Graduate-first", icon: GraduationCap },
  { label: "SME-friendly", icon: Briefcase },
  { label: "Skills-matched", icon: Target },
  { label: "Career-launching", icon: Rocket },
  { label: "Youth-led", icon: Users },
  { label: "Future-ready", icon: Compass },
  { label: "Purpose-driven", icon: Heart },
  { label: "Vetted", icon: Shield },
  { label: "Smart-hire", icon: Brain },
  { label: "Next-gen", icon: Sparkles },
  { label: "Growth-focused", icon: TrendingUp },
  { label: "Local impact", icon: Eye },
  { label: "Inclusive", icon: Users },
  { label: "Transparent", icon: Heart },
  { label: "Bold minds", icon: Sparkles },
];

export const TeamSection = () => {
  return (
    <section className="bg-page px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.2em] text-foreground/70">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex shrink-0 items-center">
                {Array.from({ length: 8 }).map((__, j) => (
                  <span key={j} className="flex items-center">
                    <span className="mx-8">Bold minds launch</span>
                    <span aria-hidden className="text-emerald-600">★</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Reveal>
          <h2 className="text-center text-[40px] font-bold leading-[1.1] text-foreground md:text-[56px]">
            Built for South Africa's <span className="text-gradient">next generation</span>.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mx-auto mt-6 max-w-[800px] text-center text-[17px] leading-relaxed text-foreground/70">
            LaunchPath was founded to address South Africa's youth unemployment crisis. We connect graduates with meaningful entry-level work by helping SMEs hire smarter and faster — without the noise, the bias, or the wasted time.
          </p>
        </Reveal>

        <div className="mx-auto mt-12 flex max-w-[900px] flex-wrap justify-center gap-3">
          {tags.map((t, i) => {
            const Icon = t.icon;
            return (
              <span
                key={`${t.label}-${i}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-foreground shadow-sm ring-1 ring-foreground/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-foreground/20 animate-[fade-in-up_.6s_ease-out_both]"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <Icon className="h-4 w-4" />
                {t.label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};
