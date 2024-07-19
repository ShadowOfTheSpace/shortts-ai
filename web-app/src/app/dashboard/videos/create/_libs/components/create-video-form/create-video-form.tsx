"use client";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useFormState } from "react-dom";
import { Button, FormErrors } from "~/_libs/components/components";
import { Select } from "~/_libs/components/select/select";
import { type ActionErrorState } from "~/_libs/types/types";
import {
  COLOR_PALETTES,
  createVideoValidationSchema,
  STYLES,
  TOPICS,
  VOICES,
} from "~/_modules/videos/videos";
import { capitalizeFirstLetter } from "~/_utils/utils";
import { createVideo } from "../../actions/actions";

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
            />
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
            <Select.Item
              key={index}
              text={capitalizeFirstLetter(voice)}
              value={voice}
            />
          );
        })}
      </Select>
      {errors && <FormErrors errors={errors} />}
      <Button label="Create" iconName="sparkles" className="mt-[20px]" />
    </form>
  );
};

export { CreateVideoForm };
