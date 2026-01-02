import React from "react";
import StatItem from "../StatItem";

const Stats: React.FC = () => {
  const stats = [
    { label: "Years Experience", value: 15, suffix: "+" },
    { label: "Projects Completed", value: 200, suffix: "+" },
    { label: "Awards Won", value: 24 },
  ];
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default Stats;
