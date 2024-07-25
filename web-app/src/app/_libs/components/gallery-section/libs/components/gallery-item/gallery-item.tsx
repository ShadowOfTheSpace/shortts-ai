type Properties = {
  animationDelay?: string;
  videoUrl: string;
};

const GalleryItem: React.FC<Properties> = ({ animationDelay, videoUrl }) => {
  return (
    <li
      className="left-[max(100%,calc(var(--element-count)*var(--element-width)))] absolute rounded-[12px] transition-transform animate-infinity-scroll-left overflow-hidden aspect-[768/1344] w-[var(--element-width)] h-[var(--element-height)] has-hover:hover:scale-[1.1] [&>div]:has-hover:hover:!bg-transparent"
      style={{ animationDelay }}
    >
      <div className="absolute transition-colors size-full" />
      <video muted autoPlay loop className="pointer-events-none">
        <source src={videoUrl} type="video/webm" />
      </video>
    </li>
  );
};

export { GalleryItem };
