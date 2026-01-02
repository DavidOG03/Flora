import React from "react";
import ServiceCard from "../components/Services-Components/ServiceCard";
import Step from "../components/Services-Components/Step";
import StatCard from "../components/Services-Components/StatCard";
import AnimatedHeading from "../components/AnimatedHeading";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  return (
    <div className="w-full">
      <section className="relative pt-40 pb-32 flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-140 bg-lime/5 blur-[120px] rounded-full pointer-events-none" />

        <span className="text-lime text-xs font-hedvig font-bold uppercase tracking-[0.2em] mb-6">
          Our Expertise
        </span>
        <h1 className="">
          <br />
          <span className="text-gray"></span>
        </h1>
        <div className="max-w-xl flex flex-col justify-center items-center gap-4 mb-8">
          <div className="overflow-hidden max-h-20 ">
            {" "}
            <AnimatedHeading
              text="PRECISION"
              css="text-5xl md:text-7xl font-hedvig text-center font-bold tracking-tighter mb-6 leading-tight"
            />
          </div>
          <div className="overflow-hidden max-h-20">
            {" "}
            <AnimatedHeading
              text="HORTICULTURE"
              css="text-5xl md:text-7xl font-hedvig text-gray text-center font-bold tracking-tighter mb-6 leading-tight"
            />
          </div>
        </div>
        <p className="max-w-xl text-gray text-sm md:text-base leading-relaxed mb-12">
          Cultivating biophilic spaces through architectural discipline and
          organic flow. We merge structural engineering with living systems.
        </p>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center gap-3 mb-12 text-sm text-gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            className="text-lime"
          >
            <path
              fill="currentColor"
              d="M10 4v4h4V4zm6 0v4h4V4zm0 6v4h4v-4zm0 6v4h4v-4zm-2 4v-4h-4v4zm-6 0v-4H4v4zm0-6v-4H4v4zm0-6V4H4v4zm2 6h4v-4h-4zM4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4c-1.08 0-2-.9-2-2V4a2 2 0 0 1 2-2"
            ></path>
          </svg>
          <span className="font-semibold text-white">Service Modules</span>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-hedvig font-bold mb-4">
            Architectural Landscaping
          </h2>
          <p className="text-gray text-sm max-w-2xl">
            Comprehensive design and maintenance modules tailored for modern
            living environments. Select a module to explore specifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Garden Architecture"
            desc="3D modeling, planting plans, and spatial planning for cohesive outdoor rooms."
            img="/garden-archi.webp"
            tag="MOD-01"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.75 2.75a.75.75 0 0 0-1.5 0v1.281A2.25 2.25 0 0 0 9.373 6.25V8.5c0 .463.14.894.38 1.252l-1.282 3.232a6.65 6.65 0 0 1-2.653-3.218a.75.75 0 0 0-1.399.542a8.15 8.15 0 0 0 3.491 4.09l-2.609 6.576a.75.75 0 1 0 1.395.553l2.576-6.496c.852.304 1.77.469 2.726.469c.957 0 1.874-.165 2.726-.469l2.577 6.496a.75.75 0 0 0 1.395-.553l-2.61-6.576a8.15 8.15 0 0 0 3.491-4.09a.75.75 0 0 0-1.398-.542a6.65 6.65 0 0 1-2.653 3.218L14.245 9.75c.24-.358.38-.788.38-1.251V6.25a2.25 2.25 0 0 0-1.876-2.219zm1.422 10.886a6.6 6.6 0 0 1-2.173.364c-.76 0-1.491-.128-2.172-.364l1.179-2.972q.296.085.618.086h.75q.323-.001.619-.086zM11.624 5.5h.75a.75.75 0 0 1 .75.75V8.5a.75.75 0 0 1-.75.75h-.75a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 .75-.75"
                ></path>
              </svg>
            }
            sub="Planning & Design"
          />
          <ServiceCard
            title="Sustenance & Care"
            desc="Seasonal pruning, soil health monitoring, and precision irrigation management."
            img="/sustenance.webp"
            tag="MOD-02"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
              >
                <g fill="currentColor">
                  <path d="M7.741 7.4c-.478.493-.965.994-1.42 1.503c-.911 1.023-1.746 2.14-2.175 3.423c-.44 1.314-.435 2.75.235 4.36l.124.283C5.841 19.858 8.812 21.75 12 21.75l.308-.006c3.173-.121 6.082-2.106 7.311-5.058l.118-.3c.552-1.49.53-2.83.118-4.062c-.43-1.283-1.265-2.4-2.177-3.423a48 48 0 0 0-1.435-1.516l-.031-.033m-6.404 9.16c.534.378 1.19.66 1.89.724l.302.014l.076.004a.75.75 0 0 1 0 1.492L12 18.75l-.222-.005c-1.097-.05-2.08-.474-2.836-1.008c-.786-.555-1.42-1.297-1.654-2a.75.75 0 0 1 1.423-.474c.1.297.467.805 1.097 1.25"></path>
                  <path d="M12.692 2.72c.452 1.13 1.219 2.153 2.13 3.167c.444.494.913.976 1.39 1.465l.031.033A48 48 0 0 1 17.678 8.9c.912 1.023 1.747 2.14 2.177 3.423c.412 1.232.434 2.572-.118 4.062l-.118.3c-1.23 2.952-4.138 4.937-7.311 5.058L12 21.75c-3.188 0-6.159-1.892-7.495-4.781l-.124-.284c-.67-1.61-.675-3.045-.235-4.359c.429-1.283 1.264-2.4 2.175-3.423c.455-.51.942-1.01 1.42-1.502l.014-.014c.487-.5.965-.994 1.419-1.5c.91-1.013 1.675-2.036 2.125-3.165l.05-.102a.75.75 0 0 1 1.342.1M9.808 16.514c-.63-.445-.998-.953-1.097-1.25a.75.75 0 1 0-1.423.474c.234.703.868 1.445 1.654 2c.756.534 1.739.957 2.836 1.008l.222.005l.076-.004a.75.75 0 0 0 0-1.492L12 17.25l-.303-.014c-.7-.064-1.355-.346-1.89-.723"></path>
                </g>
              </svg>
            }
            sub="Maintenance"
          />
          <ServiceCard
            title="Arboriculture"
            desc="Expert tree surgery, safe removal, and long-term health assessments for canopy layers."
            img="/arboriculture.webp"
            tag="MOD-03"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14.25 19v-1.25h-3.5V21a.75.75 0 0 1-1.5 0v-3.25H3a.75.75 0 0 1-.616-1.177l3.685-5.323H4.5a.75.75 0 0 1-.604-1.193l5.5-7.5l.056-.069a.75.75 0 0 1 1.153.069l2.444 3.333l1.42-1.42l.061-.055a.75.75 0 0 1 1.075.142l5.5 7.5l.056.088a.75.75 0 0 1-.66 1.105h-1.468l2.559 3.29A.75.75 0 0 1 21 17.75h-5.25V19a.75.75 0 0 1-1.5 0"
                ></path>
              </svg>
            }
            sub="Tree Surgery"
          />
          <ServiceCard
            title="Hardscaping"
            desc="Structural integration including stone pathways, water features, and architectural lighting."
            img="/hardscaping.webp"
            tag="MOD-04"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1rem"
                height="1rem"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19 12h3L12 3L2 12h3v8h2v-2h10v2h2zM7.21 10h9.58l.21.19V12H7v-1.81zm7.36-2H9.43L12 5.69zM7 16v-2h10v2z"
                ></path>
              </svg>
            }
            sub="Construction"
          />
        </div>
      </section>
      {/* Workflow Section */}
      <section className="bg-[#0b0e0b] py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="mb-4 flex flex-col gap-2">
            <div className="overflow-hidden max-h-14">
              <AnimatedHeading
                text="Systematic"
                css="text-4xl md:text-5xl font-hedvig font-bold mb-2"
              />
            </div>

            <div className="overflow-hidden max-h-14">
              <AnimatedHeading
                text="Workflow"
                css="text-4xl md:text-5xl font-hedvig font-bold text-lime max-w-md"
              />
            </div>
            <p className="text-gray mb-8 leading-relaxed max-w-md">
              Our process is a rigorous cycle of analysis, design, and
              cultivation, ensuring predictable outcomes for organic
              environments.
            </p>
            {/* <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-hedvig font-bold border-b border-white/20 pb-1 hover:text-lime transition-colors"
            >
              Download Process PDF
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                height="14px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-8 4v-5h2v3h12v-3h2v5z"
                ></path>
              </svg>
            </a> */}
          </div>

          <div className="space-y-12">
            <Step
              number="01"
              title="Survey & Analysis"
              desc="Topographical mapping, soil testing, and environmental impact assessment to establish a data-driven baseline."
            />
            <Step
              number="02"
              title="Architectural Blueprinting"
              desc="Detail-level CAD drawings, planting schedules, and material palettes. Client collaboration and revision cycles."
            />
            <Step
              number="03"
              title="Cultivation & Build"
              desc="Hardscape installation followed by softscaping. Precision planting and irrigation system integration."
            />
            <Step
              number="04"
              title="Sustenance Protocol"
              desc="Ongoing monitoring and seasonal adjustments to ensure the ecosystem matures according to the design intent."
            />
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                className="text-lime"
              >
                <path
                  fill="currentColor"
                  d="m22 3.41l-.12-1.26l-1.2.4a13.84 13.84 0 0 1-6.41.64a11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a9 9 0 0 0 .39 4.58a16.6 16.6 0 0 1 1.18-2.2a9.85 9.85 0 0 1 4.07-3.43a11.16 11.16 0 0 1 5.06-1A12.1 12.1 0 0 0 9.34 9.2a9.5 9.5 0 0 0-1.86 1.53a11.4 11.4 0 0 0-1.39 1.91a16.4 16.4 0 0 0-1.57 4.54A26.4 26.4 0 0 0 4 22h2a31 31 0 0 1 .59-4.32a9.25 9.25 0 0 0 4.52 1.11a11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41"
                ></path>
              </svg>
            }
            number="100%"
            label="Organic Methodology"
            desc="Zero synthetic pesticides used in our maintenance programs."
          />
          <StatCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                className="text-lime"
              >
                <path
                  fill="currentColor"
                  d="M10 4v4h4V4zm6 0v4h4V4zm0 6v4h4v-4zm0 6v4h4v-4zm-2 4v-4h-4v4zm-6 0v-4H4v4zm0-6v-4H4v4zm0-6V4H4v4zm2 6h4v-4h-4zM4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4c-1.08 0-2-.9-2-2V4a2 2 0 0 1 2-2"
                ></path>
              </svg>
            }
            number="250+"
            label="Projects Architected"
            desc="From urban rooftop gardens to sprawling estates."
          />
          <StatCard
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                className="text-lime"
              >
                <path
                  fill="currentColor"
                  d="m10 17l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9m-6-8L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5z"
                ></path>
              </svg>
            }
            number="10Yr"
            label="Structural Guarantee"
            desc="We stand by the integrity of our hardscaping installations."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 text-center bg-linear-to-b from-[#050805] to-[#0c120c]">
        <div className="absolute left-1/2 top-10 -translate-x-1/2">
          <div className="w-12 h-12 bg-lime rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(60,242,78,0.4)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              className="text-black"
            >
              <path
                fill="currentColor"
                d="M12 12h5v5h-5zm7-9h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v2H5V5zM5 19V9h14v10z"
              ></path>
            </svg>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-hedvig font-bold mb-4 mt-8">
          Ready to Engineer Your Landscape?
        </h2>
        <p className="text-gray max-w-lg mx-auto mb-10">
          Schedule a preliminary site assessment. We will analyze your space's
          potential and propose a structured architectural plan.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="bg-lime rounded-sm text-black px-8 py-3 text-sm font-hedvig font-bold uppercase hover:bg-lime/90 transition-colors w-full sm:w-auto"
          >
            Book Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
