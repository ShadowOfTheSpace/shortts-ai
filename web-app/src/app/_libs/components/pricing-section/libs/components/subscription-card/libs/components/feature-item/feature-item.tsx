import { Icon } from "~/_libs/components/components";
import { cn } from "~/_utils/utils";

type Properties = {
  isBenefit?: boolean;
  isBold?: boolean;
  label: string;
};

const FeatureItem: React.FC<Properties> = ({
  isBenefit = false,
  isBold = false,
  label,
}) => {
  return (
    <li className="flex gap-x-[10px] w-full text-[20px]">
      <Icon
        name={isBenefit ? "check" : "cross"}
        className="flex h-[calc(1em*1.5)] text-accent shrink-0"
      />
      <p
        className={cn(
          isBenefit ? "text-text" : "text-divider",
          isBold && "font-bold"
        )}
      >
        {label}
      </p>
    </li>
  );
};

export { FeatureItem };
