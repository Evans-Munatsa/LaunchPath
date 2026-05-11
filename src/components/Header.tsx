import { Link, useLocation } from "react-router-dom";

export const Logo = ({ color = "white" }: { color?: string }) => (
  <Link to="/" className="group flex items-center gap-2" aria-label="LaunchPath home">
    <svg width="34" height="34" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className="transition-transform duration-500 group-hover:rotate-[-12deg] group-hover:scale-110">
      <path
        d="M14 50L50 14M50 14H22M50 14V42M22 36c-4 2-8 6-10 14 8-2 12-6 14-10"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="text-[1.35rem] font-bold tracking-tight" style={{ color }}>
      Launch<span className="font-light">Path</span>
    </span>
  </Link>
);

const navItems = [
  { label: "Home", to: "/" },
  { label: "What We Do", to: "/what-we-do" },
  { label: "About us", to: "/about-us" },
  { label: "Contact", to: "/contact" },
];

interface HeaderProps {
  variant?: "light" | "dark";
}

export const Header = ({ variant = "light" }: HeaderProps) => {
  const { pathname } = useLocation();
  const onDark = variant === "light"; // light variant = on dark hero image

  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 md:px-14 md:py-8">
        <Logo color={onDark ? "white" : "hsl(var(--foreground))"} />
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                className={`rounded-full px-6 py-3 text-[15px] font-medium transition ${
                  active
                    ? "bg-white text-foreground"
                    : onDark
                      ? "text-white/95 hover:text-white"
                      : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link
          to="/contact"
          className="shine group relative overflow-hidden rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-foreground transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] md:px-7 md:py-3.5"
        >
          <span className="relative z-10">Visit Portal</span>
        </Link>
      </div>
    </header>
  );
};
