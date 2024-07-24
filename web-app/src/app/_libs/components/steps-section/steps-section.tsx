import { Step } from "./libs/components/components";
import { STEPS_CONTENT } from "./libs/constants/constants";

const StepsSection: React.FC = () => {
  return (
    <section id="where-to-start" className="flex justify-center w-full">
      <div className="flex flex-col items-center gap-y-[30px] lg:gap-y-[60px] px-[30px] w-full max-w-[1500px]">
        <h1 className="font-baloo font-bold text-[40px] sm:text-[50px] lg:text-[60px]">
          Where to Start?
        </h1>
        <div className="relative flex flex-col gap-y-[60px] sm:gap-y-[90px] lg:gap-y-0 xl:gap-y-[30px] w-full">
          {STEPS_CONTENT.map((step, index) => {
            const align = index % 2 === 0 ? "right" : "left";
            return (
              <Step
                key={index}
                align={align}
                backgroundImageUrl={step.backgroundImageUrl}
                description={step.description}
                iconName={step.iconName}
                imageUrl={step.imageUrl}
                title={step.title}
              />
            );
          })}
          <span className="left-[15px] sm:left-[20px] lg:left-1/2 absolute lg:bg-[linear-gradient(0deg,_rgba(177,130,206,0)_0%,_rgba(177,130,206,1)_5%,_rgba(177,130,206,1)_95%,_rgba(177,130,206,0)_100%)] bg-gradient-to-b from-95% from-secondary mt-[20px] lg:mt-0 w-[2px] h-full -translate-x-1/2" />
        </div>
      </div>
    </section>
  );
};

export { StepsSection };
