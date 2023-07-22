const http = require("http");

const port = 5000;

const server = http.createServer((req, res) => {
  res.write("Welcome");
  res.end();
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
