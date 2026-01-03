import React from "react";
import AnimatedHeading from "../AnimatedHeading";

const Journey: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#0a180e]/50">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden max-h-14 mb-6">
          <AnimatedHeading
            text="Our Journey"
            css="text-4xl md:text-5xl font-hedvig font-bold text-white mb-16"
          />
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-8 space-y-12">
          {[
            {
              year: "2015 - Founded",
              title: "The Beginning",
              desc: "Started as a small boutique studio with a passion for sustainable housing.",
            },
            {
              year: "2018 - Expansion",
              title: "Global Reach",
              desc: "Expanded operations to 3 continents, taking on international commercial projects.",
            },
            {
              year: "2019 - Award",
              title: "Sustainability Leader",
              desc: "Recognized as the 'Top Green Firm' by the Architecture Digest.",
            },
            {
              year: "2024 - Milestone",
              title: "Carbon Neutral",
              desc: "Achieved 100% carbon neutrality across all our construction sites.",
            },
          ].map((item, index) => (
            <div key={index} className="relative pl-8 ">
              <div className="absolute -left-1.5 md:-left-9.5 top-2 w-3 h-3 rounded-full bg-lime-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
              <span className="text-lime-400 font-mono text-sm mb-1 block">
                {item.year}
              </span>
              <h3 className="text-xl font-hedvig font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray max-w-xl">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
