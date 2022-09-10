import  fs from "fs";
import { promisify } from "util";

const baseUrl = "./packages/components";
const files = await promisify(fs.readdir)(`${baseUrl}/src/`);

let entryfileConent = "";

files.forEach(name => {
    entryfileConent += `export { default as ${name}} from "./src/${name}/${name.toLowerCase()}";\n`
});

await promisify(fs.writeFile)(`${baseUrl}/index.ts`, entryfileConent)