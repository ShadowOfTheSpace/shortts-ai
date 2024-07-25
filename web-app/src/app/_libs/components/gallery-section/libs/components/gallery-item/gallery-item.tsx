type Properties = {
  animationDelay?: string;
  videoUrl: string;
};

const GalleryItem: React.FC<Properties> = ({ animationDelay, videoUrl }) => {
  return (
    <li
      className="left-[max(100%,calc(var(--element-count)*var(--element-width)))] absolute rounded-[12px] w-[var(--element-width)] h-[var(--element-height)] transition-transform animate-infinity-scroll-left overflow-hidden aspect-[768/1344] has-hover:hover:scale-[1.1] [&>div]:has-hover:hover:!bg-transparent "
      style={{ animationDelay }}
    >
      <div className="absolute transition-colors size-full" />
      <video muted autoPlay loop>
        <source src={videoUrl} type="video/webm" />
      </video>
    </li>
  );
};

export { GalleryItem };
