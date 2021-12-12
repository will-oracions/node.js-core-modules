const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = 1234;

const server = http.createServer((req, res) => {
   if (req.url === '/') {
    fs.readFile(
      path.join(__dirname,'public', 'index.html'),
      (err, content) => {
	 if (err) throw err;
         res.writeHead(200, { 'Content-Type': 'html' });
	 res.end(content);
      }); 
   }

	 
   if (req.url === '/about') {
     fs.readFile(
       path.join(__dirname, 'public', 'about.html'),
       (err, content) => {
         if (err) throw err;
	 res.writeHead(200, { 'Content-Type': 'html' }),
         res.end(content);
       });
   }


   if (req.url === '/api/users') {
     const users = [
      { name: 'Louis', age: 24 },
      { name: 'Kim', age: 19 } 
     ];
     
     res.writeHead(200, { 'Content-Type': 'application/json'});
     res.end(JSON.stringify(users));

   }


});

server.listen(PORT, () => console.log('Server is listening on port ', PORT));
