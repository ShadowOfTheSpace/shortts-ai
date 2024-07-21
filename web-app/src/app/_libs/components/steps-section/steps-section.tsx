import { Step, StepsLine } from "./libs/components/components";
import { STEPS_CONTENT } from "./libs/constants/constants";

const StepsSection: React.FC = () => {
  return (
    <section id="where-to-start" className="flex justify-center w-full">
      <div className="flex flex-col items-center gap-y-[60px] px-[30px] w-full max-w-[1500px]">
        <h1 className="font-baloo font-bold text-[60px]">Where to Start?</h1>
        <div className="relative flex flex-col gap-y-[120px] w-full">
          {STEPS_CONTENT.map((step, index) => {
            const align = index % 2 === 0 ? "right" : "left";
            return (
              <Step
                key={index}
                align={align}
                backgroundImageUrl={step.backgroundImageUrl}
                description={step.description}
                imageUrl={step.imageUrl}
                title={step.title}
              />
            );
          })}
          <StepsLine className="left-1/2 absolute pt-[130px] pb-[280px] h-full -translate-x-1/2" />
        </div>
      </div>
    </section>
  );
};

export { StepsSection };
