const Testimonial = () => {
  return (
    <div className="bg-[#0a0f0d] py-20 px-4">
      <div className="max-w-4xl mx-auto text-center relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48px"
          height="48px"
          viewBox="0 0 24 24"
          className="w-12 h-12 text-lime-500/20 mx-auto mb-8"
        >
          <path
            fill="currentColor"
            d="M6.938 4.501c2-.053 4.172 1.435 4.523 4.6l.027.313l.001.006c.191 3.319-2.124 7.857-7.181 10.039a.5.5 0 0 1-.631-.209l-1.11-1.919a.5.5 0 0 1 .188-.686c1.71-.962 3.043-2.471 3.845-4.302c-1.19-.21-2.045-.703-2.618-1.36c-.667-.766-.905-1.7-.905-2.517c0-2.214 1.703-4.005 3.86-3.965m10 0c2-.053 4.172 1.435 4.523 4.6l.027.313l.001.006c.191 3.319-2.124 7.857-7.181 10.039a.5.5 0 0 1-.631-.209l-1.11-1.919a.5.5 0 0 1 .188-.686c1.71-.962 3.043-2.471 3.845-4.302c-1.19-.21-2.045-.703-2.618-1.36c-.667-.766-.905-1.7-.905-2.517c0-2.214 1.704-4.005 3.86-3.965"
          ></path>
        </svg>
        <h3 className="text-2xl md:text-3xl font-hedvig font-light italic text-gray-200 mb-8 leading-relaxed">
          "Flora Haven didn't just plant a garden; they constructed an outdoor
          living experience that completely changed how we interact with our
          home. A perfect balance of structure and wildness."
        </h3>
        <div>
          <p className="text-white font-hedvig font-bold text-lg">
            Elena & Marcus Thorne
          </p>
          <p className="text-gray-500 text-sm mt-1">
            Residential Client, California
          </p>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
