import type Replicate from "replicate";
import { type Prediction } from "replicate";
import { type ValueOf } from "~/libs/types/types.js";
import { ReplicateModel } from "./libs/enums/enums.js";
class BaseReplicate {
  private replicate: Replicate;

  public constructor(replicate: Replicate) {
    this.replicate = replicate;
  }

  async run<T>(
    model: ValueOf<typeof ReplicateModel>,
    input: Record<string, unknown>,
    onProgress: (prediction: Prediction) => void = () => {}
  ) {
    const modelResponse = await this.replicate.run(
      model,
      { input },
      onProgress
    );

    return modelResponse as T;
  }
}

export { BaseReplicate };
