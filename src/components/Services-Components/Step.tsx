interface StepProps {
  title: string;
  desc: string;
  number: string;
}
const Step: React.FC<StepProps> = ({ number, title, desc }: StepProps) => (
  <div className="flex gap-6">
    <span className="text-lime font-bold text-sm pt-1">{number}</span>
    <div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray text-sm leading-relaxed border-l border-white/10 pl-4">
        {desc}
      </p>
    </div>
  </div>
);
export default Step;
