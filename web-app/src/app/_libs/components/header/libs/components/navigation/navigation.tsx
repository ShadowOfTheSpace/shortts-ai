import { ButtonLink, NavigationItem } from "~/_libs/components/components";
import { AppRoute } from "~/_libs/enums/enums";

type Properties = {
  onClick?: () => void;
};

const Navigation: React.FC<Properties> = ({ onClick }) => {
  return (
    <nav className="flex md:flex-row flex-col justify-between md:items-center gap-[30px] w-full max-w-[550px]">
      <NavigationItem href="#examples" label="Examples" onClick={onClick} />
      <NavigationItem
        href="#where-to-start"
        label="Where to start"
        onClick={onClick}
      />
      <NavigationItem href="#pricing" label="Pricing" onClick={onClick} />
      <ButtonLink
        href={AppRoute.VIDEOS}
        label="Get started"
        iconName="rocket"
        className="max-w-max"
      />
    </nav>
  );
};

export { Navigation };
