const http = require('http');

http
  .createServer(
    (req, res) => {
      res.write('Will it is very cool !');
      res.end();
    }
  )
  .listen(1234, () => console.log('Server is nunning...'));
