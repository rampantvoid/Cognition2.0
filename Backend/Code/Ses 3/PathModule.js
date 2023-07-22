const path = require("path");

// console.log(path.sep);

// join path

const filePath = path.join("/content", "subfolder", "text.txt");

console.log(filePath);

// basename

// const base = path.basename(filePath);

// console.log(base);

// absolute path

// console.log(__dirname);

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");

console.log(absolute);
