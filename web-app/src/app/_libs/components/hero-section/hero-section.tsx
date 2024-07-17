import Image from "next/image";
import heroImage from "~/_assets/images/hero-image.svg";
import { ButtonLink, Wave } from "~/_libs/components/components";

const HeroSection: React.FC = () => {
  return (
    <section className="before:top-0 before:absolute flex flex-col before:bg-background w-full before:w-full before:h-[90px]">
      <div className="flex justify-center bg-background w-full">
        <div className="flex justify-between items-center gap-x-[30px] px-[30px] w-full max-w-[1500px] h-[min(100vh,800px)]">
          <div className="flex flex-col gap-y-[30px] basis-[55%]">
            <h1 className="font-baloo font-bold text-[60px] text-balance leading-tight">
              Transform your ideas into stunning{" "}
              <span className="text-accent">AI-generated</span> videos in a
              flash!
            </h1>
            <p className="max-w-lg text-[20px] text-balance">
              Shortts.ai simplifies video production with innovative AI tools,
              allowing you to effortlessly create compelling and impactful
              content that resonates with your audience.
            </p>
            <ButtonLink
              href=""
              label="Create video"
              iconName="sparkles"
              className="max-w-max"
            />
          </div>
          <Image
            alt="Hero-image"
            src={heroImage}
            priority={true}
            className="mt-[15px] min-w-[400px] max-w-full h-auto basis-[45%] self-start"
          />
        </div>
      </div>
      <Wave className="h-[140px] text-background" />
    </section>
  );
};

export { HeroSection };
