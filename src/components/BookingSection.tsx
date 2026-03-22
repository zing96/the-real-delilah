import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { format, addMonths } from "date-fns";

const BookingSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);

  const today = useMemo(() => format(new Date(), "yyyy-MM-dd"), []);
  const maxDate = useMemo(() => format(addMonths(new Date(), 1), "yyyy-MM-dd"), []);

  const inputClasses =
    "w-full bg-transparent border-b border-border px-0 py-3 text-sm font-light text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300 appearance-none rounded-none";

  const selectClasses =
    "w-full bg-transparent border-b border-border px-0 py-3 text-sm font-light text-foreground focus:outline-none focus:border-foreground transition-colors duration-300 appearance-none rounded-none cursor-pointer";

  if (submitted) {
    return (
      <section id="booking" className="py-32 md:py-40 section-padding">
        <div className="max-w-lg mx-auto text-center space-y-6">
          <h2 className="text-3xl font-light tracking-[-0.02em] text-foreground">
            Thank You
          </h2>
          <p className="text-base font-light text-charcoal-light leading-relaxed">
            Your appointment request has been received. Delilah will be in touch shortly to confirm your session.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-32 md:py-40 section-padding">
      <div ref={ref} className="max-w-xl mx-auto">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Booking
          </p>
          <h2 className="text-3xl md:text-4xl font-light tracking-[-0.02em] text-foreground">
            Request an Appointment
          </h2>
        </div>

        <form
          action="https://formsubmit.co/gavin.zingsheim@gmail.com"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className={`space-y-8 transition-all duration-700 delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Appointment Request — The Real Delilah" />

          <div className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              className={inputClasses}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className={inputClasses}
            />

            <select name="duration" required className={selectClasses} defaultValue="">
              <option value="" disabled>
                Session Duration
              </option>
              <option value="15 Minutes">15 Minutes</option>
              <option value="30 Minutes">30 Minutes</option>
              <option value="1 Hour">1 Hour</option>
              <option value="2 Hours">2 Hours</option>
            </select>

            <input
              type="date"
              name="date"
              required
              min={today}
              max={maxDate}
              className={selectClasses}
            />

            <select name="time_of_day" required className={selectClasses} defaultValue="">
              <option value="" disabled>
                Preferred Time
              </option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>

          <Button variant="hero" size="lg" type="submit" className="w-full mt-4">
            Submit Request
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BookingSection;
