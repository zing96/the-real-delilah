import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-end pb-24 md:pb-32 section-padding overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Serene spa atmosphere with balanced stones and eucalyptus"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-lg space-y-8 animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.02em] leading-[1.1] text-foreground">
            Revitalize
            <br />
            Your Energy
          </h1>
          <p className="text-base md:text-lg font-light leading-relaxed text-charcoal-light max-w-md">
            Therapeutic bodywork designed to restore balance, release tension,
            and reconnect you with a deeper sense of well-being.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="#booking">Request Appointment</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
