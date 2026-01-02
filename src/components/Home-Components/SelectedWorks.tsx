import { Link } from "react-router-dom";
import AnimatedHeading from "../AnimatedHeading";
import ProjectCard from "./ProjectCard";

const SelectedWorks = () => {
  return (
    <div className="bg-[#0a0f0d] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div className="overflow-hidden max-h-14 flex gap-2">
            <AnimatedHeading
              text="Selected"
              css="text-4xl md:text-5xl font-hedvig font-bold text-white max-w-md"
            />
            <AnimatedHeading
              text="Works"
              css="text-4xl md:text-5xl font-hedvig font-bold text-white max-w-md"
            />
          </div>
          <Link
            to="/portfolio"
            className="flex items-center gap-2 text-lime text-sm hover:text-lime-400 font-hedvig font-medium transition-colors"
          >
            View More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
              ></path>
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Large Image */}
          <ProjectCard
            title="The Geometric Haven"
            category="Residential"
            size="large"
            image="/geometric-garden.webp"
          />

          {/* Right Column - Stacked Images */}
          <div className="flex flex-col gap-6">
            <ProjectCard
              title="Vertex HQ Courtyard"
              category="Commercial"
              size="small"
              image="/courtyard.webp"
            />
            <ProjectCard
              title="Zen Stone Pathways"
              category="Installation"
              size="small"
              image="/zenstone.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedWorks;
