import { type Server as HttpServer } from "node:http";
import { type Socket, Server as SocketServer } from "socket.io";
import { SocketEvent, SocketNamespace } from "~/libs/modules/socket/socket.js";
import { type ValueOf } from "~/libs/types/types.js";

class SocketService {
  private io!: SocketServer;

  private handleVideoStatus(socket: Socket): void {
    socket.on(SocketEvent.UPDATE_VIDEO_INFO_JOIN_ROOM, (videoId: string) => {
      void socket.join(videoId);
    });

    socket.on(SocketEvent.UPDATE_VIDEO_INFO_LEAVE_ROOM, (videoId: string) => {
      void socket.leave(videoId);
    });
  }

  public emitMessage<T>({
    event,
    payload,
    roomIds,
    targetNamespace,
  }: {
    event: ValueOf<typeof SocketEvent>;
    payload: T;
    roomIds: string[];
    targetNamespace: ValueOf<typeof SocketNamespace>;
  }): void {
    this.io.of(targetNamespace).to(roomIds).emit(event, payload);
  }

  public initialize(server: HttpServer): void {
    this.io = new SocketServer(server);
    this.io
      .of(SocketNamespace.VIDEO)
      .on(SocketEvent.CONNECTION, this.handleVideoStatus.bind(this));
  }
}

export { SocketService };
