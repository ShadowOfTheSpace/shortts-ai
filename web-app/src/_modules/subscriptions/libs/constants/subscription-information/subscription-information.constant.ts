import { AppRoute } from "~/_libs/enums/enums";
import { SubscriptionFeature } from "../../enums/enums";
import { type Subscription } from "../../types/types";

const SUBSCRIPTION_INFORMATION: Subscription[] = [
  {
    benefits: [
      SubscriptionFeature.ONE_VIDEO_FOR_FREE,
      SubscriptionFeature.NARRATOR_VOICE_SELECTION,
      SubscriptionFeature.LIMITED_COLOR_PALETTE_SELECTION,
    ],
    buttonLabel: "Try Free plan",
    drawbacks: [
      SubscriptionFeature.STYLE_SELECTION,
      SubscriptionFeature.HD_VIDEO_RESOLUTION,
      SubscriptionFeature.NO_WATERMARK,
    ],
    iconName: "gift",
    href: AppRoute.BILLING,
    price: 0,
    title: "Free",
  },
  {
    benefits: [
      SubscriptionFeature.THREE_VIDEOS_PER_WEEK,
      SubscriptionFeature.NARRATOR_VOICE_SELECTION,
      SubscriptionFeature.STYLE_SELECTION,
      SubscriptionFeature.COLOR_PALETTE_SELECTION,
      SubscriptionFeature.HD_VIDEO_RESOLUTION,
      SubscriptionFeature.NO_WATERMARK,
    ],
    buttonLabel: "Try Basic plan",
    drawbacks: [],
    iconName: "lightbulb",
    href: AppRoute.BILLING,
    price: 15,
    title: "Basic",
  },
  {
    benefits: [
      SubscriptionFeature.ONE_VIDEO_PER_DAY,
      SubscriptionFeature.NARRATOR_VOICE_SELECTION,
      SubscriptionFeature.STYLE_SELECTION,
      SubscriptionFeature.COLOR_PALETTE_SELECTION,
      SubscriptionFeature.HD_VIDEO_RESOLUTION,
      SubscriptionFeature.NO_WATERMARK,
    ],
    buttonLabel: "Try Pro plan",
    drawbacks: [],
    iconName: "crown",
    href: AppRoute.BILLING,
    price: 30,
    title: "Pro",
  },
];

export { SUBSCRIPTION_INFORMATION };
