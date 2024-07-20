import {
  AlertTriangle,
  Check,
  Chrome,
  Clapperboard,
  CreditCard,
  Crown,
  Folder,
  Gift,
  Lightbulb,
  Loader2,
  LogOut,
  LucideProps,
  PartyPopper,
  Rocket,
  Settings,
  Sparkles,
  TestTube2,
  WandSparkles,
  X,
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
  chrome: Chrome,
  clapperboard: Clapperboard,
  creditCard: CreditCard,
  cross: X,
  crown: Crown,
  folder: Folder,
  gift: Gift,
  lightbulb: Lightbulb,
  loader: Loader2,
  logOut: LogOut,
  partyPopper: PartyPopper,
  rocket: Rocket,
  settings: Settings,
  sparkles: Sparkles,
  testTube: TestTube2,
  wand: WandSparkles,
};

export { iconNameToIcon };
