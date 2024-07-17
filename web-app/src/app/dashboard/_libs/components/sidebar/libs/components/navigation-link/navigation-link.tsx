"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "~/_libs/components/components";
import { type AppRoute } from "~/_libs/enums/enums";
import { type IconName, type ValueOf } from "~/_libs/types/types";
import { cn } from "~/_utils/utils";

type Properties = {
  iconName: IconName;
  label: string;
  to: ValueOf<typeof AppRoute>;
};

const NavigationLink: React.FC<Properties> = ({ iconName, label, to }) => {
  const pathname = usePathname();

  const isActive = pathname === to;

  return (
    <Link
      href={to}
      className={cn(
        "flex items-center gap-[10px] opacity-60 has-hover:hover:opacity-100 no-hover:active:opacity-100 px-[12px] py-[10px] rounded-md transition-opacity",
        isActive && "bg-divider/15 opacity-100"
      )}
    >
      <Icon name={iconName} />
      {label}
    </Link>
  );
};

export { NavigationLink };
