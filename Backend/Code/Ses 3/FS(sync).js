// const { readFileSync, writeFileSync } = require("fs");

const { readFileSync, writeFileSync } = require("fs");

// reading from a file

const filePath = "./content/subfolder/text.txt";

let data = readFileSync(filePath, "utf-8");

console.log(data);

// writing to a file

let indata = "hello form script 2";

writeFileSync(filePath, indata, { flag: "a" }); // a : append

data = readFileSync(filePath, "utf-8");

console.log(data);
