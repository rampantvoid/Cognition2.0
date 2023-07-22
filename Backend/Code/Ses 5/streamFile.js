const fs = require("fs");

const stream = fs.createReadStream("./text.txt");

// default 64kb
// last buffer - remainder
// highwatermark = control size
// const stream = fs.createReadStream("./text.txt", { highWaterMark: 90000 });
// const stream = fs.createReadStream("./text.txt", { encoding: "utf-8" });

stream.on("data", (res) => {
  console.log(res);
});
