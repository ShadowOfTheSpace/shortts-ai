import { type IconName } from "~/_libs/types/types";
import { cn } from "~/_utils/utils";
import { Icon } from "../icon/icon";

type Properties = {
  label: string;
  className?: string;
  iconName?: IconName;
  isDisabled?: boolean;
  isLoading?: boolean;
};

const Button: React.FC<Properties> = ({
  label,
  className,
  iconName,
  isDisabled,
  isLoading,
}) => {
  return (
    <button
      className={cn(
        "flex w-full items-center justify-center gap-[10px] text-[16px] bg-primary rounded-[6px] px-[12px] py-[8px] text-background font-bold focus-visible:outline-none has-hover:hover:bg-primary/90 no-hover:active:bg-primary/90",
        className
      )}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[calc(1em*1.5)]">
          <Icon name={"loader"} className="text-white animate-spin" />
        </div>
      ) : (
        <>
          {iconName && <Icon className="text-white" name={iconName} />}
          {label}
        </>
      )}
    </button>
  );
};

export { Button };
