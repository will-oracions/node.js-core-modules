const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
 
  const filepath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  // get the file extension
  const extname = path.extname(filepath);
  
  // set the default content type
  let contentType = 'text/html';

  // set the file content type
  switch (extname) {
	  case '.js':
	  contentType = 'text/javascript';
	  break;
	  case'.css':
	  contentType = 'text/css';
	  break;
	  case'.json':
	  contentType = 'application/json';
	  break;
	  case'.png':
	  contentType = 'image/png';
	  break;
	  case'.jpg': 
	  contentType = 'image/jpg';
	  break;
  }


  // read the file
  fs.readFile(
     filepath,
     (err, content) => {

       if (err) {


       if (err.code == 'ENOENT') {
         // Error file not found
	 fs.readFile(
           path.join(__dirname, 'public', '404.html'),
           (err, content) => {
	     res.writeHead(404, { 'Content-Type': 'text/html' });
             res.end(content);
	   });
       } else {
	 // Server Error
         res.writeHead(500);
	 res.end('Error 500: ' + err.code);
       }
      

      } else {

       // File laoded successfuly
       res.writeHead(200, { 'Content-Tpe': contentType });
       res.end(content);

      }
    
     }
  );
	
});

server.listen(4321, () => console.log('Server is running..'));















