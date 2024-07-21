import { Icon } from "~/_libs/components/components";
import { cn } from "~/_utils/utils";

type Properties = {
  className?: string;
  isVisible?: boolean;
  onClick?: () => void;
};

const PasswordVisibilityButton: React.FC<Properties> = ({
  className,
  isVisible = false,
  onClick,
}) => {
  return (
    <button
      className={cn("p-[2px]", className)}
      title={isVisible ? "Hide" : "Show"}
      onClick={onClick}
      type="button"
    >
      <Icon
        name={isVisible ? "eye" : "eyeOff"}
        className="text-divider has-hover:hover:text-divider/80"
      />
    </button>
  );
};

export { PasswordVisibilityButton };
