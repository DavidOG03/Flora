import StatCard from "./StatCard";
// import {motion} from "framer-motion";

const Stats = () => {
  return (
    <div className="bg-[#0a0f0d] py-12 px-4 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            label="Projects Completed"
            value="150+"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
                  <path
                    fill="currentColor"
                    d="M12.707 2.293a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0-.175 1.178c.247.463.633.775 1.01.987l-2.835 2.835a1 1 0 0 0 0 1.414c.478.478 1.082.77 1.634.952l-2.634 2.634a1 1 0 0 0 .396 1.657c.69.227 1.403.388 2.115.53c.78.157 1.746.312 2.845.412l-.598 1.792A1 1 0 0 0 10 22h4a1 1 0 0 0 .949-1.316l-.598-1.792c1.1-.1 2.066-.255 2.845-.411c.712-.143 1.43-.304 2.12-.532a1 1 0 0 0 .391-1.656l-2.634-2.634c.552-.181 1.156-.474 1.634-.952a1 1 0 0 0 0-1.414l-2.835-2.835c.377-.212.763-.524 1.01-.987a1 1 0 0 0-.175-1.178z"
                  ></path>
                </g>
              </svg>
            }
          />
          <StatCard
            label="Years Experience"
            value="10"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 12h5v5h-5zm7-9h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 2v2H5V5zM5 19V9h14v10z"
                ></path>
              </svg>
            }
          />
          <StatCard
            label="Sustainable Practices"
            value="100%"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m22 3.41l-.12-1.26l-1.2.4a13.84 13.84 0 0 1-6.41.64a11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a9 9 0 0 0 .39 4.58a16.6 16.6 0 0 1 1.18-2.2a9.85 9.85 0 0 1 4.07-3.43a11.16 11.16 0 0 1 5.06-1A12.1 12.1 0 0 0 9.34 9.2a9.5 9.5 0 0 0-1.86 1.53a11.4 11.4 0 0 0-1.39 1.91a16.4 16.4 0 0 0-1.57 4.54A26.4 26.4 0 0 0 4 22h2a31 31 0 0 1 .59-4.32a9.25 9.25 0 0 0 4.52 1.11a11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41"
                ></path>
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Stats;
