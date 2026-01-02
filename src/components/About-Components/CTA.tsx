import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          type: "spring",
          stiffness: 10,
          delay: 0.75,
        }}
        viewport={{ once: true }}
      >
        <div className="bg-linear-to-r from-lime-900/40 to-[#0a180e] border border-lime-800/30 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl"></div>

          <h2 className="text-3xl md:text-5xl font-hedvig font-bold text-white mb-6 relative z-10">
            Ready to transform your space?
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto mb-10 relative z-10">
            Let's create a sanctuary that defines your style and embraces the
            environment.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
            <Link
              to="/contact"
              className="px-8 py-3 bg-lime-500 hover:bg-lime-400 text-black font-hedvig font-medium rounded-full transition-all"
            >
              Start A Project
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-3 border border-white/20 hover:bg-white/5 text-white font-hedvig font-medium rounded-full transition-all"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
