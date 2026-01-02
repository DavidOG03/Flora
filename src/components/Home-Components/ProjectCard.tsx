interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  size: "large" | "small";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  image,
  size,
}) => (
  <div
    className={`group relative overflow-hidden rounded-sm ${
      size === "large" ? "h-150" : "h-72.5"
    }`}
  >
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-90" />
    <div className="absolute bottom-0 left-0 p-8 w-full">
      <p className="text-lime-400 text-sm font-hedvig font-medium uppercase mb-2">
        {category}
      </p>
      <h3 className="text-2xl font-hedvig font-bold text-white group-hover:translate-x-2 transition-transform">
        {title}
      </h3>
    </div>
  </div>
);

export default ProjectCard;
