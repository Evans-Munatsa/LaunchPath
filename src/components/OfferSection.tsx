import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, Target, Rocket, Users } from "lucide-react";
import o1 from "@/assets/offer-1.jpg";
import o2 from "@/assets/offer-2.jpg";
import o3 from "@/assets/offer-3.jpg";
import o4 from "@/assets/offer-4.jpg";
import o5 from "@/assets/offer-5.jpg";
import { Reveal } from "./Reveal";

const cards = [
  { img: o1, title: "Graduate Matching", desc: "Curated shortlists of vetted graduates ready to start.", tag: "Graduate-first", icon: GraduationCap },
  { img: o2, title: "Smart SME Hiring", desc: "Lean tools that get small teams to a great hire faster.", tag: "SME-friendly", icon: Briefcase },
  { img: o3, title: "Skills Assessment", desc: "Practical screening that surfaces real ability, not buzzwords.", tag: "Skills-matched", icon: Target },
  { img: o4, title: "Onboarding Support", desc: "Frameworks that turn day one into long-term retention.", tag: "Career-launching", icon: Rocket },
  { img: o5, title: "Mentor Network", desc: "Pair every hire with a mentor for a stronger first year.", tag: "Youth-led", icon: Users },
];

export const OfferSection = () => {
  return (
    <section id="what-we-do" className="bg-page px-6 pb-24 md:pb-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 pb-10 md:flex-row md:items-end">
            <div className="max-w-[640px]">
              <h2 className="text-[40px] font-bold leading-[1.1] text-foreground md:text-[52px]">What we offer</h2>
              <p className="mt-5 text-[16px] leading-relaxed text-foreground/70">
                Everything an SME needs to find, evaluate, and onboard great graduate talent — without the overhead of a full recruitment team.
              </p>
            </div>
            <Link
              to="/contact"
              className="shine group rounded-full bg-foreground px-7 py-3.5 text-[15px] font-semibold text-background transition-all duration-300 hover:scale-[1.04] hover:shadow-lg"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                Hire Smarter
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </span>
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <Reveal as="article" key={i} delay={i * 80}>
                <div
                  className="group relative h-full overflow-hidden rounded-3xl hover-lift cursor-pointer"
                  style={{ aspectRatio: "1/1" }}
                >
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="image-zoom absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/90" />
                  <span className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-foreground transition-transform duration-300 group-hover:-translate-y-1">
                    <Icon className="h-4 w-4" />
                    {c.tag}
                  </span>
                  <div className="absolute bottom-5 left-5 right-32 text-white transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="text-[20px] font-bold">{c.title}</h3>
                    <p className="mt-1 text-[14px] text-white/85">{c.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
