
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
        "resume-template p-3 rounded-lg border border-border bg-card",
        active && "active"
      )}
      onClick={onClick}
    >
      <div className="aspect-[8.5/11] overflow-hidden rounded-md mb-3">
        <img 
          src={image} 
          alt={`${name} template`} 
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-medium text-sm">{name}</h3>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
};

export default ResumeTemplateCard;
