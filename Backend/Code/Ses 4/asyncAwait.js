const { readFile, writeFile } = require("fs");

const util = require("util");
const readFilePromise = util.promisify(readFile);

console.log("first");

const getText = async (path) => {
  try {
    let data = await readFilePromise(path, "utf-8");
    console.log("second");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

console.log("third");
getText("./text.txt");

console.log("fourth");
