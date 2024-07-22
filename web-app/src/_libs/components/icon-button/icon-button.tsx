import { IconName } from "~/_libs/types/icon-name.type";
import { cn } from "~/_utils/utils";
import { Icon } from "../components";

type Properties = {
  className?: string;
  iconClassName?: string;
  iconName: IconName;
  onClick?: () => void;
  title?: string;
};

const IconButton: React.FC<Properties> = ({
  className,
  iconClassName,
  iconName,
  onClick,
  title,
}) => {
  return (
    <button
      className={cn(
        "opacity-100 has-hover:hover:opacity-80 no-hover:active:opacity-80 rounded-[4px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text",
        className
      )}
      title={title}
      type="button"
      onClick={onClick}
    >
      <Icon name={iconName} className={iconClassName} />
    </button>
  );
};

export { IconButton };
