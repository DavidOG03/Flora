interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => (
  <div className="bg-[#121815] p-8 rounded-2xl border border-white/5 hover:border-lime-500/50 transition-all duration-300 group">
    <div className="w-12 h-12 bg-lime-900/20 border border-lime-500/30 rounded-full flex items-center justify-center text-lime-500 mb-6 group-hover:bg-lime-500 group-hover:text-black transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-hedvig font-bold text-white mb-3">{title}</h3>
    <p className="text-gray leading-relaxed">{description}</p>
  </div>
);

export default ServiceCard;
