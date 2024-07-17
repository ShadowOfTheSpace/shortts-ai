import { type IconName } from "~/_libs/types/types";
import { iconNameToIcon } from "./libs/maps/maps";

type Properties = {
  name: IconName;
  size?: number;
  className?: string;
};

const Icon: React.FC<Properties> = ({ name, size = 20, className }) => {
  const LibraryIcon = iconNameToIcon[name];

  return <LibraryIcon size={size} className={className} />;
};

export { Icon };
