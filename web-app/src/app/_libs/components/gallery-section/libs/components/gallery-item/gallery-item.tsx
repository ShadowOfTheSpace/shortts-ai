type Properties = {
  videoUrl: string;
};

const GalleryItem: React.FC<Properties> = ({ videoUrl }) => {
  return (
    <div className="relative rounded-[10px] size-full transition-transform overflow-hidden aspect-[768/1344] hover:scale-[1.25] [&+*]:hover:scale-[1.20] [&+*+*]:hover:scale-[1.15] [&+*+*+*]:hover:scale-[1.10] [&+*+*+*+*]:hover:scale-[1.05] has-[+*:hover]:scale-[1.20] has-[+*+*:hover]:scale-[1.15] has-[+*+*+*:hover]:scale-[1.10] has-[+*+*+*+*:hover]:scale-[1.05] hover:z-[5] [&+*]:hover:z-[4] [&+*+*]:hover:z-[3] [&+*+*+*]:hover:z-[2] has-[+*:hover]:z-[4] has-[+*+*:hover]:z-[3] has-[+*+*+*:hover]:z-[2] [&+*>div]:hover:bg-black/10 [&+*+*>div]:hover:bg-black/20 [&+*+*+*>div]:hover:bg-black/30 [&+*+*+*+*>div]:hover:bg-black/40 [&>div]:has-[+*:hover]:bg-black/10 [&>div]:has-[+*+*:hover]:bg-black/20 [&>div]:has-[+*+*+*:hover]:bg-black/30 [&>div]:has-[+*+*+*+*:hover]:bg-black/40 basis-1/5">
      <div className="absolute transition-colors size-full" />
      <video muted autoPlay loop>
        <source src={videoUrl} type="video/webm" />
      </video>
    </div>
  );
};

export { GalleryItem };
