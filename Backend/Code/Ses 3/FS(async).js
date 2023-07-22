const { readFile, writeFile } = require("fs");

const filePath = "./content/subfolder/text.txt";

readFile(filePath, "utf-8", (err, res) => {
  if (!err) {
    console.log(res);
  } else {
    console.log(err);
  }

  writeFile(filePath, "hi from script", { flag: "a" }, (err, data) => {
    console.log(data);

    readFile(filePath, "utf-8", (err, res) => {
      console.log(res);
    });
  });
});
