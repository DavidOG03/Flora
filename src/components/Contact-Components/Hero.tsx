import React, { useEffect, useState } from "react";
import AnimatedHeading from "../AnimatedHeading";

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setOffset(window.scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="p-4 md:p-6 mb-6 h-svh">
      <div className="max-w-7xl mx-auto relative rounded-2xl overflow-hidden h-svh md:h-svh">
        {/* Background Image */}
        <img
          src="/contact-hero.webp"
          alt="Plants background"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          style={{
            transform: `translateY(${offset * 0.15}px)`, // Moves at 50% scroll speed
            height: "120%",
            top: "-10%",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0B120D] via-[#0B120D]/60 to-transparent"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className=" flex flex-wrap gap-2 justify-center items-center mb-4">
            <div className="overflow-hidden max-h-22 flex justify-center items-center mb-4">
              <AnimatedHeading
                text=" Let's Cultivate"
                css="text-5xl md:text-7xl font-hedvig font-bold text-white mb-6 leading-tight"
              />
            </div>
            <div className="overflow-hidden max-h-22 flex justify-center items-center mb-4">
              <AnimatedHeading
                text="Your Vision"
                css="text-5xl md:text-7xl font-hedvig font-bold text-white mb-6 leading-tight"
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
