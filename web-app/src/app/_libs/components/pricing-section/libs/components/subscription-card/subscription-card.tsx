import { ButtonLink, Icon } from "~/_libs/components/components";
import { IconName } from "~/_libs/types/icon-name.type";
import { FeatureItem } from "./libs/components/components";

type Properties = {
  benefits: string[];
  buttonLabel: string;
  drawbacks: string[];
  iconName: IconName;
  href: string;
  price: number;
  title: string;
};

const SubscriptionCard: React.FC<Properties> = ({
  benefits,
  buttonLabel,
  drawbacks,
  iconName,
  href,
  price,
  title,
}) => {
  return (
    <div className="flex flex-col items-center gap-y-[30px] bg-tertiary shadow-md p-[30px] rounded-[12px] w-full max-w-[min(100%,400px)] md:max-w-[350px] has-hover:hover:scale-105 transition-transform cursor-default">
      <div className="flex flex-col items-center gap-y-[15px] w-full">
        <div className="flex flex-col items-center">
          <Icon name={iconName} className="text-accent" size={40} />
          <h2 className="font-baloo font-bold text-[40px] text-accent leading-[50px]">
            {title}
          </h2>
        </div>
        <h2 className="font-bold text-[40px] leading-[40px] sm:leading-[50px]">
          ${price}
          <span className="font-normal text-[16px] sm:text-[20px]">
            /{price === 0 ? "forever" : "month"}
          </span>
        </h2>
        <ul className="flex flex-col gap-y-[5px] w-full">
          {benefits.map((benefit, index) => {
            return (
              <FeatureItem
                key={benefit}
                label={benefit}
                isBenefit
                isBold={index === 0}
              />
            );
          })}
          {drawbacks.map((drawback) => {
            return <FeatureItem key={drawback} label={drawback} />;
          })}
        </ul>
      </div>
      <ButtonLink
        href={href}
        label={buttonLabel}
        className="mt-[30px] md:mt-auto"
      />
    </div>
  );
};

export { SubscriptionCard };
