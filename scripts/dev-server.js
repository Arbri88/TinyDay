const http = require('http');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT ? Number(process.env.PORT) : 3000;
const root = path.resolve(__dirname, '..');

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml'
};

function sendError(res, statusCode) {
  res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
  res.end(`${statusCode}`);
}

function handleRequest(req, res) {
  const safePath = path.normalize(decodeURIComponent(req.url.split('?')[0] || '/'));
  const targetPath = path.join(root, safePath === '/' ? '/index.html' : safePath);

  // Prevent directory traversal by ensuring the resolved path stays within root
  if (!targetPath.startsWith(root)) {
    sendError(res, 403);
    return;
  }

  fs.stat(targetPath, (err, stats) => {
    if (err) {
      sendError(res, 404);
      return;
    }

    if (stats.isDirectory()) {
      const indexPath = path.join(targetPath, 'index.html');
      fs.access(indexPath, fs.constants.R_OK, (accessErr) => {
        if (accessErr) {
          sendError(res, 404);
          return;
        }
        streamFile(indexPath, res);
      });
    } else {
      streamFile(targetPath, res);
    }
  });
}

function streamFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || 'application/octet-stream';
  res.writeHead(200, { 'Content-Type': contentType });
  fs.createReadStream(filePath).pipe(res);
}

http.createServer(handleRequest).listen(port, () => {
  console.log(`TinyDay dev server running at http://localhost:${port}`);
  console.log('Press Ctrl+C to stop.');
});
