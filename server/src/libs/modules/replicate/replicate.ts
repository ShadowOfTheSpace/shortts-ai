import ReplicateClient from "replicate";
import { config } from "~/libs/modules/config/config.js";
import { BaseReplicate } from "./base-replicate.module.js";

const replicateClient = new ReplicateClient({
  auth: config.ENV.REPLICATE.API_KEY,
});

const replicate = new BaseReplicate(replicateClient);

export { type BaseReplicate as Replicate } from "./base-replicate.module.js";
export { ReplicateModel } from "./libs/enums/enums.js";
export { replicate };
