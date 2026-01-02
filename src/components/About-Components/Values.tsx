import React from "react";
import AnimatedHeading from "../AnimatedHeading";

const Values: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden max-h-14 mb-6">
          <AnimatedHeading
            text="Our Core Values"
            css="text-4xl md:text-5xl font-hedvig font-bold text-white mb-16"
          />
        </div>
        <p className="text-gray mb-12">
          Foundational principles that guide every design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  className="text-lime-500"
                >
                  <path
                    fill="currentColor"
                    d="m22 3.41l-.12-1.26l-1.2.4a13.84 13.84 0 0 1-6.41.64a11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a9 9 0 0 0 .39 4.58a16.6 16.6 0 0 1 1.18-2.2a9.85 9.85 0 0 1 4.07-3.43a11.16 11.16 0 0 1 5.06-1A12.1 12.1 0 0 0 9.34 9.2a9.5 9.5 0 0 0-1.86 1.53a11.4 11.4 0 0 0-1.39 1.91a16.4 16.4 0 0 0-1.57 4.54A26.4 26.4 0 0 0 4 22h2a31 31 0 0 1 .59-4.32a9.25 9.25 0 0 0 4.52 1.11a11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41"
                  ></path>
                </svg>
              ),
              title: "Holistic Sustainability",
              desc: "We prioritize eco-friendly materials and energy-efficient designs to minimize environmental impact.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 24 24"
                  className="text-lime-500"
                >
                  <g fill="currentColor">
                    <path d="M7.741 7.4c-.478.493-.965.994-1.42 1.503c-.911 1.023-1.746 2.14-2.175 3.423c-.44 1.314-.435 2.75.235 4.36l.124.283C5.841 19.858 8.812 21.75 12 21.75l.308-.006c3.173-.121 6.082-2.106 7.311-5.058l.118-.3c.552-1.49.53-2.83.118-4.062c-.43-1.283-1.265-2.4-2.177-3.423a48 48 0 0 0-1.435-1.516l-.031-.033m-6.404 9.16c.534.378 1.19.66 1.89.724l.302.014l.076.004a.75.75 0 0 1 0 1.492L12 18.75l-.222-.005c-1.097-.05-2.08-.474-2.836-1.008c-.786-.555-1.42-1.297-1.654-2a.75.75 0 0 1 1.423-.474c.1.297.467.805 1.097 1.25"></path>
                    <path d="M12.692 2.72c.452 1.13 1.219 2.153 2.13 3.167c.444.494.913.976 1.39 1.465l.031.033A48 48 0 0 1 17.678 8.9c.912 1.023 1.747 2.14 2.177 3.423c.412 1.232.434 2.572-.118 4.062l-.118.3c-1.23 2.952-4.138 4.937-7.311 5.058L12 21.75c-3.188 0-6.159-1.892-7.495-4.781l-.124-.284c-.67-1.61-.675-3.045-.235-4.359c.429-1.283 1.264-2.4 2.175-3.423c.455-.51.942-1.01 1.42-1.502l.014-.014c.487-.5.965-.994 1.419-1.5c.91-1.013 1.675-2.036 2.125-3.165l.05-.102a.75.75 0 0 1 1.342.1M9.808 16.514c-.63-.445-.998-.953-1.097-1.25a.75.75 0 1 0-1.423.474c.234.703.868 1.445 1.654 2c.756.534 1.739.957 2.836 1.008l.222.005l.076-.004a.75.75 0 0 0 0-1.492L12 17.25l-.303-.014c-.7-.064-1.355-.346-1.89-.723"></path>
                  </g>
                </svg>
              ),
              title: "Practical Design",
              desc: "Functionality meets aesthetics. We create spaces that look beautiful and work perfectly for your lifestyle.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  className="text-lime-500"
                >
                  <path
                    fill="currentColor"
                    d="M17.5 12a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 17.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m-3-4A1.5 1.5 0 0 1 13 6.5A1.5 1.5 0 0 1 14.5 5A1.5 1.5 0 0 1 16 6.5A1.5 1.5 0 0 1 14.5 8m-5 0A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 5A1.5 1.5 0 0 1 11 6.5A1.5 1.5 0 0 1 9.5 8m-3 4A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12M12 3a9 9 0 0 0-9 9a9 9 0 0 0 9 9a1.5 1.5 0 0 0 1.5-1.5c0-.39-.15-.74-.39-1c-.23-.27-.38-.62-.38-1a1.5 1.5 0 0 1 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8"
                  ></path>
                </svg>
              ),
              title: "Living Art",
              desc: "Every structure is treated as a masterpiece, blending artistic vision with structural integrity.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 640 640"
                  className="text-lime-500"
                >
                  <path
                    fill="currentColor"
                    d="M320 80c57.4 0 104 46.6 104 104s-46.6 104-104 104s-104-46.6-104-104S262.6 80 320 80M96 152c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72s32.2-72 72-72M0 480c0-70.7 57.3-128 128-128c12.8 0 25.2 1.9 36.9 5.4C132 394.2 112 442.8 112 496v16c0 11.4 2.4 22.2 6.7 32H32c-17.7 0-32-14.3-32-32zm521.3 64c4.3-9.8 6.7-20.6 6.7-32v-16c0-53.2-20-101.8-52.9-138.6c11.7-3.5 24.1-5.4 36.9-5.4c70.7 0 128 57.3 128 128v32c0 17.7-14.3 32-32 32zM472 224c0-39.8 32.2-72 72-72s72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72M160 496c0-88.4 71.6-160 160-160s160 71.6 160 160v16c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32z"
                  ></path>
                </svg>
              ),
              title: "Client Collaboration",
              desc: "Your vision is our blueprint. We work closely with you to ensure the final result exceeds expectations.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#121815] p-8 rounded-2xl border border-white/5 hover:border-lime-500/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-lime-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-lime-500/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-hedvig font-bold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
