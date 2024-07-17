import Link from "next/link";

type Properties = {
  href: string;
  label: string;
};

const NavigationItem: React.FC<Properties> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="font-bold text-primary has-hover:hover:text-primary/80 no-hover:active:text-primary/80 shrink-0"
    >
      {label}
    </Link>
  );
};

export { NavigationItem };
