import { existsSync } from "node:fs";
import { join } from "node:path";

export function hasPublicImage(dropPath: string) {
  return existsSync(join(process.cwd(), dropPath));
}
