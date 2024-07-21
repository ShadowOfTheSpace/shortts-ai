import { type AppRoute } from "~/_libs/enums/enums";
import { type IconName, type ValueOf } from "~/_libs/types/types";
import { type SubscriptionFeature } from "../enums/enums";

type Subscription = {
  benefits: ValueOf<typeof SubscriptionFeature>[];
  buttonLabel: string;
  drawbacks: ValueOf<typeof SubscriptionFeature>[];
  iconName: IconName;
  href: ValueOf<typeof AppRoute>;
  price: number;
  title: string;
};

export { type Subscription };
