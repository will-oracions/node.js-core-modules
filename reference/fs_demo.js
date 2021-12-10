const fs = require('fs');

const path = require('path');

//fs.mkdir('test', {}, (err) => {
  //if (err) throw err;
 // console.log('folder created');
//});

fs.rename('test.txt', 'test1.txt', (err) => {
  if (err) throw err;
  console.log('File renamed !');
});


