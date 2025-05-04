
import { cn } from '@/lib/utils';

export interface ResumeTemplateCardProps {
  name: string;
  description: string;
  image: string;
  active: boolean;
  onClick: () => void;
}

const ResumeTemplateCard = ({
  name,
  description,
  image,
  active,
  onClick,
}: ResumeTemplateCardProps) => {
  return (
    <div 
      className={cn(
        "resume-template p-4 rounded-lg border border-border bg-card transition-all duration-300",
        active ? "ring-2 ring-resume-primary shadow-lg" : "hover:shadow-md"
      )}
      onClick={onClick}
    >
      <div className="aspect-[8.5/11] overflow-hidden rounded-md mb-4">
        <img 
          src={image} 
          alt={`${name} template`} 
          className={cn(
            "w-full h-full object-cover transform transition-transform duration-300",
            active && "scale-105"
          )}
        />
      </div>
      <h3 className="font-medium text-sm">{name}</h3>
      <p className="text-xs text-muted-foreground mt-1">{description}</p>
    </div>
  );
};

export default ResumeTemplateCard;
