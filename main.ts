import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I tested it";
const outputDir = "/output";

try {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), ENTRY);
} catch {
  writeFileSync("entry.txt", ENTRY);
}
