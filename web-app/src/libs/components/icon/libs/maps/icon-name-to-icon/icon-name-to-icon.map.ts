import {
  Chrome,
  Loader2,
  LucideProps,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";
import { IconName } from "~/libs/types/types";

const iconNameToIcon: Record<
  IconName,
  ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
> = {
  alert: AlertTriangle,
  chrome: Chrome,
  loader: Loader2,
  sparkles: Sparkles,
};

export { iconNameToIcon };
