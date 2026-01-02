import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <img src="/flora-logo.png" alt="Flora Logo" />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            Designing sustainable, architectural landscapes for the future of
            living.
          </p>
          <div className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              className="w-5 h-5 text-gray hover:text-lime-500 cursor-pointer transition-colors"
            >
              <path
                fill="currentColor"
                d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                className="w-5 h-5 text-gray hover:text-lime-500 cursor-pointer transition-colors"
              >
                <g clipPath="url(#SVGG1Ot4cAD)">
                  <path
                    fill="currentColor"
                    d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="SVGG1Ot4cAD">
                    <path fill="#fff" d="M0 0h14v14H0z"></path>
                  </clipPath>
                </defs>
              </g>
            </svg>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-bold font-hedvig text-sm uppercase tracking-wider mb-6">
            Navigation
          </h4>
          <ul className="space-y-4 text-gray text-sm">
            {["Services", "Portfolio", "About", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-lime-500 transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold font-hedvig text-sm uppercase tracking-wider mb-6">
            Contact
          </h4>
          <ul className="space-y-4 text-gray text-sm">
            <li>hello@florahaven.com</li>
            <li>+234 915 3884 943</li>
            <li>
              123 Green Valley, No. 4
              <br />
              San Francisco, CA 94103
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold font-hedvig text-sm uppercase tracking-wider mb-6">
            Newsletter
          </h4>
          <p className="text-gray-500 text-sm mb-4">
            Insights on modern landscape design.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="bg-[#121815] border border-white/10 text-white px-4 py-2 text-sm w-full focus:outline-none focus:border-lime-500 transition-colors rounded-l-sm"
            />
            <button className="bg-lime-500 hover:bg-lime-600 text-black p-2 rounded-r-sm transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>&copy; 2025 Flora. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
