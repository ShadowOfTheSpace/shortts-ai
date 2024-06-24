import { ZoomPanAnimation } from "../../types/zoom-pan-animation.type.js";

const getAllZoomPanAnimation = (
  duration: number,
  frameRate: number
): ZoomPanAnimation[] => {
  return [
    {
      title: "pan-right-to-left-center",
      x: `(1-on/(${frameRate}*${duration}))*(iw-iw/zoom)`,
      y: "ih/2-(ih/zoom/2)",
      zoom: "1.1",
    },
    {
      title: "pan-left-to-right-center",
      x: `on/(${frameRate}*${duration})*(iw-iw/zoom)`,
      y: "ih/2-(ih/zoom/2)",
      zoom: "1.1",
    },
    {
      title: "pan-top-to-bottom-center",
      x: "iw/2-(iw/zoom/2)",
      y: `on/(${frameRate}*${duration})*(ih-ih/zoom)`,
      zoom: "1.1",
    },
    {
      title: "pan-bottom-to-top-center",
      x: "iw/2-(iw/zoom/2)",
      y: `(1-on/(${frameRate}*${duration}))*(ih-ih/zoom)`,
      zoom: "1.1",
    },
    {
      title: "pan-top-left-to-bottom-right",
      x: `on/(${frameRate}*${duration})*(iw-iw/zoom)`,
      y: `on/(${frameRate}*${duration})*(ih-ih/zoom)`,
      zoom: "1.1",
    },
    {
      title: "pan-top-right-to-bottom-left",
      x: `(1-on/(${frameRate}*${duration}))*(iw-iw/zoom)`,
      y: `on/(${frameRate}*${duration})*(ih-ih/zoom)`,
      zoom: "1.1",
    },
    {
      title: "pan-bottom-left-to-top-right",
      x: `on/(${frameRate}*${duration})*(iw-iw/zoom)`,
      y: `(1-on/(${frameRate}*${duration}))*(ih-ih/zoom)`,
      zoom: "1.1",
    },
    {
      title: "pan-bottom-right-to-top-left",
      x: `(1-on/(${frameRate}*${duration}))*(iw-iw/zoom)`,
      y: `(1-on/(${frameRate}*${duration}))*(ih-ih/zoom)`,
      zoom: "1.1",
    },
    {
      title: "zoom-in-center",
      x: "iw/2-(iw/zoom/2)",
      y: "ih/2-(ih/zoom/2)",
      zoom: "zoom+0.0006",
    },
    {
      title: "zoom-in-top-left",
      x: "0",
      y: "0",
      zoom: "zoom+0.0006",
    },
    {
      title: "zoom-in-top-right",
      x: "iw/zoom",
      y: "0",
      zoom: "zoom+0.0006",
    },
    {
      title: "zoom-in-bottom-left",
      x: "0",
      y: "ih/zoom",
      zoom: "zoom+0.0006",
    },
    {
      title: "zoom-in-bottom-right",
      x: "iw/zoom",
      y: "ih/zoom",
      zoom: "zoom+0.0006",
    },
    {
      title: "zoom-out-center",
      x: "iw/2-(iw/zoom/2)",
      y: "ih/2-(ih/zoom/2)",
      zoom: `if(lte(zoom,1),1+${frameRate}*${duration}*0.0006,max(1.001,zoom-0.0006))`,
    },
    {
      title: "zoom-out-top-left",
      x: "0",
      y: "0",
      zoom: `if(lte(zoom,1),1+${frameRate}*${duration}*0.0006,max(1.001,zoom-0.0006))`,
    },
    {
      title: "zoom-out-top-right",
      x: "iw/zoom",
      y: "0",
      zoom: `if(lte(zoom,1),1+${frameRate}*${duration}*0.0006,max(1.001,zoom-0.0006))`,
    },
    {
      title: "zoom-out-bottom-left",
      x: "0",
      y: "ih/zoom",
      zoom: `if(lte(zoom,1),1+${frameRate}*${duration}*0.0006,max(1.001,zoom-0.0006))`,
    },
    {
      title: "zoom-out-bottom-right",
      x: "iw/zoom",
      y: "ih/zoom",
      zoom: `if(lte(zoom,1),1+${frameRate}*${duration}*0.0006,max(1.001,zoom-0.0006))`,
    },
  ];
};

export { getAllZoomPanAnimation };
