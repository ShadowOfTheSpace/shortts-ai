import { cn } from "~/_utils/utils";

type Properties = {
  className?: string;
};

const Skeleton: React.FC<Properties> = ({ className }) => {
  return (
    <div className={cn("bg-divider/30 animate animate-pulse", className)} />
  );
};

export { Skeleton };
