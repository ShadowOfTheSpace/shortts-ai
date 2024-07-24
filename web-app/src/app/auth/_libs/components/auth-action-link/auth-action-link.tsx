import Link from "next/link";
import { Icon } from "~/_libs/components/components";
import { type IconName } from "~/_libs/types/types";

type Properties = {
  href: string;
  text: string;
  iconName?: IconName;
  description?: string;
};

const AuthActionLink: React.FC<Properties> = ({
  href,
  text,
  description,
  iconName,
}) => {
  return (
    <div className="flex gap-[10px]">
      {description}
      <Link
        href={href}
        className="flex items-center gap-[5px] font-bold text-primary has-hover:hover:text-primary/80 no-hover:active:text-primary/80"
      >
        {text} {iconName && <Icon name={iconName} />}
      </Link>
    </div>
  );
};

export { AuthActionLink };
