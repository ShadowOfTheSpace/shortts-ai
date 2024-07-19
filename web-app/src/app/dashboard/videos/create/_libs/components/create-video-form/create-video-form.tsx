"use client";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useFormState } from "react-dom";
import { FormErrors, Select } from "~/_libs/components/components";
import { type ActionErrorState } from "~/_libs/types/types";
import {
  colorPaletteToColors,
  voiceToAudioExample,
} from "~/_modules/videos/libs/maps/maps";
import {
  COLOR_PALETTES,
  createVideoValidationSchema,
  STYLES,
  TOPICS,
  VOICES,
} from "~/_modules/videos/videos";
import { capitalizeFirstLetter } from "~/_utils/utils";
import { createVideo } from "../../actions/actions";
import { ColorPalettePreview } from "../color-palette-preview/color-palette-preview";
import { CreateVideoButton } from "../create-video-button/create-video-button";
import { VoiceAudioExample } from "../voice-audio-example/voice-audio-example";

const CreateVideoForm: React.FC = () => {
  const [errors, action] = useFormState<ActionErrorState, FormData>(
    createVideo,
    null
  );

  const [form, fields] = useForm({
    onValidate: ({ formData }) => {
      return parseWithZod(formData, { schema: createVideoValidationSchema });
    },
    shouldValidate: "onSubmit",
    shouldRevalidate: "onInput",
  });

  return (
    <form
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      className="flex flex-col gap-[5px] w-[500px]"
    >
      <Select
        metadata={fields.topic}
        label="Story topic"
        description="Represents the main theme and subject matter of your video."
        placeholder="Select topic"
      >
        {TOPICS.map((topic, index) => {
          return (
            <Select.Item
              key={index}
              text={capitalizeFirstLetter(topic)}
              value={topic}
            />
          );
        })}
      </Select>
      <Select
        metadata={fields.style}
        label="Style"
        description="Defines the visual aesthetic and artistic approach of your video."
        placeholder="Select style"
      >
        {STYLES.map((style, index) => {
          return (
            <Select.Item
              key={index}
              text={capitalizeFirstLetter(style)}
              value={style}
            />
          );
        })}
      </Select>
      <Select
        metadata={fields.colorPalette}
        label="Color palette"
        description="Sets the overall color scheme, influencing the mood and tone of your video."
        placeholder="Select color palette"
      >
        {COLOR_PALETTES.map((colorPalette, index) => {
          return (
            <Select.Item
              key={index}
              text={capitalizeFirstLetter(colorPalette)}
              value={colorPalette}
              className="justify-between gap-x-[30px]"
            >
              <ColorPalettePreview
                colors={colorPaletteToColors[colorPalette]}
              />
            </Select.Item>
          );
        })}
      </Select>
      <Select
        metadata={fields.voice}
        label="Narrator's voice"
        description="Determines the voice that will narrate your video."
        placeholder="Select voice"
      >
        {VOICES.map((voice, index) => {
          return (
            <div className="relative flex items-center w-full" key={index}>
              <VoiceAudioExample
                audioPath={voiceToAudioExample[voice]}
                className="right-[35px] z-[1] absolute peer"
                key={index}
              />
              <Select.Item
                text={capitalizeFirstLetter(voice)}
                value={voice}
                className="peer-has-[:hover]:bg-divider/15 grow"
              />
            </div>
          );
        })}
      </Select>
      {errors && <FormErrors errors={errors} />}
      <CreateVideoButton />
    </form>
  );
};

export { CreateVideoForm };
