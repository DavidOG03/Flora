import AnimatedHeading from "../AnimatedHeading";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="bg-[#0a0f0d] py-24 px-4">
      <div className="max-w-360 mx-auto ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end pb-8 mb-8 gap-6 border-b border-b-white/5">
          <div>
            <p className="text-lime-500 font-hedvig font-medium mb-2 uppercase tracking-wide text-sm">
              Our Expertise
            </p>
            <div className="flex flex-wrap gap-2 max-w-xl">
              <div className="overflow-hidden max-h-14">
                {" "}
                <AnimatedHeading
                  text="Holistic "
                  css="text-4xl md:text-5xl font-hedvig font-bold text-white max-w-md"
                />
              </div>
              <div className="overflow-hidden max-h-14">
                {" "}
                <AnimatedHeading
                  text="Landscape "
                  css="text-4xl md:text-5xl font-hedvig font-bold text-white max-w-md"
                />
              </div>
              <div className="overflow-hidden max-h-14">
                <AnimatedHeading
                  text="Services"
                  css="text-4xl md:text-5xl font-hedvig font-bold text-white max-w-md"
                />
              </div>
            </div>
          </div>
          <p className="text-gray max-w-md text-left md:text-left">
            We blend architectural precision with organic beauty to create
            outdoor spaces that inspire.
          </p>
        </div>

        <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="Landscape Design"
            description="Full-scale 3D modeling, site planning, and seamless architectural integration for your property."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m2.2 16.4l4-5.325q.15-.2.363-.3t.437-.1t.438.1t.362.3l3.4 4.525q.15.2.35.3t.45.1q.625 0 .9-.562t-.1-1.063L10.7 11.6q-.2-.275-.2-.6t.2-.6l2.5-3.325q.15-.2.363-.3t.437-.1t.438.1t.362.3l7 9.325q.375.5.1 1.05T21 18H3q-.625 0-.9-.55t.1-1.05"
                ></path>
              </svg>
            }
          />
          <ServiceCard
            title="Hardscaping"
            description="Custom stone work, concrete features, patios, and structural outdoor elements built to last."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21H4q-.425 0-.712-.288T3 20m10 0v-4q0-.425.288-.712T14 15h6q.425 0 .713.288T21 16v4q0 .425-.288.713T20 21h-6q-.425 0-.712-.288T13 20M3 12V4q0-.425.288-.712T4 3h16q.425 0 .713.288T21 4v8q0 .425-.288.713T20 13H4q-.425 0-.712-.288T3 12"
                ></path>
              </svg>
            }
          />
          <ServiceCard
            title="Botanical Curation"
            description="Expert selection of rare, native, and climate-adaptive plant species for year-round beauty."
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M3.482 2.002A.5.5 0 0 0 3 2.5c0 1.317.3 2.163.95 2.65s1.448.59 2.429.834A.5.5 0 0 0 7 5.5c0-1.317-.3-2.163-.95-2.65s-1.448-.59-2.429-.834a.5.5 0 0 0-.139-.014m8.036 0a.5.5 0 0 0-.14.014c-.98.245-1.78.347-2.429.834S8 4.183 8 5.5a.5.5 0 0 0 .621.484c.981-.245 1.78-.347 2.43-.834S12 3.817 12 2.5a.5.5 0 0 0-.482-.498m-8.036 4A.5.5 0 0 0 3 6.5c0 1.317.3 2.163.95 2.65s1.448.59 2.429.834A.5.5 0 0 0 7 9.5c0-1.317-.3-2.163-.95-2.65s-1.448-.59-2.429-.834a.5.5 0 0 0-.139-.014m8.036 0a.5.5 0 0 0-.14.014c-.98.245-1.78.347-2.429.834S8 8.183 8 9.5a.5.5 0 0 0 .621.484c.981-.245 1.78-.347 2.43-.834S12 7.817 12 6.5a.5.5 0 0 0-.482-.498m-8.036 4A.5.5 0 0 0 3 10.5c0 1.317.3 2.163.95 2.65s1.448.59 2.429.834A.5.5 0 0 0 7 13.5c0-1.317-.3-2.163-.95-2.65s-1.448-.59-2.429-.834a.5.5 0 0 0-.139-.014m8.036 0a.5.5 0 0 0-.14.014c-.98.245-1.78.347-2.429.834S8 12.183 8 13.5a.5.5 0 0 0 .621.484c.981-.245 1.78-.347 2.43-.834S12 11.817 12 10.5a.5.5 0 0 0-.482-.498"
                ></path>
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
