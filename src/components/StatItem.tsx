import React from "react";

interface StatItemProps {
  label: string;
  value: number;
  suffix?: string;
}

const StatItem: React.FC<StatItemProps> = ({ label, value, suffix = "" }) => {
  const [number, setNumber] = React.useState(0);

  React.useEffect(() => {
    let current = 0;
    const increment = value / 100;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setNumber(value);
        clearInterval(timer);
      } else {
        setNumber(Math.floor(current));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-[#121815] p-8 rounded-2xl border border-white/5 hover:border-lime-500/50 transition-all duration-300 group">
      <h3 className="text-lime-400 text-sm font-hedvig font-semibold uppercase tracking-wider mb-2">
        {label}
      </h3>
      <p className="text-4xl font-hedvig font-bold text-white">
        {number}
        {suffix}
      </p>
    </div>
  );
};

export default StatItem;
