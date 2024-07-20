import Link from "next/link";
import { Logo } from "~/_libs/components/components";
import { Navigation } from "./libs/components/components";

const Header: React.FC = () => {
  return (
    <header className="top-0 z-10 sticky flex justify-center bg-background/65 backdrop-blur-md w-full">
      <div className="flex justify-between items-center gap-[60px] px-[30px] py-[15px] w-full max-w-[1500px]">
        <Link href="/">
          <Logo className="shrink-0" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export { Header };
