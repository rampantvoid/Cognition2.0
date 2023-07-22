const http = require("http");
const fs = require("fs");
const { parse } = require("querystring");

const index = fs.readFileSync("./index.html");

const server = http.createServer((req, res) => {
  console.log(req.method);

  if (req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk.toString();
    });

    req.on("end", () => {
      console.log(parse(data));
      res.end("ok");
    });
  }
  res.setHeader("Content-Type", "text/html");

  res.end(index);
});

server.listen(5000, () => {
  console.log("Server is listening on PORT 5000");
});
