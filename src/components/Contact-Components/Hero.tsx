import React from "react";
import AnimatedHeading from "../AnimatedHeading";

const Hero: React.FC = () => {
  return (
    <section className="px-6 py-8">
      <div className="max-w-7xl mx-auto relative rounded-2xl overflow-hidden h-75 md:h-100">
        {/* Background Image */}
        <img
          src="/contact-hero.webp"
          alt="Plants background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0B120D] via-[#0B120D]/60 to-transparent"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className=" flex flex-wrap gap-2 justify-center items-center mb-4">
            <div className="overflow-hidden max-h-14">
              <AnimatedHeading
                text="Let's Cultivate"
                css="text-4xl md:text-5xl font-hedvig font-bold text-white mb-4"
              />
            </div>
            <div className="overflow-hidden max-h-14">
              <AnimatedHeading
                text="Your Vision"
                css="text-4xl md:text-5xl font-hedvig font-bold text-white mb-4"
              />
            </div>
          </div>

          <p className="text-gray-300 max-w-xl mx-auto text-lg leading-relaxed">
            Reach out today to schedule a consultation or discuss your
            landscaping needs with our architectural experts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
