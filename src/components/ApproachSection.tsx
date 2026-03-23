import { useScrollReveal } from "@/hooks/useScrollReveal";

const ApproachSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="approach" className="py-32 md:py-40 section-padding">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div
          className={`mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            The Approach
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-[-0.02em] leading-[1.15] text-foreground">
            A practice rooted in presence
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div
            className={`space-y-5 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <h3 className="text-lg font-normal tracking-[-0.01em] text-foreground">
              Therapeutic Restoration
            </h3>
            <p className="text-base font-light leading-[1.8] text-charcoal-light">
              Each session is tailored to your body's unique needs, blending deep tissue
              techniques with intuitive touch to dissolve chronic tension and encourage
              natural healing. The result is a body that moves more freely and a mind
              that rests more deeply.
            </p>
          </div>

          <div
            className={`space-y-5 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <h3 className="text-lg font-normal tracking-[-0.01em] text-foreground">
              Intentional Luxury
            </h3>
            <p className="text-base font-light leading-[1.8] text-charcoal-light">
              Beyond technique, there is atmosphere. Warm lighting, curated scents,
              and unhurried attention create an environment where your nervous system
              can fully surrender. This is not indulgence — it is essential care,
              elevated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
