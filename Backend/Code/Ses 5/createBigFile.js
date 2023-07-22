const { writeFileSync } = require("fs");

for (let i = 0; i < 10000; i++) {
  writeFileSync("./text.txt", `hello world ${i}\n`, { flag: "a" });
}
