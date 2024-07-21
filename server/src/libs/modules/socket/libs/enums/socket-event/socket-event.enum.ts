const SocketEvent = {
  CONNECTION: "connection",
  UPDATE_VIDEO_STATUS: "update-video-status",
  UPDATE_VIDEO_TEXT_CONTENT: "update-video-text-content",
  UPDATE_VIDEO_FILE: "update-video-file",
  UPDATE_VIDEO_INFO_JOIN_ROOM: "update-video-info-join-room",
  UPDATE_VIDEO_INFO_LEAVE_ROOM: "update-video-info-leave-room",
} as const;

export { SocketEvent };
