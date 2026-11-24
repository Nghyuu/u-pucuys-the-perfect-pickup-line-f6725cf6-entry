// The Perfect Pickup Line — copies entry.txt byte-for-byte to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Node standard library only.
//
// The entry file is resolved next to this script (not the working
// directory), so the program behaves the same wherever it is run from.
// The output directory is created when missing; the copy preserves the
// entry's bytes exactly, including its trailing newline.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dir, "output");

mkdirSync(outDir, { recursive: true });
copyFileSync(join(dir, "entry.txt"), join(outDir, "entry.txt"));
