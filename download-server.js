const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const TARBALL_PATH = path.join(__dirname, 'recallprep-site.tar.gz');

const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

  if (req.url === '/download' || req.url === '/download/') {
    // Serve the tarball
    const stat = fs.statSync(TARBALL_PATH);

    res.writeHead(200, {
      'Content-Type': 'application/gzip',
      'Content-Length': stat.size,
      'Content-Disposition': 'attachment; filename="recallprep-site.tar.gz"',
      'Access-Control-Allow-Origin': '*'
    });

    const fileStream = fs.createReadStream(TARBALL_PATH);
    fileStream.pipe(res);

  } else if (req.url === '/' || req.url === '') {
    // Simple info page
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
<!DOCTYPE html>
<html>
<head>
  <title>RecallPrep Download</title>
  <style>
    body {
      font-family: system-ui, -apple-system, sans-serif;
      max-width: 600px;
      margin: 100px auto;
      padding: 20px;
      background: #0a0a0f;
      color: #e5e5e5;
    }
    h1 { color: #8b5cf6; }
    a {
      display: inline-block;
      background: #8b5cf6;
      color: white;
      padding: 12px 24px;
      text-decoration: none;
      border-radius: 8px;
      margin-top: 20px;
    }
    a:hover { background: #7c3aed; }
    code {
      background: #1a1a1f;
      padding: 2px 6px;
      border-radius: 4px;
      color: #06b6d4;
    }
  </style>
</head>
<body>
  <h1>📦 RecallPrep Site Download</h1>
  <p><strong>Archive:</strong> recallprep-site.tar.gz (104KB)</p>
  <p><strong>Includes:</strong> All source code, documentation, configuration files</p>
  <a href="/download">Download Archive</a>

  <h2 style="margin-top: 40px;">Restore Instructions</h2>
  <pre style="background: #1a1a1f; padding: 15px; border-radius: 8px; overflow-x: auto;">
tar -xzf recallprep-site.tar.gz
cd workspace
npm install
npm run dev
  </pre>

  <p>Then read <code>PROJECT_CONTEXT.md</code> for full continuation instructions.</p>
</body>
</html>
    `);

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found\n\nAvailable: /download\n');
  }
});

server.listen(PORT, () => {
  console.log(`Download server running on port ${PORT}`);
  console.log(`Download available at: http://localhost:${PORT}/download`);
  console.log(`Archive: ${TARBALL_PATH}`);
});
