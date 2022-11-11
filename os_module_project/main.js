const os = require("os");
const url = require("url");
const fs = require("fs");
const http = require("http");
const path = require("path");
const { count } = require("console");

const PORT = process.env.PORT || 5000;

http
  .createServer((req, res) => {
    if (req.url == "/" && req.method == "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`
        <html lang="en">
          <head>
            <title>Home -Know Your Operating system Features</title>
          </head>
          <body>
          <a href="about.html">Go to about page</a>
            <div>
              <h3>Total Memory: ${Math.floor(os.totalmem() / 1000000000)}GB</h3>
              <h3>Free Memory: ${Math.floor(os.freemem() / 1000000000)}GB</h3>
              <h3>OS Platform: ${os.platform()}</h3>
              <h3>OS Architecture: ${os.arch()}</h3>
              <h3>OS Version: ${os.version()}</h3>
              <h3>OS Uptime: ${Math.floor(
                os.uptime() / 3600
              )}hrs : ${Math.floor(
        (os.uptime() / 3600 - Math.floor(os.uptime() / 3600)) * 60
      )}mins</h3>
            </div>
          </body>
        </html>`);
      res.end();
    } else if (req.url == "/about.html" && req.method == "GET") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>About Page</h1>");
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>Page Not Found</h1>");
      res.end();
    }
  })
  .listen(PORT, () => console.log(`Server running at port ${PORT}`));
