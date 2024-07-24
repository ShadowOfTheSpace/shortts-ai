import Image from "next/image";
import { Icon } from "~/_libs/components/components";
import { type IconName } from "~/_libs/types/types";
import { cn } from "~/_utils/utils";

type Properties = {
  align: "left" | "right";
  backgroundImageUrl: string;
  description: string;
  iconName: IconName;
  imageUrl: string;
  title: string;
};

const Step: React.FC<Properties> = ({
  align,
  backgroundImageUrl,
  description,
  iconName,
  imageUrl,
  title,
}) => {
  return (
    <div
      className={cn(
        "flex lg:flex-row flex-col items-center gap-y-[20px] lg:gap-y-0 lg:gap-x-[150px]",
        align === "left" && "lg:flex-row-reverse",
        align === "right" && "lg:flex-row"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-y-[5px] lg:gap-y-[15px] lg:basis-1/2 pl-[60px] sm:pl-[80px] lg:pl-0 lg:w-full",
          align === "left" && "items-start",
          align === "right" && "items-end"
        )}
      >
        <h3
          className={cn(
            "relative w-full font-baloo font-bold text-[30px] text-primary md:text-[40px] leading-tight",
            align === "left" && "lg:text-left",
            align === "right" && "lg:text-right"
          )}
        >
          {title}
          <span
            className={cn(
              "top-1/2 -left-[60px] sm:-left-[80px] z-[1] absolute flex justify-center items-center bg-[linear-gradient(0deg,_rgba(255,255,255,0)_0%,_rgba(255,255,255,1)_25%,_rgba(255,255,255,1)_75%,_rgba(255,255,255,0)_100%)] h-[120px] -translate-y-1/2",
              align === "left" && "lg:-left-[75px] lg:-translate-x-1/2",
              align === "right" &&
                "lg:-right-[75px] lg:left-auto lg:translate-x-1/2"
            )}
          >
            <Icon
              name={iconName}
              className="text-primary size-[30px] sm:size-[40px]"
            />
          </span>
        </h3>
        <p
          className={cn(
            "lg:max-w-[600px] text-[16px] sm:text-[20px] lg:text-balance",
            align === "left" && "lg:text-left",
            align === "right" && "lg:text-right"
          )}
        >
          {description}
        </p>
      </div>
      <div
        className={cn(
          "relative flex justify-start items-center sm:py-[40px] lg:py-0 pb-[40px] [@media(min-width:0px)_and_(max-width:500px)]:pb-0 pl-[60px] sm:pl-[80px] w-full lg:h-[500px] lg:basis-1/2 lg:pl-0",
          align === "left" && "lg:justify-end"
        )}
      >
        <Image
          alt=""
          src={backgroundImageUrl}
          width={450}
          height={450}
          priority={true}
          className={cn(
            "right-0 bottom-0 sm:bottom-auto absolute [@media(min-width:0px)_and_(max-width:500px)]:hidden w-auto h-full aspect-square size-[350px] sm:size-[400px] lg:size-[450px]",
            align === "left" && "lg:left-0 scale-x-[-1] lg:scale-x-[1]"
          )}
        />
        <Image
          alt={title}
          src={imageUrl}
          width={633}
          height={471}
          priority={true}
          className="z-[1] border-[2px] border-primary bg-tertiary rounded-[12px] w-auto sm:w-full min-w-0 sm:max-w-[500px] h-full sm:h-auto min-h-0 max-h-[500px] sm:max-h-[335px] sm:aspect-[500/335] aspect-[335/500] object-cover"
        />
      </div>
    </div>
  );
};

export { Step };
