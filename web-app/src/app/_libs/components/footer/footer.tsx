import { Logo, NavigationItem } from "~/_libs/components/components";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center mb-[10px] w-full">
      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-y-[30px] sm:gap-y-0 px-[20px] sm:px-[30px] sm:py-[60px] pt-[30px] pb-[20px] w-full max-w-[1500px]">
        <Logo className="order-2 sm:order-1 w-[114px] sm:w-auto h-[40px] sm:h-auto self-center shrink-0" />
        <div className="flex justify-around sm:justify-normal sm:gap-x-[60px] order-1 sm:order-2">
          <NavigationItem href="" label="Privacy Policy" />
          <NavigationItem href="" label="Terms of Use" />
        </div>
      </div>
    </footer>
  );
};
export { Footer };
