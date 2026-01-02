import React from "react";
interface StatProps {
  label: string;
  desc: string;
  number: string;
  icon: React.ReactNode;
}

const StatCard: React.FC<StatProps> = ({
  icon,
  number,
  label,
  desc,
}: StatProps) => (
  <div className="bg-[#111411] p-8 border border-white/5 rounded-sm">
    <div className="mb-6">{icon}</div>
    <h3 className="text-3xl font-bold text-white mb-1">{number}</h3>
    <h4 className="text-xs font-bold uppercase text-gray mb-4">{label}</h4>
    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
  </div>
);

export default StatCard;
