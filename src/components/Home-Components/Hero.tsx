import React from "react";
import { useState, useEffect } from "react";
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
    <div className="w-full">
      <div className="relative h-screen min-h-150 overflow-hidden flex items-center justify-center m-4 rounded-2xl">
        {/* Background Image with Overlay */}

        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            transform: `translateY(${offset * 0.15}px)`, // Moves at 50% scroll speed
            height: "120%",
            top: "-10%",
          }}
        >
          <img
            src="/heroimg2.webp"
            alt="Modern landscape architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0a0f0d]/70 via-[#0a0f0d]/40 to-[#0a0f0d]" />
        </div>

        <div
          className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16"
          // style={{ transform: `translateY(${offset * 0.02}px)` }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-lime-500/10 text-lime-400 text-sm font-hedvig font-medium mb-6 border border-lime-500/20">
            Established 2015
          </span>

          <div className="overflow-hidden max-h-22 flex justify-center items-center mb-4">
            <AnimatedHeading
              text=" Crafting Nature,"
              css="text-5xl md:text-7xl font-hedvig font-bold text-white mb-6 leading-tight"
            />
          </div>
          <div className="overflow-hidden max-h-22 flex justify-center items-center mb-4">
            <AnimatedHeading
              text=" Building Serenity"
              css="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600 text-5xl md:text-7xl font-hedvig font-bold mb-6 leading-tight"
            />
          </div>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-hedvig font-light">
            Award-winning landscape architecture and horticulture services
            designed for the modern aesthetic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-lime-500 hover:bg-lime-600 text-black font-hedvig font-medium py-3 px-8 rounded-sm transition-all"
            >
              Start Your Project
            </Link>
            <Link
              to="/portfolio"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 font-hedvig font-medium py-3 px-8 rounded-sm transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
