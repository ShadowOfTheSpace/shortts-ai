import Image from "next/image";
import { cn } from "~/_utils/utils";

type Properties = {
  align: "left" | "right";
  backgroundImageUrl: string;
  description: string;
  imageUrl: string;
  title: string;
};

const Step: React.FC<Properties> = ({
  align,
  backgroundImageUrl,
  description,
  imageUrl,
  title,
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-x-[150px]",
        align === "left" && "flex-row-reverse",
        align === "right" && "flex-row"
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-y-[15px] basis-1/2",
          align === "left" && "items-start",
          align === "right" && "items-end"
        )}
      >
        <h2
          className={cn(
            "w-full font-baloo font-bold text-[40px] text-primary leading-tight",
            align === "left" && "text-left",
            align === "right" && "text-right"
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "max-w-[600px] text-[20px] text-balance",
            align === "left" && "text-left",
            align === "right" && "text-right"
          )}
        >
          {description}
        </p>
      </div>
      <div
        className={cn(
          "flex items-center h-[450px] basis-1/2 relative",
          align === "left" && "justify-end",
          align === "right" && "justify-start"
        )}
      >
        <Image
          alt=""
          src={backgroundImageUrl}
          width={450}
          height={450}
          priority={true}
          className={cn(
            "absolute w-auto h-full aspect-square",
            align === "left" && "left-0",
            align === "right" && "right-0"
          )}
        />
        <Image
          alt={title}
          src={imageUrl}
          width={633}
          height={471}
          priority={true}
          className="z-[1] border-[2px] border-primary bg-tertiary rounded-[10px] w-full min-w-[225px] max-w-[450px] min-h-[150px] max-h-[300px] aspect-[450/300] object-cover"
        />
      </div>
    </div>
  );
};

export { Step };
