import Image from "next/image";
import { ButtonLink } from "~/_libs/components/components";
import { AppRoute } from "~/_libs/enums/enums";

const HeroSection: React.FC = () => {
  return (
    <section className="md:before:top-0 md:before:absolute flex flex-col md:before:bg-background w-full md:before:w-full md:before:h-[90px]">
      <div className="flex justify-center bg-background pb-[140px] w-full">
        <div className="flex justify-between items-center gap-x-[30px] h-[calc(100dvh-80px-70px)] px-[20px] sm:px-[30px] w-full max-w-[1500px] lg:h-[min(100vh,800px)]">
          <div className="flex flex-col gap-y-[30px] md:basis-[70%] lg:basis-[55%]">
            <h1 className="font-baloo font-bold text-[40px] text-balance sm:text-[50px] lg:text-[60px] leading-tight">
              Transform your ideas into stunning{" "}
              <span className="text-accent">AI-generated</span> videos in a
              flash!
            </h1>
            <p className="max-w-[500px] text-[16px] text-balance sm:text-[20px]">
              Shortts.ai simplifies video production with innovative AI tools,
              allowing you to effortlessly create compelling and impactful
              content that resonates with your audience.
            </p>
            <ButtonLink
              href={AppRoute.CREATE_VIDEO}
              label="Create video"
              iconName="sparkles"
              className="max-w-max"
            />
          </div>
          <Image
            alt="Hero-image"
            src="/images/hero-image.svg"
            width={650}
            height={710}
            priority={true}
            className="md:block hidden xl:mt-[15px] mb-[90px] xl:mb-0 w-full min-w-[300px] max-w-full h-auto self-center md:basis-[30%] lg:basis-[45%] xl:self-start"
          />
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
