import { readFile, writeFile } from "fs/promises";

// import.meta.url is the absoulte path of the current file

// utf-8 for encoding (don't need toString in the consle log)
let template = await readFile(
  new URL("template.html", import.meta.url),
  "utf-8"
);

const data = {
  title: "Learn Node.js",
  body: "This is the final HTML",
};

for (const [key, value] of Object.entries(data)) {
  template = template.replace(`{${key}}`, value);
}

// write file back to disk

await writeFile(new URL("./index.html", import.meta.url), template);
