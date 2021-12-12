const http = require('http');

http
  .createServer((req, res) => {
    res.write('Hello will, it is working !');
    res.end();
  })
  .listen(1234, () => console.log('Server is listening...'));
