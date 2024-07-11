import { config } from "~/libs/modules/config/config.js";
import { videoController } from "~/modules/videos/videos.js";
import { BaseServerApplication } from "./base-server-application.module.js";

const serverApplication = new BaseServerApplication({
  config,
  routes: [...videoController.routes],
});

export { type ServerApplicationRoute } from "./libs/types/types.js";
export { serverApplication };
