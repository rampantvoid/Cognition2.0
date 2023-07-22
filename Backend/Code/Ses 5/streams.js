const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream("./text.txt", "utf-8");
  stream.on("open", () => {
    stream.pipe(res);
  });
  stream.on("error", (err) => {
    res.end(err);
    console.log(err);
  });
});

server.listen(5000, () => {
  console.log("Server listening on PORT 5000");
});
