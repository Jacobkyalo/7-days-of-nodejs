const http = require("http");

// console.log(http);

// simple server
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.statusMessage = "OKAY";
  res.setHeader("Content-Type", "text/html");
  res.write(JSON.stringify({ name: "jacob" }));
  res.end();
});

server.on("connection", (socket) => {
  console.log(`New connection on socket ${socket}`);
});
server.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
