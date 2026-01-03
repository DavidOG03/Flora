import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
    <section className="relative pt-0 pb-4 md:pt-0 md:pb-10 px-4">
      <div className="max-w-7xl mx-auto relative h-screen min-h-150 overflow-hidden flex items-center justify-center m-4 rounded-2xl">
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            transform: `translateY(${offset * 0.15}px)`, // Moves at 50% scroll speed
            height: "120%",
            top: "-10%",
          }}
        >
          <img
            src="/heroimg.webp"
            alt="Modern landscape architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0a0f0d]/70 via-[#0a0f0d]/40 to-[#0a0f0d]" />
        </div>

        <div
          className="relative bottom-0 left-0 w-full p-8 md:p-16 flex flex-col items-center text-center"
          style={{ transform: `translateY(${offset * 0.02}px)` }}
        >
          <div className="flex gap-4 justify-center items-center overflow-hidden max-h-22 mb-4">
            <AnimatedHeading
              text="Shaping Living"
              css="text-5xl md:text-7xl font-hedvig text-center font-bold tracking-tighter mb-6 leading-tight"
            />
          </div>
          <div className="text-lime flex gap-4 justify-center items-center overflow-hidden max-h-20 mb-6">
            <AnimatedHeading
              text="Landscapes"
              css="text-5xl md:text-7xl text-lime font-hedvig text-center font-bold tracking-tighter mb-6 leading-tight"
            />
          </div>

          <p className="max-w-2xl text-gray-300 text-lg mb-8 font-hedvig">
            We design spaces that blend seamlessly with nature, creating
            sustainable living environments for a greener future.
          </p>
          <Link
            to="/portfolio"
            className="px-8 py-3 bg-lime-500 hover:bg-lime-400 text-black font-hedvig font-medium rounded-sm transition-all flex items-center gap-2"
          >
            Explore Our Work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
