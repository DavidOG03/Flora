import React from "react";
import { motion } from "framer-motion";
import AnimatedHeading from "../AnimatedHeading";

const ContactForm: React.FC = () => {
  return (
    <motion.div
      className="bg-[#111A15] p-8 rounded-xl border border-white/5"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
        type: "spring",
        stiffness: 10,
        delay: 0.75,
      }}
      viewport={{ once: true }}
    >
      <div className="overflow-hidden max-h-14 mb-6">
        <AnimatedHeading
          text="Send a message"
          css="text-4xl md:text-5xl font-hedvig font-bold text-white mb-4"
        />
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="space-y-2">
            <label className="text-sm text-gray block">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#0B120D] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-all"
            />
          </div>
          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm text-gray block">Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full bg-[#0B120D] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service Interest */}
          <div className="space-y-2">
            <label className="text-sm text-gray block">Service Interest</label>
            <div className="relative">
              <select className="w-full bg-[#0B120D] border border-white/10 rounded px-4 py-3 text-white appearance-none focus:outline-none focus:border-lime-500 cursor-pointer">
                <option>Landscape Design</option>
                <option>Hardscaping</option>
                <option>Maintenance</option>
              </select>
              {/* Custom Chevron */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <label className="text-sm text-gray block">Estimated Budget</label>
            <div className="relative">
              <select className="w-full bg-[#0B120D] border border-white/10 rounded px-4 py-3 text-gray appearance-none focus:outline-none focus:border-lime-500 cursor-pointer">
                <option>Select a range</option>
                <option>$1k - $5k</option>
                <option>$5k - $10k</option>
                <option>$10k+</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-2">
          <label className="text-sm text-gray block">Project Details</label>
          <textarea
            rows={4}
            placeholder="Tell us about your project vision..."
            className="w-full bg-[#0B120D] border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 transition-all resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-lime-600 hover:bg-lime-500 text-black font-hedvig font-medium py-4 rounded flex items-center justify-center gap-2 transition-all group">
          Request Consultation
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path
              fill="currentColor"
              d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
            ></path>
          </svg>
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
