interface ServiceCardProps {
  title: string;
  desc: string;
  img: string;
  tag: string;
  sub: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  desc,
  img,
  tag,
  sub,
  icon,
}: ServiceCardProps) => (
  <div className="group bg-[#121815] p-6 rounded-sm border border-lime-500/10 hover:border-lime-500/30 transition-colors w-full">
    <div className="relative h-48 mb-6 overflow-hidden">
      <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm px-2 py-1 text-[10px] font-bold text-white z-10 border border-white/10 rounded-sm">
        {tag}
      </div>
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
    </div>
    <h3 className="text-lg font-bold mb-2 text-white group-hover:text-lime transition-colors">
      {title}
    </h3>
    <p className="text-gray text-xs leading-relaxed mb-6 h-12">{desc}</p>
    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-gray-500 border-t border-white/5 pt-4">
      {icon}
      <span>{sub}</span>
    </div>
  </div>
);

export default ServiceCard;
