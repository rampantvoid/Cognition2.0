const http = require("http");
const { parse } = require("querystring");

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
  res.end(`
  <!doctype html>
  <html>
  <body>
      <form action="/" method="post">
          <input type="text" name="fname" /><br />
          <input type="number" name="age" /><br />
          <input type="file" name="photo" /><br />
          <button>Save</button>
      </form>
  </body>
  </html>
`);
});

server.listen(5000, () => {
  console.log("server on");
});
