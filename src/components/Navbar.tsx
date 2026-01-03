import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [background, setBackground] = useState(false);
  const changeBackground = () => {
    setBackground(window.scrollY >= 32);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  return (
    <nav
      className={` w-full z-50 ${
        background
          ? "bg-[#0a0f0d]/75 backdrop-blur-md transition-all duration-200 sticky top-0 left-0"
          : "bg-[#0a0f0d]/90 backdrop-blur-sm relative"
      } border-b border-white/10`}
    >
      <div className="max-w-360 mx-auto px-4 ">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src="/flora-logo.png" alt="Flora Logo" className=" w-30" />
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {["Services", "Portfolio", "About", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-lime-500 transition-colors px-3 py-2 text-sm font-hedvig font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-lime-500 hover:bg-lime-600 text-black text-sm font-hedvig font-medium py-2 px-6 rounded-sm transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray hover:text-white p-2"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {isOpen && ( */}
      <div
        className={`md:hidden absolute top-22 left-4 -translate-x-4 transition-all duration-450 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        } w-full bg-[#0a0f0d] `}
      >
        <div className="px-4 pt-4 pb-3 space-y-1 sm:px-3 flex flex-col justify-center items-center">
          {["Services", "Portfolio", "About", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-gray-300 hover:text-lime-500 block px-3 py-2 rounded-md text-base font-hedvig font-medium"
            >
              {item}
            </Link>
          ))}
          <Link
            to="/contact"
            className="w-full mt-4 max-w-3xl mx-auto text-center px-6 py-2 bg-lime-500 text-black font-hedvig font-medium py-2 rounded-sm"
          >
            Get a Quote
          </Link>
        </div>
      </div>
      {/* )} */}
    </nav>
  );
};
export default Navbar;
