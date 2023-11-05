import { readFile, writeFile } from "./fileManager.js";

readFile("helloWorld.txt").then(d => console.log(d));
writeFile("byeWorld.txt", "Writing to the file")