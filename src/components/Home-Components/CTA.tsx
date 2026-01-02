import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <motion.div
      className="bg-[#0a0f0d] px-4 pb-24"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 10,
        delay: 0.5,
      }}
    >
      <div className="max-w-7xl mx-auto bg-[#121815] rounded-lg p-12 border border-white/5 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-lime/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
          <div>
            <h2 className="text-3xl text-center md:text-left md:text-4xl font-bold text-white mb-4">
              Ready to transform your <br />
              <span className="text-lime">outdoor space?</span>
            </h2>
            <p className="text-gray md:text-left text-center">
              Schedule a consultation with our lead architects to discuss your
              vision.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-lime hover:bg-lime text-black font-semibold py-4 px-8 rounded-sm transition-all whitespace-nowrap"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CTA;
