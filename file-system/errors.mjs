import { readFile } from "fs/promises";

process.on("uncaughtException", cb);

const result = await readFile(new URL("app.mjs", import.meta.url), "utf-8");
