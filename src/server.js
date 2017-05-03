const http = require('http');
const styles = require('./styles.css');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Style Loader Server Side Rendering Example</title>
        <style>${styles._getCss()}</style>
      </head>
      <body>
        <p class="${styles.hello}">Hello Server Side Rendering!</p>
      </body>
    </html>
  `);
}).listen(3000);

console.log('The server is running at http://localhost:3000/')