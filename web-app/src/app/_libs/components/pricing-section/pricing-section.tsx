import { Wave } from "~/_libs/components/components";
import { SUBSCRIPTION_INFORMATION } from "~/_modules/subscriptions/subscriptions";
import { SubscriptionCard } from "./libs/components/components";

const PricingSection: React.FC = () => {
  return (
    <section className="flex flex-col w-full">
      <Wave className="h-[140px] text-background scale-[-1]" />
      <div className="flex justify-center bg-background w-full">
        <div className="flex flex-col items-center gap-y-[30px] px-[30px] w-full max-w-[1500px]">
          <h1 className="font-baloo font-bold text-[60px]">Pricing</h1>
          <div className="flex justify-center gap-x-[60px] py-[30px] w-full">
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
      <Wave className="h-[140px] text-background" />
    </section>
  );
};

export { PricingSection };
