"use client";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useCallback, useState } from "react";
import { useFormState } from "react-dom";
import { Button, Input, Skeleton } from "~/_libs/components/components";
import { ActionErrorState } from "~/_libs/types/types";
import {
  updateVideoValidationSchema,
  VideoDto,
} from "~/_modules/videos/videos";
import { ProgressBar } from "./libs/components/components";
import { getHashTagsString } from "./libs/helpers/helpers";

type Properties = {
  video: {
    id: string;
    title: string | null;
    caption: string | null;
    hashtags: string[] | null;
    text: string | null;
    status: VideoDto["status"];
    file: {
      url: string;
    } | null;
  };
};

const VideoManagementPreview: React.FC<Properties> = ({
  video: { id, caption, file, hashtags, status, text, title },
}) => {
  const [videoInfo, setVideoInfo] = useState({
    caption,
    fileUrl: file?.url ?? null,
    hashtags: getHashTagsString(hashtags),
    status,
    text,
    title,
  });

  const [errors, action] = useFormState<ActionErrorState, FormData>(() => {
    return null;
  }, null);

  const [form, fields] = useForm({
    onValidate: ({ formData }) => {
      return parseWithZod(formData, { schema: updateVideoValidationSchema });
    },
    defaultValue: videoInfo,
    shouldValidate: "onSubmit",
    shouldRevalidate: "onInput",
  });

  const isFormDisabled = videoInfo.status !== "completed";

  return (
    <div className="flex flex-col gap-[40px] grow">
      <ProgressBar currentStatus={videoInfo.status} />
      <div className="flex gap-[60px]">
        {videoInfo.fileUrl ? (
          <video
            src={videoInfo.fileUrl}
            className="rounded-[6px] h-[600px] aspect-[768/1344]"
            controls
          />
        ) : (
          <Skeleton className="rounded-[6px] h-[600px] aspect-[768/1344]" />
        )}
        <form
          id={form.id}
          className="flex flex-col basis-2/3"
          action={action}
          onSubmit={form.onSubmit}
        >
          <Input
            placeholder="Enter video title"
            label="Title"
            defaultValue={fields.title.initialValue}
            name={fields.title.name}
            errors={fields.title.errors}
            isDisabled={isFormDisabled}
            isLoading={!videoInfo.title}
          />
          <Input
            placeholder="Enter video caption"
            label="Captions"
            defaultValue={fields.caption.initialValue}
            name={fields.caption.name}
            errors={fields.caption.errors}
            isDisabled={isFormDisabled}
            isLoading={!videoInfo.caption}
          />
          <Input
            placeholder="Enter hashtags"
            label="Hashtags"
            defaultValue={fields.hashtags.initialValue}
            name={fields.hashtags.name}
            errors={fields.hashtags.errors}
            isDisabled={isFormDisabled}
            isLoading={!videoInfo.hashtags}
          />
          <Input
            placeholder="Enter script text"
            label="Text"
            defaultValue={fields.text.initialValue}
            name={fields.text.name}
            errors={fields.text.errors}
            rows={6}
            skeletonClassName="h-[calc(1em*1.5*6)]"
            isDisabled={isFormDisabled}
            isLoading={!videoInfo.text}
          />
          <Button
            label="Update video"
            className="mt-auto"
            isLoading={isFormDisabled}
          />
        </form>
      </div>
    </div>
  );
};

export { VideoManagementPreview };
