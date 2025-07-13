const http = require('http');
const port = process.env.PORT || 3000;

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Hello from Node.js on Vercel!');
}).listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
