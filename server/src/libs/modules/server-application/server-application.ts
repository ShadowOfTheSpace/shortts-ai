import { config } from "~/libs/modules/config/config.js";
import { BaseServerApplication } from "./base-server-application.module.js";

const serverApplication = new BaseServerApplication({
  config,
  routes: [],
});

export { type ServerApplicationRoute } from "./libs/types/types.js";
export { serverApplication };

