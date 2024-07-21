import { Logo, NavigationItem } from "~/_libs/components/components";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center w-full">
      <div className="flex justify-between items-center px-[30px] py-[60px] w-full max-w-[1500px]">
        <Logo className="shrink-0" />
        <div className="flex gap-x-[60px]">
          <NavigationItem href="" label="Privacy Policy" />
          <NavigationItem href="" label="Terms of Use" />
        </div>
      </div>
    </footer>
  );
};
export { Footer };
