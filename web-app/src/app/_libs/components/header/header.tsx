import Image from "next/image";
import Link from "next/link";
import logo from "~/_assets/images/shortts-ai-logo.svg";
import { Navigation } from "./libs/components/components";

const Header: React.FC = () => {
  return (
    <header className="top-0 z-10 sticky flex justify-center bg-background/65 backdrop-blur-md w-full">
      <div className="flex justify-between items-center gap-[60px] px-[30px] py-[15px] w-full max-w-[1500px]">
        <Link href="/">
          <Image alt="Shortts-ai-logo" src={logo} priority={true} />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export { Header };
