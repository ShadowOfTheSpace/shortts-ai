import { Socket } from "./socket.module";

const socket = new Socket(process.env.NEXT_PUBLIC_WEB_SOCKET_SERVER_URL as string);

export { SocketEvent, SocketNamespace } from "./libs/enums/enums";
export { socket };
