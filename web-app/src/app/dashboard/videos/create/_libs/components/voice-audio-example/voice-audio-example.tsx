import { useCallback, useEffect, useState } from "react";
import useSound from "use-sound";
import { Icon } from "~/_libs/components/components";
import { cn } from "~/_utils/utils";

type Properties = {
  audioPath: string;
  className?: string;
};

const VoiceAudioExample: React.FC<Properties> = ({ audioPath, className }) => {
  const [isPlying, setIsPlaying] = useState<boolean>(false);
  const [play, { stop, duration }] = useSound(audioPath);

  const handlePlayToggle = useCallback(() => {
    if (!isPlying) {
      play();
    } else {
      stop();
    }

    setIsPlaying((prevIsPlaying) => {
      return !prevIsPlaying;
    });
  }, [isPlying, duration, stop, play]);

  useEffect(() => {
    if (!duration) {
      return;
    }

    if (isPlying) {
      const timeout = setTimeout(() => {
        setIsPlaying(false);
      }, duration);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isPlying, duration]);

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return (
    <button
      className={cn(
        "opacity-60 has-hover:hover:opacity-100 no-hover:active:opacity-100 rounded-[4px] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text",
        isPlying && "opacity-100 text-primary focus-visible:ring-primary",
        className
      )}
      onClick={handlePlayToggle}
    >
      <Icon name={isPlying ? "pause" : "play"} size={24} />
    </button>
  );
};

export { VoiceAudioExample };
