const AppRoute = {
  BILLING: "/dashboard/billing",
  CREATE_VIDEO: "/dashboard/create-video",
  ROOT: "/",
  SETTINGS: "/dashboard/settings",
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  VIDEOS: "/dashboard/videos",
  VIDEO_$ID: "/dashboard/videos/[id]",
} as const;

export { AppRoute };
