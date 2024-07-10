import { formatTimestamp } from "subtitle";

type Properties = {
  animation: string | null;
  end: number;
  start: number;
  text: string;
};

const getSubtitleRow = ({ animation, end, start, text }: Properties) => {
  const formattedStart = formatTimestamp(start * 1000, {
    format: "WebVTT",
  }).substring(1, 11);

  const formattedEnd = formatTimestamp(end * 1000, { format: "WebVTT" }).substring(
    1,
    11
  );

  return `Dialogue: Default,${formattedStart},${formattedEnd},${
    animation ?? ""
  }${text.toUpperCase()}\n`;
};

export { getSubtitleRow };
