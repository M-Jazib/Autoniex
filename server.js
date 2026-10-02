const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, 'out');

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.mjs': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=UTF-8',
  '.xml': 'application/xml; charset=UTF-8',
};

const server = http.createServer((req, res) => {
  try {
    const rawUrl = req.url || '/';
    let cleanPath = decodeURI(rawUrl.split('?')[0]);
    if (cleanPath === '/') cleanPath = '/index.html';

    let targetFile = path.join(DIST_DIR, cleanPath);

    // If directory, check for index.html inside
    if (fs.existsSync(targetFile) && fs.statSync(targetFile).isDirectory()) {
      targetFile = path.join(targetFile, 'index.html');
    }

    // Next.js clean route support: e.g. /admin -> /admin/index.html or /admin.html
    if (!fs.existsSync(targetFile)) {
      if (fs.existsSync(targetFile + '.html')) {
        targetFile = targetFile + '.html';
      } else if (fs.existsSync(path.join(targetFile, 'index.html'))) {
        targetFile = path.join(targetFile, 'index.html');
      }
    }

    // Fallback to 404 or index.html
    let is404 = false;
    if (!fs.existsSync(targetFile)) {
      const notFoundFile = path.join(DIST_DIR, '404.html');
      if (fs.existsSync(notFoundFile)) {
        targetFile = notFoundFile;
        is404 = true;
      } else {
        targetFile = path.join(DIST_DIR, 'index.html');
      }
    }

    const ext = path.extname(targetFile).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Cache headers for static assets
    if (cleanPath.startsWith('/_next/') || cleanPath.startsWith('/images/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      res.setHeader('Cache-Control', 'no-cache');
    }

    fs.readFile(targetFile, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }
      if (!res.headersSent) {
        res.writeHead(is404 ? 404 : 200, { 'Content-Type': contentType });
      }
      res.end(data);
    });
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('500 Internal Server Error');
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Autoniex server running on port ${PORT}`);
});
