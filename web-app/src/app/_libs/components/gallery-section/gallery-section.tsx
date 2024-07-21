import { GalleryItem } from "./libs/components/components";

const GallerySection: React.FC = () => {
  return (
    <section id="examples" className="flex justify-center w-full">
      <div className="flex flex-col items-center gap-y-[60px] px-[30px] w-full max-w-[1500px]">
        <h1 className="font-baloo font-bold text-[60px]">
          <span className="text-primary">Story.</span>{" "}
          <span className="text-accent">Illustrations.</span>{" "}
          <span className="text-secondary">Effects.</span>
        </h1>
        <div className="flex gap-x-[40px] py-[60px]">
          <GalleryItem videoUrl="/videos/mirror-story.webm" />
          <GalleryItem videoUrl="/videos/dreamer-story.webm" />
          <GalleryItem videoUrl="/videos/elf-story.webm" />
          <GalleryItem videoUrl="/videos/jazz-story.webm" />
          <GalleryItem videoUrl="/videos/forest-story.webm" />
        </div>
      </div>
    </section>
  );
};

export { GallerySection };
