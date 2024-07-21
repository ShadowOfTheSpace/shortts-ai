import { ButtonLink, NavigationItem } from "~/_libs/components/components";
import { AppRoute } from "~/_libs/enums/enums";

const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center gap-x-[60px]">
      <NavigationItem href="#examples" label="Examples" />
      <NavigationItem href="#where-to-start" label="Where to start" />
      <NavigationItem href="#pricing" label="Pricing" />
      <ButtonLink
        href={AppRoute.VIDEOS}
        label="Get started"
        iconName="rocket"
      />
    </nav>
  );
};

export { Navigation };
