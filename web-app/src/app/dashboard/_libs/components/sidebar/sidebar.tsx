import { Logo } from "~/_libs/components/components";
import { AppRoute } from "~/_libs/enums/enums";
import { NavigationLink, SignOutForm } from "./libs/components/components";

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col gap-[50px] bg-tertiary shadow-md p-[30px] rounded-r-[20px]">
      <Logo className="shrink-0" />
      <div className="flex flex-col -mx-[15px] h-full">
        <NavigationLink
          iconName="clapperboard"
          label="Create video"
          to={AppRoute.CREATE_VIDEO}
        />
        <NavigationLink
          iconName="folder"
          label="My videos"
          to={AppRoute.VIDEOS}
        />
        <NavigationLink
          iconName="creditCard"
          label="Billing"
          to={AppRoute.BILLING}
        />
        <NavigationLink
          iconName="settings"
          label="Settings"
          to={AppRoute.SETTINGS}
        />
        <SignOutForm className="mt-auto" />
      </div>
    </div>
  );
};

export { Sidebar };
