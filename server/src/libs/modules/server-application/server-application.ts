import { config } from "~/libs/modules/config/config.js";
import { socketService } from "~/libs/modules/socket/socket.js";
import { videoController } from "~/modules/videos/videos.js";
import { BaseServerApplication } from "./base-server-application.module.js";

const serverApplication = new BaseServerApplication({
  config,
  routes: [...videoController.routes],
  socketService,
});

export { type ServerApplicationRoute } from "./libs/types/types.js";
export { serverApplication };
