import {
  AlertTriangle,
  AudioLines,
  Check,
  ChevronDown,
  ChevronUp,
  Chrome,
  Clapperboard,
  CreditCard,
  Film,
  Folder,
  Hourglass,
  Images,
  Loader2,
  LogOut,
  LucideProps,
  MessageSquareText,
  PauseCircle,
  PlayCircle,
  ScrollText,
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
  audioLines: AudioLines,
  check: Check,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chrome: Chrome,
  clapperboard: Clapperboard,
  comment: MessageSquareText,
  creditCard: CreditCard,
  film: Film,
  folder: Folder,
  hourglass: Hourglass,
  images: Images,
  loader: Loader2,
  logOut: LogOut,
  pause: PauseCircle,
  play: PlayCircle,
  scrollText: ScrollText,
  settings: Settings,
  sparkles: Sparkles,
};

export { iconNameToIcon };
