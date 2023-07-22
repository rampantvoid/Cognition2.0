const http = require("http");
const { readFileSync } = require("fs");
const { resolve } = require("path");

const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT;

const Myserver = http.createServer((req, res) => {
  console.log(req.url);

  let url = req.url;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");

    let path = resolve(__dirname, "static", "index.html");

    let data = readFileSync(path);

    res.end(data);
  } else if (url === "/about") {
    let path = resolve(__dirname, "static", "about.html");

    let data = readFileSync(path);
    res.end(data);
  } else if (url === "/contact") {
    let path = resolve(__dirname, "static", "contact.html");

    let data = readFileSync(path);
    res.end(data);
  } else {
    let path = resolve(__dirname, "static", "error.html");

    let data = readFileSync(path);
    res.statusCode = 404;
    res.end(data);
  }
});

Myserver.listen(port, () => {
  console.log(`Server is listening on PORT ${port}`);
});
