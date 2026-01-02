import { Link } from "react-router-dom";

const CTA: React.FC = () => (
  <section className="py-24 px-6 md:px-12 bg-linear-to-b from-[#05140a] to-[#020b05] text-center border-t border-white/5">
    <div className="max-w-3xl mx-auto">
      <span className="text-lime-500 font-hedvig font-bold text-sm tracking-wider uppercase mb-4 block">
        Start Your Journey
      </span>
      <h2 className="text-4xl md:text-5xl font-hedvig font-bold text-white mb-6">
        Ready to transform your space?
      </h2>

      <p className="text-gray mb-10 text-lg">
        From consultation to completion, we bring your vision to life with
        precision and organic elegance. Let's discuss your next project.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          to="/contact"
          className="w-full sm:w-auto bg-lime-500 hover:bg-lime-400 text-black font-hedvig font-medium px-8 py-3.5 rounded-full transition-colors"
        >
          Start a Project
        </Link>
        <Link
          to="/services"
          className="w-full sm:w-auto border border-gray-600 hover:border-white text-white font-hedvig font-medium px-8 py-3.5 rounded-full transition-colors bg-transparent"
        >
          View Services
        </Link>
      </div>
    </div>
  </section>
);

export default CTA;
