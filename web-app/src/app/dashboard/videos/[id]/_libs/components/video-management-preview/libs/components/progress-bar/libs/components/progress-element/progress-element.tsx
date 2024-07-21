import { Icon } from "~/_libs/components/components";
import { type IconName, type ValueOf } from "~/_libs/types/types";
import { cn } from "~/_utils/utils";
import { type ProgressStatusDescription } from "../../enums/enums";

type Properties = {
  iconName: IconName;
  state: "completed" | "current" | "pending";
  statusDescription: ValueOf<typeof ProgressStatusDescription>;
};

const ProgressElement: React.FC<Properties> = ({
  iconName,
  state,
  statusDescription,
}) => {
  return (
    <div className="flex items-center w-full [&>span]:first:rounded-l-full">
      <span
        className={cn(
          "h-[2px] w-full transition-colors",
          state === "completed" && "bg-primary",
          state === "current" && "bg-primary animate-pulse",
          state === "pending" && "bg-divider"
        )}
      />
      <div
        title={statusDescription}
        className={cn(
          "flex justify-center items-center size-[35px] rounded-full border-[2px] border-primary shrink-0 transition-colors",
          state === "completed" && "bg-primary text-tertiary ",
          state === "current" &&
            "bg-primary text-tertiary animate-pulse",
          state === "pending" && "bg-tertiary text-divider border-divider"
        )}
      >
        <Icon name={iconName} />
      </div>
    </div>
  );
};

export { ProgressElement };
