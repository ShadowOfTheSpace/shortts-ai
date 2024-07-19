import { cn } from "~/_utils/utils";

type Properties = {
  colors: string[];
  className?: string;
};

const ColorPalettePreview: React.FC<Properties> = ({ colors, className }) => {
  return (
    <div className="flex rounded-[4px] overflow-hidden">
      {colors.map((color) => {
        return (
          <span
            key={color}
            className={cn("size-[20px]", className)}
            style={{ backgroundColor: color }}
          />
        );
      })}
    </div>
  );
};

export { ColorPalettePreview };
