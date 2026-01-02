import React from "react";

interface StatProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatProps> = ({ label, value, icon }) => {
  const [number, setNumber] = React.useState(0);

  React.useEffect(() => {
    const target = parseInt(value, 10);
    let current = 0;
    const increment = target / 100;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        clearInterval(timer);
        setNumber(target);
      } else {
        setNumber(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-[#121815] p-6 rounded-sm border border-lime-500/10 hover:border-lime-500/30 transition-colors w-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="text-lime">{icon}</div>
        <p className="text-gray text-sm uppercase tracking-wider font-hedvig font-light">
          {label}
        </p>
      </div>
      <p className="text-4xl font-hedvig font-bold text-white">{number}</p>
    </div>
  );
};

export default StatCard;
