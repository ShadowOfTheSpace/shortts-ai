import {
  ReplicateModel,
  type Replicate,
} from "~/libs/modules/replicate/replicate.js";
import { type UploadedFileService } from "../uploaded-files/uploaded-files.js";
import { type ImageRepository } from "./image.repository.js";
import { imageQualityToScreenResolution } from "./libs/maps/maps.js";
import {
  type CreateArtisticImageRequestDto,
  type CreateImageRequestDto,
} from "./libs/types/types.js";

type Properties = {
  imageRepository: ImageRepository;
  replicate: Replicate;
  uploadedFileService: UploadedFileService;
};

class ImageService {
  private imageRepository: ImageRepository;
  private replicate: Replicate;
  private uploadedFileService: UploadedFileService;

  public constructor({
    imageRepository,
    replicate,
    uploadedFileService,
  }: Properties) {
    this.imageRepository = imageRepository;
    this.replicate = replicate;
    this.uploadedFileService = uploadedFileService;
  }

  async create({
    colorPalette,
    order,
    prompt,
    quality,
    seed,
    style,
    videoId,
  }: CreateImageRequestDto) {
    const imageOptions = { prompt, quality, seed };

    const generatedImageUrl =
      style === "artistic"
        ? await this.generateArtisticImage(imageOptions)
        : await this.generateArtisticImage(imageOptions);

    const { id: fileId } = await this.uploadedFileService.create({
      filePath: generatedImageUrl,
      folder: `${videoId}/images`,
      type: "image",
    });

    const createdImage = await this.imageRepository.create({
      colorPalette,
      fileId,
      order,
      prompt,
      quality,
      seed,
      style,
      videoId,
    });

    if (!createdImage) {
      throw new Error("Saving generated image failed.");
    }

    return {
      ...createdImage,
      generatedImageUrl,
    };
  }

  private async generateArtisticImage({
    prompt,
    quality,
    seed,
  }: CreateArtisticImageRequestDto) {
    const { height, width } = imageQualityToScreenResolution[quality];

    const [generatedImage] = await this.replicate.run<string[]>(
      ReplicateModel.PLAYGROUND,
      {
        seed,
        prompt,
        width,
        height,
        scheduler: "DPMSolver++",
        num_outputs: 1,
        guidance_scale: 3,
        apply_watermark: true,
        prompt_strength: 0.8,
        num_inference_steps: 25,
        disable_safety_checker: true,
      }
    );

    if (!generatedImage) {
      throw new Error("Artistic image generation error.");
    }

    return generatedImage;
  }
}

export { ImageService };
