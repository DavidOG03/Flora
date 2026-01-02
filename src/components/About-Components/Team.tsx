import React from "react";
import AnimatedHeading from "../AnimatedHeading";

const Team: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="overflow-hidden max-h-14 mb-6">
              <AnimatedHeading
                text="The Curators"
                css="text-4xl md:text-5xl font-hedvig font-bold text-white mb-16"
              />
            </div>
            <p className="text-gray">
              Meet the visionaries behind our designs.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors"
          >
            View All Team Members{" "}
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
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah Jenkins",
              role: "Principal Architect",
              img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
            },
            {
              name: "Kenji Tanaka",
              role: "Head of Design",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
            },
            {
              name: "Elena Rodriguez",
              role: "Sustainability Lead",
              img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl h-100"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-hedvig font-bold text-white">
                  {member.name}
                </h3>
                <p className="text-lime-400 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
