import { Icon } from "~/_libs/components/components";
import { cn } from "~/_utils/utils";

type Properties = {
  className?: string;
};

const StepsLine: React.FC<Properties> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-y-[10px] items-center text-primary",
        className
      )}
    >
      <Icon name="testTube" size={40} className="shrink-0" />
      <span className="bg-gradient-to-b from-transparent via-secondary to-transparent w-[2px] h-full" />
      <Icon name="wand" size={40} className="shrink-0" />
      <span className="bg-gradient-to-b from-transparent via-secondary to-transparent w-[2px] h-full" />
      <Icon name="partyPopper" size={40} className="shrink-0" />
    </div>
  );
};

export { StepsLine };
