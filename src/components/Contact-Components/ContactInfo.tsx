import React from "react";
import AnimatedHeading from "../AnimatedHeading";

const ContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <div className="overflow-hidden max-h-14">
          <AnimatedHeading
            text="Contact Information"
            css="text-4xl md:text-5xl font-hedvig font-bold text-white mb-4"
          />
        </div>
        <p className="text-gray">Connect with our design team directly.</p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Address Card */}
        <div className="p-6 border border-white/10 rounded-lg flex items-start gap-4 hover:border-lime-500/50 transition-colors bg-[#111A15]">
          <div className="text-lime-500 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1 1 16 0Z"></path>
                <path
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <p className="text-xs font-hedvig font-bold text-gray-500 uppercase tracking-wider mb-1">
              VISIT US
            </p>
            <p className="text-white font-hedvig font-medium">
              123 Green Thumb Lane,
            </p>
            <p className="text-white font-hedvig font-medium">
              Botanical City, BC 90210
            </p>
          </div>
        </div>

        {/* Phone Card */}
        <div className="p-6 border border-white/10 rounded-lg flex items-start gap-4 hover:border-lime-500/50 transition-colors bg-[#111A15]">
          <div className="text-lime-500 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
              ></path>
            </svg>
          </div>
          <div>
            <p className="text-xs font-hedvig font-bold text-gray-500 uppercase tracking-wider mb-1">
              CALL US
            </p>
            <p className="text-white font-hedvig font-medium text-lg">
              (555) 123-4567
            </p>
            <p className="text-gray-500 text-sm">Mon-Fri: 9am - 5pm</p>
          </div>
        </div>

        {/* Email Card */}
        <div className="p-6 border border-white/10 rounded-lg flex items-start gap-4 hover:border-lime-500/50 transition-colors bg-[#111A15]">
          <div className="text-lime-500 mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m5 7.06l6.87 5.89c.07.06.19.06.26 0L19 7.06M3.2 4h17.6c.66 0 1.2.54 1.2 1.2v12.4c0 1.32-1.08 2.4-2.4 2.4H4.4C3.08 20 2 18.92 2 17.6V5.2C2 4.54 2.54 4 3.2 4"
              ></path>
            </svg>
          </div>
          <div>
            <p className="text-xs font-hedvig font-bold text-gray-500 uppercase tracking-wider mb-1">
              EMAIL US
            </p>
            <p className="text-white font-hedvig font-medium">
              hello@horticulture.design
            </p>
          </div>
        </div>
      </div>

      {/* Awards Placeholder */}
      {/* <div className="mt-8 pt-8 border-t border-white/10">
        <p className="text-sm text-gray-500 mb-4">
          Award winning designs featured in:
        </p>
        <div className="flex gap-4">
          <div className="w-24 h-12 bg-white/5 rounded"></div>
          <div className="w-24 h-12 bg-white/5 rounded"></div>
          <div className="w-24 h-12 bg-white/5 rounded"></div>
        </div>
      </div> */}
    </div>
  );
};

export default ContactInfo;
