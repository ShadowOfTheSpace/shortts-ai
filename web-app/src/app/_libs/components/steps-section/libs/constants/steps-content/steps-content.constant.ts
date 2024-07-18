import firstStepBackgroundImage from "~/_assets/images/step-1-background-image.svg";
import secondStepBackgroundImage from "~/_assets/images/step-2-background-image.svg";
import thirdStepBackgroundImage from "~/_assets/images/step-3-background-image.svg";
import tempStepsImage from "~/_assets/images/temp-steps-image.png";

const STEPS_CONTENT = [
  {
    backgroundImageUrl: `${firstStepBackgroundImage.src}`,
    description:
      "To create the video, you need to select a topic and the narrator's voice. Choosing a style and color palette are premium features. By default, the images will have an artistic style, and the color palette will be natural.",
    imageUrl: `${tempStepsImage.src}`,
    title: "Choose Your Ingredients",
  },
  {
    backgroundImageUrl: `${secondStepBackgroundImage.src}`,
    description:
      "Video generation won't take much time. You can track the status of your video creation (in queue, text generating, voicing, etc.). This ensures you're always informed about the status of your video creation process.",
    imageUrl: `${tempStepsImage.src}`,
    title: "Wait Till Magic Happen",
  },

  {
    backgroundImageUrl: `${thirdStepBackgroundImage.src}`,
    description:
      "Your video is ready! You can now download it and share it with your friends. Additionally, you have the option to make further edits if needed. Once you're satisfied with the final version, you can easily publish it on your TikTok account.",
    imageUrl: `${tempStepsImage.src}`,
    title: "Share With Friends",
  },
];

export { STEPS_CONTENT };
