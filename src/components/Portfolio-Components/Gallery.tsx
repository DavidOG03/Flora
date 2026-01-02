type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  size: "wide" | "tall" | "standard";
};

// --- Data ---
const projects: Project[] = [
  {
    id: 1,
    title: "Modern Zen Residence",
    category: "Residential",
    image: "/zenstone.webp",
    size: "wide",
  },
  {
    id: 2,
    title: "Skyline Terrace",
    category: "Commercial",
    image: "/terrace.webp",
    size: "standard",
  },
  {
    id: 3,
    title: "The Geometric Maze",
    category: "Maintenance",
    image: "/geometric-garden.webp",
    size: "standard",
  },
  {
    id: 4,
    title: "Urban Vertical Wall",
    category: "Sustainable",
    image: "/vertical-wall.webp",
    size: "tall",
  },
  {
    id: 5,
    title: "Oasis Poolside",
    category: "Hardscaping",
    image: "/oasis.webp",
    size: "standard",
  },
  {
    id: 6,
    title: "The Olive Courtyard",
    category: "Residential",
    image: "/courtyard.webp",
    size: "standard",
  },
];
import React from "react";

const Gallery: React.FC = () => {
  return (
    <section className="px-6 md:px-12 max-w-7xl mx-auto pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`group relative overflow-hidden rounded-2xl bg-gray-900 ${
              project.size === "wide" ? "md:col-span-2" : ""
            } ${project.size === "tall" ? "lg:row-span-2" : ""}`}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-90" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="inline-block px-3 py-1 bg-lime-500/20 text-lime-400 text-xs font-hedvig font-semibold rounded-full mb-3 backdrop-blur-sm border border-lime-500/30">
                {project.category}
              </span>
              <h3 className="text-white text-xl md:text-2xl font-hedvig font-bold">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 text-white hover:bg-white/10 transition-colors text-sm font-hedvig font-medium">
          Load More Projects{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1rem"
            height="1rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="square"
              strokeWidth={2}
              d="M17.5 9.5L12 15L6.5 9.5"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Gallery;
