import { SocketService } from "./socket-service.module.js";

const socketService = new SocketService();

export { SocketEvent, SocketNamespace } from "./libs/enums/enums.js";
export { type SocketService } from "./socket-service.module.js";
export { socketService };
