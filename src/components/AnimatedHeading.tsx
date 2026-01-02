import { motion } from "framer-motion";
interface AnimatedHeadingProps {
  text: string;
  css: string;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  css,
}: AnimatedHeadingProps) => {
  const initial = {
    opacity: 0,
    y: 40,
    rotate: 10,
  };

  const animate = {
    opacity: 1,
    y: 0,
    rotate: 0,
  };

  return (
    <div className="flex items-center">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={initial}
          whileInView={animate}
          viewport={{ once: true }}
          transition={{
            duration: 0.35,
            delay: index * 0.05,
            // ease: [0.45, 0.88, 0.98, 0.85],
            ease: "easeOut",
          }}
        >
          {char === " " ? (
            <span className={css}>&nbsp;</span>
          ) : (
            <span className={css}>{char}</span>
          )}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedHeading;
