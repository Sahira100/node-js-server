const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("Welcome to our about page");
    return;
  }

  res.end(`<h1>Opps!</h2>
    <h5>Go Back to your country</h5>`);
});

server.listen(5000);
