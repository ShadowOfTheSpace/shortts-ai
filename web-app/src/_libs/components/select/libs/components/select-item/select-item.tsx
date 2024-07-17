import {
  Item as RadixSelect,
  ItemIndicator as RadixSelectItemIndicator,
  ItemText as RadixSelectItemText,
} from "@radix-ui/react-select";
import { Icon } from "~/_libs/components/components";
import { cn } from "~/_utils/utils";
type Properties = {
  text: string;
  value: string;
  children?: React.ReactNode;
  className?: string;
};

const SelectItem: React.FC<Properties> = ({
  text,
  value,
  children,
  className,
}) => {
  return (
    <RadixSelect
      value={value}
      className={cn(
        "flex items-center rounded-[3px] relative pl-[calc(10px+20px+5px)] pr-[20px] py-[6px] data-[highlighted]:bg-divider/15 outline-none cursor-pointer",
        className
      )}
    >
      <RadixSelectItemIndicator className="left-[5px] absolute">
        <Icon name="check" />
      </RadixSelectItemIndicator>
      <RadixSelectItemText>{text}</RadixSelectItemText>
      {children}
    </RadixSelect>
  );
};

export { SelectItem };
