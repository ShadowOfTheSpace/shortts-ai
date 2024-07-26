import { Wave } from "~/_libs/components/components";
import { SUBSCRIPTION_INFORMATION } from "~/_modules/subscriptions/subscriptions";
import { SubscriptionCard } from "./libs/components/components";

const PricingSection: React.FC = () => {
  return (
    <section className="flex flex-col w-full">
      <Wave className="-mb-[2px] h-[60px] md:h-[140px] text-background scale-[-1]" />
      <div
        id="pricing"
        className="flex justify-center bg-background pt-[20px] sm:pt-[30px] w-full"
      >
        <div className="flex flex-col items-center lg:gap-y-[30px] px-[20px] sm:px-[30px] w-full max-w-[1500px]">
          <h1 className="font-baloo font-bold text-[40px] sm:text-[50px] lg:text-[60px] leading-tight">
            Pricing
          </h1>
          <div className="flex flex-wrap justify-center gap-[30px] 2xl:gap-x-[60px] py-[30px] w-full">
            {SUBSCRIPTION_INFORMATION.map((info) => {
              return (
                <SubscriptionCard
                  key={info.title}
                  benefits={info.benefits}
                  buttonLabel={info.buttonLabel}
                  drawbacks={info.drawbacks}
                  iconName={info.iconName}
                  href={info.href}
                  price={info.price}
                  title={info.title}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Wave className="-mt-[2px] h-[60px] md:h-[140px] text-background" />
    </section>
  );
};

export { PricingSection };
