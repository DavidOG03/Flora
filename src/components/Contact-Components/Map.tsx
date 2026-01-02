import React from "react";

const Map: React.FC = () => {
  return (
    <section className="h-100 relative w-full overflow-hidden bg-gray-800">
      {/* Using a dark styled grayscale map image placeholder */}
      <img
        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop"
        alt="Map location"
        className="w-full h-full object-cover grayscale opacity-50 contrast-125"
      />
      <div className="absolute inset-0 bg-[#0B120D]/30"></div>

      {/* Map Pin */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48px"
            height="48px"
            viewBox="0 0 24 24"
            className="text-lime fill-lime animate-bounce"
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
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-4 h-2 bg-black/50 blur-sm rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Map;
