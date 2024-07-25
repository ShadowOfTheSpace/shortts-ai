import { Wave } from "~/_libs/components/components";
import { GalleryItem } from "./libs/components/components";
import { GALLERY_VIDEOS } from "./libs/constants/constants";

const GallerySection: React.FC = () => {
  const videoCount = GALLERY_VIDEOS.length;

  return (
    <section className="flex flex-col justify-center items-center -mt-[200px] w-full">
      <Wave className="-mb-[1px] h-[60px] md:h-[140px] text-primary scale-[-1]" />
      <div id="examples" className="flex justify-center bg-primary w-full">
        <div className="flex flex-col items-center gap-y-[30px] lg:gap-y-[60px] px-[30px] pb-[30px] w-full max-w-[1500px] overflow-x-hidden">
          <h1 className="font-baloo font-bold text-[40px] text-background text-center sm:text-[50px] lg:text-[60px] leading-tight">
            Story. Illustrations. Effects.
          </h1>
          <ul
            className="relative w-[100vw] md:w-full md:overflow-x-hidden md:py-[40px] box-content [--element-width:200px] md:[--element-width:280px] [--element-height:350px] md:[--element-height:490px] h-[var(--element-height)] [--scroll-time:30s] [&>li>div]:has-hover:hover:bg-primary/40 [&>*]:has-hover:hover:[animation-play-state:paused!important] [&>*]:no-hover:active:[animation-play-state:paused!important]"
            style={
              {
                "--element-count": videoCount,
                maskImage:
                  "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)",
              } as React.CSSProperties
            }
          >
            {GALLERY_VIDEOS.map((video, index) => {
              return (
                <GalleryItem
                  key={index}
                  animationDelay={`-${
                    (30 / videoCount) * (videoCount - index - 1)
                  }s`}
                  videoUrl={video}
                />
              );
            })}
          </ul>
        </div>
      </div>
      <Wave className="-mt-[1px] h-[60px] md:h-[140px] text-primary" />
    </section>
  );
};

export { GallerySection };
