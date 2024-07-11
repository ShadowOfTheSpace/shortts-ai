import { APIPath, HTTPCode, HTTPMethod } from "~/libs/enums/enums.js";
import {
  type APIHandlerOptions,
  type APIHandlerResponse,
  BaseController,
} from "~/libs/modules/controller/controller.js";
import { VideosApiPath } from "./libs/enums/enums.js";
import { type CreateVideoRequestDto } from "./libs/types/types.js";
import { videoCreateValidationSchema } from "./libs/validation-schemas/validation-schemas.js";
import { type VideoService } from "./video.service.js";

class VideoController extends BaseController {
  private videoService: VideoService;

  constructor(videoService: VideoService) {
    super(APIPath.VIDEOS);
    this.videoService = videoService;

    this.addRoute({
      handler: (options) => {
        return this.create(
          options as APIHandlerOptions<{
            body: CreateVideoRequestDto;
          }>
        );
      },
      method: HTTPMethod.POST,
      path: VideosApiPath.ROOT,
      validation: {
        body: videoCreateValidationSchema,
      },
    });
  }

  private create({
    body,
  }: APIHandlerOptions<{
    body: CreateVideoRequestDto;
  }>): APIHandlerResponse {
    this.videoService.create({
      colorPalette: body.colorPalette,
      id: body.id,
      quality: body.quality,
      style: body.style,
      voice: body.voice,
    });

    return {
      status: HTTPCode.ACCEPTED,
    };
  }
}

export { VideoController };
