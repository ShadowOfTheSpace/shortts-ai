import {
  AlertTriangle,
  Check,
  ChevronDown,
  ChevronUp,
  Chrome,
  Clapperboard,
  CreditCard,
  Folder,
  Loader2,
  LogOut,
  LucideProps,
  PauseCircle,
  PlayCircle,
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
  check: Check,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chrome: Chrome,
  clapperboard: Clapperboard,
  creditCard: CreditCard,
  folder: Folder,
  loader: Loader2,
  logOut: LogOut,
  pause: PauseCircle,
  play: PlayCircle,
  settings: Settings,
  sparkles: Sparkles,
};

export { iconNameToIcon };
