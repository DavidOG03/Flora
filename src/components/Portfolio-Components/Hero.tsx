import React from "react";
import AnimatedHeading from "../AnimatedHeading";

// const categories = [
//   "All Projects",
//   "Residential",
//   "Commercial",
//   "Hardscaping",
//   "Sustainable Gardens",
// ];

const Hero: React.FC = () => {
  // const [activeFilter, setActiveFilter] = useState("All Projects");

  return (
    <section className="md:px-12 max-w-7xl mx-auto h-svh relative pt-40 pb-32 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <div className="mb-16 w-full h-full">
        <div className="flex gap-4 justify-center items-center overflow-hidden max-h-22 mb-4">
          <AnimatedHeading
            text="Cultivating Natural"
            css="text-5xl md:text-7xl font-hedvig text-center font-bold tracking-tighter mb-6 leading-tight"
          />
        </div>
        <div className="text-lime flex gap-4 justify-center items-center overflow-hidden max-h-20 mb-6">
          <AnimatedHeading
            text="Architecture"
            css="text-5xl md:text-7xl text-lime font-hedvig text-center font-bold tracking-tighter mb-6 leading-tight"
          />
        </div>

        <p className="text-gray text-center max-w-xl mx-auto text-lg leading-relaxed">
          Where modern design meets organic beauty. Browse our gallery of
          award-winning landscapes that seamlessly blend structure with nature.
        </p>
      </div>

      {/* <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm font-hedvig font-medium transition-all duration-300 border ${
              activeFilter === cat
                ? "bg-lime border-lime text-black"
                : "bg-transparent border-white/20 text-gray-300 hover:border-lime hover:text-lime-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div> */}
    </section>
  );
};
export default Hero;
