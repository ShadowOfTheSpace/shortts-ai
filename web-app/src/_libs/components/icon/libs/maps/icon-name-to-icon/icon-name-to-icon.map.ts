import {
  AlertTriangle,
  AudioLines,
  Check,
  ChevronDown,
  ChevronUp,
  Chrome,
  Clapperboard,
  CreditCard,
  Crown,
  Eye,
  EyeOff,
  Film,
  Folder,
  Gift,
  Hourglass,
  Images,
  Lightbulb,
  Loader2,
  LogOut,
  LucideProps,
  Menu,
  MessageSquareText,
  PartyPopper,
  PauseCircle,
  PlayCircle,
  Rocket,
  ScrollText,
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
  audioLines: AudioLines,
  check: Check,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chrome: Chrome,
  clapperboard: Clapperboard,
  comment: MessageSquareText,
  creditCard: CreditCard,
  cross: X,
  crown: Crown,
  eye: Eye,
  eyeOff: EyeOff,
  film: Film,
  folder: Folder,
  gift: Gift,
  hourglass: Hourglass,
  images: Images,
  lightbulb: Lightbulb,
  loader: Loader2,
  logOut: LogOut,
  menu: Menu,
  partyPopper: PartyPopper,
  pause: PauseCircle,
  play: PlayCircle,
  rocket: Rocket,
  scrollText: ScrollText,
  settings: Settings,
  sparkles: Sparkles,
  testTube: TestTube2,
  wand: WandSparkles,
};

export { iconNameToIcon };
