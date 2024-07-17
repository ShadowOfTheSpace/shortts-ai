import {
  AlertTriangle,
  Chrome,
  Clapperboard,
  CreditCard,
  Folder,
  Loader2,
  LogOut,
  LucideProps,
  Settings,
  Sparkles,
} from "lucide-react";
import { type ForwardRefExoticComponent, type RefAttributes } from "react";
import { IconName } from "~/_libs/types/types";

const iconNameToIcon: Record<
  IconName,
  ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >
> = {
  alert: AlertTriangle,
  chrome: Chrome,
  clapperboard: Clapperboard,
  creditCard: CreditCard,
  folder: Folder,
  loader: Loader2,
  logOut: LogOut,
  settings: Settings,
  sparkles: Sparkles,
};

export { iconNameToIcon };
