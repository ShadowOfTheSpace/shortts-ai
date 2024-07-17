import Link from "next/link";
import { type IconName } from "~/_libs/types/types";
import { cn } from "~/_utils/utils";
import { Icon } from "../icon/icon";

type Properties = {
  href: string;
  label: string;
  className?: string;
  iconName?: IconName;
};

const ButtonLink: React.FC<Properties> = ({
  href,
  label,
  className,
  iconName,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "flex w-full items-center justify-center gap-[10px] text-[16px] bg-primary rounded-[6px] px-[20px] py-[8px] text-background font-bold focus-visible:outline-none has-hover:hover:bg-primary/90 no-hover:active:bg-primary/90",
        className
      )}
    >
      {iconName && <Icon className="text-white" name={iconName} />}
      {label}
    </Link>
  );
};

export { ButtonLink };
