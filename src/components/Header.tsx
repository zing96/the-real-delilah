import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 section-padding ${
        scrolled ? "py-4 bg-background/90 backdrop-blur-sm shadow-[0_1px_0_hsl(var(--border))]" : "py-6 bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <a href="#hero" className="text-foreground tracking-[0.25em] text-sm font-light uppercase">
          Madison McCoy
        </a>
        <div className="hidden md:flex items-center gap-10">
          {["Approach", "Gallery", "Booking"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
        <a
          href="#booking"
          className="md:hidden text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          Book
        </a>
      </nav>
    </header>
  );
};

export default Header;
