import { z } from "zod";

const checkIfUuidIsValid = (uuid: string) => {
  const result = z.string().uuid().safeParse(uuid);

  return result.success;
};

export { checkIfUuidIsValid };
